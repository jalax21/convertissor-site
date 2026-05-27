"use client"

import { use, useState } from "react"
import Link from "next/link"
import AdBanner from "@/component/AdBanner"

const units: Record<string, number> = {

  // METRIC

  watt: 1,
  kilowatt: 1000,
  megawatt: 1000000,
  gigawatt: 1000000000,

  // ELECTRICAL

  milliwatt: 0.001,
  microwatt: 0.000001,

  // MECHANICAL

  horsepower: 745.7,
  metric_horsepower: 735.499,

  // THERMAL

  calorie_per_second: 4.1868,
  kilocalorie_per_hour: 1.16222,
  btu_per_hour: 0.293071,

  // INDUSTRIAL

  ton_refrigeration: 3516.85,
}

export default function PowerConverter({
  params,
}: {
  params: Promise<{ locale: string }>
}) {

  const { locale } = use(params)

  const [value, setValue] = useState("1")
  const [from, setFrom] = useState("watt")
  const [to, setTo] = useState("kilowatt")

  const labels: Record<string, string> = {

    watt: "W",
    kilowatt: "kW",
    megawatt: "MW",
    gigawatt: "GW",

    milliwatt: "mW",
    microwatt: "µW",

    horsepower: "hp",
    metric_horsepower: "cv",

    calorie_per_second: "cal/s",
    kilocalorie_per_hour: "kcal/h",
    btu_per_hour: "BTU/h",

    ton_refrigeration: "TR",
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
    <main className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-8">

      <div className="max-w-2xl mx-auto">

        {/* TITRE */}

        <h1 className="text-5xl font-bold mb-4 text-center">
          {locale === "fr"
            ? "⚡ Convertisseur de puissance"
            : "⚡ Power Converter"}
        </h1>

        {/* DESCRIPTION */}

        <p className="text-gray-600 dark:text-gray-300 mb-10 text-center">
          {locale === "fr"
            ? "Convertissez les unités de puissance instantanément."
            : "Convert power units instantly."}
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

            <option value="microwatt">
              {locale === "fr" ? "Microwatt" : "Microwatt"}
            </option>

            <option value="milliwatt">
              {locale === "fr" ? "Milliwatt" : "Milliwatt"}
            </option>

            <option value="watt">
              {locale === "fr" ? "Watt" : "Watt"}
            </option>

            <option value="kilowatt">
              {locale === "fr" ? "Kilowatt" : "Kilowatt"}
            </option>

            <option value="megawatt">
              {locale === "fr" ? "Mégawatt" : "Megawatt"}
            </option>

            <option value="gigawatt">
              {locale === "fr" ? "Gigawatt" : "Gigawatt"}
            </option>

            <option value="horsepower">
              {locale === "fr" ? "Cheval vapeur" : "Horsepower"}
            </option>

            <option value="metric_horsepower">
              {locale === "fr" ? "Cheval métrique" : "Metric horsepower"}
            </option>

            <option value="calorie_per_second">
              {locale === "fr"
                ? "Calorie/seconde"
                : "Calorie/second"}
            </option>

            <option value="kilocalorie_per_hour">
              {locale === "fr"
                ? "Kilocalorie/heure"
                : "Kilocalorie/hour"}
            </option>

            <option value="btu_per_hour">
              {locale === "fr"
                ? "BTU/heure"
                : "BTU/hour"}
            </option>

            <option value="ton_refrigeration">
              {locale === "fr"
                ? "Tonne réfrigération"
                : "Ton refrigeration"}
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

            <option value="microwatt">
              {locale === "fr" ? "Microwatt" : "Microwatt"}
            </option>

            <option value="milliwatt">
              {locale === "fr" ? "Milliwatt" : "Milliwatt"}
            </option>

            <option value="watt">
              {locale === "fr" ? "Watt" : "Watt"}
            </option>

            <option value="kilowatt">
              {locale === "fr" ? "Kilowatt" : "Kilowatt"}
            </option>

            <option value="megawatt">
              {locale === "fr" ? "Mégawatt" : "Megawatt"}
            </option>

            <option value="gigawatt">
              {locale === "fr" ? "Gigawatt" : "Gigawatt"}
            </option>

            <option value="horsepower">
              {locale === "fr" ? "Cheval vapeur" : "Horsepower"}
            </option>

            <option value="metric_horsepower">
              {locale === "fr" ? "Cheval métrique" : "Metric horsepower"}
            </option>

            <option value="calorie_per_second">
              {locale === "fr"
                ? "Calorie/seconde"
                : "Calorie/second"}
            </option>

            <option value="kilocalorie_per_hour">
              {locale === "fr"
                ? "Kilocalorie/heure"
                : "Kilocalorie/hour"}
            </option>

            <option value="btu_per_hour">
              {locale === "fr"
                ? "BTU/heure"
                : "BTU/hour"}
            </option>

            <option value="ton_refrigeration">
              {locale === "fr"
                ? "Tonne réfrigération"
                : "Ton refrigeration"}
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

        {/* BOUTON RETOUR */}

        <Link
          href={`/${locale}`}
          className="block mt-8 mb-6 text-center px-5 py-4 rounded-xl bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 font-semibold transition"
        >
          {locale === "fr"
            ? "← Retour"
            : "← Back"}
        </Link>

        {/* BANNIERE PUB */}

        <AdBanner />

      </div>

    </main>
  )
}