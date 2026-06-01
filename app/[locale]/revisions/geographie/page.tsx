import Link from "next/link"
import AdBanner from "@/components/AdBanner"

export default async function GeographiePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {

  const { locale } = await params

  const fiches = [
    {
      title: locale === "en"
        ? "🌍 Continents and Oceans"
        : "🌍 Continents et océans",
      href: `/${locale}/revisions/geographie/continents-oceans`,
    },
    {
      title: locale === "en"
        ? "🌦️ Climates"
        : "🌦️ Les climats",
      href: `/${locale}/revisions/geographie/climats`,
    },
    {
      title: locale === "en"
        ? "⛰️ Landforms"
        : "⛰️ Le relief terrestre",
      href: `/${locale}/revisions/geographie/relief`,
    },
    {
      title: locale === "en"
        ? "👨‍👩‍👧‍👦 World Population"
        : "👨‍👩‍👧‍👦 Population mondiale",
      href: `/${locale}/revisions/geographie/population-mondiale`,
    },
    {
      title: locale === "en"
        ? "🏙️ Urbanization"
        : "🏙️ Urbanisation",
      href: `/${locale}/revisions/geographie/urbanisation`,
    },
    {
      title: locale === "en"
        ? "♻️ Sustainable Development"
        : "♻️ Développement durable",
      href: `/${locale}/revisions/geographie/developpement-durable`,
    },
    {
      title: locale === "en"
        ? "🌋 Natural Hazards"
        : "🌋 Risques naturels",
      href: `/${locale}/revisions/geographie/risques-naturels`,
    },
    {
      title: locale === "en"
        ? "🌐 Globalization"
        : "🌐 Mondialisation",
      href: `/${locale}/revisions/geographie/mondialisation`,
    },
    {
      title: locale === "en"
        ? "⚡ Energy Sources"
        : "⚡ Les énergies",
      href: `/${locale}/revisions/geographie/energies`,
    },
    {
      title: locale === "en"
        ? "🗺️ Reading a Map"
        : "🗺️ Lire une carte",
      href: `/${locale}/revisions/geographie/cartographie`,
    },
  ]

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-6">

      <AdBanner />

      <div className="max-w-3xl mx-auto">

        <div className="mt-8 mb-10">

          <div className="flex items-center justify-between gap-4">

            <div className="flex items-center gap-3">

              <span className="text-5xl">
                🌍
              </span>

              <h1 className="text-4xl font-black">
                {locale === "en"
                  ? "Geography Revision Sheets"
                  : "Fiches Géographie"}
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
              ? "Quickly review the essential concepts of geography."
              : "Révise rapidement les notions essentielles de géographie."}
          </p>

        </div>

        <div className="grid grid-cols-2 gap-4">

          {fiches.map((fiche) => (
            <Link
              key={fiche.href}
              href={fiche.href}
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
