import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRightIcon } from "lucide-react"
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
                <Link href="/investors">
                  <Button 
                    variant="default" 
                    size="lg"
                    className="bg-[#33bfff] hover:bg-[#2aa3d9] text-white px-8 py-6 text-base font-medium rounded-md"
                  >
                    Request Investor Overview
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="bg-black/40 hover:bg-black/60 border-white/30 text-white px-8 py-6 text-base font-medium rounded-md backdrop-blur-sm"
                  >
                    Contact
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: What Photon Echo Does */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-start max-w-6xl mx-auto">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-6">
                What Photon Echo does
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Photon Echo builds simulation systems that model environments, behaviors, and interactions for physical AI. These systems produce structured simulation artifacts and datasets that support perception, decision, and control workflows without requiring raw sensor streams.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="relative rounded-lg min-h-[300px] overflow-hidden">
              <Image
                src="/what-photon-echo-does.png"
                alt="Digital twin warehouse with autonomous robots and holographic overlays"
                fill
                className="object-cover rounded-lg"
                quality={85}
              />
            </div>
          </div>

          {/* Cards Row */}
          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto mt-16">
            <Card className="bg-[#272727] border border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white text-left">Physical AI simulation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-left">
                  We construct scenes, agents, and scenario variations that generate structured data for perception and control tasks. Teams can study specific conditions, edge cases, and behavior patterns before hardware is sent into the field.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-[#272727] border border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white text-left">Digital twin development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-left">
                  We use related simulation tools to explore digital twin style models that support testing and monitoring of physical systems. These twins focus on behavior and state and help bridge training and real world deployment.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 2: Why Synthetic Data for Physical Systems */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
            {/* Left Column - Image */}
            <div className="relative rounded-lg min-h-[350px] overflow-hidden order-2 lg:order-1">
              <Image
                src="/real-world-data-in-co02mplex-environments.png"
                alt="Real world data collection in complex environments"
                fill
                className="object-cover rounded-lg"
                quality={85}
              />
            </div>

            {/* Right Column - Text Content */}
            <div className="text-left order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-6">
                Why synthetic data for physical systems
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Collecting real world data in complex environments is slow and expensive and is often constrained by safety, privacy, or limited access. Synthetic data lets teams design scenarios on purpose, explore rare or risky events, and repeat them exactly when needed. When simulation is aligned with real conditions, physical AI teams can train and evaluate models faster while reducing field risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Who Photon Echo is For */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-6">
                Who Photon Echo is for
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Photon Echo supports organizations that build or evaluate physical AI systems. This includes robotics companies, industrial automation and inspection teams, advanced manufacturing groups, defense autonomy programs, and research organizations working in embodied AI.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="relative rounded-lg min-h-[350px] overflow-hidden">
              <Image
                src="/real-world-data-in-complex-environments.png"
                alt="Physical AI systems in real world environments"
                fill
                className="object-cover rounded-lg"
                quality={85}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA: Share Your Goals */}
      <section className="w-full py-20 md:py-28 bg-[#272727]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-6">
                Share your goals
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Tell us about your physical AI work, the environments you care about, and the failure modes you want to understand. We can explore whether a pilot or collaboration around simulation and synthetic data makes sense.
              </p>
              <Link href="/contact">
                <Button 
                  variant="default" 
                  size="lg"
                  className="bg-[#33bfff] hover:bg-[#2aa3d9] text-white px-8 py-6 text-base font-medium rounded-md"
                >
                  Contact Photon Echo
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Right Column - Placeholder for Image */}
            <div className="bg-gray-800 rounded-lg min-h-[300px] flex items-center justify-center">
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
