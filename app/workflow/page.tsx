import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Workflow Synthetic Data Pipeline",
  description: "Discovery to iteration, a clear pipeline for building and refining synthetic datasets.",
}

export default function WorkflowPage() {
  return (
    <div className="flex flex-col min-h-[calc(100dvh-4rem)] text-white">
      <section className="w-full py-20 md:py-28 bg-photon-gradient-hero text-center">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Workflow</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">Our workflow mirrors how synthetic data is created and refined.</p>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-photon-950">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto space-y-8 text-photon-200">
          <div>
            <h2 className="section-title mb-2">Discovery</h2>
            <p>Define goals, environment, and sensors.</p>
          </div>
          <div>
            <h2 className="section-title mb-2">Modeling</h2>
            <p>Build accurate assets and spaces.</p>
          </div>
          <div>
            <h2 className="section-title mb-2">Simulation</h2>
            <p>Configure sensors and scenarios.</p>
          </div>
          <div>
            <h2 className="section-title mb-2">Generation</h2>
            <p>Produce labeled data with full ground truth.</p>
          </div>
          <div>
            <h2 className="section-title mb-2">Validation</h2>
            <p>Compare against small real samples and analyze errors.</p>
          </div>
          <div>
            <h2 className="section-title mb-2">Iteration</h2>
            <p>Regenerate targeted scenes to improve results.</p>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-photon-gradient-hero text-center">
        <div className="container px-4 md:px-6">
          <Link href="/contact"><Button className="btn-primary px-10 py-4 text-lg font-semibold">Start Your Project</Button></Link>
        </div>
      </section>
    </div>
  )
}


