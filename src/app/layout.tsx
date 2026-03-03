import type { Metadata } from "next";
import { Inter, Spectral } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spectral = Spectral({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "The Church of Infinite Scroll",
    template: "%s · The Church of Infinite Scroll",
  },
  description:
    "We do not worship the Feed. We study it. A community for conscious scrolling, algorithmic introspection, and experiments in attention.",
  openGraph: {
    title: "The Church of Infinite Scroll",
    description:
      "We do not worship the Feed. We study it. A community for conscious scrolling, algorithmic introspection, and experiments in attention.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Church of Infinite Scroll",
    description:
      "We do not worship the Feed. We study it. A community for conscious scrolling, algorithmic introspection, and experiments in attention.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spectral.variable}`}>
        <a className="skipLink btn" href="#content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
