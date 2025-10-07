import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mission Photon Echo",
  description: "We build virtual worlds and sensor simulations to power synthetic data for physical AI.",
}

export default function MissionPage() {
  return (
    <div className="flex flex-col min-h-[calc(100dvh-4rem)]">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 lg:py-48 bg-photon-gradient-hero text-white text-center animate-fadeIn">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl leading-tight">Our Mission</h1>
          <p className="mt-4 text-lg md:text-xl text-photon-100 max-w-3xl mx-auto">Building synthetic data for real world intelligence</p>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="w-full py-16 md:py-24 bg-photon-950 text-white relative z-10">
        <div
          className="container px-4 md:px-6 max-w-6xl mx-auto glassmorphism p-8 shadow-outer-shadow animate-fadeIn"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <h2 className="section-title">Why we exist</h2>
              <p className="text-lg text-photon-200 leading-relaxed">Collecting high quality real world data can be slow, costly, and limited by safety or privacy. Synthetic data provides scale and control without field risk.</p>
              <h2 className="section-title mt-8">How we work</h2>
              <p className="text-lg text-photon-200 leading-relaxed">We combine design, visualization, and engineering with modern simulation tools. Every scene, sensor, and annotation is built to serve the task.</p>
            </div>
            <div className="relative">
              <div className="glassmorphism p-8 border border-photon-800">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="w-full py-16 md:py-24 bg-photon-900/30 text-white relative z-10">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fadeIn">
                    <h2 className="section-title">Vision</h2>
                    <p className="mt-4 text-lg text-photon-200 max-w-2xl mx-auto">Better digital worlds create better real systems. That is the path we are building.</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="glassmorphism p-6 text-center group card-lift-on-hover">
              <div className="w-16 h-16 rounded-full bg-photon-500/20 flex items-center justify-center mb-4 mx-auto border border-photon-500/30 group-hover:border-photon-500 transition-all duration-300">
                <span className="text-2xl font-bold text-photon-500">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Technical Expertise</h3>
              <p className="text-photon-200">Experience across engineering disciplines and design specialties.</p>
            </div>

            <div className="glassmorphism p-6 text-center group card-lift-on-hover">
              <div className="w-16 h-16 rounded-full bg-photon-600/20 flex items-center justify-center mb-4 mx-auto border border-photon-600/30 group-hover:border-photon-600 transition-all duration-300">
                <span className="text-2xl font-bold text-photon-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Advanced Technology</h3>
              <p className="text-photon-200">Latest design tools, simulation software, and visualization technologies to deliver superior results.</p>
            </div>

            <div className="glassmorphism p-6 text-center group card-lift-on-hover">
              <div className="w-16 h-16 rounded-full bg-photon-700/20 flex items-center justify-center mb-4 mx-auto border border-photon-700/30 group-hover:border-photon-700 transition-all duration-300">
                <span className="text-2xl font-bold text-photon-700">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Security & Compliance</h3>
              <p className="text-photon-200">Security and compliance practices for sensitive projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 md:py-24 bg-photon-950 text-white relative z-10">
        <div
          className="container px-4 md:px-6 max-w-3xl mx-auto glassmorphism p-8 shadow-outer-shadow animate-fadeIn"
          style={{ animationDelay: "0.9s" }}
        >
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-photon-200 max-w-2xl mx-auto">
              Find answers to common questions about our services and process.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-photon-800">
              <AccordionTrigger className="text-lg font-semibold text-photon-100 hover:text-photon-500 transition-colors hover:scale-103 icon-glow-blue">
                What industries do you serve?
              </AccordionTrigger>
              <AccordionContent className="text-photon-200 text-base leading-relaxed glassmorphism shadow-inner-bevel p-4 rounded-md mt-2">
                We serve commercial enterprises and government agencies across multiple industries including aerospace, defense, medical devices, consumer electronics, automotive, and emerging technologies. Our expertise spans both traditional industries and advanced innovation sectors.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b border-photon-800">
              <AccordionTrigger className="text-lg font-semibold text-photon-100 hover:text-photon-500 transition-colors hover:scale-103 icon-glow-blue">
                How long do projects typically take?
              </AccordionTrigger>
              <AccordionContent className="text-photon-200 text-base leading-relaxed glassmorphism shadow-inner-bevel p-4 rounded-md mt-2">
                Project timelines vary based on scope and complexity. Simple design projects may take 2-4 weeks, while comprehensive engineering solutions can span 3-6 months. We provide detailed project timelines during our initial consultation and maintain clear milestones throughout the engagement.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b border-photon-800">
              <AccordionTrigger className="text-lg font-semibold text-photon-100 hover:text-photon-500 transition-colors hover:scale-103 icon-glow-blue">
                Do you work with government contracts?
              </AccordionTrigger>
              <AccordionContent className="text-photon-200 text-base leading-relaxed glassmorphism shadow-inner-bevel p-4 rounded-md mt-2">
                Yes, we have extensive experience with government contracting including GSA schedules, CAGE codes, and security clearance capabilities. We maintain compliance with ITAR, FedRAMP, and other regulatory requirements for sensitive government projects.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-b border-photon-800">
              <AccordionTrigger className="text-lg font-semibold text-photon-100 hover:text-photon-500 transition-colors hover:scale-103 icon-glow-blue">
                What deliverables can we expect?
              </AccordionTrigger>
              <AccordionContent className="text-photon-200 text-base leading-relaxed glassmorphism shadow-inner-bevel p-4 rounded-md mt-2">
                Deliverables depend on project scope but typically include CAD files, technical drawings, design documentation, renderings, animations, interactive demos, and comprehensive technical specifications. All deliverables include proper documentation and are optimized for your intended use case.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-b border-photon-800">
              <AccordionTrigger className="text-lg font-semibold text-photon-100 hover:text-photon-500 transition-colors hover:scale-103 icon-glow-blue">
                How do you ensure project confidentiality?
              </AccordionTrigger>
              <AccordionContent className="text-photon-200 text-base leading-relaxed glassmorphism shadow-inner-bevel p-4 rounded-md mt-2">
                We maintain strict confidentiality protocols including robust NDAs, secure file handling systems, and compartmentalized project access. Our team includes security-cleared personnel for sensitive government projects, and we follow industry best practices for intellectual property protection.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="text-center mt-12 animate-fadeIn" style={{ animationDelay: "1s" }}>
            <Link href="/contact">
              <Button className="px-8 py-3 text-lg bg-photon-700 hover:bg-photon-600 transition-all duration-300 shadow-lg hover:scale-105 icon-glow-purple mr-4">
                Start Your Project
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="px-8 py-3 text-lg bg-photon-500 hover:bg-photon-600 transition-all duration-300 shadow-lg hover:scale-105 icon-glow-blue animate-pulse-glow">
                Start Your Project
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}





