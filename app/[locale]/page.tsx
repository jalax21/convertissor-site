import { MetadataRoute } from "next"

import { mathsFiches } from "@/data/revisions/maths"
import { francaisFiches } from "@/data/revisions/francais"
import { histoireFiches } from "@/data/revisions/histoire"
import { svtFiches } from "@/data/revisions/svt"
import { paysFiches } from "@/data/revisions/pays"
import { geographieFiches } from "@/data/revisions/geographie"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://quickunits.fr"

  const revisionPages = [
    ...mathsFiches.map((fiche) => ({
      url: `${baseUrl}/fr/revisions/maths/${fiche.slug}`,
      lastModified: new Date(),
    })),

    ...francaisFiches.map((fiche) => ({
      url: `${baseUrl}/fr/revisions/francais/${fiche.slug}`,
      lastModified: new Date(),
    })),

    ...histoireFiches.map((fiche) => ({
      url: `${baseUrl}/fr/revisions/histoire/${fiche.slug}`,
      lastModified: new Date(),
    })),

    ...svtFiches.map((fiche) => ({
      url: `${baseUrl}/fr/revisions/svt/${fiche.slug}`,
      lastModified: new Date(),
    })),

    ...paysFiches.map((fiche) => ({
      url: `${baseUrl}/fr/revisions/pays/${fiche.slug}`,
      lastModified: new Date(),
    })),

    ...geographieFiches.map((fiche) => ({
      url: `${baseUrl}/fr/revisions/geographie/${fiche.slug}`,
      lastModified: new Date(),
    })),
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
  ].map((slug) => ({
    url: `${baseUrl}/fr/convert/${slug}`,
    lastModified: new Date(),
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/fr`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
    },

    // Pages catégories révisions

    {
      url: `${baseUrl}/fr/revisions/maths`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/fr/revisions/francais`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/fr/revisions/histoire`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/fr/revisions/svt`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/fr/revisions/pays`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/fr/revisions/geographie`,
      lastModified: new Date(),
    },

    // Pages catégories convertisseurs

    {
      url: `${baseUrl}/fr/convert/distance`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/fr/convert/puissance`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/fr/convert/volume`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/fr/convert/force`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/fr/convert/surface`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/fr/convert/temperature`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/fr/convert/weight`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/fr/convert/speed`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/fr/convert/time`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/fr/convert/angle`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/fr/convert/storage`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/fr/convert/internet-speed`,
      lastModified: new Date(),
    },

    ...revisionPages,
    ...converterPages,
  ]
}