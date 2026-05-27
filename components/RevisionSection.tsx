"use client"

import Link from "next/link"
export default function RevisionSection({
  locale,
}: {
  locale: string
}) {

const revisions = [
  {
    title: "Maths",
    emoji: "📐",
    href: `/${locale}/revisions/maths`
  },
  {
    title: "Physique",
    emoji: "⚡",
    href: "/revisions/physique",
  },
  {
    title: "Français",
    emoji: "📚",
    href: "/revisions/francais",
  },
  {
    title: "Histoire",
    emoji: "🏛️",
    href: "/revisions/histoire",
  },
  {
    title: "SVT",
    emoji: "🧬",
    href: "/revisions/svt",
  },
  {
    title: "Anglais",
    emoji: "🇬🇧",
    href: "/revisions/anglais",
  },
]


  return (
    <section className="mt-12">
      {/* TITRE */}
      <div className="mb-5">
        <h2 className="text-3xl font-bold">
          📘 Révisions
        </h2>

        <p className="mt-1 text-gray-500 dark:text-gray-400">
          Fiches rapides pour apprendre facilement
        </p>
      </div>

      {/* GRID */}
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
            <span className="text-4xl">
              {item.emoji}
            </span>

            <span className="text-lg font-bold">
              {item.title}
            </span>
          </Link>
        ))}

      </div>
    </section>
  )
}