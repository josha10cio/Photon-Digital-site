import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Photon Design & Engineering for project inquiries, quotes, and consultations. Multiple contact options for commercial and government clients.",
}

export default function ContactPage() {
  return <ContactPageClient />
}
