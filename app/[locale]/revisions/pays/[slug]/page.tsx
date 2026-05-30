import { paysFiches } from "@/data/revisions/pays"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import AdBanner from "@/components/AdBanner"

export default async function Page({
  params,
}: {
  params: Promise<{
    slug: string
    locale: string
  }>
}) {

  const { slug, locale } = await params

  const fiche = paysFiches.find(
    (f) => f.slug === slug
  )

  if (!fiche) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-6">

      <AdBanner />

      <div className="max-w-3xl mx-auto">

        {/* TITRE + RETOUR */}
        <div className="mt-8 mb-10">

          <div className="flex items-center justify-between gap-4">

            <h1 className="text-4xl font-black">
              {fiche.title}
            </h1>

            <Link
              href={`/${locale}/revisions/pays`}
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

        </div>

        {/* IMAGE */}
        <section className="mb-6">

          <div className="flex justify-center">

            <Image
              src={fiche.image}
              alt={fiche.title}
              width={1000}
              height={400}
              className="rounded-3xl"
              priority
            />

          </div>

        </section>

        {/* DÉFINITION */}
        <section className="mb-6 rounded-3xl border border-gray-300 dark:border-gray-700 p-6">

          <h2 className="text-2xl font-bold mb-4">
            📘 Présentation
          </h2>

          <div
            className="text-xl leading-10 text-gray-700 dark:text-gray-300"
            dangerouslySetInnerHTML={{
              __html: fiche.content.definition,
            }}
          />

        </section>

        {/* INFORMATIONS */}
        <section className="mb-6 rounded-3xl border border-gray-300 dark:border-gray-700 p-6">

          <h2 className="text-2xl font-bold mb-4">
            🌍 Informations clés
          </h2>

          <div
  className="text-xl text-left font-semibold"
  dangerouslySetInnerHTML={{
    __html: fiche.content.formule,
  }}
/>

        </section>

        {/* EXEMPLE */}
        <section className="mb-6 rounded-3xl border border-gray-300 dark:border-gray-700 p-6">

          <h2 className="text-2xl font-bold mb-4">
            ⭐ À découvrir
          </h2>

          <div className="text-xl text-center">
            {fiche.content.exemple}
          </div>

        </section>

      </div>

    </main>
  )
}
