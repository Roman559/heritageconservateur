import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  title: "Héritage Conservateur | Parti politique étudiant",
  description:
    "Héritage Conservateur — un mouvement politique étudiant engagé pour la responsabilité, le respect, la tradition et l'avenir.",
  icons: {
    icon: [
      {
        url: "/1000011275.ico",
        type: "image/x-icon",
      },
    ],
    shortcut: "/1000011275.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="icon"
          href="/1000011275.ico"
          type="image/x-icon"
        />
      </head>

      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}