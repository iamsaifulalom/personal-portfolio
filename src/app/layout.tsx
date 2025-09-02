import { ReactNode } from 'react';
import { Poppins } from 'next/font/google'
import type { Metadata } from "next";
import "./globals.css";

const roboto = Poppins({
  subsets: ['latin'],           // Load only Latin characters
  weight: ['400', '700'],       // Regular & Bold
  variable: '--font-poppins',    // Create CSS variable for Tailwind
});

export const metadata: Metadata = {
  title: "Saiful Alom",
  description: "Self-taught MERN developer from Bangladesh",
  keywords: "Next.js, MERN, SEO, Developer, Bangladesh",
  authors: [{ name: "Saiful Alom" }],
  openGraph: {
    title: "Saiful Alom",
    description: "Building fast and SEO-friendly websites with Next.js",
    url: "https://saifulalom.com",
    siteName: "Saiful Alom Portfolio",
    images: [
      {
        url: "https://saifulalom.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children, }: { children: ReactNode }) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
