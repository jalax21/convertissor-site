import AdBanner from "@/components/AdBanner"
import Link from "next/link"

import { histoireFiches } from "@/data/revisions/histoire"
import { historySheets } from "@/data/revisions/histoire-en"

export default async function HistoirePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  const fiches =
    locale === "en"
      ? historySheets
      : histoireFiches

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-6">

      <AdBanner />

      <div className="max-w-3xl mx-auto">

        {/* TITRE */}
        <div className="mt-8 mb-10">

          <div className="flex items-center justify-between gap-4">

            <div className="flex items-center gap-3">

              <span className="text-5xl">
                🏛️
              </span>

              <h1 className="text-4xl font-black">
                {locale === "en"
                  ? "History Revision Sheets"
                  : "Fiches Histoire"}
              </h1>

            </div>

            <Link
              href={`/${locale}`}
              className="
                px-6
                py-3
                rounded-2xl
                bg-blue-600
                text-white
                hover:bg-blue-700
                transition
                font-bold
                shadow-md
              "
            >
              {locale === "fr" ? "← Retour" : "← Back"}
            </Link>

          </div>

          <p className="mt-3 text-gray-500 dark:text-gray-400">
            {locale === "en"
              ? "Quickly review major historical periods and events."
              : "Révise rapidement les grandes périodes et événements historiques."}
          </p>

        </div>

        {/* FICHES */}
        <div className="grid grid-cols-2 gap-4">

          {fiches.map((fiche) => (

            <Link
              key={fiche.slug}
              href={`/${locale}/revisions/histoire/${fiche.slug}`}
              className="
                border
                border-gray-300
                dark:border-gray-700
                rounded-2xl
                p-6
                flex
                flex-col
                items-center
                justify-center
                gap-3
                hover:bg-gray-100
                dark:hover:bg-gray-800
                transition
              "
            >

              <span className="text-5xl">
                {fiche.emoji}
              </span>

              <span className="text-lg font-bold text-center">
                {fiche.title}
              </span>

            </Link>

          ))}

        </div>

      </div>

    </main>
  )
}