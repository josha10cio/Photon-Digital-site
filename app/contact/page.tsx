import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact – Photon Echo",
  description: "Contact Photon Echo about physical AI, simulation, and synthetic data collaborations, pilots, and investor conversations.",
}

export default function ContactPage() {
  return <ContactPageClient />
}
