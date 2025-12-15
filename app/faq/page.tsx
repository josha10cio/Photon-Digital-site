import type { Metadata } from "next"
import FAQClient from "./FAQClient"

export const metadata: Metadata = {
  title: "FAQ – Photon Echo",
  description: "Frequently asked questions about Photon Echo's Physical AI infrastructure, simulation approach, and services.",
}

export default function FAQPage() {
  return <FAQClient />
}
