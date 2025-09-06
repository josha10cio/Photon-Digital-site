import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PenToolIcon, MonitorIcon, CogIcon, ArrowRightIcon, PlayIcon, CheckCircleIcon } from "lucide-react"

import { ResponsiveHeaderGraphic } from "@/components/responsive-header-graphic"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Photon Echo: Converting Imagination into Innovation. Forging bold ideas into unmatched products and systems through expert design, visualization, and engineering services.",
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
            <h1 className="text-center mb-8 animate-fadeIn">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-wide leading-none mb-2 font-inter">
                CONVERTING
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Imagination <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium opacity-75">into</span> Innovation
              </div>
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
              Forging bold ideas into unmatched products and systems
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
              <Link href="/services">
                <Button
                  variant="outline"
                  className="px-10 py-4 text-lg font-medium border-white/30 text-white hover:bg-white/10 bg-transparent"
                >
                  Our Services
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



      {/* Why Choose Photon Echo Section */}
      <section className="w-full py-16 md:py-24 bg-photon-950 text-white relative z-10">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="section-title">Why Choose Photon Echo</h2>
            <p className="mt-4 text-lg text-photon-200 max-w-2xl mx-auto">
              New company advantages that deliver exceptional value for your projects.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <Card className="bg-photon-900/50 border border-photon-800 text-white glassmorphism card-lift-on-hover">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircleIcon className="h-6 w-6 text-photon-500 flex-shrink-0" />
                  <h3 className="text-xl font-semibold">Competitive Pricing</h3>
                </div>
                <p className="text-photon-200">New company rates with established quality - get premium services without the premium price tag.</p>
              </CardContent>
            </Card>

            <Card className="bg-photon-900/50 border border-photon-800 text-white glassmorphism card-lift-on-hover">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircleIcon className="h-6 w-6 text-photon-500 flex-shrink-0" />
                  <h3 className="text-xl font-semibold">Rapid Response</h3>
                </div>
                <p className="text-photon-200">Small team means quick decisions and faster turnaround times on your critical projects.</p>
              </CardContent>
            </Card>

            <Card className="bg-photon-900/50 border border-photon-800 text-white glassmorphism card-lift-on-hover">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircleIcon className="h-6 w-6 text-photon-500 flex-shrink-0" />
                  <h3 className="text-xl font-semibold">Latest Tools & Methods</h3>
                </div>
                <p className="text-photon-200">Starting fresh with current software and industry best practices - no legacy limitations.</p>
              </CardContent>
            </Card>

            <Card className="bg-photon-900/50 border border-photon-800 text-white glassmorphism card-lift-on-hover">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircleIcon className="h-6 w-6 text-photon-500 flex-shrink-0" />
                  <h3 className="text-xl font-semibold">Focused Attention</h3>
                </div>
                <p className="text-photon-200">Every project gets our full dedication and focus - you're not just another client in a large portfolio.</p>
              </CardContent>
            </Card>

            <Card className="bg-photon-900/50 border border-photon-800 text-white glassmorphism card-lift-on-hover">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircleIcon className="h-6 w-6 text-photon-500 flex-shrink-0" />
                  <h3 className="text-xl font-semibold">Fresh Perspectives</h3>
                </div>
                <p className="text-photon-200">New eyes on old problems reveal innovative solutions and breakthrough approaches.</p>
              </CardContent>
            </Card>

            <Card className="bg-photon-900/50 border border-photon-800 text-white glassmorphism card-lift-on-hover">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircleIcon className="h-6 w-6 text-photon-500 flex-shrink-0" />
                  <h3 className="text-xl font-semibold">Growth Partnership</h3>
                </div>
                <p className="text-photon-200">We're invested in your success as we build our reputation - your wins are our wins.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-16 md:py-24 bg-photon-900 text-white relative z-10">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title mb-8">Our Story</h2>
            <div className="glassmorphism p-8 md:p-12 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-photon-100">Why We Started Photon Echo</h3>
              <p className="text-lg text-photon-200 leading-relaxed mb-6">
                We saw a gap for agile, technology-forward design and engineering services that could move at the speed of innovation. 
                Traditional firms were weighed down by legacy processes and outdated tools.
              </p>
              <p className="text-lg text-photon-200 leading-relaxed mb-6">
                We're building our reputation one project at a time, focused on quality, innovation, and client success. 
                Our approach combines cutting edge technology with proven methodologies to deliver exceptional results.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <span className="bg-photon-500/20 text-photon-300 px-4 py-2 rounded-full text-sm border border-photon-500/30">
                  Building the future, one project at a time
                </span>
                <span className="bg-photon-500/20 text-photon-300 px-4 py-2 rounded-full text-sm border border-photon-500/30">
                  Ready to tackle tomorrow's challenges
                </span>
                <span className="bg-photon-500/20 text-photon-300 px-4 py-2 rounded-full text-sm border border-photon-500/30">
                  New & Competitive
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="w-full py-20 md:py-32 bg-photon-gradient-hero text-white text-center relative z-10 overflow-hidden animate-fadeIn">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto glassmorphism p-8 md:p-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-photon-200 font-medium">Ready to Bring Your Project to Life?</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Let's Discuss Your Project
            </h2>
            <p className="text-lg md:text-xl text-photon-100 max-w-2xl mx-auto mb-8">
              Ready to transform your innovative ideas with fresh design and engineering expertise? Let's explore how we can help bring your vision to life.
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
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
