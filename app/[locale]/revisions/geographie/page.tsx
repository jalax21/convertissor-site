import AdBanner from "@/components/AdBanner"
import Link from "next/link"

export default async function GeographiePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {

  const { locale } = await params

  const fiches = [
    {
      title: "🌍 Continents et océans",
      href: `/${locale}/revisions/geographie/continents-oceans`,
    },
    {
      title: "🌦️ Les climats",
      href: `/${locale}/revisions/geographie/climats`,
    },
    {
      title: "⛰️ Le relief terrestre",
      href: `/${locale}/revisions/geographie/relief`,
    },
    {
      title: "👨‍👩‍👧‍👦 Population mondiale",
      href: `/${locale}/revisions/geographie/population-mondiale`,
    },
    {
      title: "🏙️ Urbanisation",
      href: `/${locale}/revisions/geographie/urbanisation`,
    },
    {
      title: "♻️ Développement durable",
      href: `/${locale}/revisions/geographie/developpement-durable`,
    },
    {
      title: "🌋 Risques naturels",
      href: `/${locale}/revisions/geographie/risques-naturels`,
    },
    {
      title: "🌐 Mondialisation",
      href: `/${locale}/revisions/geographie/mondialisation`,
    },
    {
      title: "⚡ Les énergies",
      href: `/${locale}/revisions/geographie/energies`,
    },
    {
      title: "🗺️ Lire une carte",
      href: `/${locale}/revisions/geographie/cartographie`,
    },
  ]

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-6">

      <AdBanner />

      <div className="max-w-3xl mx-auto">

        {/* TITRE */}
        <div className="mt-8 mb-10">

          <div className="flex items-center justify-between gap-4">

            <div className="flex items-center gap-3">

              <span className="text-5xl">
                🌍
              </span>

              <h1 className="text-4xl font-black">
                Fiches Géographie
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
              ← Retour
            </Link>

          </div>

          <p className="mt-3 text-gray-500 dark:text-gray-400">
            Révise rapidement les notions essentielles de géographie.
          </p>

        </div>

        {/* FICHES */}
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
                items-center
                justify-center
                text-center
                hover:bg-gray-100
                dark:hover:bg-gray-800
                transition
                font-bold
              "
            >
              {fiche.title}
            </Link>
          ))}

        </div>

      </div>

    </main>
  )
}
