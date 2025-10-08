import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy",
  description: "Photon Digital LLC privacy policy. Contact privacy@photonecho.dev. © 2025.",
}

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-[calc(100dvh-4rem)] text-white">
      <section className="w-full py-20 md:py-28 bg-photon-gradient-hero text-center">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy</h1>
          <p className="max-w-3xl mx-auto">Photon Digital LLC. Contact privacy@photonecho.dev. This page describes how we handle basic site information.</p>
        </div>
      </section>
    </div>
  )
}



