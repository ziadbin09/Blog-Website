import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "Vitalis — Medical Research, Read Clearly",
  description:
    "Vitalis distills clinical trials, genomics, and the breakthroughs reshaping care — written by working researchers, for clinicians and the curious alike.",
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
