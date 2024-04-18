import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import Header from "./Header.tsx"; // Import the Header component
import Footer from "./Footer.tsx"; // Import the Footer component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Global management consulting | Alpha Digital Group",
  description: "Alpha Digital Group is a leading global management consulting firm specializing in providing innovative solutions to businesses across various industries. Our expertise includes strategic planning, digital transformation, and organizational development. Partner with us to drive growth and success for your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Include the Header component */}
        <Header />
        <main>{children}</main>
        {/* Include the Footer component */}
        <Footer />
        <GoogleTagManager gtmId="G-25Y0G3QQE6"/>
        <GoogleAnalytics gaId="G-25Y0G3QQE6" />
      </body>
    </html>
  );
}
