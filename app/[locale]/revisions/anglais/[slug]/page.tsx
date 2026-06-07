import Link from "next/link"
import { notFound } from "next/navigation"

import { anglaisFiches } from "@/data/revisions/anglais"

export default async function AnglaisFichePage({
  params,
}: {
  params: Promise<{
    locale: string
    slug: string
  }>
}) {
  const { locale, slug } = await params

  const fiche = anglaisFiches.find((f) => f.slug === slug)

  if (!fiche) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-8">
      <div className="max-w-4xl mx-auto">

        
        <Link
          href={`/${locale}/revisions/anglais`}
          className="inline-block mb-6 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          ← {locale === "fr"
            ? "Retour aux fiches d'anglais"
            : "Back to English revision sheets"}
        </Link>

        <h1 className="text-4xl font-bold mb-8">
          {fiche.title}
        </h1>

        <div className="space-y-8">

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              📖 {locale === "fr" ? "Définition" : "Definition"}
            </h2>

            <p className="leading-8">
              {fiche.content.definition}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              📌 {locale === "fr" ? "À retenir" : "Key formula"}
            </h2>

            <div className="border border-gray-300 dark:border-gray-700 rounded-2xl p-5 font-medium">
              {fiche.content.formule}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              💡 {locale === "fr" ? "Exemple" : "Example"}
            </h2>

            <div className="border border-gray-300 dark:border-gray-700 rounded-2xl p-5">
              {fiche.content.exemple}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              ✅ {locale === "fr" ? "Points clés" : "Key points"}
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              {fiche.content.pointsCles.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              ❌ {locale === "fr" ? "Erreurs fréquentes" : "Common mistakes"}
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              {fiche.content.erreurs.map((erreur, index) => (
                <li key={index}>{erreur}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              🎯 {locale === "fr" ? "Astuce" : "Tip"}
            </h2>

            <div className="border border-green-300 dark:border-green-700 rounded-2xl p-5">
              {fiche.content.astuce}
            </div>
          </section>

        </div>

      </div>
    </main>
  )
}