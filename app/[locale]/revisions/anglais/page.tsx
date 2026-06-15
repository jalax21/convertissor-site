import type { Metadata } from "next";
import Link from "next/link";

import { anglaisFiches } from "@/data/revisions/anglais";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const isFrench = locale === "fr";

  const title = isFrench
    ? "Fiches de révision d'anglais | QuickUnits"
    : "English Revision Sheets | QuickUnits";

  const description = isFrench
    ? "Retrouvez toutes nos fiches de révision d'anglais gratuites pour le primaire, le collège et le lycée."
    : "Browse our free English revision sheets for primary school, middle school and high school.";

  const url = `https://quickunits.fr/${locale}/revisions/anglais`;

  return {
    title,
    description,

    alternates: {
      canonical: url,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title,
      description,
      url,
      siteName: "QuickUnits",
      type: "website",
      locale: isFrench ? "fr_FR" : "en_US",

      images: [
        {
          url: "https://quickunits.fr/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "QuickUnits",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://quickunits.fr/og-image.jpg"],
    },
  };
}

export default async function AnglaisPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name:
      locale === "fr"
        ? "Fiches de révision d'anglais"
        : "English Revision Sheets",

    itemListElement: anglaisFiches.map((fiche, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://quickunits.fr/${locale}/revisions/anglais/${fiche.slug}`,
      name: fiche.title,
    })),
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-8">
      <div className="max-w-5xl mx-auto">

        <div className="mb-8">
          <Link
            href={`/${locale}`}
            className="inline-block mb-6 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            ← {locale === "fr"
              ? "Retour aux révisions"
              : "Back to revision sheets"}
          </Link>

          <h1 className="text-4xl font-bold">
            🇬🇧 {locale === "fr"
              ? "Fiches de révision d'anglais"
              : "English Revision Sheets"}
          </h1>

          <p className="mt-3 text-gray-500 dark:text-gray-400">
            {locale === "fr"
              ? "Retrouvez toutes les fiches de révision d'anglais gratuites pour le primaire, le collège et le lycée."
              : "Browse all free English revision sheets for primary school, middle school and high school."}
          </p>
        </div>

        <div className="grid gap-4">
          {anglaisFiches.map((fiche) => (
            <Link
              key={fiche.slug}
              href={`/${locale}/revisions/anglais/${fiche.slug}`}
              className="border border-gray-300 dark:border-gray-700 rounded-2xl p-5 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <h2 className="text-xl font-semibold">
                {fiche.title}
              </h2>
            </Link>
          ))}
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(itemListSchema),
          }}
        />
      </div>
    </main>
  );
}