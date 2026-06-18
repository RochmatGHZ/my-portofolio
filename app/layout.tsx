import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Space_Grotesk,
} from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio of Rochmat Iqbal Al-Ghazaly",
  description:
    "Portfolio of Rochmat Iqbal Al-Ghazaly — Backend Developer, AI Enthusiast, and Future Data Scientist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${spaceGrotesk.variable}
        h-full
        antialiased
      `}
    >
      <body>
        {/* Background Glow */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div
            className="
              absolute
              left-20
              top-20
              h-96
              w-96
              rounded-full
              bg-cyan-500/20
              blur-[150px]
            "
          />

          <div
            className="
              absolute
              bottom-20
              right-20
              h-96
              w-96
              rounded-full
              bg-purple-500/20
              blur-[150px]
            "
          />
        </div>
        {children}
      </body>
    </html>
  );
}