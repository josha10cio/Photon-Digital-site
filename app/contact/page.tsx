import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Photon Echo for project inquiries, quotes, and consultations. CONCEPTS VISUALIZED and VALIDATED - forging bold ideas into unmatched products.",
}

export default function ContactPage() {
  return <ContactPageClient />
}
