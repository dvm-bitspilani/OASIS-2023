import "./globals.css"
import { Inter } from "next/font/google"
import Script from "next/script"
import Provider from "../context/Provider"
import CustomTrail from "../components/CustomTrail"
import OasisLogo from "../../public/static/images/eventsModalOasisLogo.png"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Oasis '23",
  description: "The Official Website for OASIS 2023.",
  image: OasisLogo,
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
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-YDR1E9BREE" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-YDR1E9BREE');
        `}
        </Script>
        <CustomTrail />
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
