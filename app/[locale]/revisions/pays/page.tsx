import { paysFiches } from "@/data/revisions/pays"
import AdBanner from "@/components/AdBanner"
import Link from "next/link"

export default async function PaysPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {

  const { locale } = await params

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-6">

      <AdBanner />

      <div className="max-w-6xl mx-auto">

        {/* TITRE */}
        <div className="mt-8 mb-10">

          <div className="flex items-center justify-between gap-4">

            <div className="flex items-center gap-3">

              <span className="text-5xl">
                🌎
              </span>

              <h1 className="text-4xl font-black">
                Pays du monde
              </h1>

            </div>

            <Link
              href={`/${locale}/revisions`}
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
            Découvre les pays du monde, leurs capitales, leurs populations,
            leurs langues et leurs monnaies.
          </p>

        </div>

        {/* LISTE DES PAYS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

          {paysFiches.map((pays) => (
            <Link
              key={pays.slug}
              href={`/${locale}/revisions/pays/${pays.slug}`}
              className="
                border
                border-gray-300
                dark:border-gray-700
                rounded-2xl
                p-4
                text-center
                font-bold
                hover:bg-gray-100
                dark:hover:bg-gray-800
                transition
              "
            >
              {pays.title}
            </Link>
          ))}

        </div>

      </div>

    </main>
  )
}
