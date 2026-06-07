import Link from "next/link"

export default async function SvtPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {

  const { locale } = await params

  const fiches = [
  {
    title: locale === "en" ? "🔬 The Cell" : "🔬 La cellule",
    href: `/${locale}/revisions/svt/cellule`,
  },
  {
    title: locale === "en" ? "🧬 DNA" : "🧬 L'ADN",
    href: `/${locale}/revisions/svt/adn`,
  },
  {
    title: locale === "en" ? "🧬 Genetics" : "🧬 La Génétique",
    href: `/${locale}/revisions/svt/genetique`,
  },
  {
    title: locale === "en" ? "🫁 Respiration" : "🫁 La Respiration",
    href: `/${locale}/revisions/svt/respiration`,
  },
  {
    title: locale === "en"
      ? "❤️ Blood Circulation"
      : "❤️ La Circulation sanguine",
    href: `/${locale}/revisions/svt/circulation-sanguine`,
  },
  {
    title: locale === "en" ? "🍎 Digestion" : "🍎 La Digestion",
    href: `/${locale}/revisions/svt/digestion`,
  },
  {
    title: locale === "en" ? "🌿 Photosynthesis" : "🌿 La Photosynthèse",
    href: `/${locale}/revisions/svt/photosynthese`,
  },
  {
    title: locale === "en"
      ? "🧠 The Nervous System"
      : "🧠 Le Système nerveux",
    href: `/${locale}/revisions/svt/systeme-nerveux`,
  },
  {
    title: locale === "en" ? "🌍 Ecosystems" : "🌍 Les Écosystèmes",
    href: `/${locale}/revisions/svt/ecosystemes`,
  },
  {
    title: locale === "en"
      ? "🐒 Evolution of Species"
      : "🐒 L'Évolution",
    href: `/${locale}/revisions/svt/evolution`,
  },
]

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-6">

      
      <div className="max-w-3xl mx-auto">

        {/* TITRE */}
        <div className="mt-8 mb-10">

          <div className="flex items-center justify-between gap-4">

            <div className="flex items-center gap-3">

              <span className="text-5xl">
                🧬
              </span>

              <h1 className="text-4xl font-black">
  {locale === "en" ? "Biology Revision Sheets" : "Fiches SVT"}
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
    ? "Quickly review the most important biology concepts."
    : "Révise rapidement les notions importantes de SVT."}
</p>

        </div>

        {/* BOUTONS */}
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
