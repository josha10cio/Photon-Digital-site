import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms",
  description: "Basic terms for Photon Digital LLC. Contact info@photonecho.dev. © 2025.",
}

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-[calc(100dvh-4rem)]">
      <section className="w-full py-20 md:py-28 bg-photon-gradient-hero text-white text-center">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl leading-tight">Terms</h1>
          <p className="mt-4 text-lg md:text-xl text-photon-100 max-w-3xl mx-auto">
            Please read these Terms carefully before using this Site.
          </p>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 bg-photon-950 text-white">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto prose prose-invert">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using this website (the "Site"), you agree to be bound by these Terms & Conditions. If you do not agree, do not use the
            Site.
          </p>

          <h2>2. Intellectual Property</h2>
          <p>
            All content on the Site, including text, graphics, logos, images, and software, is owned by Photon Digital LLC ("Photon Digital") or its
            licensors and is protected by intellectual property laws. You may not copy, reproduce, or distribute content without written permission.
          </p>

          <h2>3. Acceptable Use</h2>
          <p>You agree not to misuse the Site, interfere with its operation, or attempt to gain unauthorized access to systems or data.</p>

          <h2>4. No Warranties</h2>
          <p>This Site is provided "as is" without warranties of any kind. We disclaim all warranties, express or implied, to the fullest extent permitted by law.</p>

          <h2>5. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Photon Digital shall not be liable for any indirect, incidental, special, consequential, or
            punitive damages arising out of or related to your use of the Site.
          </p>

          <h2>6. Indemnification</h2>
          <p>You agree to indemnify and hold harmless Photon Digital from any claims arising out of your use of the Site or violation of these Terms.</p>

          <h2>7. Third-Party Links</h2>
          <p>We may link to third-party sites for convenience. We are not responsible for their content or practices.</p>

          <h2>8. Governing Law</h2>
          <p>These Terms are governed by the laws of the State of Wisconsin, USA, without regard to conflict-of-law principles.</p>

          <h2>9. Changes to Terms</h2>
          <p>We may update these Terms from time to time. Continued use of the Site constitutes acceptance of the updated Terms.</p>

          <h2>10. Contact</h2>
          <p>
            Questions? Email <Link href="mailto:info@photonecho.dev">info@photonecho.dev</Link>.
          </p>
        </div>
      </section>
    </div>
  )
}


