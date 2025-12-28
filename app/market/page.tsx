import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Market – Photon Echo",
  description: "How simulation driven synthetic data supports the growth of physical AI and embodied autonomy.",
}

export default function MarketPage() {
  return (
    <div className="flex flex-col min-h-[calc(100dvh-4rem)]">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-[#272727] text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-photon-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
          <div
            className="absolute top-1/3 right-1/4 w-96 h-96 bg-photon-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-tight mb-8">
                Market
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Physical AI is moving from research into deployed systems. Teams need reliable ways to explore complex environments, rare events, and safety critical edge cases before those systems touch the real world. Simulation driven synthetic data is becoming a central part of that stack.
              </p>
            </div>

            {/* Right Column - Placeholder for Image */}
            <div className="bg-gray-800 rounded-lg min-h-[300px] flex items-center justify-center">
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Where Photon Echo Fits */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-6">
                Where Photon Echo fits
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Photon Echo sits at the intersection of simulation, structured data generation, and physical AI workflows. It concentrates on environments where machines see, move, and act in physical space instead of generating generic synthetic data across every domain.
              </p>
            </div>

            {/* Right Column - Placeholder for Image */}
            <div className="bg-gray-100 rounded-lg min-h-[300px] flex items-center justify-center">
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Segments We Focus On */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-start max-w-6xl mx-auto">
            {/* Left Column - Placeholder for Image */}
            <div className="bg-gray-200 rounded-lg min-h-[400px] flex items-center justify-center order-2 lg:order-1">
            </div>

            {/* Right Column - Text Content */}
            <div className="text-left order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-6">
                Segments we focus on
              </h2>
              <ul className="text-lg text-gray-600 leading-relaxed space-y-4 list-disc pl-6">
                <li>Robotics and autonomous platforms that operate in structured or semi structured environments</li>
                <li>Industrial automation and inspection systems that monitor equipment and processes</li>
                <li>Advanced manufacturing teams that want to test quality and safety in controlled scenarios</li>
                <li>Defense and security programs working on autonomy, logistics, and sensing in complex environments</li>
                <li>Research groups in embodied AI that need controlled, repeatable scenario data</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why This Matters Now */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-6">
                Why this matters now
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                As physical AI matures, the limiting factor is often not model architecture but the data available for training and evaluation. Field collection can be risky or slow, and some events are too rare to count on. Structured simulation data lets teams design coverage on purpose. Organizations that control their simulation and data pipelines can move faster while managing risk more effectively.
              </p>
            </div>

            {/* Right Column - Placeholder for Image */}
            <div className="bg-gray-100 rounded-lg min-h-[300px] flex items-center justify-center">
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-28 bg-[#272727]">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-6">
              Explore your segment
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Tell us about your market segment and the challenges you face with physical AI data. We can discuss how simulation driven synthetic data might fit your workflow.
            </p>
            <Link href="/contact">
              <Button 
                variant="default" 
                size="lg"
                className="bg-[#33bfff] hover:bg-[#2aa3d9] text-white px-8 py-6 text-base font-medium rounded-md"
              >
                Talk about your segment
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
