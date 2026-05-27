import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://quickunits.fr",
      lastModified: new Date(),
    },
    {
      url: "https://quickunits.fr/fr",
      lastModified: new Date(),
    },
    {
      url: "https://quickunits.fr/en",
      lastModified: new Date(),
    },
  ]
}