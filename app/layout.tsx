import Footer from "@/components/footer/Footer"
import "./globals.css"
import type { Metadata } from "next"
import { Urbanist } from "next/font/google"
import Navbar from "@/components/navbar/Navbar"
import ModalProviders from "@/providers/ModalProvider"
import ToastProvider from "@/providers/ToastProvider"
import { cn } from "@/libs/utils/utils"

const urabnist = Urbanist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`bg-hero-pattern bg-opacity-10 flex flex-col min-h-[100vh]  ${urabnist.className}`}
      >
        <ModalProviders />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
