import "./globals.css";
import { Inter } from "next/font/google";

import Provider from "../context/Provider";
import CustomTrail from "../components/CustomTrail";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Oasis '23",
  },
  description: "The Official Website for OASIS 2023.",
  colorScheme: "dark",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <CustomTrail /> */}
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
