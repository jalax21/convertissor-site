import { Metadata } from "next";
import BackButton from "@/components/BackButton";

export const metadata: Metadata = {
  title: "Legal Notice | QuickUnits",
  description:
    "Legal information about the QuickUnits website.",
};

export default async function MentionsLegalesPage({
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
          ? "Mentions légales"
          : "Legal Notice"}
      </h1>

      <p className="mb-6">
        {isFrench
          ? "Dernière mise à jour : 07/06/2026"
          : "Last updated: 07/06/2026"}
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {isFrench
          ? "Éditeur du site"
          : "Website Publisher"}
      </h2>

      <p>
        {isFrench
          ? "Le site QuickUnits est édité par :"
          : "The QuickUnits website is published by:"}
      </p>

      <ul className="list-disc pl-6 mt-4 space-y-2">
        <li>
          <strong>
            {isFrench
              ? "Nom ou raison sociale :"
              : "Name or Company Name:"}
          </strong>{" "}
          JLX Média
        </li>

        

        <li>
  <strong>Email :</strong>{" "}
  <a
    href="mailto:contact@quickunits.fr"
    className="text-blue-400 hover:text-blue-300 underline"
  >
    contact@quickunits.fr
  </a>
</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {isFrench
          ? "Directeur de la publication"
          : "Publication Director"}
      </h2>

      <p>
        {isFrench
          ? "Le directeur de la publication est :"
          : "The publication director is:"}
      </p>

      <p className="mt-4">
        <strong>JLX</strong>
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {isFrench
          ? "Hébergement"
          : "Hosting"}
      </h2>

      <p>
        {isFrench
          ? "Le site est hébergé par :"
          : "The website is hosted by:"}
      </p>

      <div className="mt-4">
        <p>
          <strong>Vercel Inc.</strong>
        </p>
        <p>440 N Barranca Ave #4133</p>
        <p>Covina, CA 91723</p>
        <p>
          {isFrench
            ? "États-Unis"
            : "United States"}
        </p>
        <p className="mt-2">
          https://vercel.com
        </p>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {isFrench
          ? "Objet du site"
          : "Website Purpose"}
      </h2>

      <p>
        {isFrench
          ? "QuickUnits met gratuitement à disposition des visiteurs des convertisseurs, calculateurs, outils pratiques et ressources pédagogiques destinés à faciliter les conversions d'unités et les calculs du quotidien."
          : "QuickUnits provides free converters, calculators, practical tools and educational resources designed to simplify unit conversions and everyday calculations."}
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {isFrench
          ? "Propriété intellectuelle"
          : "Intellectual Property"}
      </h2>

      <p>
        {isFrench
          ? "L'ensemble des contenus présents sur le site QuickUnits, incluant notamment les textes, logos, éléments graphiques, icônes, fonctionnalités, outils et code source, est protégé par les lois applicables en matière de propriété intellectuelle."
          : "All content available on QuickUnits, including texts, logos, graphics, icons, features, tools and source code, is protected by applicable intellectual property laws."}
      </p>

      <p className="mt-4">
        {isFrench
          ? "Toute reproduction, distribution, modification ou exploitation, totale ou partielle, sans autorisation préalable écrite est interdite."
          : "Any reproduction, distribution, modification or use, in whole or in part, without prior written authorization is prohibited."}
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {isFrench
          ? "Responsabilité"
          : "Liability"}
      </h2>

      <p>
        {isFrench
          ? "Les outils, convertisseurs et calculateurs proposés sur QuickUnits sont fournis à titre informatif."
          : "The tools, converters and calculators provided on QuickUnits are offered for informational purposes only."}
      </p>

      <p className="mt-4">
        {isFrench
          ? "Bien que nous nous efforcions d'assurer l'exactitude des informations et résultats affichés, aucune garantie absolue ne peut être donnée."
          : "Although we strive to ensure the accuracy of displayed information and results, no absolute guarantee can be provided."}
      </p>

      <p className="mt-4">
        {isFrench
          ? "L'utilisateur demeure seul responsable de l'utilisation qu'il fait des informations et résultats obtenus via le site."
          : "Users remain solely responsible for how they use the information and results obtained through the website."}
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {isFrench
          ? "Liens externes"
          : "External Links"}
      </h2>

      <p>
        {isFrench
          ? "Le site peut contenir des liens vers des sites tiers."
          : "The website may contain links to third-party websites."}
      </p>

      <p className="mt-4">
        {isFrench
          ? "QuickUnits ne peut être tenu responsable du contenu, des services ou des politiques de confidentialité de ces sites externes."
          : "QuickUnits cannot be held responsible for the content, services or privacy policies of external websites."}
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {isFrench
          ? "Publicité"
          : "Advertising"}
      </h2>

      <p>
        {isFrench
          ? "Le site peut afficher des publicités fournies par Google AdSense."
          : "The website may display advertisements provided by Google AdSense."}
      </p>

      <p className="mt-4">
        {isFrench
          ? "Ces publicités peuvent utiliser des cookies ou technologies similaires conformément aux politiques de Google."
          : "These advertisements may use cookies or similar technologies in accordance with Google's policies."}
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Contact
      </h2>

      <p>
        {isFrench
          ? "Pour toute question concernant le site ou les présentes mentions légales :"
          : "For any questions regarding the website or this legal notice:"}
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

