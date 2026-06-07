import Link from "next/link"

import { francaisFiches } from "@/data/revisions/francais"
import { englishFiches } from "@/data/revisions/francais-en"

export default async function FrancaisPage({
params,
}: {
params: Promise<{ locale: string }>
}) {

const { locale } = await params

const fiches =
locale === "en"
? englishFiches
: francaisFiches

return ( <main className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-6">

  
  <div className="max-w-3xl mx-auto">

    {/* TITRE */}
    <div className="mt-8 mb-10">

      <div className="flex items-center justify-between gap-4">

        <div className="flex items-center gap-3">

          <span className="text-5xl">
            📚
          </span>

          <h1 className="text-4xl font-black">
            {locale === "en"
              ? "French Revision Sheets"
              : "Fiches Français"}
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
          ? "Quickly review important concepts."
          : "Révise rapidement les notions importantes."}
      </p>

    </div>

    {/* FICHES */}
    <div className="grid grid-cols-2 gap-4">

      {fiches.map((fiche) => (

        <Link
          key={fiche.slug}
          href={`/${locale}/revisions/francais/${fiche.slug}`}
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
