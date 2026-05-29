import AdBanner from "@/components/AdBanner"


export default async function SvtPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {

  const { locale } = await params

  const fiches = [
  {
    title: "La cellule",
    emoji: "🔬",
    href: `/${locale}/revisions/svt/cellule`,
  },
  {
    title: "L'ADN",
    emoji: "🧬",
    href: `/${locale}/revisions/svt/adn`,
  },
  {
    title: "Génétique",
    emoji: "🧬",
    href: `/${locale}/revisions/svt/genetique`,
  },
  {
    title: "Respiration",
    emoji: "🫁",
    href: `/${locale}/revisions/svt/respiration`,
  },
  {
    title: "Circulation sanguine",
    emoji: "❤️",
    href: `/${locale}/revisions/svt/circulation-sanguine`,
  },
  {
    title: "Digestion",
    emoji: "🍎",
    href: `/${locale}/revisions/svt/digestion`,
  },
  {
    title: "Photosynthèse",
    emoji: "🌿",
    href: `/${locale}/revisions/svt/photosynthese`,
  },
  {
    title: "Système nerveux",
    emoji: "🧠",
    href: `/${locale}/revisions/svt/systeme-nerveux`,
  },
  {
    title: "Écosystèmes",
    emoji: "🌍",
    href: `/${locale}/revisions/svt/ecosystemes`,
  },
  {
    title: "Évolution",
    emoji: "🐒",
    href: `/${locale}/revisions/svt/evolution`,
  },
]
return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-6">

      {/* PUB */}
      <AdBanner />

      <div className="max-w-3xl mx-auto">

        {/* TITRE */}
        <div className="mt-8 mb-10">

          <div className="flex items-center gap-3">
            <span className="text-5xl">
              🧬
            </span>

            <h1 className="text-4xl font-black">
              Fiches SVT
            </h1>
          </div>

          <p className="mt-3 text-gray-500 dark:text-gray-400">
            Révise rapidement les notions importantes de mathématiques
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