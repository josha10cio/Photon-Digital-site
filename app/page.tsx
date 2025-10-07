import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Photon Echo Physical AI and Synthetic Data",
  description: "We build virtual worlds and simulated sensors that produce synthetic training data for physical AI systems.",
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative w-full py-20 md:py-32 lg:py-48 bg-photon-gradient-hero text-white">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Synthetic Data for Real World Intelligence
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
            We build virtual worlds and sensor simulations that train AI to understand the physical world.
          </p>
          <Link href="/contact">
            <Button className="btn-primary px-10 py-4 text-lg font-semibold">
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>

      {/* What We Do */}
      <section className="w-full py-16 md:py-24 bg-photon-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title mb-4">What We Do</h2>
            <p className="text-lg text-photon-200">
              Photon Echo creates accurate 3D environments and simulates sensors to produce high quality synthetic training data. This data helps physical AI systems see, decide, and act with confidence.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
            <Card className="bg-photon-900/50 border border-photon-800 text-white">
              <CardHeader>
                <CardTitle>Physical AI Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-photon-200">
                  We build scenes, sensors, and scenarios that generate labeled data for perception and control tasks.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-photon-900/50 border border-photon-800 text-white">
              <CardHeader>
                <CardTitle>Digital Twin Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-photon-200">
                  We design live simulation and feedback loops that validate models and monitor performance after deployment.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Synthetic Data */}
      <section className="w-full py-16 md:py-24 bg-photon-950 text-white">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
          <h2 className="section-title mb-4">Why Synthetic Data</h2>
          <p className="text-lg text-photon-200">
            Real world data can be limited, expensive, or sensitive. Synthetic data provides scale, coverage, and safety. By matching real conditions in simulation, teams can train models faster and reduce risk before field testing.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 md:py-28 bg-photon-gradient-hero text-white text-center">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get started</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">Share your goals and we will propose a practical data plan.</p>
          <Link href="/contact">
            <Button className="btn-primary px-10 py-4 text-lg font-semibold">Start Your Project</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}