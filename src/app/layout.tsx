import type { Metadata } from "next";
import { IBM_Plex_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["700", "800", "900"],
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
      <head>
        <script dangerouslySetInnerHTML={{ __html: `if(window.location.hostname==='church-of-infinite-scroll-landing.vercel.app'){window.location.replace('https://www.churchofscroll.com'+window.location.pathname+window.location.search);}` }} />
      </head>
      <body className={`${ibmPlexMono.variable} ${playfairDisplay.variable}`}>
        <a className="skipLink btn" href="#content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
