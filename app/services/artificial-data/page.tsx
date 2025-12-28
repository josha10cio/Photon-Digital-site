import { Button } from "@/components/ui/button"
import { ArrowRightIcon, CheckCircleIcon } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Artificial Data Development – Photon Echo",
  description: "Artificial data development within the Photon Echo infrastructure, focused on simulation generated datasets for physical AI systems.",
}

export default function ArtificialDataPage() {
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
                Artificial data development
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Artificial data development at Photon Echo is part of the simulation infrastructure for physical AI. It focuses on datasets that come from controlled virtual environments rather than synthetic records created from arbitrary tables. The goal is to supply structured scenario data that reflects how autonomous systems interact with the physical world.
              </p>
            </div>

            {/* Right Column - Placeholder for Image */}
            <div className="bg-gray-800 rounded-lg min-h-[300px] flex items-center justify-center">
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: What Artificial Data Means */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-6">
                What artificial data means in Photon Echo
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Artificial data in this context is information generated from simulation, shaped by real constraints and observations. Environments, behaviors, and events are designed to mirror selected real situations without exposing raw proprietary recordings. The emphasis is on structure, traceability, and the ability to rerun scenarios as needed.
              </p>
            </div>

            {/* Right Column - Placeholder for Image */}
            <div className="bg-gray-100 rounded-lg min-h-[300px] flex items-center justify-center">
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: How This Supports Physical AI */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-start max-w-6xl mx-auto">
            {/* Left Column - Placeholder for Image */}
            <div className="bg-gray-200 rounded-lg min-h-[350px] flex items-center justify-center order-2 lg:order-1">
            </div>

            {/* Right Column - Text Content */}
            <div className="text-left order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-6">
                How this supports physical AI
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Artificial data development supports physical AI teams by
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-[#33bfff] mt-0.5 flex-shrink-0" />
                  <span className="text-lg text-gray-600">providing structured scenario data when field collection is difficult or unsafe</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-[#33bfff] mt-0.5 flex-shrink-0" />
                  <span className="text-lg text-gray-600">letting teams study rare or extreme conditions on purpose</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-[#33bfff] mt-0.5 flex-shrink-0" />
                  <span className="text-lg text-gray-600">offering a consistent way to compare models under the same conditions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-[#33bfff] mt-0.5 flex-shrink-0" />
                  <span className="text-lg text-gray-600">creating a foundation that can be extended into digital twin style monitoring when needed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Place in the Infrastructure Roadmap */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-6">
                Place in the infrastructure roadmap
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Artificial data development is a core layer of the Photon Echo infrastructure. Phase I focuses on building the first end to end pipeline that can generate and validate this kind of data. Future phases will expand domains, refine behavior models, and deepen integration with existing autonomy and robotics tools.
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
              Explore artificial data for your work
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Tell us about your physical AI challenges and how simulation generated data might support your development and evaluation workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <Link href="/phase-i">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base font-medium rounded-md"
                >
                  Learn more about Phase I
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
