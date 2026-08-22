import type { Metadata } from "next";
import { Sora, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Piyush Pateliya | MERN Stack Developer",
  description:
    "Portfolio of Piyush Pateliya, a Full-Stack MERN Developer experienced in React.js, Node.js, Express.js, MongoDB, Next.js, and UEFN/Verse development.",
  keywords: [
    "Piyush Pateliya",
    "MERN Stack Developer",
    "React.js Developer",
    "Node.js Developer",
    "UEFN Developer",
    "Verse Programmer",
    "Full-Stack Developer",
    "Portfolio",
  ],
  authors: [{ name: "Piyush Pateliya" }],
  openGraph: {
    title: "Piyush Pateliya | MERN Stack Developer",
    description:
      "Portfolio of Piyush Pateliya, a Full-Stack MERN Developer experienced in React.js, Node.js, Express.js, MongoDB, Next.js, and UEFN/Verse development.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${sora.variable} ${inter.variable} ${geistMono.variable} font-inter bg-background text-text-body antialiased selection:bg-electric-violet/30 selection:text-text-heading min-h-screen relative`}
      >
        {children}
      </body>
    </html>
  );
}
