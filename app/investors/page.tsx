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
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-tight mb-8 animate-fadeIn">Invest in the Future of Physical AI</h1>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto font-light mb-12 animate-fadeIn" style={{ animationDelay: "0.3s" }}>
              Photon Echo is building the infrastructure for AI-powered physical systems. We're seeking strategic investors who understand the massive opportunity in synthetic training data and digital twin technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn" style={{ animationDelay: "0.6s" }}>
              <Link href="/contact">
                <Button variant="primary" size="xl">
                  Request Investor Deck
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" size="xl">
                  Schedule Meeting
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
            <h2 className="section-title mb-4">Market Opportunity</h2>
            <p className="text-lg text-photon-300 max-w-3xl mx-auto">
              The synthetic data market is projected to reach $3.5B by 2028, driven by increasing AI adoption in physical systems.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="card-standard card-hover text-center">
              <CardContent className="p-6">
                <TrendingUpIcon className="w-12 h-12 text-photon-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">$3.5B Market</h3>
                <p className="text-photon-300">Synthetic data market growing 45% annually</p>
              </CardContent>
            </Card>
            <Card className="card-standard card-hover text-center">
              <CardContent className="p-6">
                <TargetIcon className="w-12 h-12 text-photon-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Clear Pain Point</h3>
                <p className="text-photon-300">Real data is expensive, limited, and risky to collect</p>
              </CardContent>
            </Card>
            <Card className="card-standard card-hover text-center">
              <CardContent className="p-6">
                <RocketIcon className="w-12 h-12 text-photon-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Early Stage</h3>
                <p className="text-photon-300">First-mover advantage in specialized vertical</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Thesis Section */}
      <section className="w-full py-20 md:py-32 bg-photon-900/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Why Invest Now</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="card-standard card-hover">
              <CardContent className="p-8">
                <UsersIcon className="w-12 h-12 text-photon-500 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">Experienced Team</h3>
                <p className="text-photon-300 mb-4">Deep expertise in simulation, AI, and enterprise software</p>
                <ul className="space-y-2 text-photon-200">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-photon-500 mt-1 flex-shrink-0" />
                    <span>Proven track record in AI and simulation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-photon-500 mt-1 flex-shrink-0" />
                    <span>Strong network in target industries</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="card-standard card-hover">
              <CardContent className="p-8">
                <FileTextIcon className="w-12 h-12 text-photon-500 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">Clear Path to Revenue</h3>
                <p className="text-photon-300 mb-4">B2B SaaS model with enterprise customers</p>
                <ul className="space-y-2 text-photon-200">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-photon-500 mt-1 flex-shrink-0" />
                    <span>Recurring revenue from simulation platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-photon-500 mt-1 flex-shrink-0" />
                    <span>High-value consulting and custom solutions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment CTA Section */}
      <section className="w-full py-20 md:py-32 bg-photon-gradient-hero text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <Card className="card-standard card-hover max-w-4xl mx-auto p-8 md:p-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Ready to Invest?
            </h2>
            <p className="text-lg md:text-xl text-photon-100 max-w-2xl mx-auto mb-8">
              Join us in building the infrastructure for AI-powered physical systems. We're seeking strategic investors who understand the massive opportunity ahead.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="xl">
                  Request Investor Deck
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

