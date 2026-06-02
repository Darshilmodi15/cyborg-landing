import type { Metadata } from "next";
import type { Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const siteUrl = "https://cyborg-landing.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cyborg Nexus | Human + AI Cybernetic Systems",
    template: "%s | Cyborg Nexus",
  },
  description:
    "A premium 2050-inspired landing page for next-generation human and AI cybernetic systems.",
  keywords: [
    "cyborg",
    "AI",
    "cybernetics",
    "neural integration",
    "augmented intelligence",
  ],
  authors: [{ name: "Cyborg Nexus" }],
  creator: "Cyborg Nexus",
  openGraph: {
    title: "Cyborg Nexus | The Future Is Human + AI",
    description:
      "Enhancing intelligence through next-generation cybernetic systems.",
    url: siteUrl,
    siteName: "Cyborg Nexus",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Cyborg Nexus neural interface preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyborg Nexus | The Future Is Human + AI",
    description:
      "Enhancing intelligence through next-generation cybernetic systems.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050816",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full bg-background text-foreground antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
