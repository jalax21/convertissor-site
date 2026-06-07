import Link from "next/link"

import { anglaisFiches } from "@/data/revisions/anglais"

export default async function AnglaisPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-8">
      <div className="max-w-5xl mx-auto">

        
        <div className="mb-8">
          <Link
            href={`/${locale}`}
            className="inline-block mb-6 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            ← {locale === "fr" ? "Retour aux révisions" : "Back to revision sheets"}
          </Link>

          <h1 className="text-4xl font-bold">
            🇬🇧 {locale === "fr"
              ? "Fiches de révision d'anglais"
              : "English revision sheets"}
          </h1>

          <p className="mt-3 text-gray-500 dark:text-gray-400">
            {locale === "fr"
              ? "Primaire, collège et lycée"
              : "Primary school, middle school and high school"}
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

      </div>
    </main>
  )
}