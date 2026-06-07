"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function BackButton() {
  const params = useParams();
  const locale = params.locale as string;

  const isFrench = locale === "fr";

  return (
    <Link
      href={`/${locale}`}
      className="inline-flex items-center rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition mb-6"
    >
      ← {isFrench ? "Retour à l'accueil" : "Back to Home"}
    </Link>
  );
}