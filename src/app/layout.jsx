"use client"

import "./globals.css";
import { Inter } from "next/font/google";

import Provider from "../context/Provider"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OASIS '23 | Home",
  description: "The official website for OASIS 2023.",
  colorScheme: "dark",
  icon: "/static/images/navLogo.png",
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
