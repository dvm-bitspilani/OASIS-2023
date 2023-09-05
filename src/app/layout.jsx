"use client"

import "./globals.css";
import { Inter } from "next/font/google";

import Provider from "../context/Provider"

const inter = Inter({ subsets: ["latin"] });



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
