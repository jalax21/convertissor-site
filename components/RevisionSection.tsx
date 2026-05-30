"use client"

import Link from "next/link"
export default function RevisionSection({locale,}: 
  
{
  locale: string
}) {

const revisions = [
  {
    title: "📐 Maths",
    href: `/${locale}/revisions/maths`,
  },
  {
    title: "⚡ Physique",
    href: `/${locale}/revisions/physique`,
  },
  {
    title: "📚 Français",
    href: `/${locale}/revisions/francais`,
  },
  {
    title: "🏛️ Histoire",
    href: `/${locale}/revisions/histoire`,
  },
  {
    title: "🧬SVT",
    href: `/${locale}/revisions/svt`,
  },
  {
    title: "🇬🇧 Anglais",
    href: `/${locale}/revisions/anglais`,
  },
  {
  title: "🌍 Géographie",
  href: `/${locale}/revisions/geographie`,
},
{
  title: "🌎 Pays du monde",
  href: `/${locale}/revisions/pays`,
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

            <span className="text-lg font-bold">
              {item.title}
            </span>
          </Link>
        ))}

      </div>
    </section>
  )
}