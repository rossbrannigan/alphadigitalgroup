import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ross Brannigan | Leading Digital Business Results & Innovation",
  description: "Digital leader obsessed with commercial results, product innovation & customer satisfaction | IE MBA | APAC | ex-Etihad, ex-Airberlin, ex-Facebook",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
    <main>{children}</main>
      <GoogleTagManager gtmId="G-R17NJV1L4N"/>

      </body>
    </html>
  );
}


