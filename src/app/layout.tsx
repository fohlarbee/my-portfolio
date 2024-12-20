import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Analytics} from '@vercel/analytics/next';
import {SpeedInsights} from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fohlarbee.dev",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head><link rel="icon" href="/favicon.ico" /></head> */}
      <body className={inter.className}>
        
        {children}
        <Analytics/>
        <SpeedInsights/>
        </body>
    </html>
  );
}
