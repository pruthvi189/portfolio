import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
        url: "/og.png",
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
    images: ["/og.png"],
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} dark`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
