import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Government & Defense | Photon Echo",
  description:
    "Photon Digital LLC provides structured synthetic data and validation infrastructure supporting government and defense autonomy programs.",
}

export default function GovernmentPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="flex-1">
        {/* Header / Hero */}
        <section className="w-full py-16 md:py-20 border-b border-white/10 bg-gradient-to-b from-black via-black to-[#050816]">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto">
            <p className="text-sm font-medium text-[#33bfff] mb-3 tracking-wider uppercase">
              Government &amp; Defense Programs
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Photon Echo for government and defense programs
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl">
              Photon Echo provides structured synthetic data and validation infrastructure for
              robotics perception teams and autonomy operators in government programs.
            </p>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mt-4">
              The platform delivers scenario libraries, dataset governance, and regression
              benchmarking workflows that enable reproducible evaluation without dependence on raw
              sensor streams.
            </p>
          </div>
        </section>

        {/* Core Content */}
        <section className="w-full py-16 md:py-20">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-10">
            {/* Identity Block */}
            <div className="border border-white/10 rounded-xl p-6 md:p-8 bg-white/5">
              <h2 className="text-xl md:text-2xl font-semibold tracking-wide mb-4">
                PHOTON ECHO
              </h2>
              <p className="text-sm uppercase tracking-wider text-gray-300 mb-4">
                A Photon Digital LLC Offering
              </p>
              <dl className="grid gap-2 text-sm md:text-base text-gray-200 sm:grid-cols-2">
                <div>
                  <dt className="font-medium text-white">Legal Entity</dt>
                  <dd>Photon Digital LLC</dd>
                </div>
                <div>
                  <dt className="font-medium text-white">CAGE Code</dt>
                  <dd>18F04</dd>
                </div>
                <div>
                  <dt className="font-medium text-white">UEI</dt>
                  <dd>HYDNU8GGE8C5</dd>
                </div>
                <div>
                  <dt className="font-medium text-white">Business Type</dt>
                  <dd>Small Business</dd>
                </div>
                <div>
                  <dt className="font-medium text-white">Location</dt>
                  <dd>Neenah, Wisconsin</dd>
                </div>
              </dl>
            </div>

            {/* Core Capabilities */}
            <section aria-labelledby="core-capabilities-heading" className="space-y-4">
              <h2
                id="core-capabilities-heading"
                className="text-2xl md:text-3xl font-semibold tracking-tight"
              >
                Core Capabilities
              </h2>
              <p className="text-gray-200 text-base md:text-lg">
                Photon Echo is a structured synthetic data and validation infrastructure provider for
                robotics perception teams and industrial autonomy operators. The platform delivers
                simulation driven scenario libraries, dataset lineage, and regression benchmarking to
                support reproducible evaluation workflows.
              </p>
              <div className="mt-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-2">
                  Capabilities include:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-200">
                  <li>Domain specific scenario library development for autonomy workflows</li>
                  <li>Structured synthetic dataset generation with governance and lineage tracking</li>
                  <li>Regression benchmarking across model versions and environment variations</li>
                  <li>Perception validation analytics for controlled edge cases</li>
                  <li>Simulator agnostic orchestration pipelines for enterprise teams</li>
                </ul>
              </div>
              <p className="text-gray-200">
                Photon Echo is intended for enterprise validation workflows and long term operational
                reliability.
              </p>
            </section>

            {/* Application Areas */}
            <section aria-labelledby="application-areas-heading" className="space-y-4">
              <h2
                id="application-areas-heading"
                className="text-2xl md:text-3xl font-semibold tracking-tight"
              >
                Application Areas
              </h2>
              <ul className="list-disc list-inside space-y-1 text-gray-200">
                <li>Physical AI and autonomous system research</li>
                <li>Robotics and unmanned system development</li>
                <li>Sensor and perception system evaluation</li>
                <li>Decision making and control workflow testing</li>
                <li>Training, analysis, and concept exploration</li>
              </ul>
            </section>

            {/* Differentiators */}
            <section aria-labelledby="differentiators-heading" className="space-y-4">
              <h2
                id="differentiators-heading"
                className="text-2xl md:text-3xl font-semibold tracking-tight"
              >
                Differentiators
              </h2>
              <ul className="list-disc list-inside space-y-1 text-gray-200">
                <li>Structured simulation artifacts rather than raw sensor replication</li>
                <li>Reproducible scenario based evaluation</li>
                <li>Dataset governance and lineage tracking</li>
                <li>Regression benchmarking infrastructure</li>
                <li>Modular integration into existing ML workflows</li>
              </ul>
            </section>

            {/* Development Status */}
            <section aria-labelledby="development-status-heading" className="space-y-4">
              <h2
                id="development-status-heading"
                className="text-2xl md:text-3xl font-semibold tracking-tight"
              >
                Development Status
              </h2>
              <p className="text-gray-200">
                Photon Echo is in platform build phase focused on enterprise validation
                infrastructure for robotics and industrial autonomy systems.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-200">
                <li>Scenario library deployment pilots</li>
                <li>Validation infrastructure integration planning</li>
                <li>Regression benchmarking workflow definition</li>
                <li>Enterprise licensing and operational readiness</li>
              </ul>
              <p className="text-gray-200">
                The platform is delivered through enterprise licensing and integration agreements.
              </p>
            </section>

            {/* Compliance and Data Handling */}
            <section aria-labelledby="compliance-heading" className="space-y-4">
              <h2 id="compliance-heading" className="text-2xl md:text-3xl font-semibold tracking-tight">
                Compliance and Data Handling
              </h2>
              <p className="text-gray-200">
                Photon Echo development and demonstrations are conducted using unclassified,
                customer provided, or publicly releasable information. No classified data is
                required for engagement.
              </p>
            </section>

            {/* Contact Information */}
            <section aria-labelledby="contact-heading" className="space-y-4">
              <h2 id="contact-heading" className="text-2xl md:text-3xl font-semibold tracking-tight">
                Contact Information
              </h2>
              <div className="space-y-1 text-gray-200">
                <p>Joshua D. Atencio</p>
                <p>Sole Member</p>
                <p>Photon Digital LLC</p>
                <p>Neenah, WI</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:josha10cio@gmail.com"
                    className="text-[#33bfff] hover:underline"
                  >
                    josha10cio@gmail.com
                  </a>
                </p>
                <p>Phone: 619-288-0004</p>
              </div>
            </section>

            {/* Download Button + Contact CTA */}
            <section className="pt-4 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-3">
                <a
                  href="/CORE%20CAPABILITIES%20Photon%20Echo.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <Button
                    size="lg"
                    className="bg-[#33bfff] hover:bg-[#2aa3d9] text-white font-medium px-6"
                  >
                    Download Photon Echo Core Capabilities (PDF)
                  </Button>
                </a>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/40 text-white hover:bg-white/10"
                  >
                    Contact Photon Digital
                  </Button>
                </Link>
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  )
}
