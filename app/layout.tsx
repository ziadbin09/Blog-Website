import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "TechPulse — Mobile & Tech, Explained Simply",
  description:
    "TechPulse covers the latest Android phones, iOS updates, app reviews, and mobile tech news — honest reviews and guides written by real enthusiasts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-display="serif" data-ads="full">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2083629374546177"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
