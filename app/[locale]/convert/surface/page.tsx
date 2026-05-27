"use client"

import { use, useState } from "react"
import Link from "next/link"
import AdBanner from "@/components/AdBanner"

const units: Record<string, number> = {

  // METRIC

  square_millimeter: 0.000001,
  square_centimeter: 0.0001,
  square_decimeter: 0.01,
  square_meter: 1,
  square_kilometer: 1000000,

  // IMPERIAL

  square_inch: 0.00064516,
  square_foot: 0.092903,
  square_yard: 0.836127,
  acre: 4046.86,
  square_mile: 2589988.11,

  // OTHER

  hectare: 10000,
}

export default function SurfaceConverter({
  params,
}: {
  params: Promise<{ locale: string }>
}) {

  const { locale } = use(params)

  const [value, setValue] = useState("1")
  const [from, setFrom] = useState("square_meter")
  const [to, setTo] = useState("square_kilometer")

  const labels: Record<string, string> = {

    square_millimeter: "mm²",
    square_centimeter: "cm²",
    square_decimeter: "dm²",
    square_meter: "m²",
    square_kilometer: "km²",

    square_inch: "in²",
    square_foot: "ft²",
    square_yard: "yd²",

    acre:
      locale === "fr"
        ? "acre"
        : "acre",

    square_mile: "mi²",

    hectare:
      locale === "fr"
        ? "ha"
        : "ha",
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
            ? "◼️ Convertisseur de surface"
            : "◼️ Surface Converter"}
        </h1>

        {/* DESCRIPTION */}

        <p className="text-gray-600 dark:text-gray-300 mb-10 text-center">
          {locale === "fr"
            ? "Convertissez les unités de surface instantanément."
            : "Convert surface units instantly."}
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

            <option value="square_millimeter">
              {locale === "fr"
                ? "Millimètre carré"
                : "Square millimeter"}
            </option>

            <option value="square_centimeter">
              {locale === "fr"
                ? "Centimètre carré"
                : "Square centimeter"}
            </option>

            <option value="square_decimeter">
              {locale === "fr"
                ? "Décimètre carré"
                : "Square decimeter"}
            </option>

            <option value="square_meter">
              {locale === "fr"
                ? "Mètre carré"
                : "Square meter"}
            </option>

            <option value="square_kilometer">
              {locale === "fr"
                ? "Kilomètre carré"
                : "Square kilometer"}
            </option>

            <option value="square_inch">
              {locale === "fr"
                ? "Pouce carré"
                : "Square inch"}
            </option>

            <option value="square_foot">
              {locale === "fr"
                ? "Pied carré"
                : "Square foot"}
            </option>

            <option value="square_yard">
              {locale === "fr"
                ? "Yard carré"
                : "Square yard"}
            </option>

            <option value="acre">
              {locale === "fr"
                ? "Acre"
                : "Acre"}
            </option>

            <option value="square_mile">
              {locale === "fr"
                ? "Mile carré"
                : "Square mile"}
            </option>

            <option value="hectare">
              {locale === "fr"
                ? "Hectare"
                : "Hectare"}
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

            <option value="square_millimeter">
              {locale === "fr"
                ? "Millimètre carré"
                : "Square millimeter"}
            </option>

            <option value="square_centimeter">
              {locale === "fr"
                ? "Centimètre carré"
                : "Square centimeter"}
            </option>

            <option value="square_decimeter">
              {locale === "fr"
                ? "Décimètre carré"
                : "Square decimeter"}
            </option>

            <option value="square_meter">
              {locale === "fr"
                ? "Mètre carré"
                : "Square meter"}
            </option>

            <option value="square_kilometer">
              {locale === "fr"
                ? "Kilomètre carré"
                : "Square kilometer"}
            </option>

            <option value="square_inch">
              {locale === "fr"
                ? "Pouce carré"
                : "Square inch"}
            </option>

            <option value="square_foot">
              {locale === "fr"
                ? "Pied carré"
                : "Square foot"}
            </option>

            <option value="square_yard">
              {locale === "fr"
                ? "Yard carré"
                : "Square yard"}
            </option>

            <option value="acre">
              {locale === "fr"
                ? "Acre"
                : "Acre"}
            </option>

            <option value="square_mile">
              {locale === "fr"
                ? "Mile carré"
                : "Square mile"}
            </option>

            <option value="hectare">
              {locale === "fr"
                ? "Hectare"
                : "Hectare"}
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