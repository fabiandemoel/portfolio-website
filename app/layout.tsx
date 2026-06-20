import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fabian | Data & AI Engineer",
  description:
    "Professional portfolio of Fabian de Moel, Data & AI Engineer specializing in innovative data-driven solutions.",
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-8acD0sqW8y1eoLegzfCRNZcmO0wsiy.png",
        href: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-8acD0sqW8y1eoLegzfCRNZcmO0wsiy.png",
      },
    ],
  },
  openGraph: {
    title: "Fabian | Data & AI Engineer",
    description:
      "Professional portfolio of Fabian de Moel, Data & AI Engineer specializing in innovative data-driven solutions.",
    url: "https://fabiandemoel.com",
    siteName: "Fabian de Moel Portfolio",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-8acD0sqW8y1eoLegzfCRNZcmO0wsiy.png",
        width: 800,
        height: 800,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fabian | Data & AI Engineer",
    description:
      "Professional portfolio of Fabian de Moel, Data & AI Engineer specializing in innovative data-driven solutions.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-8acD0sqW8y1eoLegzfCRNZcmO0wsiy.png"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'