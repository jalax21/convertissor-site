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

  const url =
    locale === "fr"
      ? "https://quickunits.fr/fr/conditions-utilisation"
      : "https://quickunits.fr/en/conditions-utilisation";

  const title = isFrench
    ? "Conditions d'utilisation | QuickUnits"
    : "Terms of Use | QuickUnits";

  const description = isFrench
    ? "Conditions générales d'utilisation du site QuickUnits."
    : "Terms and conditions governing the use of the QuickUnits website.";

  return {
    title,
    description,

    alternates: {
      canonical: url,
      languages: {
        fr: "https://quickunits.fr/fr/conditions-utilisation",
        en: "https://quickunits.fr/en/conditions-utilisation",
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

export default async function ConditionsUtilisationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const isFrench = locale === "fr";

  const url =
    locale === "fr"
      ? "https://quickunits.fr/fr/conditions-utilisation"
      : "https://quickunits.fr/en/conditions-utilisation";

  return (
    
    <main className="max-w-6xl mx-auto px-6 py-12 rounded-2xl bg-slate-900/30">
      <BackButton />

      <h1 className="text-4xl font-bold mb-8">
        {isFrench
          ? "Conditions d'utilisation"
          : "Terms of Use"}
      </h1>

      <p className="mb-6">
        {isFrench
          ? "Dernière mise à jour : 07/06/2026"
          : "Last updated: 07/06/2026"}
      </p>

      <p>
        {isFrench
          ? "Les présentes conditions d'utilisation définissent les règles d'accès et d'utilisation du site QuickUnits."
          : "These terms of use define the rules governing access to and use of the QuickUnits website."}
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {isFrench ? "Présentation du service" : "Service Description"}
      </h2>

      <p>
        {isFrench
          ? "QuickUnits est un site gratuit proposant des convertisseurs d'unités, des calculateurs, des outils pratiques et des ressources pédagogiques accessibles librement sans inscription."
          : "QuickUnits is a free website offering unit converters, calculators, practical tools and educational resources accessible without registration."}
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {isFrench ? "Acceptation des conditions" : "Acceptance of Terms"}
      </h2>

      <p>
        {isFrench
          ? "L'accès et l'utilisation du site impliquent l'acceptation pleine et entière des présentes conditions d'utilisation."
          : "Accessing and using the website implies full acceptance of these terms of use."}
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {isFrench ? "Accès au site" : "Access to the Website"}
      </h2>

      <p>
        {isFrench
          ? "QuickUnits est accessible gratuitement à tout utilisateur disposant d'un accès à Internet."
          : "QuickUnits is freely accessible to any user with Internet access."}
      </p>

      <p className="mt-4">
        {isFrench
          ? "Tous les frais liés à l'accès au site (connexion Internet, équipement informatique, etc.) restent à la charge de l'utilisateur."
          : "All costs related to accessing the website (Internet connection, hardware, etc.) remain the responsibility of the user."}
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {isFrench ? "Utilisation autorisée" : "Authorized Use"}
      </h2>

      <p>
        {isFrench
          ? "L'utilisateur s'engage à utiliser le site conformément aux lois et réglementations en vigueur."
          : "Users agree to use the website in accordance with applicable laws and regulations."}
      </p>

      <p className="mt-4">
        {isFrench
          ? "Il est notamment interdit :"
          : "In particular, it is prohibited to:"}
      </p>

      <ul className="list-disc pl-6 mt-4 space-y-2">
        <li>
          {isFrench
            ? "Perturber le fonctionnement du site."
            : "Disrupt the operation of the website."}
        </li>

        <li>
          {isFrench
            ? "Accéder ou tenter d'accéder à des zones non autorisées."
            : "Access or attempt to access unauthorized areas."}
        </li>

        <li>
          {isFrench
            ? "Utiliser le site à des fins frauduleuses ou illégales."
            : "Use the website for fraudulent or illegal purposes."}
        </li>

        <li>
          {isFrench
            ? "Copier massivement le contenu du site sans autorisation."
            : "Massively copy website content without authorization."}
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {isFrench
          ? "Exactitude des informations"
          : "Accuracy of Information"}
      </h2>

      <p>
        {isFrench
          ? "Les convertisseurs, calculateurs et contenus proposés sur QuickUnits sont fournis à titre informatif."
          : "The converters, calculators and content available on QuickUnits are provided for informational purposes only."}
      </p>

      <p className="mt-4">
        {isFrench
          ? "Bien que nous nous efforcions de maintenir des informations exactes et à jour, aucune garantie absolue ne peut être donnée concernant l'exactitude, l'exhaustivité ou la pertinence des résultats affichés."
          : "Although we strive to keep information accurate and up to date, no absolute guarantee can be given regarding the accuracy, completeness or relevance of displayed results."}
      </p>

      <p className="mt-4">
        {isFrench
          ? "L'utilisateur demeure seul responsable de l'utilisation qu'il fait des informations obtenues via le site."
          : "Users remain solely responsible for how they use information obtained through the website."}
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {isFrench
          ? "Disponibilité du service"
          : "Service Availability"}
      </h2>

      <p>
        {isFrench
          ? "Nous nous efforçons d'assurer un accès continu au site."
          : "We strive to ensure continuous access to the website."}
      </p>

      <p className="mt-4">
        {isFrench
          ? "Toutefois, QuickUnits ne peut garantir une disponibilité permanente et se réserve le droit d'interrompre temporairement le service pour maintenance ou amélioration."
          : "However, QuickUnits cannot guarantee permanent availability and reserves the right to temporarily interrupt the service for maintenance or improvements."}
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {isFrench
          ? "Propriété intellectuelle"
          : "Intellectual Property"}
      </h2>

      <p>
        {isFrench
          ? "Les contenus du site, notamment les textes, outils, logos, illustrations et fonctionnalités, sont protégés par les lois relatives à la propriété intellectuelle."
          : "Website content, including texts, tools, logos, illustrations and features, is protected by intellectual property laws."}
      </p>

      <p className="mt-4">
        {isFrench
          ? "Toute reproduction, modification ou diffusion non autorisée est interdite."
          : "Any unauthorized reproduction, modification or distribution is prohibited."}
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {isFrench ? "Liens externes" : "External Links"}
      </h2>

      <p>
        {isFrench
          ? "Le site peut contenir des liens vers des sites tiers."
          : "The website may contain links to third-party websites."}
      </p>

      <p className="mt-4">
        {isFrench
          ? "QuickUnits ne peut être tenu responsable du contenu ou des pratiques de ces sites externes."
          : "QuickUnits cannot be held responsible for the content or practices of external websites."}
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {isFrench ? "Publicité" : "Advertising"}
      </h2>

      <p>
        {isFrench
          ? "Le site peut afficher des annonces publicitaires fournies par des partenaires tels que Google AdSense."
          : "The website may display advertisements provided by partners such as Google AdSense."}
      </p>

      <p className="mt-4">
        {isFrench
          ? "Ces services peuvent utiliser des cookies ou technologies similaires conformément à leurs propres politiques."
          : "These services may use cookies or similar technologies in accordance with their own policies."}
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {isFrench
          ? "Limitation de responsabilité"
          : "Limitation of Liability"}
      </h2>

      <p>
        {isFrench
          ? "QuickUnits ne pourra être tenu responsable des dommages directs ou indirects résultant de l'utilisation ou de l'impossibilité d'utiliser le site."
          : "QuickUnits shall not be liable for any direct or indirect damages resulting from the use or inability to use the website."}
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {isFrench
          ? "Modification des conditions"
          : "Changes to the Terms"}
      </h2>

      <p>
        {isFrench
          ? "Les présentes conditions peuvent être modifiées à tout moment afin de tenir compte des évolutions du site ou de la réglementation."
          : "These terms may be modified at any time to reflect changes to the website or applicable regulations."}
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Contact
      </h2>

      <p>
        {isFrench
          ? "Pour toute question concernant ces conditions d'utilisation :"
          : "For any questions regarding these terms of use:"}
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
  id="terms-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",

      name: isFrench
        ? "Conditions d'utilisation"
        : "Terms of Use",

      description: isFrench
        ? "Conditions générales d'utilisation du site QuickUnits."
        : "Terms and conditions governing the use of the QuickUnits website.",

      url,

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

