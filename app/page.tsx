import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PlayIcon, ArrowRightIcon } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Photon Echo Physical AI and Synthetic Data",
  description: "We build virtual worlds and simulated sensors that produce synthetic training data for physical AI systems.",
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden">
        {/* Banner Image Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner-image-data-01.png"
            alt="Military landscape with soldiers and wireframe military assets"
            fill
            priority
            className="object-cover"
            quality={90}
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        </div>

        {/* Content - Right Aligned */}
        <div className="container relative z-10 px-4 md:px-6 lg:px-8">
          <div className="max-w-2xl ml-auto">
            {/* Black opaque box with rounded corners */}
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 md:p-10 lg:p-12">
              <p className="text-sm md:text-base font-medium text-[#33bfff] mb-4 tracking-wider uppercase">
                PHYSICAL AI INFRASTRUCTURE
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Simulation & Synthetic Data for <span className="text-[#33bfff]">Physical AI</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-white mb-10 leading-relaxed max-w-xl">
                Structured virtual environments and scenario-based data so autonomous technologies can be trained and evaluated safely, repeatably, and with better coverage than field collection alone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/early-access">
                  <Button 
                    variant="default" 
                    size="lg"
                    className="bg-[#33bfff] hover:bg-[#2aa3d9] text-white px-8 py-6 text-base font-medium rounded-md"
                  >
                    Request Early Access
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="bg-black/40 hover:bg-black/60 border-white/30 text-white px-8 py-6 text-base font-medium rounded-md backdrop-blur-sm"
                  >
                    <PlayIcon className="mr-2 h-5 w-5" />
                    View Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="w-full py-16 md:py-24 bg-white text-gray-900">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-4">What We Do</h2>
            <p className="text-lg text-gray-600">
              Photon Echo creates accurate 3D environments and simulates sensors to produce high quality synthetic training data. This data helps physical AI systems see, decide, and act with confidence.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            <Card className="bg-[#272727] border border-gray-200 hover:border-[#33bfff] hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Physical AI Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-photon-200">
                  We build scenes, sensors, and scenarios that generate labeled data for perception and control tasks.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-[#272727] border border-gray-200 hover:border-[#33bfff] hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Digital Twin Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-photon-200">
                  We design live simulation and feedback loops that validate models and monitor performance after deployment.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Synthetic Data */}
      <section className="w-full py-16 md:py-24 bg-white text-gray-900">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-4">Why Synthetic Data</h2>
          <p className="text-lg text-gray-600">
            Real world data can be limited, expensive, or sensitive. Synthetic data provides scale, coverage, and safety. By matching real conditions in simulation, teams can train models faster and reduce risk before field testing.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 md:py-28 bg-[#272727] text-white text-center">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get started</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">Share your goals and we will propose a practical data plan.</p>
          <Link href="/contact">
            <Button variant="primary" size="xl">Start Your Project</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}