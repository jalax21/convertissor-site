import Link from "next/link";
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
  const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name:
        locale === "fr"
          ? "Comment convertir des kilomètres en miles ?"
          : "How to convert kilometers to miles?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          locale === "fr"
            ? "Utilisez notre convertisseur de distance."
            : "Use our distance converter."
      }
    },
    {
      "@type": "Question",
      name:
        locale === "fr"
          ? "QuickUnits est-il gratuit ?"
          : "Is QuickUnits free?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          locale === "fr"
            ? "Oui, tous les outils sont gratuits."
            : "Yes, all tools are free."
      }
    }
  ]
}

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
        : "Distance",

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
        : "Force",

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
       ? "Stockage"
       : "Storage",

    internetSpeed:
      locale === "fr"
      ? "Débit internet"
      : "Internet Speed",
           
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-8">

      {/* HEADER */}

<div className="relative mt-8">
  
  {/* TITRE CENTRE */}

 <div className="text-center mt-8">
  <h1 className="text-5xl md:text-7xl font-bold">
    {text.title}
  </h1>
  <div className="inline-flex items-center rounded-full border border-gray-700 px-4 py-2 text-sm mb-6">
  {locale === "fr"
    ? "⚡ Plus de 100 convertisseurs gratuits"
    : "⚡ More than 100 free converters"}
</div>
<section
  className="
    mt-6
    max-w-5xl
    mx-auto
    rounded-3xl
    border
    border-slate-700
    bg-gradient-to-r
    from-slate-900/80
    to-slate-800/50
    p-6
    text-center
  "
>
  

  <p className="text-gray-400 max-w-2xl mx-auto leading-7">
    {locale === "fr"
      ? "Distances, poids, températures, volumes, vitesses, stockage informatique ainsi que des fiches de révision gratuites pour les élèves et étudiants."
      : "Distances, weights, temperatures, volumes, speeds, storage units and free study sheets for students."}
  </p>

  <div className="flex flex-wrap justify-center gap-2 mt-5">
    <span className="px-3 py-1 rounded-full border border-slate-700 text-sm">
      ✓ 100+ convertisseurs
    </span>

    <span className="px-3 py-1 rounded-full border border-slate-700 text-sm">
      ✓ Fiches gratuites
    </span>

    <span className="px-3 py-1 rounded-full border border-slate-700 text-sm">
      ✓ Sans inscription
    </span>

    <span className="px-3 py-1 rounded-full border border-slate-700 text-sm">
      ✓ Mobile & PC
    </span>
  </div>

  </section>

<p className="mt-6 max-w-3xl mx-auto text-lg text-gray-500 dark:text-gray-400"></p>
</div>
    
  {/* LANGUES EN HAUT A DROITE */}

  <div className="absolute top-6 right-6 z-10">

  <Link
  href={locale === "fr" ? "/en" : "/fr"}
  className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
>
  {locale === "fr" ? (
    <>
      🇬🇧 <span>English</span>
    </>
  ) : (
    <>
      🇫🇷 <span>Français</span>
    </>
  )}
</Link>

</div>

</div>

      <div className="max-w-7xl mx-auto">

      
        

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

  <p className="text-gray-500 dark:text-gray-400 leading-8">
    {locale === "fr"
      ? "QuickUnits propose une collection complète de convertisseurs gratuits permettant de convertir rapidement les unités de longueur, poids, volume, vitesse, température, stockage informatique et bien d'autres mesures du quotidien."
      : "QuickUnits offers a complete collection of free converters to quickly convert length, weight, volume, speed, temperature, storage and many other common units."}
  </p>



  {/* DISTANCE */}

 {/* CATEGORIES */}

<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">

  <Link
  href={`/${locale}/convert/distance`}
  className="border border-gray-300 dark:border-gray-700 rounded-4xl p-6 min-h-[140px] flex flex-col items-center justify-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
>
  <span className="text-base font-bold">{text.distance}</span>
  <span className="text-3xl">📏</span>
</Link>

<Link
  href={`/${locale}/convert/puissance`}
  className="border border-gray-300 dark:border-gray-700 rounded-4xl p-6 min-h-[140px] flex flex-col items-center justify-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
>
  <span className="text-base font-bold">{text.power}</span>
  <span className="text-3xl">⚡</span>
</Link>

<Link
  href={`/${locale}/convert/volume`}
  className="border border-gray-300 dark:border-gray-700 rounded-4xl p-6 min-h-[140px] flex flex-col items-center justify-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
>
  <span className="text-base font-bold">{text.volume}</span>
  <span className="text-3xl">🧊</span>
</Link>

<Link
  href={`/${locale}/convert/force`}
  className="border border-gray-300 dark:border-gray-700 rounded-4xl p-6 min-h-[140px] flex flex-col items-center justify-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
>
  <span className="text-base font-bold">{text.force}</span>
  <span className="text-3xl">💪</span>
</Link>

<Link
  href={`/${locale}/convert/surface`}
  className="border border-gray-300 dark:border-gray-700 rounded-4xl p-6 min-h-[140px] flex flex-col items-center justify-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
>
  <span className="text-base font-bold">{text.surface}</span>
  <span className="text-3xl">◼️</span>
</Link>

<Link
  href={`/${locale}/convert/temperature`}
  className="border border-gray-300 dark:border-gray-700 rounded-4xl p-6 min-h-[140px] flex flex-col items-center justify-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
>
  <span className="text-base font-bold">{text.temperature}</span>
  <span className="text-3xl">🌡️</span>
</Link>

<Link
  href={`/${locale}/convert/weight`}
  className="border border-gray-300 dark:border-gray-700 rounded-4xl p-6 min-h-[140px] flex flex-col items-center justify-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
>
  <span className="text-base font-bold">{text.weight}</span>
  <span className="text-3xl">⚖️</span>
</Link>

<Link
  href={`/${locale}/convert/speed`}
  className="border border-gray-300 dark:border-gray-700 rounded-4xl p-6 min-h-[140px] flex flex-col items-center justify-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
>
  <span className="text-base font-bold">
    {locale === "fr" ? "Vitesses" : "Speed"}
  </span>
  <span className="text-3xl">🚗</span>
</Link>

<Link
  href={`/${locale}/convert/time`}
  className="border border-gray-300 dark:border-gray-700 rounded-4xl p-6 min-h-[140px] flex flex-col items-center justify-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
>
  <span className="text-base font-bold">
    {locale === "fr" ? "Temps" : "Time"}
  </span>
  <span className="text-3xl">⏱️</span>
</Link>

<Link
  href={`/${locale}/convert/angle`}
  className="border border-gray-300 dark:border-gray-700 rounded-4xl p-6 min-h-[140px] flex flex-col items-center justify-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
>
  <span className="text-base font-bold">
    {locale === "fr" ? "Angles" : "Angles"}
  </span>
  <span className="text-3xl">📐</span>
</Link>

<Link
  href={`/${locale}/convert/storage`}
  className="border border-gray-300 dark:border-gray-700 rounded-4xl p-6 min-h-[140px] flex flex-col items-center justify-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
>
  <span className="text-base font-bold">
    {locale === "fr" ? "Stockage" : "Storage"}
  </span>
  <span className="text-3xl">💾</span>
</Link>

<Link
  href={`/${locale}/convert/internet-speed`}
  className="border border-gray-300 dark:border-gray-700 rounded-4xl p-6 min-h-[140px] flex flex-col items-center justify-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
>
  <span className="text-base font-bold">
    {locale === "fr" ? "Débit internet" : "Internet Speed"}
  </span>
  <span className="text-3xl">🌐</span>
</Link>

</div>



        </div>
        
        <RevisionSection locale={locale} />
        <section className="mt-12 rounded-2xl border border-slate-700 p-8 bg-slate-900/30 text-center">

  <h2 className="text-3xl font-bold mb-6">
    {locale === "fr"
      ? "Convertisseurs et fiches de révision gratuits"
      : "Free converters and study sheets"}
  </h2>

  <p className="mt-2 text-gray-500 dark:text-gray-400 leading-7 ">
    {locale === "fr"
      ? "QuickUnits propose plus de 100 convertisseurs gratuits permettant de convertir rapidement les distances, poids, températures, volumes, vitesses, puissances, surfaces et unités informatiques. Le site met également à disposition des fiches de révision pour les principales matières scolaires afin d'aider les élèves à apprendre plus efficacement."
      : "QuickUnits offers more than 100 free converters for distances, weights, temperatures, volumes, speeds, power, surfaces and storage units. The website also provides study sheets for the main school subjects to help students learn more efficiently."}
  </p>

  <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">

    <span className="px-4 py-2 rounded-full border border-slate-700">
      ✓ 100+ {locale === "fr" ? "convertisseurs" : "converters"}
    </span>

    <span className="px-4 py-2 rounded-full border border-slate-700">
      ✓ {locale === "fr" ? "Gratuit" : "Free"}
    </span>

    <span className="px-4 py-2 rounded-full border border-slate-700">
      ✓ {locale === "fr" ? "Sans inscription" : "No registration"}
    </span>

    <span className="px-4 py-2 rounded-full border border-slate-700">
      ✓ Mobile & PC
    </span>

  </div>

</section>
<section className="mt-12 rounded-2xl border border-slate-700 bg-slate-900/20 p-8">

  <h2 className="text-3xl font-bold mb-8 text-center">
    FAQ
  </h2>

  <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

    {/* QUESTION 1 */}

    <div className="rounded-2xl border border-slate-700 bg-slate-900/30 p-6 text-center h-full">

      <h3 className="text-xl font-semibold mb-4">
        {locale === "fr"
          ? "Comment convertir des kilomètres en miles ?"
          : "How to convert kilometers to miles?"}
      </h3>

      <p className="text-gray-400 leading-7">
        {locale === "fr"
          ? "Utilisez notre convertisseur de distance pour convertir instantanément des kilomètres en miles et inversement."
          : "Use our distance converter to instantly convert kilometers to miles and vice versa."}
      </p>

    </div>

    {/* QUESTION 2 */}

    <div className="rounded-2xl border border-slate-700 bg-slate-900/30 p-6 text-center h-full">

      <h3 className="text-xl font-semibold mb-4">
        {locale === "fr"
          ? "QuickUnits est-il gratuit ?"
          : "Is QuickUnits free?"}
      </h3>

      <p className="text-gray-400 leading-7">
        {locale === "fr"
          ? "Oui, tous les convertisseurs, calculateurs et fiches de révision sont entièrement gratuits."
          : "Yes, all converters, calculators and study sheets are completely free."}
      </p>

    </div>

    {/* QUESTION 3 */}

    <div className="rounded-2xl border border-slate-700 bg-slate-900/30 p-6 text-center h-full">

      <h3 className="text-xl font-semibold mb-4">
        {locale === "fr"
          ? "Faut-il créer un compte ?"
          : "Do I need an account?"}
      </h3>

      <p className="text-gray-400 leading-7">
        {locale === "fr"
          ? "Non, aucun compte n'est nécessaire pour utiliser les outils QuickUnits."
          : "No, no account is required to use QuickUnits tools."}
      </p>

    </div>

    {/* QUESTION 4 */}

    <div className="rounded-2xl border border-slate-700 bg-slate-900/30 p-6 text-center h-full">

      <h3 className="text-xl font-semibold mb-4">
        {locale === "fr"
          ? "Les résultats sont-ils fiables ?"
          : "Are the results accurate?"}
      </h3>

      <p className="text-gray-400 leading-7">
        {locale === "fr"
          ? "Les calculs utilisent des formules et facteurs de conversion reconnus afin d'offrir des résultats précis."
          : "Calculations use recognized formulas and conversion factors to provide accurate results."}
      </p>

    </div>

    {/* QUESTION 5 */}

    <div className="rounded-2xl border border-slate-700 bg-slate-900/30 p-6 text-center h-full">

      <h3 className="text-xl font-semibold mb-4">
        {locale === "fr"
          ? "QuickUnits fonctionne-t-il sur mobile ?"
          : "Does QuickUnits work on mobile devices?"}
      </h3>

      <p className="text-gray-400 leading-7">
        {locale === "fr"
          ? "Oui, le site est entièrement compatible avec les smartphones, tablettes et ordinateurs."
          : "Yes, the website is fully compatible with smartphones, tablets and desktop computers."}
      </p>

    </div>

    {/* QUESTION 6 */}

    <div className="rounded-2xl border border-slate-700 bg-slate-900/30 p-6 text-center h-full">

      <h3 className="text-xl font-semibold mb-4">
        {locale === "fr"
          ? "Quelles conversions sont disponibles ?"
          : "Which conversions are available?"}
      </h3>

      <p className="text-gray-400 leading-7">
        {locale === "fr"
          ? "Distances, poids, températures, volumes, vitesses, surfaces, puissances, temps, stockage informatique et bien plus encore."
          : "Distances, weights, temperatures, volumes, speeds, surfaces, power, time, storage units and much more."}
      </p>

    </div>

  </div>

</section>
  </div>


      

    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(faqSchema),
  }}
/>
</main>
  )
}
