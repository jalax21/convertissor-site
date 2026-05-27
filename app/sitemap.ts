import { MetadataRoute } from "next"
import { mathsFiches } from "@/data/revisions/maths"

export default function sitemap(): MetadataRoute.Sitemap {

  const baseUrl = "https://quickunits.fr"

  const mathsPages = mathsFiches.map((fiche) => ({
    url: `${baseUrl}/fr/revisions/maths/${fiche.slug}`,
    lastModified: new Date(),
  }))

  return [

    {
      url: `${baseUrl}`,
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

    ...mathsPages,

  ]
}