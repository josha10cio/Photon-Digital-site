import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Physical AI Development Synthetic Data",
  description: "We build worlds, sensors, and scenarios that produce labeled data for physical AI training.",
}

export default function PhysicalAIDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-[calc(100dvh-4rem)] text-white">
      <section className="w-full py-20 md:py-28 bg-photon-gradient-hero text-center">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Physical AI Development</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            We develop simulation environments, sensors, and datasets that train AI to perceive and act in the physical world.
          </p>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-photon-950">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <h2 className="section-title mb-6">From simulation to dataset</h2>
          <ol className="space-y-6 text-photon-200">
            <li>
              <h3 className="text-white font-semibold">Step 1: Build the world</h3>
              <p>Create accurate 3D spaces with correct geometry, materials, and lighting.</p>
            </li>
            <li>
              <h3 className="text-white font-semibold">Step 2: Simulate sensors</h3>
              <p>Configure cameras, depth sensors, lidar, and radar to match real devices.</p>
            </li>
            <li>
              <h3 className="text-white font-semibold">Step 3: Generate scenarios</h3>
              <p>Vary lighting, viewpoints, objects, and motion to improve model robustness.</p>
            </li>
            <li>
              <h3 className="text-white font-semibold">Step 4: Create labeled data</h3>
              <p>Export ground truth including boxes, masks, depth, normals, and tracks.</p>
            </li>
            <li>
              <h3 className="text-white font-semibold">Step 5: Validate and refine</h3>
              <p>Compare to small real sets, analyze error modes, regenerate targeted scenes.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-photon-900">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <h2 className="section-title mb-6">Why it matters</h2>
          <ul className="list-disc pl-6 space-y-2 text-photon-200">
            <li>High coverage without field risk</li>
            <li>Faster iteration with full ground truth</li>
            <li>Better transfer through diverse scenarios</li>
          </ul>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-photon-950">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <h2 className="section-title mb-6">FAQ</h2>
          <div className="space-y-6 text-photon-200">
            <div>
              <h3 className="text-white font-semibold">What inputs do you need to start</h3>
              <p>A problem statement, target environment, sensor constraints, and success criteria.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold">Can this run on the edge</h3>
              <p>Yes. We design pipelines that support on device and on prem inference.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold">Do you work with existing hardware</h3>
              <p>Yes. We mirror your sensor specs in sim and align datasets with your target rigs.</p>
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


