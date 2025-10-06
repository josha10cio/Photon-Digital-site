import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PenToolIcon, MonitorIcon, CogIcon, ArrowRightIcon, PlayIcon, CheckCircleIcon, BoxIcon, BrainIcon, DatabaseIcon } from "lucide-react"

import { ResponsiveHeaderGraphic } from "@/components/responsive-header-graphic"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Photon Echo: Leading Physical AI Training and Digital Twin Development. Specialized AI solutions with comprehensive supporting services for transforming ideas into reality.",
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full py-20 md:py-32 lg:py-48 bg-photon-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-photon-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-center mb-8 animate-fadeIn">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-wide leading-none mb-2 font-inter">
                ADVANCED
              </div>
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-2">
                PHYSICAL AI
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-wide leading-none">
                TRAINING
              </div>
            </h1>

            <div className="flex justify-center floating-graphic mb-16 mt-12 animate-fadeIn">
              <ResponsiveHeaderGraphic />
            </div>

            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto font-light text-center mb-8 animate-fadeIn">
              Specialized AI training for physical world applications and comprehensive Digital Twin solutions
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fadeIn">
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
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-photon-900 text-white relative z-10">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="section-title mb-4">Our Primary Services</h2>
            <p className="text-lg text-photon-200 max-w-2xl mx-auto">
              Specialized in Physical AI Training and Digital Twin development, with comprehensive supporting services.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Primary Services</h3>
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto mb-16">
              <Link href="/services/digital-twin">
                <Card className="bg-photon-900/50 border border-photon-800 text-white group glassmorphism hover:border-photon-400/50 transition-all duration-300 cursor-pointer relative z-10 animate-fadeIn">
                  <CardHeader className="flex flex-col items-center text-center pb-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-400 transition-all duration-300 group-hover:border-photon-300">
                      <BoxIcon className="h-8 w-8 text-photon-400 group-hover:text-photon-300" />
                    </div>
                    <CardTitle className="text-xl font-bold">Digital Twin Development</CardTitle>
                    <div className="w-12 h-1 bg-photon-400 rounded-full mt-2"></div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-photon-200 text-base leading-relaxed">
                      Virtual replicas for simulation, testing, and optimization using AI powered technology.
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/services/physical-ai">
                <Card className="bg-photon-900/50 border border-photon-800 text-white group glassmorphism hover:border-photon-500/50 transition-all duration-300 cursor-pointer relative z-10 animate-fadeIn">
                  <CardHeader className="flex flex-col items-center text-center pb-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-500 transition-all duration-300 group-hover:border-photon-400">
                      <BrainIcon className="h-8 w-8 text-photon-500 group-hover:text-photon-400" />
                    </div>
                    <CardTitle className="text-xl font-bold">Physical AI Training</CardTitle>
                    <div className="w-12 h-1 bg-photon-500 rounded-full mt-2"></div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-photon-200 text-base leading-relaxed">
                      Advanced AI training for systems that interact with the physical world through sensors, robotics, and real-world applications.
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>

            </div>

            <h3 className="text-2xl font-bold text-white text-center mb-8">Supporting Services</h3>
            <div className="grid gap-8 md:grid-cols-4 max-w-7xl mx-auto">
              <Link href="/services/design">
                <Card className="bg-photon-900/50 border border-photon-800 text-white group glassmorphism hover:border-photon-500/50 transition-all duration-300 cursor-pointer relative z-10 animate-fadeIn">
                  <CardHeader className="flex flex-col items-center text-center pb-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-500 transition-all duration-300 group-hover:border-photon-400">
                      <PenToolIcon className="h-8 w-8 text-photon-500 group-hover:text-photon-400" />
                    </div>
                    <CardTitle className="text-xl font-bold">Design Services</CardTitle>
                    <div className="w-12 h-1 bg-photon-500 rounded-full mt-2"></div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-photon-200 text-base leading-relaxed">
                      Concept design, 3D modeling, CAD drawings, UI/UX design, and branding solutions.
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/services/visualization">
                <Card className="bg-photon-900/50 border border-photon-800 text-white group glassmorphism hover:border-photon-600/50 transition-all duration-300 cursor-pointer relative z-10 animate-fadeIn">
                  <CardHeader className="flex flex-col items-center text-center pb-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-600 transition-all duration-300 group-hover:border-photon-500">
                      <MonitorIcon className="h-8 w-8 text-photon-600 group-hover:text-photon-500" />
                    </div>
                    <CardTitle className="text-xl font-bold">Visualization Services</CardTitle>
                    <div className="w-12 h-1 bg-photon-600 rounded-full mt-2"></div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-photon-200 text-base leading-relaxed">
                      Technical drawings, animations, real time demos, and interactive presentations.
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/services/engineering">
                <Card className="bg-photon-900/50 border border-photon-800 text-white group glassmorphism hover:border-photon-600/50 transition-all duration-300 cursor-pointer relative z-10 animate-fadeIn">
                  <CardHeader className="flex flex-col items-center text-center pb-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-600 transition-all duration-300 group-hover:border-photon-500">
                      <CogIcon className="h-8 w-8 text-photon-600 group-hover:text-photon-500" />
                    </div>
                    <CardTitle className="text-xl font-bold">Engineering &amp; Industrial Design</CardTitle>
                    <div className="w-12 h-1 bg-photon-600 rounded-full mt-2"></div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-photon-200 text-base leading-relaxed">
                      Product engineering, technical documentation, and manufacturing consultation.
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/services/artificial-data">
                <Card className="bg-photon-900/50 border border-photon-800 text-white group glassmorphism hover:border-photon-600/50 transition-all duration-300 cursor-pointer relative z-10 animate-fadeIn">
                  <CardHeader className="flex flex-col items-center text-center pb-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-600 transition-all duration-300 group-hover:border-photon-500">
                      <DatabaseIcon className="h-8 w-8 text-photon-600 group-hover:text-photon-500" />
                    </div>
                    <CardTitle className="text-xl font-bold">Artificial Data Development</CardTitle>
                    <div className="w-12 h-1 bg-photon-600 rounded-full mt-2"></div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-photon-200 text-base leading-relaxed">
                      Synthetic datasets for AI training and model validation.
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>

          <div className="text-center mt-16 animate-fadeIn">
            <Link href="/services">
              <Button className="btn-primary px-10 py-4 text-lg font-semibold group animate-pulse-glow">
                Explore All Services
                <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-photon-950 text-white relative z-10">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center animate-fadeIn">
            <h2 className="section-title mb-6">Our Mission</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-8">
              CONCEPTS VISUALIZED and VALIDATED
            </h3>
            <p className="text-lg md:text-xl text-photon-200 max-w-3xl mx-auto leading-relaxed">
              We transform bold ideas into breakthrough products and systems. Through advanced design, visualization, and engineering services, we bridge the gap between what's imagined and what's possible. Our focus on AI driven innovation and traditional engineering excellence ensures your vision becomes reality.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-photon-900 text-white relative z-10">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title mb-6">Our Story</h2>
            <div className="glassmorphism p-8 max-w-3xl mx-auto animate-fadeIn">
              <p className="text-lg text-photon-200 mb-6 leading-relaxed">
                We founded Photon Echo to bridge the gap between innovative ideas and real world implementation. We saw the need for agile design and engineering services that could keep pace with rapid technological advancement.
              </p>
              <p className="text-lg text-photon-200 leading-relaxed">
                Our approach combines advanced technology with proven methodologies to deliver exceptional results for every project.
              </p>
            </div>
          </div>
        </div>
      </section>

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
                  Get Started
                  <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="px-12 py-4 text-lg font-semibold border-white/30 text-white hover:bg-white/10 bg-transparent"
                >
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}