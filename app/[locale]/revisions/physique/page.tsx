import Link from "next/link"
import AdBanner from "@/components/AdBanner"

export default async function PhysiquePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {

  const { locale } = await params

  const fiches = [
    {
      title: locale === "en" ? "💪 Forces" : "💪 Les Forces",
      href: `/${locale}/revisions/physique/forces`,
    },
    {
      title: locale === "en" ? "🚗 Motion" : "🚗 Le Mouvement",
      href: `/${locale}/revisions/physique/mouvement`,
    },
    {
      title: locale === "en" ? "⚡ Energy" : "⚡ L'Énergie",
      href: `/${locale}/revisions/physique/energie`,
    },
    {
      title: locale === "en" ? "🔌 Electricity" : "🔌 L'Électricité",
      href: `/${locale}/revisions/physique/electricite`,
    },
    {
      title: locale === "en" ? "💡 Light" : "💡 La Lumière",
      href: `/${locale}/revisions/physique/lumiere`,
    },
    {
      title: locale === "en" ? "🔊 Sound" : "🔊 Le Son",
      href: `/${locale}/revisions/physique/son`,
    },
    {
      title: locale === "en" ? "🌍 Gravity" : "🌍 La Gravitation",
      href: `/${locale}/revisions/physique/gravitation`,
    },
    {
      title: locale === "en" ? "🫧 Pressure" : "🫧 La Pression",
      href: `/${locale}/revisions/physique/pression`,
    },
    {
      title: locale === "en" ? "⚛️ Atoms" : "⚛️ Les Atomes",
      href: `/${locale}/revisions/physique/atomes`,
    },
    {
      title: locale === "en" ? "☢️ Radioactivity" : "☢️ La Radioactivité",
      href: `/${locale}/revisions/physique/radioactivite`,
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
                ⚛️
              </span>

              <h1 className="text-4xl font-black">
                {locale === "en"
                  ? "Physics"
                  : "Physique"}
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
              ? "Quickly review the most important physics concepts."
              : "Révise rapidement les notions importantes de physique."}
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