
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
  title: "APEX | Project Hub — Challenge Motiva 2026–2027",

  description:
    "Conheça a APEX, equipe de tecnologia e inovação participante do Challenge Motiva 2026–2027. Explore nossa trajetória, nossos projetos e o desenvolvimento do NEXU, uma assistente de inteligência artificial para operações rodoviárias.",

  applicationName: "APEX Project Hub",

  keywords: [
    "APEX",
    "APEX Project Hub",
    "Challenge Motiva",
    "NEXU",
    "Inteligência Artificial",
    "Tecnologia",
    "FIAP",
    "Operações Rodoviárias",
  ],

  openGraph: {
    title: "APEX | Project Hub",
    description:
      "Tecnologia, inovação e inteligência artificial. Conheça a APEX e nossa jornada no Challenge Motiva 2026–2027.",
    siteName: "APEX Project Hub",
    locale: "pt_BR",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
