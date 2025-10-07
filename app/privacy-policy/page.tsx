import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read Photon Echo's Privacy Policy. Updated to reflect how we collect, use, and protect your data.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-[calc(100dvh-4rem)]">
      <section className="w-full py-20 md:py-28 bg-photon-gradient-hero text-white text-center">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg md:text-xl text-photon-100 max-w-3xl mx-auto">
            This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit or interact with our website.
          </p>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 bg-photon-950 text-white">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto prose prose-invert">
          <h2>1. Introduction</h2>
          <p>
            Photon Digital LLC ("Photon Digital," "we," "us," or "our") respects your privacy. This Privacy Policy describes how we collect,
            use, disclose, and safeguard your information when you visit or interact with our website, photonecho.dev (the "Site"). By using the Site,
            you agree to this Policy. If you do not agree, please do not use the Site.
          </p>

          <h2>3. Information We Collect</h2>
          <h3>a) Information You Provide</h3>
          <ul>
            <li>Contact information (such as your name and email address).</li>
            <li>Message content you send through forms or email.</li>
            <li>Account or subscription details if you sign up for updates.</li>
            <li>Payment-related information if you purchase services (processed by third-party payment providers; we do not store payment card data).</li>
          </ul>

          <h3>b) Information Collected Automatically</h3>
          <ul>
            <li>Device, browser, and operating system information.</li>
            <li>IP address, access times, referring URLs, and pages viewed.</li>
            <li>Log data and analytics about Site usage.</li>
            <li>Cookie and tracking identifiers.</li>
          </ul>

          <h3>c) Aggregated or Anonymized Data</h3>
          <p>We may compile and use non-identifiable data for statistics, performance metrics, or service improvement.</p>

          <h2>4. How We Use Information</h2>
          <ul>
            <li>Provide and maintain the Site.</li>
            <li>Communicate with you and respond to inquiries.</li>
            <li>Operate, analyze, and improve performance and security.</li>
            <li>Process payments or transactions you request.</li>
            <li>Comply with legal or regulatory obligations.</li>
            <li>Protect against fraud, abuse, or security threats.</li>
          </ul>
          <p>We only process personal data for the purposes described in this Policy or for compatible lawful purposes.</p>

          <h2>5. Legal Basis for Processing (EU/EEA)</h2>
          <ul>
            <li>Performance of a contract when we provide services or respond to requests.</li>
            <li>Legitimate interest for site operation, analytics, and security.</li>
            <li>Consent where required, such as for cookies or newsletters.</li>
            <li>Legal obligation where necessary to comply with laws or orders.</li>
          </ul>

          <h2>6. Cookies and Tracking</h2>
          <p>
            We use cookies and similar technologies to provide core functionality, improve performance, and measure usage. You may disable cookies in your browser; however,
            some features may not function properly. By continuing to use the Site, you consent to the use of cookies as described here.
          </p>

          <h2>7. Third-Party Service Providers</h2>
          <p>
            We engage trusted third-party providers that perform functions such as website hosting, content delivery, analytics, email delivery, payment processing, and security monitoring.
            These providers are contractually limited to processing personal data only for the services they provide to us and required to maintain appropriate security and confidentiality measures.
          </p>

          <h2>8. How We Share Information</h2>
          <p>
            We do not sell personal information. We may share data only when necessary: with service providers that support our operations; with legal or regulatory authorities when required by law;
            to protect our rights, safety, or property; or as part of a business transaction subject to confidentiality obligations.
          </p>

          <h2>9. International Transfers</h2>
          <p>
            If you access the Site from outside the United States, your data may be transferred to and processed in the U.S. or other countries. We use appropriate safeguards, including Standard Contractual Clauses where required.
          </p>

          <h2>10. Data Retention</h2>
          <p>We retain personal data only as long as needed for the purposes outlined in this Policy or as required by law.</p>

          <h2>11. Security</h2>
          <p>We implement reasonable administrative, technical, and physical measures to protect information. No system is entirely secure, but we strive to maintain industry-standard protections.</p>

          <h2>12. Your Rights</h2>
          <ul>
            <li>Access the personal data we hold about you.</li>
            <li>Request correction or deletion of your data.</li>
            <li>Restrict or object to processing.</li>
            <li>Withdraw consent where applicable.</li>
            <li>Request a copy of your data in portable form.</li>
          </ul>
          <p>
            To exercise your rights, email <Link href="mailto:privacy@photonecho.dev">privacy@photonecho.dev</Link> with the subject “Privacy Request.” We may verify your identity before responding.
          </p>

          <h2>13. California Privacy Rights (CCPA/CPRA)</h2>
          <ul>
            <li>Request disclosure of the categories and specific pieces of personal information collected.</li>
            <li>Request deletion of personal information, subject to legal exceptions.</li>
            <li>Opt out of the sale or sharing of personal information (we do not sell personal information).</li>
            <li>Not be discriminated against for exercising these rights.</li>
          </ul>

          <h2>14. EU and UK Rights</h2>
          <p>
            If you are in the EU or UK, you may also contact your local Data Protection Authority about how we handle personal data. Our lawful bases and transfer safeguards are described in Sections 5 and 9.
          </p>

          <h2>15. Children’s Privacy</h2>
          <p>The Site is not directed to children under 16 years of age. We do not knowingly collect personal information from minors.</p>

          <h2>16. Automated Decision-Making</h2>
          <p>We do not engage in automated decision-making or profiling that has legal or significant effects on individuals.</p>

          <h2>17. Changes to This Policy</h2>
          <p>We may update this Privacy Policy periodically. The effective date at the top will reflect the most recent revision.</p>

          <h2>18. Governing Law</h2>
          <p>This Privacy Policy and any disputes arising under it are governed by the laws of the State of Wisconsin, United States, without regard to conflict-of-law principles.</p>

          <div className="mt-8">
            <Link href="/contact">
              <Button className="btn-primary">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}


