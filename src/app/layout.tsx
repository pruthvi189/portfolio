import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ScrollProgress } from "@/components/scroll-progress";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pruthvishah.dev"),
  title: {
    default: "Pruthvi Shah — ML Engineer",
    template: "%s | Pruthvi Shah",
  },
  description:
    "ML Engineer specializing in deep learning, NLP, and full-stack AI applications. Building intelligent systems at the intersection of machine learning and full-stack engineering.",
  keywords: [
    "machine learning",
    "deep learning",
    "NLP",
    "AI",
    "full-stack",
    "Python",
    "TensorFlow",
    "FastAPI",
    "Next.js",
  ],
  authors: [{ name: "Pruthvi Shah" }],
  creator: "Pruthvi Shah",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pruthvishah.dev",
    siteName: "Pruthvi Shah — ML Engineer",
    title: "Pruthvi Shah — ML Engineer",
    description:
      "ML Engineer specializing in deep learning, NLP, and full-stack AI applications.",
    images: [
      {
        url: "https://pruthvishah.dev/og.png",
        width: 1200,
        height: 630,
        alt: "Pruthvi Shah — ML Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pruthvi Shah — ML Engineer",
    description:
      "ML Engineer specializing in deep learning, NLP, and full-stack AI applications.",
    images: ["https://pruthvishah.dev/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} dark`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
