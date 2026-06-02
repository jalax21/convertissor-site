import { MetadataRoute } from "next"

import { mathsFiches } from "@/data/revisions/maths"
import { francaisFiches } from "@/data/revisions/francais"
import { histoireFiches } from "@/data/revisions/histoire"
import { svtFiches } from "@/data/revisions/svt"
import { paysFiches } from "@/data/revisions/pays"
import { geographieFiches } from "@/data/revisions/geographie"
import { anglaisFiches } from "@/data/revisions/anglais"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://quickunits.fr"
  const now = new Date()

  const revisionPages = [
    ...mathsFiches.map((fiche) => ({
      url: `${baseUrl}/fr/revisions/maths/${fiche.slug}`,
      lastModified: now,
    })),

    ...francaisFiches.map((fiche) => ({
      url: `${baseUrl}/fr/revisions/francais/${fiche.slug}`,
      lastModified: now,
    })),

    ...histoireFiches.map((fiche) => ({
      url: `${baseUrl}/fr/revisions/histoire/${fiche.slug}`,
      lastModified: now,
    })),

    ...svtFiches.map((fiche) => ({
      url: `${baseUrl}/fr/revisions/svt/${fiche.slug}`,
      lastModified: now,
    })),

    ...paysFiches.map((fiche) => ({
      url: `${baseUrl}/fr/revisions/pays/${fiche.slug}`,
      lastModified: now,
    })),

    ...geographieFiches.map((fiche) => ({
      url: `${baseUrl}/fr/revisions/geographie/${fiche.slug}`,
      lastModified: now,
    })),

     ...anglaisFiches.map((fiche) => ({
    url: `${baseUrl}/fr/revisions/anglais/${fiche.slug}`,
    lastModified: now,
  })),
]
  ]

  const converterPages = [
    "distance",
    "puissance",
    "volume",
    "force",
    "surface",
    "temperature",
    "weight",
    "speed",
    "time",
    "angle",
    "storage",
    "internet-speed",
  ].flatMap((slug) => [
    {
      url: `${baseUrl}/fr/convert/${slug}`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/en/convert/${slug}`,
      lastModified: now,
    },
  ])

  return [
    // Accueil
    {
      url: `${baseUrl}/fr`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/en`,
      lastModified: now,
    },

    // Catégories FR
    {
      url: `${baseUrl}/fr/revisions/maths`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/fr/revisions/francais`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/fr/revisions/histoire`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/fr/revisions/svt`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/fr/revisions/pays`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/fr/revisions/geographie`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/fr/revisions/anglais`,
      lastModified: now,
    },

    ...converterPages,
    ...revisionPages,
  ]
}