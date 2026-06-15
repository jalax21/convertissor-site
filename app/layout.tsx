import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://quickunits.fr"),

  title: {
    default: "QuickUnits - Free Unit Converters and Online Tools",
    template: "%s | QuickUnits",
  },

  description:
    "QuickUnits offers free unit converters, online calculators, study sheets, and practical tools for students, professionals, and everyday use.",

  keywords: [
    "unit converter",
    "online converter",
    "distance converter",
    "weight converter",
    "temperature converter",
    "volume converter",
    "speed converter",
    "storage converter",
    "online calculator",
    "study sheets",
    "revision notes",
    "free tools",
    "quickunits",
  ],

  authors: [
    {
      name: "QuickUnits",
      url: "https://quickunits.fr",
    },
  ],

  publisher: "QuickUnits",

  alternates: {
    canonical: "https://quickunits.fr",
    languages: {
      "fr-FR": "https://quickunits.fr/fr",
      "en-US": "https://quickunits.fr/en",
    },
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "QuickUnits - Free Unit Converters and Online Tools",
    description:
      "Convert units instantly with QuickUnits. Free converters, calculators, study sheets, and practical online tools.",
    url: "https://quickunits.fr",
    siteName: "QuickUnits",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "https://quickunits.fr/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "QuickUnits - Free Unit Converters",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "QuickUnits - Free Unit Converters and Online Tools",
    description:
      "Free unit converters, calculators and educational tools.",
    images: ["https://quickunits.fr/og-image.jpg"],
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      {
        url: "/apple-touch-icon.png",
      },
    ],
  },

  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2235128568846852"
          crossOrigin="anonymous"
        />
      </head>

      <body className="min-h-full flex flex-col bg-white dark:bg-gray-900">
        <main className="flex-1">{children}</main>

        <Analytics />
      </body>
    </html>
  );
}