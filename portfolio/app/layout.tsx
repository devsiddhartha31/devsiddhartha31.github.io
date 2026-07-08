import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata = {
  title: "Siddhartha Kumar",
  description:
    "Software Engineer | Full-Stack & Cloud | Android | AI/ML | Founder @ KridAstra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}