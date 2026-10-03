import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ananta | Senior Creative Developer & Interaction Architect",
  description:
    "Awwwards-level interactive portfolio showcasing scroll-linked image sequence animations, HTML5 canvas rendering, WebGL experiments, and high-performance creative engineering.",
  keywords: [
    "Creative Developer",
    "Next.js",
    "Framer Motion",
    "Canvas Animation",
    "Scrollytelling",
    "WebGL",
    "Awwwards",
    "Frontend Engineer",
  ],
  authors: [{ name: "Ananta" }],
  openGraph: {
    title: "Ananta | Senior Creative Developer",
    description: "High-performance scroll-driven personal portfolio & interactive case studies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className="min-h-screen bg-[#090a0f] text-[#f3f4f6] selection:bg-cyan-500/25 selection:text-cyan-200 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
