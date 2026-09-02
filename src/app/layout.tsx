import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Inter, Geist_Mono } from "next/font/google";
import BackgroundShapes from "@/components/BackgroundShapes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/site.config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.resume.name,
    template: `%s | ${siteConfig.resume.name}`,
  },
  description: `${siteConfig.resume.name} — ${siteConfig.resume.title}. Portfolio, projects, and certifications.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
      style={{ "--color-accent": siteConfig.settings.accentColor } as CSSProperties}
    >
      <body className="flex min-h-full flex-col bg-white text-neutral-900">
        <BackgroundShapes />
        <Header />
        <main className="w-full flex-1 px-6 py-12 sm:py-16 print:py-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
