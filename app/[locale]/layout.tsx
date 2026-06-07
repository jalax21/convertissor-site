import SidebarAds from "@/components/SidebarAds";
import Link from "next/link";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const text = {
    legal:
      locale === "fr"
        ? "Mentions légales"
        : "Legal Notice",

    privacy:
      locale === "fr"
        ? "Confidentialité"
        : "Privacy Policy",

    cookies:
      locale === "fr"
        ? "Cookies"
        : "Cookies",

    terms:
      locale === "fr"
        ? "Conditions d'utilisation"
        : "Terms of Use",

    contact:
      locale === "fr"
        ? "Contact"
        : "Contact",
  };

  return (
    <>
      <div className="w-full px-4">
        <div className="flex gap-8">
          {/* Contenu principal */}
          <main className="flex-1 min-w-0">
            {children}
          </main>

          {/* Publicités latérales */}
          <SidebarAds locale={locale} />
        </div>
      </div>

      <footer className="border-t mt-8 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 text-base">
            <Link href={`/${locale}/mentions-legales`}>
              {text.legal}
            </Link>

            <Link href={`/${locale}/politique-confidentialite`}>
              {text.privacy}
            </Link>

            <Link href={`/${locale}/politique-cookies`}>
              {text.cookies}
            </Link>

            <Link href={`/${locale}/conditions-utilisation`}>
              {text.terms}
            </Link>

            <Link href={`/${locale}/contact`}>
              {text.contact}
            </Link>
          </div>

          <p className="text-center text-sm mt-4 text-gray-500">
            © {new Date().getFullYear()} QuickUnits.fr
          </p>
        </div>
      </footer>
    </>
  );
}

