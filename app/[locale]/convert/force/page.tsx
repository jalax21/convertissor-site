"use client"

import { use, useState } from "react"
import Link from "next/link"
import AdBanner from "@/components/AdBanner"

const units: Record<string, number> = {

  // METRIC

  newton: 1,
  kilonewton: 1000,
  meganewton: 1000000,

  // CGS

  dyne: 0.00001,

  // GRAVITY

  kilogram_force: 9.80665,
  gram_force: 0.00980665,
  tonne_force: 9806.65,

  // IMPERIAL

  pound_force: 4.44822,
  ounce_force: 0.278014,
  kip_force: 4448.22,

  // OTHER

  poundal: 0.138255,
}

export default function ForceConverter({
  params,
}: {
  params: Promise<{ locale: string }>
}) {

  const { locale } = use(params)

  const [value, setValue] = useState("1")
  const [from, setFrom] = useState("newton")
  const [to, setTo] = useState("kilonewton")

  const labels: Record<string, string> = {

    newton: "N",
    kilonewton: "kN",
    meganewton: "MN",

    dyne: "dyn",

    kilogram_force: "kgf",
    gram_force: "gf",
    tonne_force: "tf",

    pound_force: "lbf",
    ounce_force: "ozf",
    kip_force: "kip",

    poundal: "pdl",
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
            ? "💪 Convertisseur de force"
            : "💪 Force Converter"}
        </h1>

        {/* DESCRIPTION */}

        <p className="text-gray-600 dark:text-gray-300 mb-10 text-center">
          {locale === "fr"
            ? "Convertissez les unités de force instantanément."
            : "Convert force units instantly."}
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

            <option value="newton">
              {locale === "fr" ? "Newton" : "Newton"}
            </option>

            <option value="kilonewton">
              {locale === "fr" ? "Kilonewton" : "Kilonewton"}
            </option>

            <option value="meganewton">
              {locale === "fr" ? "MéganeWton" : "Meganewton"}
            </option>

            <option value="dyne">
              {locale === "fr" ? "Dyne" : "Dyne"}
            </option>

            <option value="kilogram_force">
              {locale === "fr"
                ? "Kilogramme-force"
                : "Kilogram-force"}
            </option>

            <option value="gram_force">
              {locale === "fr"
                ? "Gramme-force"
                : "Gram-force"}
            </option>

            <option value="tonne_force">
              {locale === "fr"
                ? "Tonne-force"
                : "Ton-force"}
            </option>

            <option value="pound_force">
              {locale === "fr"
                ? "Livre-force"
                : "Pound-force"}
            </option>

            <option value="ounce_force">
              {locale === "fr"
                ? "Once-force"
                : "Ounce-force"}
            </option>

            <option value="kip_force">
              {locale === "fr"
                ? "Kip-force"
                : "Kip-force"}
            </option>

            <option value="poundal">
              {locale === "fr"
                ? "Poundal"
                : "Poundal"}
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

            <option value="newton">
              {locale === "fr" ? "Newton" : "Newton"}
            </option>

            <option value="kilonewton">
              {locale === "fr" ? "Kilonewton" : "Kilonewton"}
            </option>

            <option value="meganewton">
              {locale === "fr" ? "MéganeWton" : "Meganewton"}
            </option>

            <option value="dyne">
              {locale === "fr" ? "Dyne" : "Dyne"}
            </option>

            <option value="kilogram_force">
              {locale === "fr"
                ? "Kilogramme-force"
                : "Kilogram-force"}
            </option>

            <option value="gram_force">
              {locale === "fr"
                ? "Gramme-force"
                : "Gram-force"}
            </option>

            <option value="tonne_force">
              {locale === "fr"
                ? "Tonne-force"
                : "Ton-force"}
            </option>

            <option value="pound_force">
              {locale === "fr"
                ? "Livre-force"
                : "Pound-force"}
            </option>

            <option value="ounce_force">
              {locale === "fr"
                ? "Once-force"
                : "Ounce-force"}
            </option>

            <option value="kip_force">
              {locale === "fr"
                ? "Kip-force"
                : "Kip-force"}
            </option>

            <option value="poundal">
              {locale === "fr"
                ? "Poundal"
                : "Poundal"}
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
    newtons to pounds-force • pounds-force to newtons •
    kilonewtons to newtons • newtons to kilonewtons •
    dynes to newtons
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