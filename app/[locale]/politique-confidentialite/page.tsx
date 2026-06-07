import { Metadata } from "next";
import BackButton from "@/components/BackButton";

export const metadata: Metadata = {
  title: "Privacy Policy | QuickUnits",
  description:
    "Privacy Policy regarding Google Analytics, Google AdSense and Vercel Analytics.",
};

export default async function PrivacyPage({
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
          ? "Politique de confidentialité"
          : "Privacy Policy"}
      </h1>

      <p className="mb-6">
        {isFrench
          ? "Dernière mise à jour : 07/06/2026"
          : "Last updated: 07/06/2026"}
      </p>

      <p>
        {isFrench
          ? "La présente politique de confidentialité explique quelles informations peuvent être collectées lors de votre utilisation du site QuickUnits et comment elles sont utilisées."
          : "This privacy policy explains what information may be collected when using the QuickUnits website and how it is used."}
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {isFrench
          ? "Aucune création de compte"
          : "No Account Required"}
      </h2>

      <p>
        {isFrench
          ? "QuickUnits ne nécessite aucune inscription et ne propose aucun compte utilisateur."
          : "QuickUnits does not require registration and does not provide user accounts."}
      </p>

      <p className="mt-4">
        {isFrench
          ? "Nous ne demandons pas de nom, prénom, adresse postale ou informations personnelles pour accéder aux outils disponibles sur le site."
          : "We do not request names, addresses or personal information to access the tools available on the website."}
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {isFrench
          ? "Données collectées automatiquement"
          : "Automatically Collected Data"}
      </h2>

      <p>
        {isFrench
          ? "Certaines données techniques peuvent être collectées automatiquement lors de votre navigation afin d'assurer le bon fonctionnement du site et de mesurer son audience."
          : "Certain technical information may be collected automatically to ensure proper website operation and measure audience statistics."}
      </p>

      <p className="mt-4">
        {isFrench
          ? "Ces informations peuvent inclure :"
          : "This information may include:"}
      </p>

      <ul className="list-disc pl-6 mt-4 space-y-2">
        <li>
          {isFrench
            ? "Adresse IP (partiellement anonymisée selon les services utilisés)."
            : "IP address (partially anonymized depending on the service used)."}
        </li>

        <li>
          {isFrench
            ? "Type de navigateur."
            : "Browser type."}
        </li>

        <li>
          {isFrench
            ? "Système d'exploitation."
            : "Operating system."}
        </li>

        <li>
          {isFrench
            ? "Pages consultées."
            : "Pages visited."}
        </li>

        <li>
          {isFrench
            ? "Durée de consultation."
            : "Visit duration."}
        </li>

        <li>
          {isFrench
            ? "Informations techniques liées à l'appareil utilisé."
            : "Technical information related to the device used."}
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Google Analytics
      </h2>

      <p>
        {isFrench
          ? "QuickUnits utilise Google Analytics afin de mesurer l'audience du site et d'améliorer les services proposés."
          : "QuickUnits uses Google Analytics to measure website traffic and improve services."}
      </p>

      <p className="mt-4">
        {isFrench
          ? "Google Analytics peut collecter certaines informations techniques sur votre navigation à des fins statistiques."
          : "Google Analytics may collect technical information about your browsing activity for statistical purposes."}
      </p>

      <a
        href="https://policies.google.com/privacy"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        Google Privacy Policy
      </a>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Google AdSense
      </h2>

      <p>
        {isFrench
          ? "QuickUnits utilise Google AdSense afin d'afficher des publicités sur le site."
          : "QuickUnits uses Google AdSense to display advertisements on the website."}
      </p>

      <p className="mt-4">
        {isFrench
          ? "Google et ses partenaires peuvent utiliser des cookies afin de diffuser des annonces pertinentes et mesurer leurs performances."
          : "Google and its partners may use cookies to display relevant advertisements and measure performance."}
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
        Vercel Analytics
      </h2>

      <p>
        {isFrench
          ? "QuickUnits utilise Vercel Analytics afin d'obtenir des statistiques anonymisées sur la fréquentation et les performances du site."
          : "QuickUnits uses Vercel Analytics to obtain anonymized statistics about website traffic and performance."}
      </p>

      <a
        href="https://vercel.com/legal/privacy-policy"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        Vercel Privacy Policy
      </a>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Cookies
      </h2>

      <p>
        {isFrench
          ? "Le site utilise des cookies techniques, analytiques et publicitaires."
          : "The website uses technical, analytics and advertising cookies."}
      </p>

      <p className="mt-4">
        {isFrench
          ? "Pour en savoir plus, consultez notre page dédiée :"
          : "To learn more, visit our dedicated page:"}
      </p>

      <a
        href={`/${locale}/politique-cookies`}
        className="text-blue-600 underline"
      >
        {isFrench
          ? "Politique de cookies"
          : "Cookie Policy"}
      </a>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {isFrench
          ? "Vos droits"
          : "Your Rights"}
      </h2>

      <p>
        {isFrench
          ? "Conformément à la réglementation applicable, vous pouvez demander des informations concernant les données éventuellement traitées par nos services ou nos partenaires."
          : "In accordance with applicable regulations, you may request information regarding data that may be processed by our services or partners."}
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {isFrench
          ? "Modifications"
          : "Changes"}
      </h2>

      <p>
        {isFrench
          ? "Cette politique de confidentialité peut être modifiée à tout moment afin de refléter les évolutions du site, des services utilisés ou de la réglementation applicable."
          : "This privacy policy may be updated at any time to reflect changes to the website, services used or applicable regulations."}
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Contact
      </h2>

      <p>
        {isFrench
          ? "Pour toute question concernant cette politique de confidentialité :"
          : "For any questions regarding this privacy policy:"}
      </p>

      <p className="mt-4 font-semibold">
  <a
    href="mailto:contact@quickunits.fr"
    className="text-blue-400 hover:text-blue-300 underline"
  >
    contact@quickunits.fr
  </a>
</p>
    </main>
  );
}

