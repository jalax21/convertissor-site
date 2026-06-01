import { histoireFiches } from "@/data/revisions/histoire"
import Image from "next/image"
import { notFound } from "next/navigation"
import AdBanner from "@/components/AdBanner"
import Link from "next/link"

export default async function Page({
  params,
}: {
  params: Promise<{
    slug: string
    locale: string
  }>
}) {

  const { slug, locale } = await params

  const fiche = histoireFiches.find(
    (f) => f.slug === slug
  )

  if (!fiche) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-6">

      <AdBanner />

      <div className="max-w-3xl mx-auto">

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
      href={`/${locale}/revisions/histoire`}
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

        {/* DEFINITION */}
        <section className="mb-6 rounded-3xl border border-gray-300 dark:border-gray-700 p-6">

          <h2 className="text-2xl font-bold mb-4">
            📘 Résumé
          </h2>

          <p
  className="text-xl leading-8 text-gray-700 dark:text-gray-300"
  dangerouslySetInnerHTML={{
    __html: fiche.content.resume ??"",
  }}
/>

        </section>

            
    

        {/* A RETENIR */}
        <section className="mb-6 rounded-3xl border border-gray-300 dark:border-gray-700 p-6">

          <h2 className="text-2xl font-bold mb-4">
            📌 À retenir
          </h2>

          <div
  className="text-xl font-black text-center"
  dangerouslySetInnerHTML={{
    __html: fiche.content.aretenir ?? "",
  }}
/>

        </section>
        

      </div>

    </main>
  )
}