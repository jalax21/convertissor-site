import Script from "next/script"
import AdBanner from "@/components/AdBanner"
import RevisionSection from "@/components/RevisionSection"
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const isFrench = locale === "fr";

  return {
    title: isFrench
      ? "QuickUnits.fr - Convertisseurs et outils"
      : "QuickUnits.fr - Converters and tools",

    description: isFrench
      ? "Convertisseurs, outils pratiques et fiches de révision gratuits."
      : "Free converters, practical tools and study sheets.",

    alternates: {
      canonical: `https://quickunits.fr/${locale}`,

      languages: {
        fr: "https://quickunits.fr/fr",
        en: "https://quickunits.fr/en",
      },
    },
  };
}
export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>
}) {

  const { locale } = await params

  const text = {
  title:
    locale === "fr"
      ? "QuickUnits.fr"
      : "QuickUnits.fr",

  bottomTitle:
    locale === "fr"
      ? "Convertisseurs"
      : "Converters",

    distance:
      locale === "fr"
        ? "Distances"
        : "Distances",

    power:
      locale === "fr"
        ? "Puissances"
        : "Powers",

    volume:
      locale === "fr"
        ? "Volumes"
        : "Volumes",

    force:
      locale === "fr"
        ? "Forces"
        : "Forces",

    surface:
      locale === "fr"
        ? "Surfaces"
        : "Surfaces",

    temperature:
      locale === "fr"
        ? "Température"
        : "Temperature",

    weight:
      locale === "fr"
        ? "Poids"
        : "Weight",

    storage:
      locale === "fr"
       ? "Stockages"
       : "Storages",

    internetSpeed:
      locale === "fr"
      ? "Débit internet"
      : "Internet Speed",
           
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-8">

      {/* HEADER */}

<div className="relative mt-8">

  {/* BANNIERE PUB */}

         <AdBanner />
  
  {/* TITRE CENTRE */}

  <h1 className="text-6xl md:text-7xl font-bold text-center">
    {text.title}
  </h1>

  {/* LANGUES EN HAUT A DROITE */}

  <div className="absolute top-1/2 right-0 -translate-y-1/2 flex gap-2">

    <a
      href="/en"
      className="border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
    >
      EN
    </a>

    <a
      href="/fr"
      className="border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
    >
      FR
    </a>

  </div>

</div>

      <div className="max-w-2xl mx-auto">

      
        

        {/* TITRE CATEGORIES */}

<div className="mt-12 mb-8">

  <div className="flex items-center gap-3">
    <span className="text-4xl">
      🧮
    </span>

    <h2 className="text-3xl font-bold">
      {text.bottomTitle}
    </h2>
  </div>

  <p className="mt-2 text-gray-500 dark:text-gray-400">
    {locale === "fr"
      ? "Convertisseurs simples et rapides"
      : "Fast and simple converters"}
  </p>

</div>

{/* CATEGORIES */}

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">

  {/* DISTANCE */}

  <a
    href={`/${locale}/convert/distance`}
    className="border border-gray-300 dark:border-gray-700 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
  >
    <span className="text-base font-bold">
      {text.distance}
    </span>

    <span className="text-3xl">
      📏
    </span>
  </a>

  {/* POWER */}

  <a
    href={`/${locale}/convert/puissance`}
    className="border border-gray-300 dark:border-gray-700 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
  >
    <span className="text-base font-bold">
      {text.power}
    </span>

    <span className="text-3xl">
      ⚡
    </span>
  </a>
  
  {/* VOLUME */}

  <a
    href={`/${locale}/convert/volume`}
    className="border border-gray-300 dark:border-gray-700 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
  >
    <span className="text-base font-bold">
      {text.volume}
    </span>

    <span className="text-3xl">
      🧊
    </span>
  </a>

  {/* FORCE */}

  <a
    href={`/${locale}/convert/force`}
    className="border border-gray-300 dark:border-gray-700 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
  >
    <span className="text-base font-bold">
      {text.force}
    </span>

    <span className="text-3xl">
      💪
    </span>
  </a>

  {/* SURFACE */}

  <a
    href={`/${locale}/convert/surface`}
    className="border border-gray-300 dark:border-gray-700 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
  >
    <span className="text-base font-bold">
      {text.surface}
    </span>

    <span className="text-3xl">
      ◼️
    </span>
  </a>

  {/* TEMPERATURE */}

  <a
    href={`/${locale}/convert/temperature`}
    className="border border-gray-300 dark:border-gray-700 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
  >
    <span className="text-base font-bold">
      {text.temperature}
    </span>

    <span className="text-3xl">
      🌡️
    </span>
  </a>

  {/* WEIGHT */}

  <a
    href={`/${locale}/convert/weight`}
    className="border border-gray-300 dark:border-gray-700 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
  >
    <span className="text-base font-bold">
      {text.weight}
    </span>

    <span className="text-3xl">
      ⚖️
    </span>
  </a>

  {/* SPEED */}

<a
  href={`/${locale}/convert/speed`}
  className="border border-gray-300 dark:border-gray-700 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
>
  <span className="text-base font-bold">
    {locale === "fr" ? "Vitesses" : "Speed"}
  </span>

  <span className="text-3xl">
    🚗
  </span>
</a>

{/* TIME */}

<a
  href={`/${locale}/convert/time`}
  className="border border-gray-300 dark:border-gray-700 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
>
  <span className="text-base font-bold">
    {locale === "fr"
      ? "Temps"
      : "Time"}
  </span>

  <span className="text-3xl">
    ⏱️
  </span>

</a>

<a
  href={`/${locale}/convert/angle`}
  className="border border-gray-300 dark:border-gray-700 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
>
  <span className="text-base font-bold">
    {locale === "fr"
      ? "Angles"
      : "Angles"}
  </span>

  <span className="text-3xl">
    📐
  </span>
</a>

{/* STORAGE */}

<a
  href={`/${locale}/convert/storage`}
  className="border border-gray-300 dark:border-gray-700 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
>
  <span className="text-base font-bold">
    {locale === "fr"
      ? "Stockage"
      : "Storage"}
  </span>

  <span className="text-3xl">
    💾
  </span>

</a>

{/* INTERNET SPEED */}

<a
  href={`/${locale}/convert/internet-speed`}
  className="border border-gray-300 dark:border-gray-700 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
>
  <span className="text-base font-bold">
    {locale === "fr"
      ? "Débit internet"
      : "Internet Speed"}
  </span>

  <span className="text-3xl">
    🌐
  </span>

</a>



        </div>
        
        <RevisionSection locale={locale} />

      </div>

    </main>
  )
}
