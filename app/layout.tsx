import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashboard Financeiro",
  description: "Dashboard Financeiro Executivo",
};

import { Sidebar } from "@/components/sidebar";
import { Topbar } from "@/components/topbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex text-slate-900 bg-slate-50 font-sans">
        <Sidebar />
        <main className="flex-1 flex flex-col min-w-0 h-screen">
          <Topbar />
          <div className="flex-1 overflow-auto">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
