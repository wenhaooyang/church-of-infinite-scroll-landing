import type { Metadata } from "next";
import { IBM_Plex_Mono, UnifrakturMaguntia } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

const unifrakturMaguntia = UnifrakturMaguntia({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
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
      <body className={`${ibmPlexMono.variable} ${unifrakturMaguntia.variable}`}>
        <a className="skipLink btn" href="#content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
