import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Digital Twin Systems and Validation",
  description: "We design twins that test and monitor model performance and close the loop with training.",
}

export default function DigitalTwinSystemsPage() {
  return (
    <div className="flex flex-col min-h-[calc(100dvh-4rem)] text-white">
      <section className="w-full py-20 md:py-28 bg-photon-gradient-hero text-center">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Digital Twin Systems</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Digital twins extend the same simulation pipeline used for training into live testing and monitoring. They help teams validate models and track performance.
          </p>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-photon-950">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <h2 className="section-title mb-6">What a twin provides</h2>
          <ul className="list-disc pl-6 space-y-2 text-photon-200">
            <li>Real time simulation and dashboards</li>
            <li>Safe testing for changes and updates</li>
            <li>Feedback loops to improve training data</li>
          </ul>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-photon-900">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <h2 className="section-title mb-6">How this supports the data loop</h2>
          <p className="text-photon-200">
            Synthetic data trains the model. The twin tests the model in realistic conditions. Results guide the next round of dataset generation.
          </p>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-photon-950">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <h2 className="section-title mb-6">FAQ</h2>
          <div className="space-y-6 text-photon-200">
            <div>
              <h3 className="text-white font-semibold">Can it run in real time</h3>
              <p>Yes. We design for streaming data and responsive views.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold">How do you measure results</h3>
              <p>We focus on goals like uptime, quality, and throughput. Exact metrics are defined per project.</p>
            </div>
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



