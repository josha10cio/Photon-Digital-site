import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Government – Photon Echo",
  description: "Information for government and public sector programs interested in secure simulation based synthetic data and digital twin style systems.",
}

export default function GovernmentPage() {
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
                Government
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Photon Echo is preparing for future collaboration with government and public sector programs that need secure synthetic data and digital twin style systems for physical AI. Certifications and registrations are in progress and details will be shared as they are finalized.
              </p>
            </div>

            {/* Right Column - Placeholder for Image */}
            <div className="bg-gray-800 rounded-lg min-h-[300px] flex items-center justify-center">
            </div>
          </div>
        </div>
      </section>

      {/* Section: Working with Government Partners */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-start max-w-6xl mx-auto">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-6">
                Working with government partners
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                We aim to support programs that
              </p>
              <ul className="text-lg text-gray-600 leading-relaxed space-y-4 list-disc pl-6">
                <li>explore autonomy and robotics in safety critical environments</li>
                <li>need controlled simulation for testing and validation</li>
                <li>require careful handling of sensitive information and infrastructure constraints</li>
              </ul>
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
                Start the conversation
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                If your program is exploring simulation based approaches for physical AI, reach out to discuss how Photon Echo might support your objectives.
              </p>
              <Link href="/contact">
                <Button 
                  variant="default" 
                  size="lg"
                  className="bg-[#33bfff] hover:bg-[#2aa3d9] text-white px-8 py-6 text-base font-medium rounded-md"
                >
                  Discuss government collaboration
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
