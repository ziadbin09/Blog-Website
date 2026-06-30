import type { Metadata } from "next";
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
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
