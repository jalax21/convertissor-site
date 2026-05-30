import { MetadataRoute } from "next"
import { mathsFiches } from "@/data/revisions/maths"
import { francaisFiches } from "@/data/revisions/francais"
import { histoireFiches } from "@/data/revisions/histoire"
import { svtFiches } from "@/data/revisions/svt"
import { paysFiches } from "@/data/revisions/pays"
import { geographieFiches } from "@/data/revisions/geographie"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://quickunits.fr"

  const pages = [
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

    ...pages,
  ]
}