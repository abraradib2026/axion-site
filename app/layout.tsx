import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://axioncreator.com"),
  title: "Axion | AI Software Reviews & Tutorials",
  description:
    "Professional AI software reviews, local AI tutorials, AI video generation, image generation, sponsored showcases and software demonstrations.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Axion | AI Software Reviews & Tutorials",
    description:
      "Professional AI software reviews, local AI tutorials, AI video generation, image generation, sponsored showcases and software demonstrations.",
    url: "https://axioncreator.com",
    siteName: "Axion",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Axion | AI Software Reviews & Tutorials",
    description:
      "Professional AI software reviews, local AI tutorials, AI video generation, image generation, sponsored showcases and software demonstrations.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} min-h-screen overflow-x-hidden bg-[#050505] font-sans text-[#E8E8E8] antialiased selection:bg-[#00F0FF]/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
