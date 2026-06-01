import { francaisFiches } from "@/data/revisions/francais"
import { englishFiches } from "@/data/revisions/francais-en"
import { notFound } from "next/navigation"
import Link from "next/link"
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

  const fiches =
  locale === "en"
    ? englishFiches
    : francaisFiches

const fiche = fiches.find(
  (f) => f.slug === slug
)

  if (!fiche) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-6">

      <AdBanner />

      <div className="max-w-3xl mx-auto">

        {/* TITRE + BOUTON RETOUR */}
        <div className="mt-8 mb-10">

          <div className="flex items-center justify-between gap-4">

            <div className="flex items-center gap-3">

              
              <h1 className="text-4xl font-black">
                {fiche.title}
              </h1>

            </div>

            <Link
              href={`/${locale}/revisions/francais`}
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

        </div>

        {/* DEFINITION */}
        <section className="mb-6 rounded-3xl border border-gray-300 dark:border-gray-700 p-6">

          <h2 className="text-2xl font-bold mb-4">
            📘 Définition
          </h2>

          <div
  className="text-xl leading-10 text-gray-700 dark:text-gray-300"
  dangerouslySetInnerHTML={{
    __html: fiche.content.definition,
  }}
/>

        </section>

        {/* EXEMPLE */}
        <section className="mb-6 rounded-3xl border border-gray-300 dark:border-gray-700 p-6">

          <h2 className="text-2xl font-bold mb-4">
            ✏ Exemple
          </h2>

          <div className="text-2xl text-center">
            {fiche.content.exemple}
          </div>

        </section>

        {/* A RETENIR */}
        <section className="mb-6 rounded-3xl border border-gray-300 dark:border-gray-700 p-6">

          <h2 className="text-2xl font-bold mb-4">
            🧠 À retenir
          </h2>

          <div className="text-3xl font-black text-center">
            {fiche.content.formule}
          </div>

        </section>
        {/* POINTS CLÉS */}
<section className="mb-6 rounded-3xl border border-gray-300 dark:border-gray-700 p-6">

  <h2 className="text-2xl font-bold mb-4">
    ✅ Points clés
  </h2>

  <ul className="space-y-3">
    {fiche.content.pointsCles?.map((point, index) => (
      <li
        key={index}
        className="text-lg leading-8"
      >
        • {point}
      </li>
    ))}
  </ul>

</section>

{/* ERREURS FRÉQUENTES */}
<section className="mb-6 rounded-3xl border border-red-300 dark:border-red-700 p-6">

  <h2 className="text-2xl font-bold mb-4">
    ❌ Erreurs fréquentes
  </h2>

  <ul className="space-y-3">
    {fiche.content.erreurs?.map((erreur, index) => (
      <li
        key={index}
        className="text-lg leading-8"
      >
        • {erreur}
      </li>
    ))}
  </ul>

</section>

{/* ASTUCE */}
<section className="mb-6 rounded-3xl border border-green-300 dark:border-green-700 p-6">

  <h2 className="text-2xl font-bold mb-4">
    💡 Astuce
  </h2>

  <p className="text-xl leading-8">
    {fiche.content.astuce}
  </p>

</section>

      </div>

    </main>
  )
}
