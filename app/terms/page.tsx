import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms – Photon Echo",
  description: "Basic terms for using the Photon Echo site.",
}

export default function TermsPage() {
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
                Terms
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Please read these terms carefully before using this site. By accessing or using the site you agree to these terms.
              </p>
            </div>

            {/* Right Column - Sections Overview */}
            <div className="bg-gray-800 rounded-lg p-8">
              <p className="text-lg text-gray-300 mb-4">Main sections include</p>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>Acceptance of terms</li>
                <li>Intellectual property</li>
                <li>Acceptable use</li>
                <li>No warranties</li>
                <li>Limitation of liability</li>
                <li>Indemnification</li>
                <li>Third party links</li>
                <li>Governing law</li>
                <li>Changes to terms</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content Section */}
      <section className="w-full py-12 md:py-16 bg-white text-gray-900">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              By accessing or using this website (the "Site"), you agree to be bound by these Terms & Conditions. If you do not agree, do not use the Site.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              All content on the Site, including text, graphics, logos, images, and software, is owned by Photon Digital LLC ("Photon Digital") or its licensors and is protected by intellectual property laws. You may not copy, reproduce, or distribute content without written permission.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Acceptable Use</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              You agree not to misuse the Site, interfere with its operation, or attempt to gain unauthorized access to systems or data.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. No Warranties</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              This Site is provided "as is" without warranties of any kind. We disclaim all warranties, express or implied, to the fullest extent permitted by law.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              To the maximum extent permitted by law, Photon Digital shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Site.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Indemnification</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              You agree to indemnify and hold harmless Photon Digital from any claims arising out of your use of the Site or violation of these Terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Third-Party Links</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We may link to third-party sites for convenience. We are not responsible for their content or practices.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              These Terms are governed by the laws of the State of Wisconsin, USA, without regard to conflict-of-law principles.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We may update these Terms from time to time. Continued use of the Site constitutes acceptance of the updated Terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Contact</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              For questions about these terms contact <Link href="mailto:info@photonecho.dev" className="text-[#33bfff] hover:text-[#2aa3d9]">info@photonecho.dev</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
