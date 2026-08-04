import type { Metadata } from "next";
import { Manrope, Inter, Space_Grotesk } from "next/font/google";
import ThemeRegistry from "@/components/ThemeRegistry";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Aravind Annaldas | Frontend Developer",
  description:
    "Frontend Developer with 2+ years of experience building scalable, high-performance web applications using React.js, Next.js, and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}