import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://appmog.app'),
  title: "App Mog Labs — AI-Native Development Studio",
  description: "Building the future with humans and agents. Photo Blitz, ContractScan, AgentWatch, and more.",
  openGraph: {
    title: "App Mog Labs",
    description: "AI-Native indie studio shipping real products.",
    url: "https://appmog.app",
    siteName: "App Mog Labs",
    images: [
      {
        url: "https://appmog.app/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "App Mog Labs",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className={`${jetbrainsMono.variable} ${inter.variable}`}>
      <body className="bg-black text-white antialiased font-body overflow-x-hidden">
        <Navigation />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
