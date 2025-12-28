import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRightIcon, CheckCircleIcon } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Investors – Photon Echo",
  description: "Overview for investors and partners interested in Photon Echo and its simulation driven data systems for physical AI.",
  openGraph: {
    title: "Investors – Photon Echo",
    description: "Overview for investors and partners interested in Photon Echo and its simulation driven data systems for physical AI.",
    url: "https://www.photonecho.dev/investors",
    siteName: "Photon Echo",
    images: [
      {
        url: "/echo_Update_Logo_Dark-Grey.png",
        width: 1200,
        height: 630,
        alt: "Photon Echo Investors Page"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Investors – Photon Echo",
    description: "Overview for investors and partners interested in Photon Echo and its simulation driven data systems for physical AI.",
    images: ["/echo_Update_Logo_Dark-Grey.png"]
  }
}

export default function InvestorsPage() {
  return (
    <div className="flex flex-col min-h-[calc(100dvh-4rem)] bg-white">
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
                Invest in the future of physical AI
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10">
                Photon Echo is building simulation and synthetic data systems for physical AI and embodied autonomy. These systems focus on structured simulation artifacts and repeatable workflows so teams can explore the environments, interactions, and failure modes that matter most before real world deployment. Photon Echo is engaging with strategic partners who understand the role of simulation in scaling intelligent physical systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
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
                    className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base font-medium rounded-md"
                  >
                    Schedule Investor Call
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column - Placeholder for Image */}
            <div className="bg-gray-800 rounded-lg min-h-[350px] flex items-center justify-center">
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: A Market Shaped by Data and Simulation */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-6">
                A market shaped by data and simulation
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Demand for realistic training and evaluation data is increasing as robotics and autonomous systems take on more responsibility in complex settings. Simulation and synthetic data are becoming standard tools for designing coverage, probing edge cases, and validating system behavior without exposing people or hardware to unnecessary risk.
              </p>
            </div>

            {/* Right Column - Placeholder for Image */}
            <div className="bg-gray-100 rounded-lg min-h-[300px] flex items-center justify-center">
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Advantage */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-12 lg:grid-cols-2 items-start">
              {/* Left Column - Placeholder for Image */}
              <div className="bg-gray-200 rounded-lg min-h-[450px] flex items-center justify-center order-2 lg:order-1">
              </div>

              {/* Right Column - Text Content */}
              <div className="text-left order-1 lg:order-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-8">
                  Our advantage
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Technical depth</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Photon Echo combines simulation, visualization, and data engineering experience to build environments that matter for physical AI, not just visually impressive scenes.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Behavior grounded approach</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      The focus is on structured artifacts that describe state, interactions, and outcomes. Every asset and scenario exists to support clear training or evaluation goals.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Scalable data workflows</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Photon Echo is designed around repeatable data generation and scenario authoring workflows. These workflows are intended to expand across new domains as the system matures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Roadmap */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-12 lg:grid-cols-2 items-start">
              {/* Left Column - Text Content */}
              <div className="text-left">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-8">
                  Our roadmap
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Current work</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Build internal simulation workflows and data generation environments for selected domains and produce early demonstration datasets that show structure and fidelity.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Next steps</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Form technical collaborations with robotics and industrial teams that are exploring physical AI data pipelines. Refine world building, behavior models, and labeling standards together with real use cases.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Future direction</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Evolve these capabilities into a platform for structured simulation data and digital twin testing, with repeatable pipelines that can support many projects and partners.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Placeholder for Image */}
              <div className="bg-gray-100 rounded-lg min-h-[450px] flex items-center justify-center">
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Why Invest Now */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-start max-w-6xl mx-auto">
            {/* Left Column - Placeholder for Image */}
            <div className="bg-gray-200 rounded-lg min-h-[350px] flex items-center justify-center order-2 lg:order-1">
            </div>

            {/* Right Column - Text Content */}
            <div className="text-left order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-8">
                Why invest now
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-[#33bfff] mt-0.5 flex-shrink-0" />
                  <span className="text-lg text-gray-600">Physical AI depends on strong data and simulation foundations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-[#33bfff] mt-0.5 flex-shrink-0" />
                  <span className="text-lg text-gray-600">Simulation based data workflows are moving from optional tools to essential infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-[#33bfff] mt-0.5 flex-shrink-0" />
                  <span className="text-lg text-gray-600">There is room for focused players who understand physical environments rather than broad general data services</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-[#33bfff] mt-0.5 flex-shrink-0" />
                  <span className="text-lg text-gray-600">Photon Echo is early enough that partners can still influence direction while the core system is being defined</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-20 md:py-28 bg-[#272727]">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-6">
              Ready to invest
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Photon Echo is speaking with a small group of investors and partners who want to help shape the next phase of physical AI infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
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
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base font-medium rounded-md"
                >
                  Schedule Investor Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
