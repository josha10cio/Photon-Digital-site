import type React from "react"
import type { Metadata } from "next"
import { Inter, Raleway } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Script from "next/script"

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
  metadataBase: new URL("https://www.photonecho.dev"),
  title: {
    default: "Photon Echo Physical AI and Synthetic Data",
    template: "%s - Photon Echo",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  other: {
    'robots': 'index, follow',
    'googlebot': 'index, follow',
    'last-modified': '2025-09-21',
  },
  description: "We build virtual worlds and simulated sensors to create synthetic training data for physical AI.",
  keywords: [
    "Physical AI",
    "Synthetic Data",
    "Digital Twin",
    "Sensor Simulation",
    "AI Training Data",
    "3D Simulation",
    "Robotics",
    "Machine Learning Data",
    "Edge Computing",
    "Computer Vision",
  ],
  openGraph: {
    title: "Photon Echo Physical AI and Synthetic Data",
    description: "We build virtual worlds and simulated sensors to create synthetic training data for physical AI.",
    url: "https://www.photonecho.dev",
    siteName: "Photon Echo",
    images: [
      {
        url: "/echo_Logo.png",
        width: 1200,
        height: 630,
        alt: "Photon Echo Physical AI and Synthetic Data",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Photon Echo Physical AI and Synthetic Data",
    description: "We build virtual worlds and simulated sensors to create synthetic training data for physical AI.",
    images: ["/echo_Logo.png"],
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

          {/* Chatbot removed per request */}

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
                "description": "We build virtual worlds and simulated sensors to create synthetic training data for physical AI.",
                "foundingDate": "2025",
                "brand": "Photon Echo",
                "areaServed": "US",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "US"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "Business",
                  "email": "info@photonecho.dev",
                  "url": "https://www.photonecho.dev/contact"
                },
                "sameAs": [
                  "https://www.linkedin.com/company/photonecho/",
                  "https://x.com/photon_digital"
                ],
                "service": [
                  {
                    "@type": "Service",
                    "name": "Physical AI Development",
                    "description": "Build AI systems that perceive, understand, and interact with the physical world through synthetic data and simulation"
                  },
                  {
                    "@type": "Service", 
                    "name": "Digital Twin Development",
                    "description": "Create intelligent virtual replicas for real-time simulation, testing, and optimization"
                  },
                  {
                    "@type": "Service",
                    "name": "Synthetic Data Generation", 
                    "description": "Generate high-quality artificial training data for AI models through advanced simulation and sensor modeling"
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
                gtag('config', 'G-NNM54G5BCN', { 'anonymize_ip': true });
              `,
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
