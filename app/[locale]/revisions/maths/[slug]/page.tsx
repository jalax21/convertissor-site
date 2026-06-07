import { mathsFiches } from "@/data/revisions/maths"
import { mathSheets } from "@/data/revisions/maths-en"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

export default async function Page({
  params,
}: {
  params: Promise<{
    slug: string
    locale: string
  }>
}) {

  const { slug, locale } = await params

  const fiches =
    locale === "en"
      ? mathSheets
      : mathsFiches

  const fiche = fiches.find(
    (f) => f.slug === slug
  )

  if (!fiche) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-6">

      
      <div className="max-w-3xl mx-auto">

        {/* TITRE */}
        <div className="mt-8 mb-10">

          <div className="flex items-center justify-between gap-4">

            <div className="flex items-center gap-3">

              <span className="text-5xl">
                {fiche.emoji}
              </span>

              <h1 className="text-4xl font-black">
                {fiche.title}
              </h1>

            </div>

            <Link
              href={`/${locale}/revisions/maths`}
              className="
                px-8
                py-4
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

        </div>

        {/* IMAGE */}
        <section className="mb-6 rounded-3xl border border-gray-300 dark:border-gray-700 p-6">

          <div className="flex justify-center">

            <Image
              src={fiche.image}
              alt={fiche.title}
              width={900}
              height={600}
              className="rounded-2xl"
              priority
            />

          </div>

        </section>

        {/* DEFINITION */}
        <section className="mb-6 rounded-3xl border border-gray-300 dark:border-gray-700 p-6">

          <h2 className="text-2xl font-bold mb-4">
            {locale === "en"
              ? "📘 Definition"
              : "📘 Définition"}
          </h2>

          <p
            className="text-xl leading-8 text-gray-700 dark:text-gray-300"
            dangerouslySetInnerHTML={{
              __html: fiche.content.definition,
            }}
          />

        </section>

        {/* FORMULE */}
        <section className="mb-6 rounded-3xl border border-gray-300 dark:border-gray-700 p-6">

          <h2 className="text-2xl font-bold mb-4">
            {locale === "en"
              ? "🧠 Formula"
              : "🧠 Formule"}
          </h2>

          <div className="text-xl font-black text-center">
            {fiche.content.formule}
          </div>

        </section>

        {/* EXEMPLE */}
        <section className="mb-6 rounded-3xl border border-gray-300 dark:border-gray-700 p-6">

          <h2 className="text-2xl font-bold mb-4">
            {locale === "en"
              ? "✏ Example"
              : "✏ Exemple"}
          </h2>

          <p className="text-xl font-black text-center">
            {fiche.content.exemple}
          </p>

        </section>

      </div>

    </main>
  )
}