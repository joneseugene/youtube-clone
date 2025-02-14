import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";


const inter = Inter({ subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Youtube",
  description:
    "A clone of youtube website",
};

const RootLayout = async ({ children }: { children: ReactNode }) => {

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;