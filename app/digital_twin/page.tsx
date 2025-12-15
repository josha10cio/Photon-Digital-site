import { Button } from "@/components/ui/button"
import { ArrowRightIcon, CheckCircleIcon } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Digital Twin Systems – Photon Echo",
  description: "Digital twin concepts in the Photon Echo infrastructure that extend simulation into testing and monitoring for physical AI systems.",
}

export default function DigitalTwinPage() {
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
                Digital twin systems
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Photon Echo explores digital twin style systems that extend the same simulation pipeline used for training into testing and monitoring. These twins focus on behavior, state, and performance so teams can study how physical AI systems respond as conditions change over time.
              </p>
            </div>

            {/* Right Column - Placeholder for Image */}
            <div className="bg-gray-800 rounded-lg min-h-[300px] flex items-center justify-center">
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Role of Digital Twins */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-6">
                Role of digital twins in the infrastructure
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Digital twins provide a live or near live representation of selected equipment, environments, or processes. Within the Photon Echo direction they are a way to reuse simulation assets and workflows to understand how models behave under different conditions, without making changes directly in the field.
              </p>
            </div>

            {/* Right Column - Placeholder for Image */}
            <div className="bg-gray-100 rounded-lg min-h-[300px] flex items-center justify-center">
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What a Twin Can Provide */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-start max-w-6xl mx-auto">
            {/* Left Column - Placeholder for Image */}
            <div className="bg-gray-200 rounded-lg min-h-[350px] flex items-center justify-center order-2 lg:order-1">
            </div>

            {/* Right Column - Text Content */}
            <div className="text-left order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-6">
                What a twin can provide
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-[#33bfff] mt-0.5 flex-shrink-0" />
                  <span className="text-lg text-gray-600">Simulation based views that mirror a real environment or system state</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-[#33bfff] mt-0.5 flex-shrink-0" />
                  <span className="text-lg text-gray-600">Safe spaces to explore changes to models, control logic, or operating conditions before deployment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-[#33bfff] mt-0.5 flex-shrink-0" />
                  <span className="text-lg text-gray-600">Feedback on how decision making systems respond as scenarios evolve</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-[#33bfff] mt-0.5 flex-shrink-0" />
                  <span className="text-lg text-gray-600">A bridge between training data, test data, and operational observations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Connection to Photon Echo Data Pipelines */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-6">
                Connection to Photon Echo data pipelines
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                The same structured artifacts used for training and evaluation can support digital twin style views. Scenario definitions, environment structure, and behavior models become a shared layer between offline experimentation and ongoing monitoring. This keeps simulation and real world context aligned and supports long term infrastructure rather than one off projects.
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
          <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-6">
                Explore digital twin concepts
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                If your team is interested in how digital twin approaches might fit your physical AI workflows, reach out to discuss how Photon Echo can help.
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
            <div className="bg-gray-800 rounded-lg min-h-[250px] flex items-center justify-center">
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
