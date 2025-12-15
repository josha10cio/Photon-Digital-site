import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy – Photon Echo",
  description: "Privacy practices for the Photon Echo site including collection, use, and protection of information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-[calc(100dvh-4rem)]">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-[#272727] text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-photon-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
          <div
            className="absolute top-1/3 right-1/4 w-96 h-96 bg-photon-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-tight mb-8">
                Privacy policy
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                This privacy policy explains how Photon Echo collects, uses, and protects information when you visit or interact with this site.
              </p>
            </div>

            {/* Right Column - Sections Overview */}
            <div className="bg-gray-800 rounded-lg p-8">
              <p className="text-lg text-gray-300 mb-4">Main sections include</p>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>Introduction</li>
                <li>Information we collect</li>
                <li>How we use information</li>
                <li>Legal basis for processing in relevant regions</li>
                <li>Cookies and other tracking technologies</li>
                <li>Third party service providers</li>
                <li>How we share information</li>
                <li>International transfers</li>
                <li>Data retention</li>
                <li>Security</li>
                <li>Your rights</li>
                <li>California privacy rights</li>
                <li>European and United Kingdom rights</li>
                <li>Children privacy</li>
                <li>Automated decision making</li>
                <li>Changes to this policy</li>
                <li>Governing law</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Content Section */}
      <section className="w-full py-12 md:py-16 bg-white text-gray-900">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Photon Digital LLC ("Photon Digital," "we," "us," or "our") respects your privacy. This Privacy Policy describes how we collect,
              use, disclose, and safeguard your information when you visit or interact with our website, photonecho.dev (the "Site"). By using the Site,
              you agree to this Policy. If you do not agree, please do not use the Site.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">a) Information You Provide</h3>
            <ul className="text-gray-600 leading-relaxed mb-4 list-disc pl-6 space-y-2">
              <li>Contact information (such as your name and email address).</li>
              <li>Message content you send through forms or email.</li>
              <li>Account or subscription details if you sign up for updates.</li>
              <li>Payment-related information if you purchase services (processed by third-party payment providers; we do not store payment card data).</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">b) Information Collected Automatically</h3>
            <ul className="text-gray-600 leading-relaxed mb-4 list-disc pl-6 space-y-2">
              <li>Device, browser, and operating system information.</li>
              <li>IP address, access times, referring URLs, and pages viewed.</li>
              <li>Log data and analytics about Site usage.</li>
              <li>Cookie and tracking identifiers.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">c) Aggregated or Anonymized Data</h3>
            <p className="text-gray-600 leading-relaxed mb-6">We may compile and use non-identifiable data for statistics, performance metrics, or service improvement.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. How We Use Information</h2>
            <ul className="text-gray-600 leading-relaxed mb-4 list-disc pl-6 space-y-2">
              <li>Provide and maintain the Site.</li>
              <li>Communicate with you and respond to inquiries.</li>
              <li>Operate, analyze, and improve performance and security.</li>
              <li>Process payments or transactions you request.</li>
              <li>Comply with legal or regulatory obligations.</li>
              <li>Protect against fraud, abuse, or security threats.</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-6">We only process personal data for the purposes described in this Policy or for compatible lawful purposes.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Legal Basis for Processing (EU/EEA)</h2>
            <ul className="text-gray-600 leading-relaxed mb-6 list-disc pl-6 space-y-2">
              <li>Performance of a contract when we provide services or respond to requests.</li>
              <li>Legitimate interest for site operation, analytics, and security.</li>
              <li>Consent where required, such as for cookies or newsletters.</li>
              <li>Legal obligation where necessary to comply with laws or orders.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Cookies and Tracking</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We use cookies and similar technologies to provide core functionality, improve performance, and measure usage. You may disable cookies in your browser; however,
              some features may not function properly. By continuing to use the Site, you consent to the use of cookies as described here.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Third-Party Service Providers</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We engage trusted third-party providers that perform functions such as website hosting, content delivery, analytics, email delivery, payment processing, and security monitoring.
              These providers are contractually limited to processing personal data only for the services they provide to us and required to maintain appropriate security and confidentiality measures.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. How We Share Information</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We do not sell personal information. We may share data only when necessary: with service providers that support our operations; with legal or regulatory authorities when required by law;
              to protect our rights, safety, or property; or as part of a business transaction subject to confidentiality obligations.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. International Transfers</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              If you access the Site from outside the United States, your data may be transferred to and processed in the U.S. or other countries. We use appropriate safeguards, including Standard Contractual Clauses where required.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Data Retention</h2>
            <p className="text-gray-600 leading-relaxed mb-6">We retain personal data only as long as needed for the purposes outlined in this Policy or as required by law.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Security</h2>
            <p className="text-gray-600 leading-relaxed mb-6">We implement reasonable administrative, technical, and physical measures to protect information. No system is entirely secure, but we strive to maintain industry-standard protections.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Your Rights</h2>
            <ul className="text-gray-600 leading-relaxed mb-4 list-disc pl-6 space-y-2">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction or deletion of your data.</li>
              <li>Restrict or object to processing.</li>
              <li>Withdraw consent where applicable.</li>
              <li>Request a copy of your data in portable form.</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-6">
              To exercise your rights, email <Link href="mailto:info@photonecho.dev" className="text-[#33bfff] hover:text-[#2aa3d9]">info@photonecho.dev</Link> with the subject "Privacy Request." We may verify your identity before responding.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. California Privacy Rights (CCPA/CPRA)</h2>
            <ul className="text-gray-600 leading-relaxed mb-6 list-disc pl-6 space-y-2">
              <li>Request disclosure of the categories and specific pieces of personal information collected.</li>
              <li>Request deletion of personal information, subject to legal exceptions.</li>
              <li>Opt out of the sale or sharing of personal information (we do not sell personal information).</li>
              <li>Not be discriminated against for exercising these rights.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. EU and UK Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              If you are in the EU or UK, you may also contact your local Data Protection Authority about how we handle personal data. Our lawful bases and transfer safeguards are described in Sections 4 and 8.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. Children's Privacy</h2>
            <p className="text-gray-600 leading-relaxed mb-6">The Site is not directed to children under 16 years of age. We do not knowingly collect personal information from minors.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">15. Automated Decision-Making</h2>
            <p className="text-gray-600 leading-relaxed mb-6">We do not engage in automated decision-making or profiling that has legal or significant effects on individuals.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">16. Changes to This Policy</h2>
            <p className="text-gray-600 leading-relaxed mb-6">We may update this Privacy Policy periodically. The effective date at the top will reflect the most recent revision.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">17. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed mb-6">This Privacy Policy and any disputes arising under it are governed by the laws of the State of Wisconsin, United States, without regard to conflict-of-law principles.</p>

            <div className="mt-12">
              <Link href="/contact">
                <Button 
                  variant="default" 
                  size="lg"
                  className="bg-[#33bfff] hover:bg-[#2aa3d9] text-white px-8 py-6 text-base font-medium rounded-md"
                >
                  Contact us
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
