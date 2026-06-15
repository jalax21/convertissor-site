"use client"
import ConverterSeoSection from "@/components/ConverterSeoSection"
import { use, useState } from "react"
import Link from "next/link"

const units: Record<string, number> = {

  // COMMON

  degree: 1,
  radian: 57.2957795,
  gradian: 0.9,

  // FULL ROTATION

  turn: 360,
  quadrant: 90,
  sextant: 60,

  // SMALL ANGLES

  arcminute: 0.0166667,
  arcsecond: 0.000277778,

  // SCIENCE

  milliradian: 0.0572958,
  microradian: 0.0000572958,

}

export default function AngleConverter({
  params,
}: {
  params: Promise<{ locale: string }>
}) {

  const { locale } = use(params)

  const [value, setValue] = useState("1")
  const [from, setFrom] = useState("degree")
  const [to, setTo] = useState("radian")

  const labels: Record<string, string> = {

    degree: "°",
    radian: "rad",
    gradian: "gon",

    turn:
      locale === "fr"
        ? "tour"
        : "turn",

    quadrant:
      locale === "fr"
        ? "quadrant"
        : "quadrant",

    sextant:
      locale === "fr"
        ? "sextant"
        : "sextant",

    arcminute:
      locale === "fr"
        ? "minute d'arc"
        : "arcmin",

    arcsecond:
      locale === "fr"
        ? "seconde d'arc"
        : "arcsec",

    milliradian: "mrad",
    microradian: "µrad",
  }

  function convert(
    value: number,
    from: string,
    to: string
  ) {
    return (value * units[from]) / units[to]
  }

  const result = convert(
    Number(value),
    from,
    to
  )

  function swapUnits() {
    const oldFrom = from
    setFrom(to)
    setTo(oldFrom)
  }

  return (
    <main className="bg-white dark:bg-gray-900 text-black dark:text-white p-8">

      <div className="max-w-4xl mx-auto">

        {/* TITRE */}

        <h1 className="text-5xl font-bold mb-4 text-center">
          {locale === "fr"
            ? "📐 Convertisseur d'angles"
            : "📐 Angle Converter"}
        </h1>

        {/* DESCRIPTION */}

        <p className="text-gray-600 dark:text-gray-300 mb-10 text-center">
          {locale === "fr"
            ? "Convertissez les unités d'angle instantanément."
            : "Convert angle units instantly."}
        </p>

        {/* CARTE */}

        <div className="bg-white dark:bg-slate-800 border border-gray-300 dark:border-gray-700 rounded-2xl p-6 shadow-sm">

          {/* VALUE */}

          <label className="block mb-2 font-semibold">
            {locale === "fr" ? "Valeur" : "Value"}
          </label>

          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 mb-6"
          />

          {/* FROM */}

          <label className="block mb-2 font-semibold">
            {locale === "fr" ? "De" : "From"}
          </label>

          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 mb-6"
          >

            <option value="degree">
              {locale === "fr" ? "Degré" : "Degree"}
            </option>

            <option value="radian">
              {locale === "fr" ? "Radian" : "Radian"}
            </option>

            <option value="gradian">
              {locale === "fr" ? "Grade" : "Gradian"}
            </option>

            <option value="turn">
              {locale === "fr" ? "Tour" : "Turn"}
            </option>

            <option value="quadrant">
              {locale === "fr" ? "Quadrant" : "Quadrant"}
            </option>

            <option value="sextant">
              {locale === "fr" ? "Sextant" : "Sextant"}
            </option>

            <option value="arcminute">
              {locale === "fr" ? "Minute d'arc" : "Arcminute"}
            </option>

            <option value="arcsecond">
              {locale === "fr" ? "Seconde d'arc" : "Arcsecond"}
            </option>

            <option value="milliradian">
              {locale === "fr" ? "Milliradian" : "Milliradian"}
            </option>

            <option value="microradian">
              {locale === "fr" ? "Microradian" : "Microradian"}
            </option>

          </select>

          {/* BOUTON INVERSION */}

          <button
            onClick={swapUnits}
            className="w-full mb-6 p-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition"
          >
            {locale === "fr"
              ? "⇄ Inverser les unités"
              : "⇄ Invert Units"}
          </button>

          {/* TO */}

          <label className="block mb-2 font-semibold">
            {locale === "fr" ? "Vers" : "To"}
          </label>

          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 mb-6"
          >

            <option value="degree">
              {locale === "fr" ? "Degré" : "Degree"}
            </option>

            <option value="radian">
              {locale === "fr" ? "Radian" : "Radian"}
            </option>

            <option value="gradian">
              {locale === "fr" ? "Grade" : "Gradian"}
            </option>

            <option value="turn">
              {locale === "fr" ? "Tour" : "Turn"}
            </option>

            <option value="quadrant">
              {locale === "fr" ? "Quadrant" : "Quadrant"}
            </option>

            <option value="sextant">
              {locale === "fr" ? "Sextant" : "Sextant"}
            </option>

            <option value="arcminute">
              {locale === "fr" ? "Minute d'arc" : "Arcminute"}
            </option>

            <option value="arcsecond">
              {locale === "fr" ? "Seconde d'arc" : "Arcsecond"}
            </option>

            <option value="milliradian">
              {locale === "fr" ? "Milliradian" : "Milliradian"}
            </option>

            <option value="microradian">
              {locale === "fr" ? "Microradian" : "Microradian"}
            </option>

          </select>

          {/* RESULTAT */}

          <div className="text-4xl font-bold mt-8 text-center">

            {isNaN(result)
              ? "0"
              : result.toFixed(6)}

            {" "}

            {labels[to]}

          </div>

        </div>
       
        <ConverterSeoSection
  locale={locale}
  titleFr="Comprendre les conversions d'angles"
  titleEn="Understanding Angle Conversions"
  descriptionFr="Les angles sont utilisés en mathématiques, en physique et en navigation."
  descriptionEn="Angles are used in mathematics, physics and navigation."
  formulas={[
    "1° = 0.0174533 rad",
    "1 rad = 57.2958°",
    "1 turn = 360°",
    "1 quadrant = 90°",
  ]}
  popularConversions={[
    "90° = π/2 rad",
    "180° = π rad",
    "360° = 2π rad",
    "45° = π/4 rad",
  ]}
  faq={[
  {
    questionFr: "Quelle est la différence entre un degré et un radian ?",
    questionEn: "What is the difference between a degree and a radian?",
    answerFr: "Le degré est utilisé au quotidien alors que le radian est privilégié en mathématiques.",
    answerEn: "Degrees are commonly used while radians are preferred in mathematics."
  },
  {
    questionFr: "Combien de degrés contient un tour complet ?",
    questionEn: "How many degrees are in a full turn?",
    answerFr: "Un tour complet contient 360 degrés.",
    answerEn: "A full turn contains 360 degrees."
  }
]}
/>
        

  
        {/* BOUTON RETOUR */}

        <Link
          href={`/${locale}`}
          className="block mt-8 mb-6 text-center px-5 py-4 rounded-xl bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 font-semibold transition"
        >
          {locale === "fr"
            ? "← Retour"
            : "← Back"}
        </Link>

              
        
      </div>
      

    </main>
  )
}