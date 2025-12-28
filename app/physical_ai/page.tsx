import { Button } from "@/components/ui/button"
import { ArrowRightIcon, CheckCircleIcon } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Physical AI Development – Photon Echo",
  description: "How Photon Echo uses simulation based infrastructure to support development and evaluation of physical AI systems.",
}

export default function PhysicalAIPage() {
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
                Physical AI development
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Photon Echo focuses on data and simulation infrastructure for physical AI. It builds environments, behaviors, and structured datasets that help systems perceive, decide, and act in the physical world with more confidence and control.
              </p>
            </div>

            {/* Right Column - Placeholder for Image */}
            <div className="bg-gray-800 rounded-lg min-h-[300px] flex items-center justify-center">
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Focus on Physical Systems */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-6">
                Focus on physical systems
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Physical AI systems need to see and understand their surroundings, predict outcomes, and take actions that respect safety and constraints. Photon Echo models the environments, agents, and interactions that matter for these systems so that developers can explore behavior before hardware is committed.
              </p>
            </div>

            {/* Right Column - Placeholder for Image */}
            <div className="bg-gray-100 rounded-lg min-h-[300px] flex items-center justify-center">
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Simulation Areas */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-start max-w-6xl mx-auto">
            {/* Left Column - Placeholder for Image */}
            <div className="bg-gray-200 rounded-lg min-h-[350px] flex items-center justify-center order-2 lg:order-1">
            </div>

            {/* Right Column - Text Content */}
            <div className="text-left order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-6">
                Simulation areas
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-[#33bfff] mt-0.5 flex-shrink-0" />
                  <span className="text-lg text-gray-600">Perception tasks that rely on structured scenario data and clear annotations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-[#33bfff] mt-0.5 flex-shrink-0" />
                  <span className="text-lg text-gray-600">Robotics and manipulation tasks that involve contact with objects and surfaces</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-[#33bfff] mt-0.5 flex-shrink-0" />
                  <span className="text-lg text-gray-600">Autonomous navigation and planning in structured or semi structured environments</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-[#33bfff] mt-0.5 flex-shrink-0" />
                  <span className="text-lg text-gray-600">Monitoring and inspection tasks where small changes can signal important events</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: From Environment to Artifact */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-start max-w-6xl mx-auto">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-6">
                From environment to artifact
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Work on physical AI in Photon Echo follows a simple pattern
              </p>
              <ol className="space-y-4 list-decimal pl-6">
                <li className="text-lg text-gray-600">define the environment and assets that are relevant to a use case</li>
                <li className="text-lg text-gray-600">model how agents and systems behave inside that environment</li>
                <li className="text-lg text-gray-600">design scenarios that surface the questions and edge cases that matter</li>
                <li className="text-lg text-gray-600">run simulation passes that produce structured artifacts and labels</li>
                <li className="text-lg text-gray-600">review results, refine models, and repeat</li>
              </ol>
            </div>

            {/* Right Column - Placeholder for Image */}
            <div className="bg-gray-100 rounded-lg min-h-[400px] flex items-center justify-center">
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-28 bg-[#272727]">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-6">
              Discuss your physical AI work
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Tell us about the physical AI challenges you are working on and how simulation based data might support your development and evaluation needs.
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
        </div>
      </section>
    </div>
  )
}
