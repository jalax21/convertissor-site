"use client"

import Link from "next/link"

export default function RevisionSection({
  locale,
}: {
  locale: string
}) {

  const text = {
    title:
      locale === "fr"
        ? "📘 Révisions"
        : "📘 Revision Sheets",

    subtitle:
      locale === "fr"
        ? "Fiches rapides pour apprendre facilement"
        : "Quick study sheets for easy learning",
  }

  const revisions = [
    {
      title: locale === "fr" ? "📐 Maths" : "📐 Mathematics",
      href: `/${locale}/revisions/maths`,
    },
    {
      title: locale === "fr" ? "⚡ Physique" : "⚡ Physics",
      href: `/${locale}/revisions/physique`,
    },
    {
      title: locale === "fr" ? "📚 Français" : "📚 French",
      href: `/${locale}/revisions/francais`,
    },
    {
      title: locale === "fr" ? "🏛️ Histoire" : "🏛️ History",
      href: `/${locale}/revisions/histoire`,
    },
    {
      title: locale === "fr" ? "🧬 SVT" : "🧬 Biology",
      href: `/${locale}/revisions/svt`,
    },
    {
      title: locale === "fr" ? "🇬🇧 Anglais" : "🇬🇧 English",
      href: `/${locale}/revisions/anglais`,
    },
    {
      title: locale === "fr" ? "🌍 Géographie" : "🌍 Geography",
      href: `/${locale}/revisions/geographie`,
    },
    {
      title: locale === "fr" ? "🌎 Pays du monde" : "🌎 Countries of the World",
      href: `/${locale}/revisions/pays`,
    },
  ]

  return (
    <section className="mt-12">

      <div className="mb-5">
        <h2 className="text-3xl font-bold">
          {text.title}
        </h2>

        <p className="mt-1 text-gray-500 dark:text-gray-400">
          {text.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

        {revisions.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="
              border
              border-gray-300
              dark:border-gray-700
              rounded-2xl
              p-6
              flex
              flex-col
              items-center
              justify-center
              gap-3
              hover:bg-gray-100
              dark:hover:bg-gray-800
              transition
            "
          >
            <span className="text-lg font-bold">
              {item.title}
            </span>
          </Link>
        ))}

      </div>

    </section>
  )
}