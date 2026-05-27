"use client"

import { use, useState } from "react"
import Link from "next/link"
import AdBanner from "@/components/AdBanner"

const units: Record<string, number> = {

  // METRIC

  cubic_millimeter: 0.001,
  cubic_centimeter: 1,
  milliliter: 1,
  centiliter: 10,
  deciliter: 100,
  liter: 1000,
  cubic_meter: 1000000,
  cubic_kilometer: 1000000000000000,

  // US

  teaspoon_us: 4.92892,
  tablespoon_us: 14.7868,
  fluid_ounce_us: 29.5735,
  cup_us: 236.588,
  pint_us: 473.176,
  quart_us: 946.353,
  gallon_us: 3785.41,

  // UK

  teaspoon_uk: 5.91939,
  tablespoon_uk: 17.7582,
  fluid_ounce_uk: 28.4131,
  pint_uk: 568.261,
  quart_uk: 1136.52,
  gallon_uk: 4546.09,

  // OTHER

  cubic_inch: 16.3871,
  cubic_foot: 28316.8,
  cubic_yard: 764555,
  barrel_oil: 158987,
}

export default function VolumeConverter({
  params,
}: {
  params: Promise<{ locale: string }>
}) {

  const { locale } = use(params)

  const [value, setValue] = useState("1")
  const [from, setFrom] = useState("liter")
  const [to, setTo] = useState("milliliter")

  const labels: Record<string, string> = {

    cubic_millimeter: "mm³",
    cubic_centimeter: "cm³",
    milliliter: "ml",
    centiliter: "cl",
    deciliter: "dl",
    liter: "L",
    cubic_meter: "m³",
    cubic_kilometer: "km³",

    teaspoon_us: "tsp US",
    tablespoon_us: "tbsp US",
    fluid_ounce_us: "fl oz US",
    cup_us: "cup US",
    pint_us: "pt US",
    quart_us: "qt US",
    gallon_us: "gal US",

    teaspoon_uk: "tsp UK",
    tablespoon_uk: "tbsp UK",
    fluid_ounce_uk: "fl oz UK",
    pint_uk: "pt UK",
    quart_uk: "qt UK",
    gallon_uk: "gal UK",

    cubic_inch: "in³",
    cubic_foot: "ft³",
    cubic_yard: "yd³",

    barrel_oil: "bbl",
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
            ? "🧊 Convertisseur de volume"
            : "🧊 Volume Converter"}
        </h1>

        {/* DESCRIPTION */}

        <p className="text-gray-600 dark:text-gray-300 mb-10 text-center">
          {locale === "fr"
            ? "Convertissez les unités de volume instantanément."
            : "Convert volume units instantly."}
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

            <option value="cubic_millimeter">
              {locale === "fr" ? "Millimètre cube" : "Cubic millimeter"}
            </option>

            <option value="cubic_centimeter">
              {locale === "fr" ? "Centimètre cube" : "Cubic centimeter"}
            </option>

            <option value="milliliter">
              {locale === "fr" ? "Millilitre" : "Milliliter"}
            </option>

            <option value="centiliter">
              {locale === "fr" ? "Centilitre" : "Centiliter"}
            </option>

            <option value="deciliter">
              {locale === "fr" ? "Décilitre" : "Deciliter"}
            </option>

            <option value="liter">
              {locale === "fr" ? "Litre" : "Liter"}
            </option>

            <option value="cubic_meter">
              {locale === "fr" ? "Mètre cube" : "Cubic meter"}
            </option>

            <option value="cubic_kilometer">
              {locale === "fr" ? "Kilomètre cube" : "Cubic kilometer"}
            </option>

            <option value="teaspoon_us">
              {locale === "fr" ? "Cuillère à café US" : "US Teaspoon"}
            </option>

            <option value="tablespoon_us">
              {locale === "fr" ? "Cuillère à soupe US" : "US Tablespoon"}
            </option>

            <option value="fluid_ounce_us">
              {locale === "fr" ? "Once liquide US" : "US Fluid ounce"}
            </option>

            <option value="cup_us">
              {locale === "fr" ? "Tasse US" : "US Cup"}
            </option>

            <option value="pint_us">
              {locale === "fr" ? "Pinte US" : "US Pint"}
            </option>

            <option value="quart_us">
              {locale === "fr" ? "Quart US" : "US Quart"}
            </option>

            <option value="gallon_us">
              {locale === "fr" ? "Gallon US" : "US Gallon"}
            </option>

            <option value="teaspoon_uk">
              {locale === "fr" ? "Cuillère à café UK" : "UK Teaspoon"}
            </option>

            <option value="tablespoon_uk">
              {locale === "fr" ? "Cuillère à soupe UK" : "UK Tablespoon"}
            </option>

            <option value="fluid_ounce_uk">
              {locale === "fr" ? "Once liquide UK" : "UK Fluid ounce"}
            </option>

            <option value="pint_uk">
              {locale === "fr" ? "Pinte UK" : "UK Pint"}
            </option>

            <option value="quart_uk">
              {locale === "fr" ? "Quart UK" : "UK Quart"}
            </option>

            <option value="gallon_uk">
              {locale === "fr" ? "Gallon UK" : "UK Gallon"}
            </option>

            <option value="cubic_inch">
              {locale === "fr" ? "Pouce cube" : "Cubic inch"}
            </option>

            <option value="cubic_foot">
              {locale === "fr" ? "Pied cube" : "Cubic foot"}
            </option>

            <option value="cubic_yard">
              {locale === "fr" ? "Yard cube" : "Cubic yard"}
            </option>

            <option value="barrel_oil">
              {locale === "fr" ? "Baril pétrole" : "Oil barrel"}
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

            <option value="cubic_millimeter">
              {locale === "fr" ? "Millimètre cube" : "Cubic millimeter"}
            </option>

            <option value="cubic_centimeter">
              {locale === "fr" ? "Centimètre cube" : "Cubic centimeter"}
            </option>

            <option value="milliliter">
              {locale === "fr" ? "Millilitre" : "Milliliter"}
            </option>

            <option value="centiliter">
              {locale === "fr" ? "Centilitre" : "Centiliter"}
            </option>

            <option value="deciliter">
              {locale === "fr" ? "Décilitre" : "Deciliter"}
            </option>

            <option value="liter">
              {locale === "fr" ? "Litre" : "Liter"}
            </option>

            <option value="cubic_meter">
              {locale === "fr" ? "Mètre cube" : "Cubic meter"}
            </option>

            <option value="cubic_kilometer">
              {locale === "fr" ? "Kilomètre cube" : "Cubic kilometer"}
            </option>

            <option value="teaspoon_us">
              {locale === "fr" ? "Cuillère à café US" : "US Teaspoon"}
            </option>

            <option value="tablespoon_us">
              {locale === "fr" ? "Cuillère à soupe US" : "US Tablespoon"}
            </option>

            <option value="fluid_ounce_us">
              {locale === "fr" ? "Once liquide US" : "US Fluid ounce"}
            </option>

            <option value="cup_us">
              {locale === "fr" ? "Tasse US" : "US Cup"}
            </option>

            <option value="pint_us">
              {locale === "fr" ? "Pinte US" : "US Pint"}
            </option>

            <option value="quart_us">
              {locale === "fr" ? "Quart US" : "US Quart"}
            </option>

            <option value="gallon_us">
              {locale === "fr" ? "Gallon US" : "US Gallon"}
            </option>

            <option value="teaspoon_uk">
              {locale === "fr" ? "Cuillère à café UK" : "UK Teaspoon"}
            </option>

            <option value="tablespoon_uk">
              {locale === "fr" ? "Cuillère à soupe UK" : "UK Tablespoon"}
            </option>

            <option value="fluid_ounce_uk">
              {locale === "fr" ? "Once liquide UK" : "UK Fluid ounce"}
            </option>

            <option value="pint_uk">
              {locale === "fr" ? "Pinte UK" : "UK Pint"}
            </option>

            <option value="quart_uk">
              {locale === "fr" ? "Quart UK" : "UK Quart"}
            </option>

            <option value="gallon_uk">
              {locale === "fr" ? "Gallon UK" : "UK Gallon"}
            </option>

            <option value="cubic_inch">
              {locale === "fr" ? "Pouce cube" : "Cubic inch"}
            </option>

            <option value="cubic_foot">
              {locale === "fr" ? "Pied cube" : "Cubic foot"}
            </option>

            <option value="cubic_yard">
              {locale === "fr" ? "Yard cube" : "Cubic yard"}
            </option>

            <option value="barrel_oil">
              {locale === "fr" ? "Baril pétrole" : "Oil barrel"}
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