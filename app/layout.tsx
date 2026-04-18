import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bilingual Coloring Pack | English & Russian",
  description: "Free printable bilingual coloring pages for preschoolers with animal names in English and Russian.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Arial, sans-serif', margin: 0 }}>{children}</body>
    </html>
  );
}
