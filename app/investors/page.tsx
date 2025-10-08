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
              Building the future of Physical AI and Digital Twin technology. We're creating the infrastructure that powers intelligent systems in the physical world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn" style={{ animationDelay: "0.6s" }}>
              <Link href="/contact">
                <Button className="btn-primary px-10 py-4 text-lg font-medium">
                  <FileTextIcon className="mr-2 w-5 h-5" />
                  Request Information
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
            <p className="text-lg text-photon-200 max-w-3xl mx-auto">
              The Physical AI and Digital Twin market is experiencing explosive growth as industries accelerate their digital transformation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <Card className="card-standard card-hover">
              <CardHeader className="text-center">
                <TrendingUpIcon className="h-12 w-12 text-photon-500 mx-auto mb-4" />
                <CardTitle className="text-lg">Growing Market</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-photon-200 text-sm">Physical AI market projected to reach $100B+ by 2030</p>
              </CardContent>
            </Card>

            <Card className="card-standard card-hover">
              <CardHeader className="text-center">
                <TargetIcon className="h-12 w-12 text-photon-500 mx-auto mb-4" />
                <CardTitle className="text-lg">Strategic Focus</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-photon-200 text-sm">Targeting high-growth sectors: automotive, manufacturing, defense</p>
              </CardContent>
            </Card>

            <Card className="card-standard card-hover">
              <CardHeader className="text-center">
                <RocketIcon className="h-12 w-12 text-photon-500 mx-auto mb-4" />
                <CardTitle className="text-lg">Innovation Led</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-photon-200 text-sm">Proprietary technology for synthetic data and simulation</p>
              </CardContent>
            </Card>

            <Card className="card-standard card-hover">
              <CardHeader className="text-center">
                <UsersIcon className="h-12 w-12 text-photon-500 mx-auto mb-4" />
                <CardTitle className="text-lg">Expert Team</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-photon-200 text-sm">Deep expertise in AI, simulation, and enterprise software</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Advantage Section */}
      <section className="w-full py-20 md:py-32 bg-photon-900/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Our Competitive Advantage</h2>
            <p className="text-lg text-photon-200 max-w-2xl mx-auto">
              Photon Echo combines cutting-edge technology with deep domain expertise to deliver unique value.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <Card className="card-standard card-hover">
              <CardHeader>
                <CardTitle className="text-xl">Proprietary Technology</CardTitle>
                <div className="w-12 h-1 bg-photon-500 rounded-full"></div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-photon-200 mb-4">
                  Advanced synthetic data generation and sensor simulation platform built from the ground up.
                </CardDescription>
                <ul className="space-y-2 text-sm text-photon-300">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-photon-500" />
                    Photorealistic 3D environments
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-photon-500" />
                    Multi-sensor simulation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-photon-500" />
                    Real-time data generation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-standard card-hover">
              <CardHeader>
                <CardTitle className="text-xl">Industry Partnerships</CardTitle>
                <div className="w-12 h-1 bg-photon-700 rounded-full"></div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-photon-200 mb-4">
                  Strategic relationships with leading organizations in autonomous systems and manufacturing.
                </CardDescription>
                <ul className="space-y-2 text-sm text-photon-300">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-photon-500" />
                    Enterprise customers
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-photon-500" />
                    Government contracts
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-photon-500" />
                    Research collaborations
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-standard card-hover">
              <CardHeader>
                <CardTitle className="text-xl">Scalable Platform</CardTitle>
                <div className="w-12 h-1 bg-photon-600 rounded-full"></div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-photon-200 mb-4">
                  Cloud-native architecture designed to scale from prototypes to enterprise deployments.
                </CardDescription>
                <ul className="space-y-2 text-sm text-photon-300">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-photon-500" />
                    Multi-tenant SaaS model
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-photon-500" />
                    API-first design
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-photon-500" />
                    Enterprise security
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="w-full py-20 md:py-32 bg-photon-950">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title mb-6">Our Vision</h2>
            <p className="text-lg text-photon-200 leading-relaxed mb-8">
              We're building the foundational infrastructure that will power the next generation of intelligent physical systems. 
              From autonomous vehicles to smart factories, our technology enables AI to understand and interact with the real world.
            </p>
            <p className="text-lg text-photon-200 leading-relaxed">
              As industries transition to AI-driven operations, synthetic data and digital twins become essential. 
              Photon Echo is positioned at the intersection of these transformative technologies.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-32 bg-photon-gradient-hero text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto glassmorphism p-8 md:p-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Join Us in Building the Future
            </h2>
            <p className="text-lg md:text-xl text-photon-100 max-w-2xl mx-auto mb-8">
              We're seeking strategic partners and investors who share our vision for the future of Physical AI and Digital Twins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="btn-primary px-12 py-4 text-lg font-semibold">
                  <FileTextIcon className="mr-2 w-5 h-5" />
                  Request Information
                </Button>
              </Link>
              <Link href="/mission">
                <Button variant="outline" className="px-12 py-4 text-lg font-semibold border-white/30 text-white hover:bg-white/10 bg-transparent">
                  Our Mission
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

