"use client"

import { use, useState } from "react"
import Link from "next/link"

export default function TemperatureConverter({
  params,
}: {
  params: Promise<{ locale: string }>
}) {

  const { locale } = use(params)

  const [value, setValue] = useState("0")
  const [from, setFrom] = useState("celsius")
  const [to, setTo] = useState("fahrenheit")

  const labels: Record<string, string> = {

    celsius:
      locale === "fr"
        ? "°C"
        : "°C",

    fahrenheit:
      locale === "fr"
        ? "°F"
        : "°F",

    kelvin:
      locale === "fr"
        ? "K"
        : "K",

    rankine:
      locale === "fr"
        ? "°R"
        : "°R",

    reaumur:
      locale === "fr"
        ? "°Ré"
        : "°Re",
  }

  function toCelsius(
    value: number,
    unit: string
  ) {

    switch (unit) {

      case "celsius":
        return value

      case "fahrenheit":
        return (value - 32) * 5 / 9

      case "kelvin":
        return value - 273.15

      case "rankine":
        return (value - 491.67) * 5 / 9

      case "reaumur":
        return value * 1.25

      default:
        return value
    }
  }

  function fromCelsius(
    value: number,
    unit: string
  ) {

    switch (unit) {

      case "celsius":
        return value

      case "fahrenheit":
        return (value * 9 / 5) + 32

      case "kelvin":
        return value + 273.15

      case "rankine":
        return (value + 273.15) * 9 / 5

      case "reaumur":
        return value * 0.8

      default:
        return value
    }
  }

  function convertTemperature(
    value: number,
    from: string,
    to: string
  ) {

    const celsius = toCelsius(value, from)

    return fromCelsius(celsius, to)
  }

  const result = convertTemperature(
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
            ? "🌡️ Convertisseur de température"
            : "🌡️ Temperature Converter"}
        </h1>

        {/* DESCRIPTION */}

        <p className="text-gray-600 dark:text-gray-300 mb-10 text-center">
          {locale === "fr"
            ? "Convertissez les unités de température instantanément."
            : "Convert temperature units instantly."}
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

            <option value="celsius">
              {locale === "fr"
                ? "Celsius"
                : "Celsius"}
            </option>

            <option value="fahrenheit">
              {locale === "fr"
                ? "Fahrenheit"
                : "Fahrenheit"}
            </option>

            <option value="kelvin">
              {locale === "fr"
                ? "Kelvin"
                : "Kelvin"}
            </option>

            <option value="rankine">
              {locale === "fr"
                ? "Rankine"
                : "Rankine"}
            </option>

            <option value="reaumur">
              {locale === "fr"
                ? "Réaumur"
                : "Réaumur"}
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

            <option value="celsius">
              {locale === "fr"
                ? "Celsius"
                : "Celsius"}
            </option>

            <option value="fahrenheit">
              {locale === "fr"
                ? "Fahrenheit"
                : "Fahrenheit"}
            </option>

            <option value="kelvin">
              {locale === "fr"
                ? "Kelvin"
                : "Kelvin"}
            </option>

            <option value="rankine">
              {locale === "fr"
                ? "Rankine"
                : "Rankine"}
            </option>

            <option value="reaumur">
              {locale === "fr"
                ? "Réaumur"
                : "Réaumur"}
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

        <div className="w-full h-24 rounded-2xl border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 text-lg font-semibold">
          Publicité
        </div>

      </div>

    </main>
  )
}