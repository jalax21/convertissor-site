import Link from "next/link"

export default async function MathsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {

  const { locale } = await params

  const fiches = [
    {
      title: locale === "en"
        ? "📐 Pythagorean Theorem"
        : "📐 Théorème de Pythagore",
      href: `/${locale}/revisions/maths/pythagore`,
    },
    {
      title: locale === "en"
        ? "📏 Thales' Theorem"
        : "📏 Théorème de Thalès",
      href: `/${locale}/revisions/maths/thales`,
    },
    {
      title: locale === "en"
        ? "➗ Fractions"
        : "➗ Fractions",
      href: `/${locale}/revisions/maths/fraction`,
    },
    {
      title: locale === "en"
        ? "💯 Percentages"
        : "💯 Pourcentages",
      href: `/${locale}/revisions/maths/pourcentages`,
    },
    {
      title: locale === "en"
        ? "✏️ Equations"
        : "✏️ Équations",
      href: `/${locale}/revisions/maths/equations`,
    },
    {
      title: locale === "en"
        ? "⚡ Powers"
        : "⚡ Puissances",
      href: `/${locale}/revisions/maths/puissances`,
    },
    {
      title: locale === "en"
        ? "📈 Functions"
        : "📈 Fonctions",
      href: `/${locale}/revisions/maths/fonctions`,
    },
    {
      title: locale === "en"
        ? "🎲 Probability"
        : "🎲 Probabilités",
      href: `/${locale}/revisions/maths/probabilites`,
    },
    {
      title: locale === "en"
        ? "📊 Statistics"
        : "📊 Statistiques",
      href: `/${locale}/revisions/maths/statistiques`,
    },
    {
      title: locale === "en"
        ? "√ Square Roots"
        : "√ Racines carrées",
      href: `/${locale}/revisions/maths/racines-carrees`,
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
                📐
              </span>

              <h1 className="text-4xl font-black">
                {locale === "en"
                  ? "Mathematics"
                  : "Mathématiques"}
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
              ? "Quickly review the most important mathematics concepts."
              : "Révise rapidement les notions importantes de mathématiques."}
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