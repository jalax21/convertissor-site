"use client"

import { use, useState } from "react"
import Link from "next/link"

const units: Record<string, number> = {

  // METRIC

  microgram: 0.000001,
  milligram: 0.001,
  centigram: 0.01,
  decigram: 0.1,
  gram: 1,
  decagram: 10,
  hectogram: 100,
  kilogram: 1000,
  tonne: 1000000,

  // IMPERIAL

  ounce: 28.3495,
  pound: 453.592,
  stone: 6350.29,
  short_ton: 907184.74,
  long_ton: 1016046.91,

  // JEWELRY

  carat: 0.2,
}

export default function WeightConverter({
  params,
}: {
  params: Promise<{ locale: string }>
}) {

  const { locale } = use(params)

  const [value, setValue] = useState("1")
  const [from, setFrom] = useState("kilogram")
  const [to, setTo] = useState("gram")

  const labels: Record<string, string> = {

    microgram: "µg",
    milligram: "mg",
    centigram: "cg",
    decigram: "dg",
    gram: "g",
    decagram: "dag",
    hectogram: "hg",
    kilogram: "kg",
    tonne: "t",

    ounce: "oz",
    pound: "lb",
    stone: "st",

    short_ton:
      locale === "fr"
        ? "tonne US"
        : "short ton",

    long_ton:
      locale === "fr"
        ? "tonne UK"
        : "long ton",

    carat: "ct",
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

      <div className="max-w-2xl mx-auto">

        {/* TITRE */}

        <h1 className="text-5xl font-bold mb-4 text-center">
          {locale === "fr"
            ? "⚖️ Convertisseur de poids"
            : "⚖️ Weight Converter"}
        </h1>

        {/* DESCRIPTION */}

        <p className="text-gray-600 dark:text-gray-300 mb-10 text-center">
          {locale === "fr"
            ? "Convertissez les unités de poids instantanément."
            : "Convert weight units instantly."}
        </p>

        {/* CARTE */}

        <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl p-6 shadow-sm">

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

            <option value="microgram">
              {locale === "fr" ? "Microgramme" : "Microgram"}
            </option>

            <option value="milligram">
              {locale === "fr" ? "Milligramme" : "Milligram"}
            </option>

            <option value="centigram">
              {locale === "fr" ? "Centigramme" : "Centigram"}
            </option>

            <option value="decigram">
              {locale === "fr" ? "Décigramme" : "Decigram"}
            </option>

            <option value="gram">
              {locale === "fr" ? "Gramme" : "Gram"}
            </option>

            <option value="decagram">
              {locale === "fr" ? "Décagramme" : "Decagram"}
            </option>

            <option value="hectogram">
              {locale === "fr" ? "Hectogramme" : "Hectogram"}
            </option>

            <option value="kilogram">
              {locale === "fr" ? "Kilogramme" : "Kilogram"}
            </option>

            <option value="tonne">
              {locale === "fr" ? "Tonne" : "Tonne"}
            </option>

            <option value="ounce">
              {locale === "fr" ? "Once" : "Ounce"}
            </option>

            <option value="pound">
              {locale === "fr" ? "Livre" : "Pound"}
            </option>

            <option value="stone">
              {locale === "fr" ? "Stone" : "Stone"}
            </option>

            <option value="short_ton">
              {locale === "fr" ? "Tonne US" : "Short ton"}
            </option>

            <option value="long_ton">
              {locale === "fr" ? "Tonne UK" : "Long ton"}
            </option>

            <option value="carat">
              {locale === "fr" ? "Carat" : "Carat"}
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

            <option value="microgram">
              {locale === "fr" ? "Microgramme" : "Microgram"}
            </option>

            <option value="milligram">
              {locale === "fr" ? "Milligramme" : "Milligram"}
            </option>

            <option value="centigram">
              {locale === "fr" ? "Centigramme" : "Centigram"}
            </option>

            <option value="decigram">
              {locale === "fr" ? "Décigramme" : "Decigram"}
            </option>

            <option value="gram">
              {locale === "fr" ? "Gramme" : "Gram"}
            </option>

            <option value="decagram">
              {locale === "fr" ? "Décagramme" : "Decagram"}
            </option>

            <option value="hectogram">
              {locale === "fr" ? "Hectogramme" : "Hectogram"}
            </option>

            <option value="kilogram">
              {locale === "fr" ? "Kilogramme" : "Kilogram"}
            </option>

            <option value="tonne">
              {locale === "fr" ? "Tonne" : "Tonne"}
            </option>

            <option value="ounce">
              {locale === "fr" ? "Once" : "Ounce"}
            </option>

            <option value="pound">
              {locale === "fr" ? "Livre" : "Pound"}
            </option>

            <option value="stone">
              {locale === "fr" ? "Stone" : "Stone"}
            </option>

            <option value="short_ton">
              {locale === "fr" ? "Tonne US" : "Short ton"}
            </option>

            <option value="long_ton">
              {locale === "fr" ? "Tonne UK" : "Long ton"}
            </option>

            <option value="carat">
              {locale === "fr" ? "Carat" : "Carat"}
            </option>

          </select>

          {/* RESULTAT */}

          <div className="text-4xl font-bold mt-8 text-center">

            {isNaN(result)
              ? "0"
              : result.toFixed(2)}

            {" "}

            {labels[to]}

          </div>

        </div>
        <div className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">

  {locale === "fr"
    ? "Conversions populaires :"
    : "Popular conversions:"}

  <div className="mt-2">
    kg to lbs • lbs to kg • grams to ounces • ounces to grams •
    tons to kilograms • kilograms to tons
  </div>

</div>

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