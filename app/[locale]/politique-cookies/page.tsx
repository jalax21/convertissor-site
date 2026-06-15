import { Metadata } from "next";
import BackButton from "@/components/BackButton";
import Script from "next/script";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const isFrench = locale === "fr";

  const title = isFrench
  ? "Politique de cookies | QuickUnits"
  : "Cookie Policy | QuickUnits";

  const description = isFrench
  ? "Politique relative à l'utilisation des cookies sur QuickUnits."
  : "Cookie policy explaining how QuickUnits uses cookies.";

  const url =
  locale === "fr"
    ? "https://quickunits.fr/fr/politique-cookies"
    : "https://quickunits.fr/en/politique-cookies";
  return {
    title,
    description,

    alternates: {
      canonical: url,
      languages: {
  fr: "https://quickunits.fr/fr/politique-cookies",
  en: "https://quickunits.fr/en/politique-cookies",
},
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title,
      description,
      url,
      siteName: "QuickUnits",
      type: "website",
      locale: isFrench ? "fr_FR" : "en_US",
alternateLocale: isFrench ? ["en_US"] : ["fr_FR"],

      images: [
        {
          url: "https://quickunits.fr/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "QuickUnits",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://quickunits.fr/og-image.jpg"],
    },
  };
}

export default async function CookiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isFrench = locale === "fr";

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 rounded-2xl bg-slate-900/30">
      <BackButton />

      <h1 className="text-4xl font-bold mb-8">
        {isFrench
          ? "Politique de cookies"
          : "Cookie Policy"}
      </h1>

      <p className="mb-6">
        {isFrench
          ? "Dernière mise à jour : 07/06/2026"
          : "Last updated: 07/06/2026"}
      </p>

      <p>
        {isFrench
          ? "Cette politique explique comment QuickUnits utilise les cookies et technologies similaires lors de votre navigation sur le site."
          : "This policy explains how QuickUnits uses cookies and similar technologies when you browse the website."}
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {isFrench
          ? "Qu'est-ce qu'un cookie ?"
          : "What is a Cookie?"}
      </h2>

      <p>
        {isFrench
          ? "Un cookie est un petit fichier texte enregistré sur votre appareil lorsque vous consultez un site web. Il permet notamment d'améliorer l'expérience utilisateur, de mesurer l'audience du site et de proposer des contenus adaptés."
          : "A cookie is a small text file stored on your device when you visit a website. It helps improve user experience, measure website traffic and provide relevant content."}
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {isFrench
          ? "Cookies essentiels"
          : "Essential Cookies"}
      </h2>

      <p>
        {isFrench
          ? "Certains cookies sont nécessaires au bon fonctionnement du site. Ils permettent notamment :"
          : "Some cookies are necessary for the proper operation of the website. They allow:"}
      </p>

      <ul className="list-disc pl-6 mt-4 space-y-2">
        <li>
          {isFrench
            ? "La navigation entre les pages."
            : "Navigation between pages."}
        </li>

        <li>
          {isFrench
            ? "Le maintien des préférences utilisateur."
            : "Storage of user preferences."}
        </li>

        <li>
          {isFrench
            ? "La sécurité et la stabilité du site."
            : "Website security and stability."}
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {isFrench
          ? "Cookies analytiques"
          : "Analytics Cookies"}
      </h2>

      <p>
        {isFrench
          ? "QuickUnits utilise des outils de mesure d'audience afin de comprendre comment les visiteurs utilisent le site et d'améliorer les services proposés."
          : "QuickUnits uses analytics tools to understand how visitors use the website and improve the services provided."}
      </p>

      <p className="mt-4">
        {isFrench
          ? "Les services utilisés peuvent inclure :"
          : "Services used may include:"}
      </p>

      <ul className="list-disc pl-6 mt-4 space-y-2">
        <li>Google Analytics</li>
        <li>Vercel Analytics</li>
      </ul>

      <p className="mt-4">
        {isFrench
          ? "Ces services peuvent collecter des informations techniques telles que :"
          : "These services may collect technical information such as:"}
      </p>

      <ul className="list-disc pl-6 mt-4 space-y-2">
        <li>
          {isFrench
            ? "Le type de navigateur utilisé."
            : "Browser type."}
        </li>

        <li>
          {isFrench
            ? "Le système d'exploitation."
            : "Operating system."}
        </li>

        <li>
          {isFrench
            ? "Les pages consultées."
            : "Pages visited."}
        </li>

        <li>
          {isFrench
            ? "La durée de visite."
            : "Visit duration."}
        </li>

        <li>
          {isFrench
            ? "Des informations techniques anonymisées sur l'appareil utilisé."
            : "Anonymous technical information about the device used."}
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {isFrench
          ? "Cookies publicitaires"
          : "Advertising Cookies"}
      </h2>

      <p>
        {isFrench
          ? "QuickUnits utilise Google AdSense pour afficher des annonces publicitaires."
          : "QuickUnits uses Google AdSense to display advertisements."}
      </p>

      <p className="mt-4">
        {isFrench
          ? "Google et ses partenaires peuvent utiliser des cookies afin :"
          : "Google and its partners may use cookies to:"}
      </p>

      <ul className="list-disc pl-6 mt-4 space-y-2">
        <li>
          {isFrench
            ? "Afficher des publicités pertinentes."
            : "Display relevant advertisements."}
        </li>

        <li>
          {isFrench
            ? "Limiter le nombre d'affichages d'une annonce."
            : "Limit the number of times an advertisement is displayed."}
        </li>

        <li>
          {isFrench
            ? "Mesurer les performances des campagnes publicitaires."
            : "Measure advertising campaign performance."}
        </li>

        <li>
          {isFrench
            ? "Améliorer les services publicitaires proposés."
            : "Improve advertising services."}
        </li>
      </ul>

      <p className="mt-4">
        {isFrench
          ? "Pour en savoir plus sur l'utilisation des données par Google :"
          : "Learn more about how Google uses data:"}
      </p>

      <a
        href="https://policies.google.com/technologies/ads"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        Google Advertising Policies
      </a>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {isFrench
          ? "Gestion des cookies"
          : "Managing Cookies"}
      </h2>

      <p>
        {isFrench
          ? "Vous pouvez configurer votre navigateur afin de :"
          : "You can configure your browser to:"}
      </p>

      <ul className="list-disc pl-6 mt-4 space-y-2">
        <li>
          {isFrench
            ? "Accepter tous les cookies."
            : "Accept all cookies."}
        </li>

        <li>
          {isFrench
            ? "Refuser certains cookies."
            : "Reject certain cookies."}
        </li>

        <li>
          {isFrench
            ? "Supprimer les cookies déjà enregistrés."
            : "Delete previously stored cookies."}
        </li>

        <li>
          {isFrench
            ? "Être informé avant l'installation d'un cookie."
            : "Be notified before a cookie is stored."}
        </li>
      </ul>

      <p className="mt-4">
        {isFrench
          ? "La désactivation de certains cookies peut toutefois affecter le bon fonctionnement de certaines fonctionnalités du site."
          : "Disabling certain cookies may affect the proper functioning of some website features."}
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Contact
      </h2>

      <p>
        {isFrench
          ? "Pour toute question concernant cette politique de cookies, vous pouvez nous contacter à l'adresse suivante :"
          : "For any questions regarding this cookie policy, you may contact us at:"}
      </p>

      <p className="mt-4 font-semibold">
  <a
    href="mailto:contact@quickunits.fr"
    className="text-blue-400 hover:text-blue-300 underline"
  >
    contact@quickunits.fr
  </a>
</p>
<Script
  id="cookie-policy-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",

      name: isFrench
        ? "Politique de cookies"
        : "Cookie Policy",

      description: isFrench
        ? "Politique relative à l'utilisation des cookies sur QuickUnits."
        : "Cookie policy explaining how QuickUnits uses cookies.",

      url:
        locale === "fr"
          ? "https://quickunits.fr/fr/politique-cookies"
          : "https://quickunits.fr/en/politique-cookies",

      mainEntityOfPage: {
  "@type": "WebPage",
  "@id":
    locale === "fr"
      ? "https://quickunits.fr/fr/politique-cookies"
      : "https://quickunits.fr/en/politique-cookies",
},

publisher: {
  "@type": "Organization",
  name: "QuickUnits",
  url: "https://quickunits.fr",
},
    }),
  }}
/>
    </main>
  );
}

