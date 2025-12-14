import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mission – Photon Echo",
  description: "We build virtual worlds and sensor simulations that generate synthetic data for physical AI and real world intelligence.",
}

export default function MissionPage() {
  return (
    <div className="flex flex-col min-h-[calc(100dvh-4rem)]">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 lg:py-48 bg-[#272727] text-white text-center animate-fadeIn">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl leading-tight">Our Mission</h1>
          <p className="mt-4 text-lg md:text-xl text-photon-100 max-w-3xl mx-auto">Building synthetic data for real world intelligence</p>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="w-full py-16 md:py-24 bg-white text-gray-900 relative z-10">
        <Card
          className="card-standard card-hover container px-4 md:px-6 max-w-6xl mx-auto p-8 animate-fadeIn"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <h2 className="section-title">Why we exist</h2>
              <p className="text-lg text-photon-200 leading-relaxed">Collecting high quality real world data can be slow, costly, and limited by safety or privacy. Synthetic data provides scale and control without field risk.</p>
              <h2 className="section-title mt-8">How we work</h2>
              <p className="text-lg text-photon-200 leading-relaxed">We combine design, visualization, and engineering with modern simulation tools. Every scene, sensor, and annotation is built for a clear learning objective.</p>
            </div>
            <div className="relative">
              <Card className="card-standard card-hover p-8">
                <h3 className="text-2xl font-bold text-photon-100 mb-6">Focus areas</h3>
                <ul className="text-lg text-photon-200 leading-relaxed list-disc pl-6">
                  <li>World building</li>
                  <li>Sensor simulation</li>
                  <li>Scenario authoring</li>
                  <li>Dataset production</li>
                  <li>Validation</li>
                </ul>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-photon-500 rounded-full"></div>
                    <span className="text-photon-200">Excellence in technical execution</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-photon-500 rounded-full"></div>
                    <span className="text-photon-200">Innovation through collaboration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-photon-500 rounded-full"></div>
                    <span className="text-photon-200">Commitment to client success</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Card>
      </section>

      {/* Vision Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50 text-gray-900 relative z-10">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="text-center animate-fadeIn">
            <h2 className="section-title">Vision</h2>
            <p className="mt-4 text-lg text-photon-200 max-w-2xl mx-auto">Better digital worlds create better real systems. That is the path we are building.</p>
          </div>
        </div>
      </section>

    </div>
  )
}





