import { Metadata } from "next";
import BackButton from "@/components/BackButton";

export const metadata: Metadata = {
  title: "Contact | QuickUnits",
  description:
    "Contact the QuickUnits team for questions, feedback or reports.",
};

export default async function ContactPage({
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
        Contact
      </h1>

      <p className="mb-6">
        {isFrench
          ? "Dernière mise à jour : 07/06/2026"
          : "Last updated: 07/06/2026"}
      </p>

      <p>
        {isFrench
          ? "Vous pouvez nous contacter pour toute question concernant QuickUnits, ses outils, son contenu ou son fonctionnement."
          : "You can contact us regarding any question about QuickUnits, its tools, content or functionality."}
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {isFrench
          ? "Contact principal"
          : "Main Contact"}
      </h2>

      <p>
        {isFrench
          ? "Pour toute demande générale :"
          : "For general inquiries:"}
      </p>

      <p className="mt-4 font-semibold">
  <a
    href="mailto:contact@quickunits.fr"
    className="text-blue-400 hover:text-blue-300 underline"
  >
    contact@quickunits.fr
  </a>
</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {isFrench
          ? "Signaler une erreur"
          : "Report an Error"}
      </h2>

      <p>
        {isFrench
          ? "Si vous constatez une erreur dans un convertisseur, un calculateur ou une fiche de révision, merci de nous préciser :"
          : "If you notice an error in a converter, calculator or study sheet, please provide:"}
      </p>

      <ul className="list-disc pl-6 mt-4 space-y-2">
        <li>
          {isFrench
            ? "La page concernée."
            : "The affected page."}
        </li>

        <li>
          {isFrench
            ? "Les valeurs utilisées."
            : "The values used."}
        </li>

        <li>
          {isFrench
            ? "Le résultat obtenu."
            : "The result obtained."}
        </li>

        <li>
          {isFrench
            ? "Une description du problème rencontré."
            : "A description of the issue encountered."}
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {isFrench
          ? "Questions relatives à la confidentialité"
          : "Privacy Questions"}
      </h2>

      <p>
        {isFrench
          ? "Pour toute question concernant notre politique de confidentialité, l'utilisation des cookies ou les services tiers utilisés sur le site, vous pouvez nous contacter à la même adresse :"
          : "For any questions regarding our privacy policy, cookie usage or third-party services used on the website, you may contact us at the same address:"}
      </p>

      <p className="mt-4 font-semibold">
  <a
    href="mailto:contact@quickunits.fr"
    className="text-blue-400 hover:text-blue-300 underline"
  >
    contact@quickunits.fr
  </a>
</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {isFrench
          ? "Temps de réponse"
          : "Response Time"}
      </h2>

      <p>
        {isFrench
          ? "Nous nous efforçons de répondre aux demandes dans les meilleurs délais. Les délais peuvent varier selon le volume de messages reçus."
          : "We strive to respond as quickly as possible. Response times may vary depending on the volume of messages received."}
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {isFrench
          ? "À propos de QuickUnits"
          : "About QuickUnits"}
      </h2>

      <p>
        {isFrench
          ? "QuickUnits est un site gratuit proposant des convertisseurs d'unités, des calculateurs, des outils pratiques et des ressources pédagogiques accessibles sans inscription."
          : "QuickUnits is a free website offering unit converters, calculators, practical tools and educational resources accessible without registration."}
      </p>
    </main>
  );
}

