import { mathsFiches } from "@/app/data/revisions/maths"
import { notFound } from "next/navigation"
import AdBanner from "@/components/AdBanner"

export default async function Page({
  params,
}: {
  params: Promise<{
    slug: string
    locale: string
  }>
}) {

  const { slug } = await params

  const fiche = mathsFiches.find(
    (f) => f.slug === slug
  )

  if (!fiche) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-6">

      {/* PUB */}
      <AdBanner />

      <div className="max-w-3xl mx-auto">

        {/* TITRE */}
        <div className="mt-8 mb-10">

          <div className="flex items-center gap-3">

            <span className="text-5xl">
              {fiche.emoji}
            </span>

            <h1 className="text-4xl font-black">
              {fiche.title}
            </h1>

          </div>

        </div>

        {/* DEFINITION */}
        <section className="mb-6 rounded-3xl border border-gray-300 dark:border-gray-700 p-6">

          <h2 className="text-2xl font-bold mb-4">
            📘 Définition
          </h2>

          <p className="text-lg leading-8 text-gray-700 dark:text-gray-300">
            {fiche.content.definition}
          </p>

        </section>

        {/* FORMULE */}
        <section className="mb-6 rounded-3xl border border-gray-300 dark:border-gray-700 p-6">

          <h2 className="text-2xl font-bold mb-4">
            🧠 Formule
          </h2>

          <div className="text-3xl font-black text-center">
            {fiche.content.formule}
          </div>

        </section>

        {/* EXEMPLE */}
        <section className="mb-6 rounded-3xl border border-gray-300 dark:border-gray-700 p-6">

          <h2 className="text-2xl font-bold mb-4">
            ✏ Exemple
          </h2>

          <p className="text-lg leading-8 text-gray-700 dark:text-gray-300">
            {fiche.content.exemple}
          </p>

        </section>

      </div>

    </main>
  )
}