"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function SidebarAds({
  locale = "fr",
}: {
  locale?: string;
}) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {}
  }, []);

  const label =
    locale === "fr" ? "Publicité" : "Advertisement";

  return (
    <aside className="hidden 2xl:block w-[300px]">
      <div className="border border-slate-700 rounded-xl overflow-hidden bg-slate-900/40">

        <div className="text-center text-xs font-medium py-3 border-b border-slate-700 text-slate-300">
          {label}
        </div>

        <div className="p-3">
          <ins
            className="adsbygoogle"
            style={{
              display: "block",
              width: "300px",
              height: "600px",
            }}
            data-ad-client="ca-pub-2235128568846852"
            data-ad-slot="TON_SLOT_1"
          />
        </div>

        <div className="border-t border-slate-700" />

        <div className="p-3">
          <ins
            className="adsbygoogle"
            style={{
              display: "block",
              width: "300px",
              height: "600px",
            }}
            data-ad-client="ca-pub-2235128568846852"
            data-ad-slot="TON_SLOT_2"
          />
        </div>

      </div>
    </aside>
  );
}