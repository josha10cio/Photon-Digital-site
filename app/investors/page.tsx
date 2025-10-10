import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUpIcon, TargetIcon, RocketIcon, UsersIcon, CheckCircleIcon, FileTextIcon, CalendarIcon, MapIcon, ZapIcon } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Investors – Photon Echo",
  description: "Learn about the market opportunity and growth strategy behind Photon Echo's Physical AI and synthetic data development.",
  openGraph: {
    title: "Investors – Photon Echo",
    description: "Learn about the market opportunity and growth strategy behind Photon Echo's Physical AI and synthetic data development.",
    url: "https://www.photonecho.dev/investors",
    siteName: "Photon Echo",
    images: [
      {
        url: "/echo_Logo.png",
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
    description: "Explore Photon Echo's Physical AI investment opportunity.",
    images: ["/echo_Logo.png"]
  }
}

export default function InvestorsPage() {
  return (
    <div className="flex flex-col min-h-[calc(100dvh-4rem)]">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 lg:py-48 bg-photon-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-photon-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
          <div
            className="absolute top-1/3 right-1/4 w-96 h-96 bg-photon-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-tight mb-8 animate-fadeIn">Invest in the Future of Physical AI</h1>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto font-light mb-12 animate-fadeIn" style={{ animationDelay: "0.3s" }}>
              Photon Echo builds the simulation and synthetic data infrastructure that will power the next generation of intelligent systems. We are seeking strategic partners who understand the value of synthetic data and digital twin technology in accelerating AI development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn" style={{ animationDelay: "0.6s" }}>
              <Link href="/contact">
                <Button variant="primary" size="xl">
                  Request Investor Overview
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" size="xl">
                  Schedule Investor Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section className="w-full py-20 md:py-32 bg-photon-950">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">The Market Is Expanding Quickly</h2>
            <p className="text-lg text-photon-300 max-w-3xl mx-auto">
              The global market for synthetic data and simulation is growing rapidly as AI moves into physical environments. From robotics and manufacturing to defense and logistics, organizations are adopting simulation to train and validate intelligent systems.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="card-standard card-hover text-center">
              <CardContent className="p-6">
                <TrendingUpIcon className="w-12 h-12 text-photon-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">$3.5B and Growing</h3>
                <p className="text-photon-300">The synthetic data market is expected to exceed $3.5B by 2028 as demand for scalable AI training continues to rise.</p>
              </CardContent>
            </Card>
            <Card className="card-standard card-hover text-center">
              <CardContent className="p-6">
                <TargetIcon className="w-12 h-12 text-photon-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Critical Bottleneck</h3>
                <p className="text-photon-300">Real world data is expensive, limited, and risky to collect. Simulation removes these barriers and allows rapid iteration.</p>
              </CardContent>
            </Card>
            <Card className="card-standard card-hover text-center">
              <CardContent className="p-6">
                <RocketIcon className="w-12 h-12 text-photon-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Emerging Standard</h3>
                <p className="text-photon-300">Synthetic data and digital twins are becoming the default approach for developing physical AI models safely and efficiently.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Photon Echo Section */}
      <section className="w-full py-20 md:py-32 bg-photon-900/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Our Advantage</h2>
            <p className="text-lg text-photon-300 max-w-3xl mx-auto">
              Photon Echo focuses on creating precise digital worlds and sensor simulations that produce high quality training data for AI systems that must see, move, and decide in real environments.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="card-standard card-hover text-center">
              <CardContent className="p-6">
                <UsersIcon className="w-12 h-12 text-photon-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Technical Depth</h3>
                <p className="text-photon-300">Built by engineers and 3D specialists with experience in simulation, visualization, and machine learning.</p>
              </CardContent>
            </Card>
            <Card className="card-standard card-hover text-center">
              <CardContent className="p-6">
                <ZapIcon className="w-12 h-12 text-photon-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">High Fidelity Approach</h3>
                <p className="text-photon-300">Every asset, sensor, and dataset is designed for measurable accuracy and repeatability.</p>
              </CardContent>
            </Card>
            <Card className="card-standard card-hover text-center">
              <CardContent className="p-6">
                <MapIcon className="w-12 h-12 text-photon-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Scalable Model</h3>
                <p className="text-photon-300">Data generation, validation, and scenario authoring delivered through a repeatable software pipeline.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="w-full py-20 md:py-32 bg-photon-950">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Our Roadmap</h2>
            <p className="text-lg text-photon-300 max-w-3xl mx-auto">
              Photon Echo is building the foundation for scalable synthetic data generation and simulation infrastructure. The roadmap below outlines our near term milestones.
            </p>
          </div>
          <Card className="card-standard card-hover max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-photon-800/50">
                      <th className="pb-4 text-lg font-semibold text-white">Milestone</th>
                      <th className="pb-4 text-lg font-semibold text-white">Focus</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-4">
                    <tr className="border-b border-photon-800/30">
                      <td className="py-4 text-photon-200 font-medium">Q1–Q2 2025</td>
                      <td className="py-4 text-photon-300">Internal R&D environments and prototype datasets</td>
                    </tr>
                    <tr className="border-b border-photon-800/30">
                      <td className="py-4 text-photon-200 font-medium">Q3 2025</td>
                      <td className="py-4 text-photon-300">Pilot collaborations with robotics and industrial partners</td>
                    </tr>
                    <tr className="border-b border-photon-800/30">
                      <td className="py-4 text-photon-200 font-medium">Q4 2025</td>
                      <td className="py-4 text-photon-300">Scalable data generation and twin testing infrastructure</td>
                    </tr>
                    <tr>
                      <td className="py-4 text-photon-200 font-medium">2026</td>
                      <td className="py-4 text-photon-300">Early commercial engagements and refinement of data-as-a-service platform</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Invest Now Section */}
      <section className="w-full py-20 md:py-32 bg-photon-900/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Why Invest Now</h2>
            <p className="text-lg text-photon-300 max-w-3xl mx-auto mb-8">
              Physical AI represents a major shift in how machines learn. Companies that control the data and simulation infrastructure will shape that transformation.
            </p>
          </div>
          <Card className="card-standard card-hover max-w-4xl mx-auto p-8">
            <ul className="space-y-4 text-photon-200">
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-photon-500 mt-0.5 flex-shrink-0" />
                <span>Expanding global demand for realistic training data</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-photon-500 mt-0.5 flex-shrink-0" />
                <span>Early leadership opportunity in a fast growing vertical</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-photon-500 mt-0.5 flex-shrink-0" />
                <span>Scalable and repeatable service model</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-photon-500 mt-0.5 flex-shrink-0" />
                <span>Experienced team with deep technical understanding of synthetic environments</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-20 md:py-32 bg-photon-gradient-hero text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <Card className="card-standard card-hover max-w-4xl mx-auto p-8 md:p-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Ready to Invest?
            </h2>
            <p className="text-lg md:text-xl text-photon-100 max-w-2xl mx-auto mb-8">
              Join us in building the infrastructure for intelligent physical systems. Photon Echo is now engaging with early strategic investors to accelerate development and scale synthetic data operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="xl">
                  Request Investor Overview
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" size="xl">
                  Schedule Investor Call
                </Button>
              </Link>
            </div>
            <p className="text-sm text-photon-200 mt-6">
              Confidential materials available to qualified investors
            </p>
          </Card>
        </div>
      </section>
    </div>
  )
}