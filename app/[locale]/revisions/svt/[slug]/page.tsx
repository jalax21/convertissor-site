import { svtFiches } from "@/data/revisions/svt"
import Image from "next/image"
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

  const fiche = svtFiches.find(
    (f) => f.slug === slug
  )

  if (!fiche) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-6">

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

          <p
            className="text-xl leading-8 text-gray-700 dark:text-gray-300"
            dangerouslySetInnerHTML={{
              __html: fiche.content.definition,
            }}
          />

        </section>

        {/* IMAGE */}
        <section className="mb-6 rounded-3xl border border-gray-300 dark:border-gray-700 p-6">

          <h2 className="text-2xl font-bold mb-4">
            🖼 Illustration
          </h2>

          <div className="flex justify-center">

            <Image
              src={fiche.image}
              alt={fiche.title}
              width={900}
              height={600}
              className="rounded-2xl"
            />

          </div>

        </section>

        {/* FORMULE */}
        <section className="mb-6 rounded-3xl border border-gray-300 dark:border-gray-700 p-6">

          <h2 className="text-2xl font-bold mb-4">
            🧠 À retenir
          </h2>

          <div className="text-xl font-black text-center">
            {fiche.content.formule}
          </div>

        </section>

        {/* EXEMPLE */}
        <section className="mb-6 rounded-3xl border border-gray-300 dark:border-gray-700 p-6">

          <h2 className="text-2xl font-bold mb-4">
            ✏ Exemple
          </h2>

          <p className="text-xl font-black text-center">
            {fiche.content.exemple}
          </p>

        </section>

      </div>

    </main>
  )
}