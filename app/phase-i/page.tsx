import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Phase I – Photon Echo",
  description: "Phase I is the first demonstration of the Photon Echo simulation based data pipeline for physical AI.",
}

export default function PhaseIPage() {
  return (
    <div className="flex flex-col min-h-[calc(100dvh-4rem)]">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-[#272727] text-white overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/phase-1.mp4" type="video/mp4" />
          </video>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6 lg:px-8">
          <div className="max-w-2xl">
            {/* Black opaque box with rounded corners */}
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 md:p-10 lg:p-12">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-tight mb-8">
                Phase I
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Phase I is a prototype of the Photon Echo simulation workflow. It connects environment construction, behavior modeling, dynamics, sensor level signal synthesis, scenario variation, labeling, and validation into one end to end pipeline for physical AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Scope of Phase I */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-start max-w-6xl mx-auto">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-6">
                Scope of Phase I
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Phase I focuses on a narrow but complete slice of the overall system.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">It includes</p>
              <ul className="text-lg text-gray-600 leading-relaxed space-y-3 list-disc pl-6">
                <li>environment and asset construction for a selected domain</li>
                <li>agent and behavior modeling that captures realistic interaction patterns</li>
                <li>simulation of sensor level signals inside the virtual scene</li>
                <li>systematic scenario variation across conditions and edge cases</li>
                <li>automatic generation of structured labels and metadata</li>
                <li>early transfer checks against a limited set of real observations</li>
              </ul>
            </div>

            {/* Right Column - Placeholder for Image */}
            <div className="bg-gray-100 rounded-lg min-h-[400px] flex items-center justify-center">
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Objectives */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-start max-w-6xl mx-auto">
            {/* Left Column - Placeholder for Image */}
            <div className="bg-gray-200 rounded-lg min-h-[350px] flex items-center justify-center order-2 lg:order-1">
            </div>

            {/* Right Column - Text Content */}
            <div className="text-left order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-6">
                Objectives
              </h2>
              <ul className="text-lg text-gray-600 leading-relaxed space-y-4 list-disc pl-6">
                <li>Demonstrate a complete simulation based data pipeline that can be repeated and extended</li>
                <li>Produce a focused demonstration dataset that shows the structure and depth of Photon Echo outputs</li>
                <li>Document validation results and any gaps between simulation and real observations</li>
                <li>Define the priorities and technical roadmap for the next phase of development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: What Partners Can Expect */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-6">
                What partners can expect
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Partners in Phase I will see how simulation and structured artifacts move through the workflow from initial scene design to labeled data that is ready for training or evaluation. The emphasis is on clarity, traceability, and repeatable structure that can be scaled in later phases.
              </p>
            </div>

            {/* Right Column - Placeholder for Image */}
            <div className="bg-gray-100 rounded-lg min-h-[300px] flex items-center justify-center">
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Path Beyond Phase I */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
            {/* Left Column - Placeholder for Image */}
            <div className="bg-gray-200 rounded-lg min-h-[300px] flex items-center justify-center order-2 lg:order-1">
            </div>

            {/* Right Column - Text Content */}
            <div className="text-left order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-6">
                Path beyond Phase I
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Findings from Phase I will guide follow on work, including expanded domains, richer behavior models, and deeper integration into existing robotics and autonomy pipelines. The long term direction is a platform that provides repeatable simulation workflows and structured outputs, and Phase I is the foundation that proves the core ideas.
              </p>
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
                Explore Phase I
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Learn more about how Phase I demonstrates the Photon Echo simulation workflow and how your organization can participate.
              </p>
              <Link href="/contact">
                <Button 
                  variant="default" 
                  size="lg"
                  className="bg-[#33bfff] hover:bg-[#2aa3d9] text-white px-8 py-6 text-base font-medium rounded-md"
                >
                  Discuss Phase I collaboration
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
