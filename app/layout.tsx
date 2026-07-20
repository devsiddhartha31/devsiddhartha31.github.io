import "./globals.css";
import { Geist } from "next/font/google";
import type { Metadata } from "next";
import { profile } from "@/data/profile"

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.portfolio),
  title: profile.name,
  description: profile.headline,
  openGraph: {
    title: profile.name,
    description: profile.headline,
    url: profile.portfolio,
    siteName: profile.name,
    images: [
      {
        url: profile.picture,
        width: 1200,
        height: 630,
        alt: profile.name,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: profile.name,
    description: profile.headline,
    images: [profile.picture],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        {children}
      </body>
    </html>
  );
}