import Link from "next/link"
import AdBanner from "@/components/AdBanner"

export default async function HistoirePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {

  const { locale } = await params

  const fiches = [
    {
      title: "La Préhistoire",
      emoji: "🦴",
      href: `/${locale}/revisions/histoire/prehistoire`,
    },
    {
      title: "L'Égypte antique",
      emoji: "🏺",
      href: `/${locale}/revisions/histoire/egypte-antique`,
    },
    {
      title: "La Grèce antique",
      emoji: "🏛️",
      href: `/${locale}/revisions/histoire/grece-antique`,
    },
    {
      title: "L'Empire romain",
      emoji: "🦅",
      href: `/${locale}/revisions/histoire/empire-romain`,
    },
    {
      title: "Le Moyen Âge",
      emoji: "🏰",
      href: `/${locale}/revisions/histoire/moyen-age`,
    },
    {
      title: "La Renaissance",
      emoji: "🎨",
      href: `/${locale}/revisions/histoire/renaissance`,
    },
    {
      title: "La Révolution française",
      emoji: "🇫🇷",
      href: `/${locale}/revisions/histoire/revolution-francaise`,
    },
    {
      title: "Première Guerre mondiale",
      emoji: "⚔️",
      href: `/${locale}/revisions/histoire/premiere-guerre-mondiale`,
    },
    {
      title: "Seconde Guerre mondiale",
      emoji: "🌍",
      href: `/${locale}/revisions/histoire/seconde-guerre-mondiale`,
    },
    {
      title: "La Guerre froide",
      emoji: "☢️",
      href: `/${locale}/revisions/histoire/guerre-froide`,
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
                🏛️
              </span>

              <h1 className="text-4xl font-black">
                Fiches Histoire
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
            Révise rapidement les grandes périodes et événements historiques.
          </p>

        </div>

        {/* BOUTONS */}
        <div className="grid grid-cols-2 gap-4">

          {fiches.map((fiche) => (
            <a
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
              <span className="text-4xl">
                {fiche.emoji}
              </span>

              <span className="text-lg font-bold text-center">
                {fiche.title}
              </span>

            </a>
          ))}

        </div>

      </div>

    </main>
  )
}