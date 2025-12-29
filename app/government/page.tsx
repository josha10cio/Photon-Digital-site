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

        <div className="container relative z-10 px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-tight mb-8">
              Government
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Photon Echo is preparing for future collaboration with government and public sector programs that need secure synthetic data and digital twin style systems for physical AI. Certifications and registrations are in progress and details will be shared as they are finalized.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Who this is for */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-6 text-center">
              Who this is for
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed text-center">
              Federal agencies, research programs, and public sector partners
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Registration status */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-6 text-center">
              Registration status
            </h2>
            <div className="text-lg text-gray-600 leading-relaxed space-y-4 text-center">
              <p>Registered in SAM.gov and Research.gov</p>
              <p>Eligible for federal assistance and research awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Capabilities */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-6 text-center">
              Capabilities
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed text-center">
              High level technical focus
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Contact */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-6">
              Contact
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              <a href="mailto:info@photonecho.dev" className="text-[#33bfff] hover:text-[#2aa3d9] transition-colors">
                info@photonecho.dev
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-28 bg-[#272727]">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
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
        </div>
      </section>
    </div>
  )
}
