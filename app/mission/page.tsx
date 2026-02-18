import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mission – Photon Echo",
  description: "Photon Echo mission, focus areas, and vision for simulation driven synthetic data in physical AI.",
}

export default function MissionPage() {
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
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-tight mb-6">
                Our mission
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                To build structured simulation and validation infrastructure that improves reliability and reproducibility in robotics perception systems.
              </p>
            </div>

            {/* Right Column - Placeholder for Image */}
            <div className="bg-gray-800 rounded-lg min-h-[300px] flex items-center justify-center">
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Why We Exist */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-6">
                Why we exist
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Robotics perception teams need reproducible validation coverage across environments that are difficult or unsafe to capture in the field. Structured simulation infrastructure supplies controlled scenarios, measurable variations, and repeatable benchmarks without relying on uncontrolled data capture cycles.
              </p>
            </div>

            {/* Right Column - Placeholder for Image */}
            <div className="bg-gray-100 rounded-lg min-h-[300px] flex items-center justify-center">
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: How We Work */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
            {/* Left Column - Placeholder for Image */}
            <div className="bg-gray-200 rounded-lg min-h-[300px] flex items-center justify-center order-2 lg:order-1">
            </div>

            {/* Right Column - Text Content */}
            <div className="text-left order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-6">
                How we work
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Photon Echo builds simulator agnostic orchestration, scenario libraries, and dataset governance workflows. Every environment, agent, and annotation is tied to explicit evaluation objectives so validation results remain reproducible and comparable across model versions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Focus Areas */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-start max-w-6xl mx-auto">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-6">
                Focus areas
              </h2>
              <ul className="text-lg text-gray-600 leading-relaxed space-y-4 list-disc pl-6">
                <li>Scenario library development for industrial and autonomous domains</li>
                <li>Structured synthetic dataset generation with lineage tracking</li>
                <li>Regression benchmarking across perception model versions</li>
                <li>Perception validation analytics under controlled edge cases</li>
                <li>Simulator agnostic orchestration for enterprise workflows</li>
              </ul>
            </div>

            {/* Right Column - Placeholder for Image */}
            <div className="bg-gray-100 rounded-lg min-h-[350px] flex items-center justify-center">
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Values */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
            {/* Left Column - Placeholder for Image */}
            <div className="bg-gray-200 rounded-lg min-h-[250px] flex items-center justify-center order-2 lg:order-1">
            </div>

            {/* Right Column - Text Content */}
            <div className="text-left order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-6">
                Values
              </h2>
              <ul className="text-lg text-gray-600 leading-relaxed space-y-4 list-disc pl-6">
                <li>Excellence in technical execution</li>
                <li>Collaboration with domain experts and partners</li>
                <li>Commitment to partner outcomes and long term reliability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Vision */}
      <section className="w-full py-20 md:py-28 bg-[#272727]">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-6">
              Vision
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Reliable autonomy depends on reproducible validation infrastructure. Photon Echo builds the structured simulation systems that make perception evaluation consistent, scalable, and operationally useful.
            </p>
            <Link href="/contact">
              <Button 
                variant="default" 
                size="lg"
                className="bg-[#33bfff] hover:bg-[#2aa3d9] text-white px-8 py-6 text-base font-medium rounded-md"
              >
                Contact Photon Echo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
