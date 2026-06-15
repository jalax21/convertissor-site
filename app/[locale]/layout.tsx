import type { Metadata } from "next";
import SidebarAds from "@/components/SidebarAds";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const isFrench = locale === "fr";

  const url = isFrench
    ? "https://quickunits.fr/fr"
    : "https://quickunits.fr/en";

  return {
    metadataBase: new URL("https://quickunits.fr"),

    title: {
      default: "QuickUnits",
      template: "%s",
    },

    description: isFrench
      ? "Convertisseurs et calculateurs gratuits en ligne."
      : "Free online converters and calculators.",

    alternates: {
      canonical: url,

      languages: {
        fr: "https://quickunits.fr/fr",
        en: "https://quickunits.fr/en",
        "x-default": "https://quickunits.fr/fr",
      },
    },

    robots: {
      index: true,
      follow: true,

      googleBot: {
        index: true,
        follow: true,
      },
    },

    openGraph: {
      title: "QuickUnits",

      description: isFrench
        ? "Convertisseurs et calculateurs gratuits en ligne."
        : "Free online converters and calculators.",

      url,

      siteName: "QuickUnits",

      type: "website",

      locale: isFrench
        ? "fr_FR"
        : "en_US",

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

      title: "QuickUnits",

      description: isFrench
        ? "Convertisseurs et calculateurs gratuits en ligne."
        : "Free online converters and calculators.",

      images: [
        "https://quickunits.fr/og-image.jpg",
      ],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const text = {
    legal:
      locale === "fr"
        ? "Mentions légales"
        : "Legal Notice",

    privacy:
      locale === "fr"
        ? "Politique de Confidentialité"
        : "Privacy Policy",

    cookies:
      locale === "fr"
        ? "Cookies"
        : "Cookies",

    terms:
      locale === "fr"
        ? "Conditions d'utilisation"
        : "Terms of Use",

    contact:
      locale === "fr"
        ? "Contact"
        : "Contact",
  };

  return (
    <>
      <div className="w-full px-4">
        <div className="flex gap-8">
          <main className="flex-1 min-w-0">
            {children}
          </main>

          <SidebarAds locale={locale} />
        </div>
      </div>

      <footer className="border-t mt-12 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 text-base">
            <Link href={`/${locale}/mentions-legales`}>
              {text.legal}
            </Link>

            <Link href={`/${locale}/politique-confidentialite`}>
              {text.privacy}
            </Link>

            <Link href={`/${locale}/politique-cookies`}>
              {text.cookies}
            </Link>

            <Link href={`/${locale}/conditions-utilisation`}>
              {text.terms}
            </Link>

            <Link href={`/${locale}/contact`}>
              {text.contact}
            </Link>
          </div>

          <p className="text-center text-sm mt-4 text-gray-500">
            © {new Date().getFullYear()} QuickUnits.fr
          </p>
        </div>
      </footer>
    </>
  );
}