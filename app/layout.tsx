import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Youtube",
  description:
    "A clone of youtube website",
};

const RootLayout = async ({ children }: { children: ReactNode }) => {

  return (
    <html lang="en">
        <body className={inter.className}>
          {children}
        </body>
    </html>
  );
};

export default RootLayout;