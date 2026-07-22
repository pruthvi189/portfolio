import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-three-flame-35.vercel.app"),
  title: {
    default: "Pruthvi Shah — Full Stack & AI Developer",
    template: "%s | Pruthvi Shah",
  },
  description:
    "Full Stack Developer & AI Automation Engineer building scalable web products and intelligent agentic pipelines.",
  keywords: [
    "full stack",
    "AI",
    "machine learning",
    "Next.js",
    "Python",
    "TypeScript",
    "React",
    "automation",
  ],
  authors: [{ name: "Pruthvi Shah" }],
  creator: "Pruthvi Shah",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-three-flame-35.vercel.app",
    siteName: "Pruthvi Shah — Full Stack & AI Developer",
    title: "Pruthvi Shah — Full Stack & AI Developer",
    description:
      "Full Stack Developer & AI Automation Engineer building scalable web products and intelligent agentic pipelines.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Pruthvi Shah" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pruthvi Shah — Full Stack & AI Developer",
    description:
      "Full Stack Developer & AI Automation Engineer building scalable web products and intelligent agentic pipelines.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen bg-[#0A0A0A] text-[#F5F5F0] antialiased">
        {children}
      </body>
    </html>
  );
}
