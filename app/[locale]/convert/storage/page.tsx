"use client"
import ConverterSeoSection from "@/components/ConverterSeoSection"
import { use, useState } from "react"
import Link from "next/link"

const units: Record<string, number> = {

  // BASE = BYTE

  bit: 0.125,

  byte: 1,

  kilobyte: 1024,
  megabyte: 1048576,
  gigabyte: 1073741824,
  terabyte: 1099511627776,
  petabyte: 1125899906842624,

  kibibyte: 1024,
  mebibyte: 1048576,
  gibibyte: 1073741824,
  tebibyte: 1099511627776,
}

export default function StorageConverter({
  params,
}: {
  params: Promise<{ locale: string }>
}) {

  const { locale } = use(params)

  const [value, setValue] = useState("1")
  const [from, setFrom] = useState("gigabyte")
  const [to, setTo] = useState("megabyte")

  const labels: Record<string, string> = {

    bit: "bit",
    byte: "B",

    kilobyte: "KB",
    megabyte: "MB",
    gigabyte: "GB",
    terabyte: "TB",
    petabyte: "PB",

    kibibyte: "KiB",
    mebibyte: "MiB",
    gibibyte: "GiB",
    tebibyte: "TiB",
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
            ? "💾 Convertisseur de stockage"
            : "💾 Storage Converter"}
        </h1>

        {/* DESCRIPTION */}

        <p className="text-gray-600 dark:text-gray-300 mb-10 text-center">
          {locale === "fr"
            ? "Convertissez les unités de stockage instantanément."
            : "Convert storage units instantly."}
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

            <option value="bit">
              {locale === "fr" ? "Bit" : "Bit"}
            </option>

            <option value="byte">
              {locale === "fr" ? "Octet" : "Byte"}
            </option>

            <option value="kilobyte">
              {locale === "fr" ? "Kilooctet" : "Kilobyte"}
            </option>

            <option value="megabyte">
              {locale === "fr" ? "Mégaoctet" : "Megabyte"}
            </option>

            <option value="gigabyte">
              {locale === "fr" ? "Gigaoctet" : "Gigabyte"}
            </option>

            <option value="terabyte">
              {locale === "fr" ? "Téraoctet" : "Terabyte"}
            </option>

            <option value="petabyte">
              {locale === "fr" ? "Pétaoctet" : "Petabyte"}
            </option>

            <option value="kibibyte">
              {locale === "fr" ? "Kibioctet" : "Kibibyte"}
            </option>

            <option value="mebibyte">
              {locale === "fr" ? "Mébioctet" : "Mebibyte"}
            </option>

            <option value="gibibyte">
              {locale === "fr" ? "Gibioctet" : "Gibibyte"}
            </option>

            <option value="tebibyte">
              {locale === "fr" ? "Tébioctet" : "Tebibyte"}
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

            <option value="bit">
              {locale === "fr" ? "Bit" : "Bit"}
            </option>

            <option value="byte">
              {locale === "fr" ? "Octet" : "Byte"}
            </option>

            <option value="kilobyte">
              {locale === "fr" ? "Kilooctet" : "Kilobyte"}
            </option>

            <option value="megabyte">
              {locale === "fr" ? "Mégaoctet" : "Megabyte"}
            </option>

            <option value="gigabyte">
              {locale === "fr" ? "Gigaoctet" : "Gigabyte"}
            </option>

            <option value="terabyte">
              {locale === "fr" ? "Téraoctet" : "Terabyte"}
            </option>

            <option value="petabyte">
              {locale === "fr" ? "Pétaoctet" : "Petabyte"}
            </option>

            <option value="kibibyte">
              {locale === "fr" ? "Kibioctet" : "Kibibyte"}
            </option>

            <option value="mebibyte">
              {locale === "fr" ? "Mébioctet" : "Mebibyte"}
            </option>

            <option value="gibibyte">
              {locale === "fr" ? "Gibioctet" : "Gibibyte"}
            </option>

            <option value="tebibyte">
              {locale === "fr" ? "Tébioctet" : "Tebibyte"}
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
        <ConverterSeoSection
  locale={locale}
  titleFr="Comprendre les conversions de stockage"
  titleEn="Understanding Storage Conversions"
  descriptionFr="Les unités de stockage sont utilisées pour mesurer la quantité de données numériques. Elles sont omniprésentes dans les ordinateurs, les smartphones, les disques durs et les services cloud."
  descriptionEn="Storage units are used to measure digital data. They are commonly used in computers, smartphones, hard drives and cloud services."

  formulas={[
    "1 Byte = 8 bits",
    "1 KB = 1024 B",
    "1 MB = 1024 KB",
    "1 GB = 1024 MB",
  ]}

  popularConversions={[
    "1 GB = 1024 MB",
    "1 TB = 1024 GB",
    "1 MB = 1024 KB",
    "1 Byte = 8 bits",
    "500 GB = 0.488 TB",
    "2048 MB = 2 GB",
  ]}

  faq={[
    {
      questionFr: "Quelle est la différence entre un bit et un octet ?",
      questionEn: "What is the difference between a bit and a byte?",
      answerFr: "Un octet est composé de 8 bits. Les débits internet sont souvent exprimés en bits tandis que le stockage est généralement exprimé en octets.",
      answerEn: "A byte consists of 8 bits. Internet speeds are usually expressed in bits while storage is generally expressed in bytes."
    },
    {
      questionFr: "Combien de mégaoctets contient un gigaoctet ?",
      questionEn: "How many megabytes are in a gigabyte?",
      answerFr: "Un gigaoctet contient 1024 mégaoctets selon la convention binaire utilisée par la plupart des systèmes informatiques.",
      answerEn: "A gigabyte contains 1024 megabytes according to the binary convention used by most computer systems."
    }
  ]}
/>
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