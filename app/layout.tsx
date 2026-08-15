import "./globals.css";

import type { Metadata } from "next";
import { Geist, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Nav } from "@/components/layout/nav";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SITE_URL } from "@/lib/seo";
import { themeInitScript } from "@/lib/theme/theme-script";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  weight: ["400", "500"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Aravind Annaldas | Frontend Software Engineer",
    template: "%s | Aravind Annaldas",
  },
  description:
    "Frontend Software Engineer building React and Next.js applications — sole frontend developer on a multi-vertical travel booking platform, now expanding into backend development.",
  keywords: [
    "Aravind Annaldas",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
  ],
  authors: [{ name: "Aravind Annaldas" }],
  creator: "Aravind Annaldas",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Aravind Annaldas | Frontend Software Engineer",
    description:
      "Frontend Software Engineer building React and Next.js applications — sole frontend developer on a multi-vertical travel booking platform, now expanding into backend development.",
    siteName: "Aravind Annaldas",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aravind Annaldas | Frontend Software Engineer",
    description:
      "Frontend Software Engineer building React and Next.js applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aravind Annaldas",
  jobTitle: "Frontend Software Engineer",
  url: SITE_URL,
  email: "mailto:annaldasaravind897@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/aravindannaldas/",
    "https://github.com/AravindAnnaldas-Dev",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Enspirit Technologies",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${hankenGrotesk.variable} ${geist.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* Blocking, pre-hydration: prevents a flash of the wrong theme (§8) */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript() }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <SmoothScrollProvider>
            <Nav />
            {children}
            <Footer />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
