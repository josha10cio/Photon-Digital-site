import type React from "react"
import type { Metadata } from "next"
import { Inter, Raleway } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Script from "next/script"
import { MessageSquareTextIcon } from "lucide-react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: {
    default: "Photon Echo: Converting Imagination into Innovation",
    template: "%s - Photon Echo",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  description:
    "Photon Echo: Converting Imagination into Innovation. Forging bold ideas into unmatched products and systems through cutting edge design, visualization, and engineering services.",
  keywords: [
    "design services",
    "engineering services",
    "visualization services",
    "3D modeling",
    "CAD design",
    "technical documentation",
    "product engineering",
    "industrial design",
    "concept design",
    "prototyping",
    "manufacturing consultation",
    "government contracting",
    "commercial design",
    "technical drawings",
    "schematics",
    "mockups",
    "renderings",
    "animations",
    "real-time demos",
    "unreal engine",
    "interactive presentations",
    "proposal support",
  ],
  openGraph: {
    title: "Photon Echo: Converting Imagination into Innovation",
    description:
      "Forging bold ideas into unmatched products and systems through cutting edge design, visualization, and engineering services.",
    url: "https://www.photonecho.dev",
    siteName: "Photon Echo",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Photon Echo: Imagination Ignites Innovation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Photon Echo: Converting Imagination into Innovation",
    description:
      "Forging bold ideas into unmatched products and systems through cutting edge design, visualization, and engineering services.",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
    generator: 'v0.app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${raleway.variable} font-sans antialiased bg-photon-950 relative min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange forcedTheme="dark">
          <div className="flex flex-col min-h-screen w-full max-w-none mx-auto">
            <Header />
            <main className="flex-1 relative z-10 w-full">{children}</main>
            <Footer />
          </div>

          {/* Enhanced Chatbot */}
          <div className="fixed bottom-6 right-6 z-50">
            <button
              className="bg-gradient-to-r from-photon-500 to-photon-700 text-white rounded-full p-4 shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center glassmorphism animate-pulse-glow group"
              aria-label="Open Chatbot"
            >
              <MessageSquareTextIcon className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span className="sr-only">Open Chatbot</span>
            </button>
          </div>

          {/* Static Background - No Animation */}
          <div className="fixed inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-photon-950 via-photon-900 to-photon-800 opacity-50"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-photon-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-photon-700 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
            <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-photon-600 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
          </div>

          {/* Structured Data */}
          <Script
            id="structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Photon Echo",
                "url": "https://www.photonecho.dev",
                "logo": "https://www.photonecho.dev/echo_Logo.png",
                "description": "Photon Echo: Converting Imagination into Innovation. Forging bold ideas into unmatched products and systems through cutting edge design, visualization, and engineering services.",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "US"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "Business",
                  "url": "https://www.photonecho.dev/contact"
                },
                "sameAs": [],
                "service": [
                  {
                    "@type": "Service",
                    "name": "Design Services",
                    "description": "Concept design, 3D modeling, CAD drawings, UI/UX design, and branding solutions"
                  },
                  {
                    "@type": "Service", 
                    "name": "Visualization Services",
                    "description": "Technical drawings, photorealistic renderings, 3D animations, and interactive demos"
                  },
                  {
                    "@type": "Service",
                    "name": "Engineering Services", 
                    "description": "Product engineering, compliance-ready documentation, and manufacturing support"
                  }
                ]
              })
            }}
          />

          {/* Google Analytics */}
          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-NNM54G5BCN"></Script>
          <Script
            id="google-analytics"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-NNM54G5BCN');
              `,
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
