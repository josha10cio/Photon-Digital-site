import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Echo Design & Engineering for project inquiries, quotes, and consultations. Fresh perspectives on complex challenges with cutting-edge capabilities.",
}

export default function ContactPage() {
  return <ContactPageClient />
}
