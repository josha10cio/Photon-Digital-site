import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Early Access – Photon Echo",
  description: "Request a conversation about early pilots and collaboration around Photon Echo simulation and synthetic data systems.",
}

export default function EarlyAccessPage() {
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
                Early access
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Photon Echo is opening a limited early access window for teams that want to explore pilots, scenario modeling, and validation work while Phase I is in progress. Early access is about collaboration that helps shape the infrastructure, not self service access to a finished product.
              </p>
            </div>

            {/* Right Column - Placeholder for Image */}
            <div className="bg-gray-800 rounded-lg min-h-[300px] flex items-center justify-center">
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: What Early Access Means */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-start max-w-6xl mx-auto">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-6">
                What early access means
              </h2>
              <ul className="text-lg text-gray-600 leading-relaxed space-y-4 list-disc pl-6">
                <li>Review your physical AI goals and constraints</li>
                <li>Identify a domain and set of scenarios where simulation based data could add value</li>
                <li>Define a focused pilot scope that fits Phase I capabilities</li>
                <li>Agree on what success would look like for both teams</li>
              </ul>
            </div>

            {/* Right Column - Placeholder for Image */}
            <div className="bg-gray-100 rounded-lg min-h-[300px] flex items-center justify-center">
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Who Early Access is For */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-start max-w-6xl mx-auto">
            {/* Left Column - Placeholder for Image */}
            <div className="bg-gray-200 rounded-lg min-h-[300px] flex items-center justify-center order-2 lg:order-1">
            </div>

            {/* Right Column - Text Content */}
            <div className="text-left order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-6">
                Who early access is for
              </h2>
              <ul className="text-lg text-gray-600 leading-relaxed space-y-4 list-disc pl-6">
                <li>Robotics and autonomy teams with active development programs</li>
                <li>Industrial or manufacturing groups exploring new data workflows</li>
                <li>Defense or government programs investigating simulation based validation</li>
                <li>Research groups in embodied AI that want to test ideas with structured scenario data</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-28 bg-[#272727]">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-6">
              Join early access
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Tell us about your physical AI work and how simulation based data might fit your workflow. We can explore whether an early access collaboration makes sense.
            </p>
            <Link href="/contact">
              <Button 
                variant="default" 
                size="lg"
                className="bg-[#33bfff] hover:bg-[#2aa3d9] text-white px-8 py-6 text-base font-medium rounded-md"
              >
                Request early access
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
