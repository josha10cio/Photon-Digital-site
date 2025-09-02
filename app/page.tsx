import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PenToolIcon, MonitorIcon, CogIcon, ArrowRightIcon, PlayIcon, SparklesIcon, CheckCircleIcon } from "lucide-react"

import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { ResponsiveHeaderGraphic } from "@/components/responsive-header-graphic"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Professional design, visualization, and engineering services for commercial and government clients. Expert concept design, 3D modeling, technical documentation, and manufacturing support.",
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[calc(100dvh-4rem)]">
      {/* Hero Section - Preserving Original Design */}
      <section className="relative w-full py-20 md:py-32 lg:py-48 bg-photon-gradient-hero text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-photon-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
          <div
            className="absolute top-1/3 right-1/4 w-96 h-96 bg-photon-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-photon-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-center mb-8 animate-fadeIn">
              Professional Design & Engineering Solutions
            </h1>

            {/* Enhanced Responsive Header Graphic */}
            <div
              className="flex justify-center floating-graphic mb-16 mt-12 animate-fadeIn"
              style={{ animationDelay: "0.3s" }}
            >
              <ResponsiveHeaderGraphic />
            </div>

            <p
              className="text-lg md:text-xl text-white max-w-3xl mx-auto font-light text-center mb-8 animate-fadeIn"
              style={{ animationDelay: "0.6s" }}
            >
              From concept design to manufacturing support, we deliver comprehensive design, visualization, and engineering services for commercial and government clients worldwide.
            </p>

            {/* Enhanced CTA Section */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fadeIn"
              style={{ animationDelay: "0.9s" }}
            >
              <Link href="/contact">
                <Button className="btn-primary px-10 py-4 text-lg font-medium group animate-pulse-glow">
                  <PlayIcon className="mr-2 w-5 h-5" />
                  Start Your Project
                  <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/government">
                <Button
                  variant="outline"
                  className="px-10 py-4 text-lg font-medium border-white/30 text-white hover:bg-white/10 bg-transparent"
                >
                  Government Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="w-full py-20 md:py-32 bg-photon-950 relative z-10">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="section-title mb-4">Our Core Services</h2>
            <p className="text-lg text-photon-200 max-w-2xl mx-auto">
              Comprehensive design, visualization, and engineering solutions for complex projects and innovative concepts.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            <Card
              className="bg-photon-900/50 border border-photon-800 text-white group glassmorphism card-lift-on-hover relative z-10 animate-fadeIn"
              style={{ animationDelay: "0.2s" }}
            >
              <CardHeader className="flex flex-col items-center text-center pb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-white transition-all duration-300 group-hover:border-photon-500 group-hover:animate-pulse-glow">
                  <PenToolIcon className="h-8 w-8 text-white group-hover:text-photon-500" />
                </div>
                <CardTitle className="text-2xl font-bold">Design Services</CardTitle>
                <div className="w-12 h-1 bg-photon-500 rounded-full mt-2"></div>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-photon-200 text-base leading-relaxed mb-4">
                  Concept design, sketches & prototypes, UI/UX design, 3D modeling, and comprehensive branding solutions.
                </CardDescription>
                <div className="text-sm text-photon-400 space-y-1">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircleIcon className="h-3 w-3 text-photon-500" />
                    <span>Concept Development</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircleIcon className="h-3 w-3 text-photon-500" />
                    <span>3D Modeling & CAD</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircleIcon className="h-3 w-3 text-photon-500" />
                    <span>UI/UX Design</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className="bg-photon-900/50 border border-photon-800 text-white group glassmorphism card-lift-on-hover relative z-10 animate-fadeIn"
              style={{ animationDelay: "0.4s" }}
            >
              <CardHeader className="flex flex-col items-center text-center pb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-white transition-all duration-300 group-hover:border-photon-500 group-hover:animate-pulse-glow">
                  <MonitorIcon className="h-8 w-8 text-white group-hover:text-photon-500" />
                </div>
                <CardTitle className="text-2xl font-bold">Visualization Services</CardTitle>
                <div className="w-12 h-1 bg-photon-700 rounded-full mt-2"></div>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-photon-200 text-base leading-relaxed mb-4">
                  Professional mockups, technical drawings, animations, real-time demos, and interactive presentations.
                </CardDescription>
                <div className="text-sm text-photon-400 space-y-1">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircleIcon className="h-3 w-3 text-photon-500" />
                    <span>Technical Renderings</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircleIcon className="h-3 w-3 text-photon-500" />
                    <span>Real-time Demos</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircleIcon className="h-3 w-3 text-photon-500" />
                    <span>Animations</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className="bg-photon-900/50 border border-photon-800 text-white group glassmorphism card-lift-on-hover relative z-10 animate-fadeIn"
              style={{ animationDelay: "0.6s" }}
            >
              <CardHeader className="flex flex-col items-center text-center pb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-white transition-all duration-300 group-hover:border-photon-500 group-hover:animate-pulse-glow">
                  <CogIcon className="h-8 w-8 text-white group-hover:text-photon-500" />
                </div>
                <CardTitle className="text-2xl font-bold">Engineering & Industrial Design</CardTitle>
                <div className="w-12 h-1 bg-photon-600 rounded-full mt-2"></div>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-photon-200 text-base leading-relaxed mb-4">
                  Product engineering, industrial design, technical documentation, and manufacturing consultation.
                </CardDescription>
                <div className="text-sm text-photon-400 space-y-1">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircleIcon className="h-3 w-3 text-photon-500" />
                    <span>Product Engineering</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircleIcon className="h-3 w-3 text-photon-500" />
                    <span>Technical Documentation</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircleIcon className="h-3 w-3 text-photon-500" />
                    <span>Manufacturing Support</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16 animate-fadeIn" style={{ animationDelay: "0.8s" }}>
            <Link href="/services">
              <Button className="btn-primary px-10 py-4 text-lg font-semibold group animate-pulse-glow">
                Explore All Services
                <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>



      {/* Testimonials Section */}
      <TestimonialsCarousel />

      {/* Enhanced CTA Section */}
      <section className="w-full py-20 md:py-32 bg-photon-gradient-hero text-white text-center relative z-10 overflow-hidden animate-fadeIn">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto glassmorphism p-8 md:p-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <SparklesIcon className="h-6 w-6 text-photon-400" />
              <span className="text-photon-200 font-medium">Ready to Bring Your Project to Life?</span>
              <SparklesIcon className="h-6 w-6 text-photon-400" />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Start Your Design Project Today
            </h2>
            <p className="text-lg md:text-xl text-photon-100 max-w-2xl mx-auto mb-8">
              Partner with experienced professionals who deliver exceptional design, visualization, and engineering solutions for commercial and government clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="btn-primary px-12 py-4 text-lg font-semibold group animate-pulse-glow">
                  <PlayIcon className="mr-2 w-5 h-5" />
                  Get Quote
                  <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  variant="outline"
                  className="px-12 py-4 text-lg font-semibold border-white/30 text-white hover:bg-white/10 bg-transparent"
                >
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
