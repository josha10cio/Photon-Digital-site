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
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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
        url: "/echo_Update_Logo_Dark-Grey.png",
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
    images: ["/echo_Update_Logo_Dark-Grey.png"],
  },
    generator: 'v0.app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${raleway.variable} font-sans antialiased bg-white relative min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange forcedTheme="light">
          <div className="flex flex-col min-h-screen w-full max-w-none mx-auto bg-white">
            <Header />
            <main className="flex-1 relative z-10 w-full bg-white">{children}</main>
            <Footer />
          </div>

          {/* Chatbot removed per request */}

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
                "logo": "https://www.photonecho.dev/echo_Update_Logo_Dark-Grey.png",
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
                  "https://x.com/EchoPhoton"
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
