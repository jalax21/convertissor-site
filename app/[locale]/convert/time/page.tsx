"use client"

import { use, useState } from "react"
import Link from "next/link"
import AdBanner from "@/components/AdBanner"

const units: Record<string, number> = {

  // BASE = SECOND

  nanosecond: 0.000000001,
  microsecond: 0.000001,
  millisecond: 0.001,

  second: 1,

  minute: 60,
  hour: 3600,
  day: 86400,
  week: 604800,

  month: 2629800,
  year: 31557600,

  decade: 315576000,
  century: 3155760000,
}

export default function TimeConverter({
  params,
}: {
  params: Promise<{ locale: string }>
}) {

  const { locale } = use(params)

  const [value, setValue] = useState("1")
  const [from, setFrom] = useState("hour")
  const [to, setTo] = useState("minute")

  const labels: Record<string, string> = {

    nanosecond: "ns",
    microsecond: "µs",
    millisecond: "ms",

    second:
      locale === "fr"
        ? "s"
        : "sec",

    minute:
      locale === "fr"
        ? "min"
        : "min",

    hour:
      locale === "fr"
        ? "h"
        : "hr",

    day:
      locale === "fr"
        ? "jour"
        : "day",

    week:
      locale === "fr"
        ? "semaine"
        : "week",

    month:
      locale === "fr"
        ? "mois"
        : "month",

    year:
      locale === "fr"
        ? "an"
        : "year",

    decade:
      locale === "fr"
        ? "décennie"
        : "decade",

    century:
      locale === "fr"
        ? "siècle"
        : "century",
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
            ? "⏱️ Convertisseur de temps"
            : "⏱️ Time Converter"}
        </h1>

        {/* DESCRIPTION */}

        <p className="text-gray-600 dark:text-gray-300 mb-10 text-center">
          {locale === "fr"
            ? "Convertissez les unités de temps instantanément."
            : "Convert time units instantly."}
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

            <option value="nanosecond">
              {locale === "fr" ? "Nanoseconde" : "Nanosecond"}
            </option>

            <option value="microsecond">
              {locale === "fr" ? "Microseconde" : "Microsecond"}
            </option>

            <option value="millisecond">
              {locale === "fr" ? "Milliseconde" : "Millisecond"}
            </option>

            <option value="second">
              {locale === "fr" ? "Seconde" : "Second"}
            </option>

            <option value="minute">
              {locale === "fr" ? "Minute" : "Minute"}
            </option>

            <option value="hour">
              {locale === "fr" ? "Heure" : "Hour"}
            </option>

            <option value="day">
              {locale === "fr" ? "Jour" : "Day"}
            </option>

            <option value="week">
              {locale === "fr" ? "Semaine" : "Week"}
            </option>

            <option value="month">
              {locale === "fr" ? "Mois" : "Month"}
            </option>

            <option value="year">
              {locale === "fr" ? "Année" : "Year"}
            </option>

            <option value="decade">
              {locale === "fr" ? "Décennie" : "Decade"}
            </option>

            <option value="century">
              {locale === "fr" ? "Siècle" : "Century"}
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

            <option value="nanosecond">
              {locale === "fr" ? "Nanoseconde" : "Nanosecond"}
            </option>

            <option value="microsecond">
              {locale === "fr" ? "Microseconde" : "Microsecond"}
            </option>

            <option value="millisecond">
              {locale === "fr" ? "Milliseconde" : "Millisecond"}
            </option>

            <option value="second">
              {locale === "fr" ? "Seconde" : "Second"}
            </option>

            <option value="minute">
              {locale === "fr" ? "Minute" : "Minute"}
            </option>

            <option value="hour">
              {locale === "fr" ? "Heure" : "Hour"}
            </option>

            <option value="day">
              {locale === "fr" ? "Jour" : "Day"}
            </option>

            <option value="week">
              {locale === "fr" ? "Semaine" : "Week"}
            </option>

            <option value="month">
              {locale === "fr" ? "Mois" : "Month"}
            </option>

            <option value="year">
              {locale === "fr" ? "Année" : "Year"}
            </option>

            <option value="decade">
              {locale === "fr" ? "Décennie" : "Decade"}
            </option>

            <option value="century">
              {locale === "fr" ? "Siècle" : "Century"}
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
    seconds to minutes • minutes to hours • hours to days •
    days to weeks • milliseconds to seconds •
    years to days
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