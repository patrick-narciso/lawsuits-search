import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import moment from "moment";
import "moment/locale/pt-br"; // without this line it didn't work
moment.locale("pr-br");

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Busca de processos App",
  description: "Aplicação para busca de processos judiciais",
  referrer: "origin-when-cross-origin",
  authors: [
    { name: "Patrick Narciso", url: "https://github.com/patrick-narciso" },
  ],
  creator: "Patrick Narciso",
  publisher: "Patrick Narciso",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-gray-200 h-full ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
