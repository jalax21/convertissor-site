"use client"

import Script from "next/script"
import { useEffect } from "react"

declare global {
  interface Window {
    adsbygoogle: unknown[]
  }
}

export default function AdBanner() {
  useEffect(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {
      console.log(e)
    }
  }, [])

  return (
    <>
      <Script
        async
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2235128568846852"
        crossOrigin="anonymous"
      />

      <ins
        className="adsbygoogle"
        style={{ display: "block", minHeight: "90px" }}
        data-ad-client="ca-pub-2235128568846852"
        data-ad-slot="5787723309"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </>
  )
}