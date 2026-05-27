"use client"

import { use, useState } from "react"
import Link from "next/link"
import AdBanner from "@/component/AdBanner"

const units: Record<string, number> = {

  // METRIC

  millimeter_per_second: 0.001,
  centimeter_per_second: 0.01,
  meter_per_second: 1,
  kilometer_per_hour: 0.277778,
  kilometer_per_second: 1000,

  // IMPERIAL

  inch_per_second: 0.0254,
  foot_per_second: 0.3048,
  yard_per_second: 0.9144,
  mile_per_hour: 0.44704,

  // MARITIME

  knot: 0.514444,

  // SCIENTIFIC

  speed_of_light: 299792458,
}

export default function SpeedConverter({
  params,
}: {
  params: Promise<{ locale: string }>
}) {

  const { locale } = use(params)

  const [value, setValue] = useState("1")
  const [from, setFrom] = useState("kilometer_per_hour")
  const [to, setTo] = useState("meter_per_second")

  const labels: Record<string, string> = {

    millimeter_per_second: "mm/s",
    centimeter_per_second: "cm/s",
    meter_per_second: "m/s",

    kilometer_per_hour: "km/h",
    kilometer_per_second: "km/s",

    inch_per_second: "in/s",
    foot_per_second: "ft/s",
    yard_per_second: "yd/s",

    mile_per_hour: "mph",

    knot:
      locale === "fr"
        ? "nœud"
        : "knot",

    speed_of_light:
      locale === "fr"
        ? "vitesse lumière"
        : "c",
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
            ? "🚗 Convertisseur de vitesse"
            : "🚗 Speed Converter"}
        </h1>

        {/* DESCRIPTION */}

        <p className="text-gray-600 dark:text-gray-300 mb-10 text-center">
          {locale === "fr"
            ? "Convertissez les unités de vitesse instantanément."
            : "Convert speed units instantly."}
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

            <option value="millimeter_per_second">
              {locale === "fr"
                ? "Millimètre/seconde"
                : "Millimeter/second"}
            </option>

            <option value="centimeter_per_second">
              {locale === "fr"
                ? "Centimètre/seconde"
                : "Centimeter/second"}
            </option>

            <option value="meter_per_second">
              {locale === "fr"
                ? "Mètre/seconde"
                : "Meter/second"}
            </option>

            <option value="kilometer_per_hour">
              {locale === "fr"
                ? "Kilomètre/heure"
                : "Kilometer/hour"}
            </option>

            <option value="kilometer_per_second">
              {locale === "fr"
                ? "Kilomètre/seconde"
                : "Kilometer/second"}
            </option>

            <option value="inch_per_second">
              {locale === "fr"
                ? "Pouce/seconde"
                : "Inch/second"}
            </option>

            <option value="foot_per_second">
              {locale === "fr"
                ? "Pied/seconde"
                : "Foot/second"}
            </option>

            <option value="yard_per_second">
              {locale === "fr"
                ? "Yard/seconde"
                : "Yard/second"}
            </option>

            <option value="mile_per_hour">
              {locale === "fr"
                ? "Mile/heure"
                : "Mile/hour"}
            </option>

            <option value="knot">
              {locale === "fr"
                ? "Nœud"
                : "Knot"}
            </option>

            <option value="speed_of_light">
              {locale === "fr"
                ? "Vitesse de la lumière"
                : "Speed of light"}
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

            <option value="millimeter_per_second">
              {locale === "fr"
                ? "Millimètre/seconde"
                : "Millimeter/second"}
            </option>

            <option value="centimeter_per_second">
              {locale === "fr"
                ? "Centimètre/seconde"
                : "Centimeter/second"}
            </option>

            <option value="meter_per_second">
              {locale === "fr"
                ? "Mètre/seconde"
                : "Meter/second"}
            </option>

            <option value="kilometer_per_hour">
              {locale === "fr"
                ? "Kilomètre/heure"
                : "Kilometer/hour"}
            </option>

            <option value="kilometer_per_second">
              {locale === "fr"
                ? "Kilomètre/seconde"
                : "Kilometer/second"}
            </option>

            <option value="inch_per_second">
              {locale === "fr"
                ? "Pouce/seconde"
                : "Inch/second"}
            </option>

            <option value="foot_per_second">
              {locale === "fr"
                ? "Pied/seconde"
                : "Foot/second"}
            </option>

            <option value="yard_per_second">
              {locale === "fr"
                ? "Yard/seconde"
                : "Yard/second"}
            </option>

            <option value="mile_per_hour">
              {locale === "fr"
                ? "Mile/heure"
                : "Mile/hour"}
            </option>

            <option value="knot">
              {locale === "fr"
                ? "Nœud"
                : "Knot"}
            </option>

            <option value="speed_of_light">
              {locale === "fr"
                ? "Vitesse de la lumière"
                : "Speed of light"}
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