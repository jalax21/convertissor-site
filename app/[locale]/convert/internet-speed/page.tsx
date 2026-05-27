"use client"

import { use, useState } from "react"
import Link from "next/link"

const units: Record<string, number> = {

  // BASE = bit per second

  bit_per_second: 1,

  kilobit_per_second: 1000,
  megabit_per_second: 1000000,
  gigabit_per_second: 1000000000,
  terabit_per_second: 1000000000000,

  byte_per_second: 8,

  kilobyte_per_second: 8000,
  megabyte_per_second: 8000000,
  gigabyte_per_second: 8000000000,
}

export default function InternetSpeedConverter({
  params,
}: {
  params: Promise<{ locale: string }>
}) {

  const { locale } = use(params)

  const [value, setValue] = useState("100")
  const [from, setFrom] = useState("megabit_per_second")
  const [to, setTo] = useState("megabyte_per_second")

  const labels: Record<string, string> = {

    bit_per_second: "bps",

    kilobit_per_second: "kbps",
    megabit_per_second: "Mbps",
    gigabit_per_second: "Gbps",
    terabit_per_second: "Tbps",

    byte_per_second: "B/s",

    kilobyte_per_second: "KB/s",
    megabyte_per_second: "MB/s",
    gigabyte_per_second: "GB/s",
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
            ? "🌐 Convertisseur débit internet"
            : "🌐 Internet Speed Converter"}
        </h1>

        {/* DESCRIPTION */}

        <p className="text-gray-600 dark:text-gray-300 mb-10 text-center">
          {locale === "fr"
            ? "Convertissez les débits internet instantanément."
            : "Convert internet speeds instantly."}
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

            <option value="bit_per_second">
              {locale === "fr"
                ? "Bit/seconde"
                : "Bit/second"}
            </option>

            <option value="kilobit_per_second">
              {locale === "fr"
                ? "Kilobit/seconde"
                : "Kilobit/second"}
            </option>

            <option value="megabit_per_second">
              {locale === "fr"
                ? "Mégabit/seconde"
                : "Megabit/second"}
            </option>

            <option value="gigabit_per_second">
              {locale === "fr"
                ? "Gigabit/seconde"
                : "Gigabit/second"}
            </option>

            <option value="terabit_per_second">
              {locale === "fr"
                ? "Térabit/seconde"
                : "Terabit/second"}
            </option>

            <option value="byte_per_second">
              {locale === "fr"
                ? "Octet/seconde"
                : "Byte/second"}
            </option>

            <option value="kilobyte_per_second">
              {locale === "fr"
                ? "Kilooctet/seconde"
                : "Kilobyte/second"}
            </option>

            <option value="megabyte_per_second">
              {locale === "fr"
                ? "Mégaoctet/seconde"
                : "Megabyte/second"}
            </option>

            <option value="gigabyte_per_second">
              {locale === "fr"
                ? "Gigaoctet/seconde"
                : "Gigabyte/second"}
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

            <option value="bit_per_second">
              {locale === "fr"
                ? "Bit/seconde"
                : "Bit/second"}
            </option>

            <option value="kilobit_per_second">
              {locale === "fr"
                ? "Kilobit/seconde"
                : "Kilobit/second"}
            </option>

            <option value="megabit_per_second">
              {locale === "fr"
                ? "Mégabit/seconde"
                : "Megabit/second"}
            </option>

            <option value="gigabit_per_second">
              {locale === "fr"
                ? "Gigabit/seconde"
                : "Gigabit/second"}
            </option>

            <option value="terabit_per_second">
              {locale === "fr"
                ? "Térabit/seconde"
                : "Terabit/second"}
            </option>

            <option value="byte_per_second">
              {locale === "fr"
                ? "Octet/seconde"
                : "Byte/second"}
            </option>

            <option value="kilobyte_per_second">
              {locale === "fr"
                ? "Kilooctet/seconde"
                : "Kilobyte/second"}
            </option>

            <option value="megabyte_per_second">
              {locale === "fr"
                ? "Mégaoctet/seconde"
                : "Megabyte/second"}
            </option>

            <option value="gigabyte_per_second">
              {locale === "fr"
                ? "Gigaoctet/seconde"
                : "Gigabyte/second"}
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