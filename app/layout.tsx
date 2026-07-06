import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { CursorGlow } from "./components/CursorGlow";
import { siteContent } from "@/config/site-content";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: siteContent.meta.title,
  description: siteContent.meta.description,
};

const cssVariables = Object.entries(siteContent.colors)
  .map(([key, value]) => `--${key}: ${value};`)
  .join("\n  ");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${caveat.variable} h-full antialiased`}
    >
      <head>
        <style>{`:root {\n  ${cssVariables}\n}`}</style>
      </head>
      <body className="min-h-full flex flex-col">
        <Providers>
          {children}
          <CursorGlow />
        </Providers>
      </body>
    </html>
  );
}
