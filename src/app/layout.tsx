import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GeopolitixGraph — Interactive Geopolitical Relationship Visualizer",
  description:
    "Explore geographic, commercial, diplomatic, and military relationships between European countries through an interactive force-directed graph.",
  keywords: [
    "geopolitics",
    "graph",
    "visualization",
    "Europe",
    "international relations",
    "diplomacy",
    "trade",
    "military alliances",
  ],
  openGraph: {
    title: "GeopolitixGraph",
    description:
      "Interactive geopolitical relationship visualizer for European countries.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
