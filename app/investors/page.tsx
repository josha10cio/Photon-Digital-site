import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUpIcon, TargetIcon, RocketIcon, UsersIcon, CheckCircleIcon, FileTextIcon } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Investors",
  description: "Building the future of Physical AI and Digital Twin technology.",
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
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-tight mb-8 animate-fadeIn">Investors</h1>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto font-light mb-12 animate-fadeIn" style={{ animationDelay: "0.3s" }}>
              Photon Echo builds virtual worlds and sensor simulations that generate synthetic training data for physical AI. Our focus is on practical pipelines that help teams train and validate models with speed and safety.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn" style={{ animationDelay: "0.6s" }}>
              <Link href="/contact">
                <Button variant="primary" size="xl">
                  Start Your Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Market View Section */}
      <section className="w-full py-20 md:py-32 bg-photon-950">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Market view</h2>
          </div>
          <Card className="card-standard card-hover max-w-4xl mx-auto p-8">
            <ul className="space-y-4 text-photon-200">
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-photon-500 mt-0.5 flex-shrink-0" />
                <span>Growing demand for synthetic data in robotics, autonomy, and industrial systems</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-photon-500 mt-0.5 flex-shrink-0" />
                <span>Clear need for accurate sensor simulation and repeatable data generation</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-photon-500 mt-0.5 flex-shrink-0" />
                <span>Digital twins as a key extension for testing and monitoring</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Current Focus Section */}
      <section className="w-full py-20 md:py-32 bg-photon-900/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Current focus</h2>
          </div>
          <Card className="card-standard card-hover max-w-4xl mx-auto p-8">
            <ul className="space-y-4 text-photon-200">
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-photon-500 mt-0.5 flex-shrink-0" />
                <span>Build high accuracy world building and sensor simulation workflows</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-photon-500 mt-0.5 flex-shrink-0" />
                <span>Deliver clear dataset specifications and versioned generation scripts</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-photon-500 mt-0.5 flex-shrink-0" />
                <span>Validate transfer with small real samples and targeted regeneration</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-20 md:py-32 bg-photon-gradient-hero text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <Card className="card-standard card-hover max-w-4xl mx-auto p-8 md:p-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Call to action
            </h2>
            <p className="text-lg md:text-xl text-photon-100 max-w-2xl mx-auto mb-8">
              We welcome conversations with partners interested in advancing Physical AI development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="xl">
                  Start Your Project
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}

