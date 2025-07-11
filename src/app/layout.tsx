import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Savana Tianyar - Alam Liar di Ujung Timur Bali",
  description: "Temukan ketenangan di hamparan savana dengan latar Gunung Agung. Destinasi wisata alam tersembunyi di Karangasem, Bali.",
  keywords: "Savana Tianyar, Karangasem, Bali, wisata alam, savana, Gunung Agung, destinasi tersembunyi",
  openGraph: {
    title: "Savana Tianyar - Alam Liar di Ujung Timur Bali",
    description: "Temukan ketenangan di hamparan savana dengan latar Gunung Agung",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Savana Tianyar - Alam Liar di Ujung Timur Bali",
    description: "Temukan ketenangan di hamparan savana dengan latar Gunung Agung",
  },
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
