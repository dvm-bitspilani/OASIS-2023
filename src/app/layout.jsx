import "./globals.css"


import Provider from "../context/Provider"
import CustomTrail from "../components/CustomTrail"
import OasisLogo from "../../public/static/images/eventsModalOasisLogo.png"



export const metadata = {
  metadataBase: new URL("https://oasis2023.bits-oasis.org"),
  alternates: {canonical: "/"},
  openGraph: {title: "Oasis '23", url: "https://oasis2023.bits-oasis.org", images: ["/static/images/eventsModalOasisLogo.png"]},
  title: "Oasis '23",
  description: "The Official Website for OASIS 2023.",
  image: OasisLogo,

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

export const viewport = {width:"device-width",initialScale:1,colorScheme:"dark"};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <CustomTrail />
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
