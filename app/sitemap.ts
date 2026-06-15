import { MetadataRoute } from "next";

import { mathsFiches } from "@/data/revisions/maths";
import { francaisFiches } from "@/data/revisions/francais";
import { histoireFiches } from "@/data/revisions/histoire";
import { svtFiches } from "@/data/revisions/svt";
import { paysFiches } from "@/data/revisions/pays";
import { geographieFiches } from "@/data/revisions/geographie";
import { anglaisFiches } from "@/data/revisions/anglais";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://quickunits.fr";

  const lastModified = new Date();

  const revisionPages = [
    ...mathsFiches.map((fiche) => ({
      url: `${baseUrl}/fr/revisions/maths/${fiche.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    ...francaisFiches.map((fiche) => ({
      url: `${baseUrl}/fr/revisions/francais/${fiche.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    ...histoireFiches.map((fiche) => ({
      url: `${baseUrl}/fr/revisions/histoire/${fiche.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    ...svtFiches.map((fiche) => ({
      url: `${baseUrl}/fr/revisions/svt/${fiche.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    ...paysFiches.map((fiche) => ({
      url: `${baseUrl}/fr/revisions/pays/${fiche.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    ...geographieFiches.map((fiche) => ({
      url: `${baseUrl}/fr/revisions/geographie/${fiche.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    ...anglaisFiches.map((fiche) => ({
      url: `${baseUrl}/fr/revisions/anglais/${fiche.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  const converterSlugs = [
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
  ];

  const converterPages = converterSlugs.flatMap((slug) => [
    {
      url: `${baseUrl}/fr/convert/${slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en/convert/${slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ]);

  return [
    // Accueil
    {
      url: `${baseUrl}/fr`,
      lastModified,
      changeFrequency: "daily",
      priority: 1,
    },

    {
      url: `${baseUrl}/en`,
      lastModified,
      changeFrequency: "daily",
      priority: 1,
    },

    // Révisions
    {
      url: `${baseUrl}/fr/revisions`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // Catégories
    {
      url: `${baseUrl}/fr/revisions/maths`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/fr/revisions/francais`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/fr/revisions/histoire`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/fr/revisions/svt`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/fr/revisions/pays`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/fr/revisions/geographie`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/fr/revisions/anglais`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // Pages légales (à créer si elles n'existent pas encore)
    {
  url: `${baseUrl}/fr/contact`,
  lastModified,
  changeFrequency: "yearly",
  priority: 0.5,
},
{
  url: `${baseUrl}/fr/mentions-legales`,
  lastModified,
  changeFrequency: "yearly",
  priority: 0.5,
},
{
  url: `${baseUrl}/fr/politique-confidentialite`,
  lastModified,
  changeFrequency: "yearly",
  priority: 0.5,
},
{
  url: `${baseUrl}/fr/politique-cookies`,
  lastModified,
  changeFrequency: "yearly",
  priority: 0.5,
},
{
  url: `${baseUrl}/fr/conditions-utilisation`,
  lastModified,
  changeFrequency: "yearly",
  priority: 0.5,
},

    ...converterPages,
    ...revisionPages,
  ];
}