import AdBanner from "@/components/AdBanner"
import Link from "next/link"

export default async function FrancaisPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {

  const { locale } = await params
  const fiches = [
  {
    title: "Nature des mots",
    emoji: "📝",
    href: `/${locale}/revisions/francais/nature-des-mots`,
  },
  {
    title: "Fonctions grammaticales",
    emoji: "📚",
    href: `/${locale}/revisions/francais/fonctions-grammaticales`,
  },
  {
    title: "Participe passé",
    emoji: "✍️",
    href: `/${locale}/revisions/francais/accord-participe-passe`,
  },
  {
    title: "Homophones",
    emoji: "🔤",
    href: `/${locale}/revisions/francais/homophones`,
  },
  {
    title: "Figures de style",
    emoji: "🎭",
    href: `/${locale}/revisions/francais/figure-de-style`,
  },
  {
    title: "Types de phrases",
    emoji: "💬",
    href: `/${locale}/revisions/francais/types-de-phrases`,
  },
  {
    title: "Présent",
    emoji: "📖",
    href: `/${locale}/revisions/francais/conjugaison-present`,
  },
  {
    title: "Conditionnel",
    emoji: "🤔",
    href: `/${locale}/revisions/francais/conditionnel`,
  },
  {
    title: "Subordonnées",
    emoji: "🔗",
    href: `/${locale}/revisions/francais/proposition-subordonnee`,
  },
  {
    title: "Registres littéraires",
    emoji: "📜",
    href: `/${locale}/revisions/francais/registre-litteraire`,
  },
]

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-6">

      {/* PUB */}
      <AdBanner />

      <div className="max-w-3xl mx-auto">

        {/* TITRE */}
        <div className="mt-8 mb-10">

  <div className="flex items-center justify-between gap-4">

    <div className="flex items-center gap-3">

      <span className="text-5xl">
        📚
      </span>

      <h1 className="text-4xl font-black">
        Fiches Français
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
    Révise rapidement les notions importantes.
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