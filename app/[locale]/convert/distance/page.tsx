"use client"

import { use, useState } from "react"
import Link from "next/link"

const units: Record<string, number> = {

  // METRIC

  nanometer: 0.000000001,
  micrometer: 0.000001,
  millimeter: 0.001,
  centimeter: 0.01,
  decimeter: 0.1,
  meter: 1,
  kilometer: 1000,

  // IMPERIAL

  inch: 0.0254,
  foot: 0.3048,
  yard: 0.9144,
  mile: 1609.34,

  // MARITIME

  nautical_mile: 1852,

  // ASTRONOMY

  astronomical_unit: 149597870700,
  light_year: 9460730472580800,
}

export default function DistanceConverter({
  params,
}: {
  params: Promise<{ locale: string }>
}) {

  const { locale } = use(params)

  const [value, setValue] = useState("1")
  const [from, setFrom] = useState("meter")
  const [to, setTo] = useState("kilometer")

  const labels: Record<string, string> = {

    nanometer: "nm",
    micrometer: "µm",
    millimeter: "mm",
    centimeter: "cm",
    decimeter: "dm",
    meter: "m",
    kilometer: "km",

    inch: "in",
    foot: "ft",
    yard: "yd",
    mile: "mi",

    nautical_mile:
      locale === "fr"
        ? "mille marin"
        : "nmi",

    astronomical_unit:
      locale === "fr"
        ? "UA"
        : "AU",

    light_year:
      locale === "fr"
        ? "année-lumière"
        : "ly",
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
            ? "📏 Convertisseur de distance"
            : "📏 Distance Converter"}
        </h1>

        {/* DESCRIPTION */}

        <p className="text-gray-600 dark:text-gray-300 mb-10 text-center">
          {locale === "fr"
            ? "Convertissez les unités de distance instantanément."
            : "Convert distance units instantly."}
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

            <option value="nanometer">
              {locale === "fr" ? "Nanomètre" : "Nanometer"}
            </option>

            <option value="micrometer">
              {locale === "fr" ? "Micromètre" : "Micrometer"}
            </option>

            <option value="millimeter">
              {locale === "fr" ? "Millimètre" : "Millimeter"}
            </option>

            <option value="centimeter">
              {locale === "fr" ? "Centimètre" : "Centimeter"}
            </option>

            <option value="decimeter">
              {locale === "fr" ? "Décimètre" : "Decimeter"}
            </option>

            <option value="meter">
              {locale === "fr" ? "Mètre" : "Meter"}
            </option>

            <option value="kilometer">
              {locale === "fr" ? "Kilomètre" : "Kilometer"}
            </option>

            <option value="inch">
              {locale === "fr" ? "Pouce" : "Inch"}
            </option>

            <option value="foot">
              {locale === "fr" ? "Pied" : "Foot"}
            </option>

            <option value="yard">
              {locale === "fr" ? "Yard" : "Yard"}
            </option>

            <option value="mile">
              {locale === "fr" ? "Mile" : "Mile"}
            </option>

            <option value="nautical_mile">
              {locale === "fr" ? "Mille marin" : "Nautical mile"}
            </option>

            <option value="astronomical_unit">
              {locale === "fr" ? "Unité astronomique" : "Astronomical unit"}
            </option>

            <option value="light_year">
              {locale === "fr" ? "Année-lumière" : "Light year"}
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

            <option value="nanometer">
              {locale === "fr" ? "Nanomètre" : "Nanometer"}
            </option>

            <option value="micrometer">
              {locale === "fr" ? "Micromètre" : "Micrometer"}
            </option>

            <option value="millimeter">
              {locale === "fr" ? "Millimètre" : "Millimeter"}
            </option>

            <option value="centimeter">
              {locale === "fr" ? "Centimètre" : "Centimeter"}
            </option>

            <option value="decimeter">
              {locale === "fr" ? "Décimètre" : "Decimeter"}
            </option>

            <option value="meter">
              {locale === "fr" ? "Mètre" : "Meter"}
            </option>

            <option value="kilometer">
              {locale === "fr" ? "Kilomètre" : "Kilometer"}
            </option>

            <option value="inch">
              {locale === "fr" ? "Pouce" : "Inch"}
            </option>

            <option value="foot">
              {locale === "fr" ? "Pied" : "Foot"}
            </option>

            <option value="yard">
              {locale === "fr" ? "Yard" : "Yard"}
            </option>

            <option value="mile">
              {locale === "fr" ? "Mile" : "Mile"}
            </option>

            <option value="nautical_mile">
              {locale === "fr" ? "Mille marin" : "Nautical mile"}
            </option>

            <option value="astronomical_unit">
              {locale === "fr" ? "Unité astronomique" : "Astronomical unit"}
            </option>

            <option value="light_year">
              {locale === "fr" ? "Année-lumière" : "Light year"}
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

    km to miles • miles to km • meters to feet • feet to meters •
    centimeters to inches • inches to centimeters

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