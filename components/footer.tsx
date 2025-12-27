import Link from "next/link"
import Image from "next/image"
import {
  LinkedinIcon,
  XIcon,
  MailIcon,
} from "lucide-react"

export function Footer() {
  return (
    <footer
      className="bg-white border-t border-gray-200 py-8 md:py-12 animate-fadeIn"
      style={{ animationDelay: "1.2s" }}
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/echo_Update_Logo_Dark-Grey.png" alt="Photon Echo Logo" width={100} height={24} />
            <span className="sr-only">Photon Echo</span>
          </div>

          {/* Page Links */}
          <nav className="flex flex-col items-center md:items-start gap-2 text-sm">
            <span className="font-semibold text-gray-900 mb-1">Pages</span>
            <Link href="/mission" className="text-gray-600 hover:text-[#33bfff] transition-colors">
              Mission
            </Link>
            <Link href="/government" className="text-gray-600 hover:text-[#33bfff] transition-colors">
              Government
            </Link>
            <Link href="/services/artificial-data" className="text-gray-600 hover:text-[#33bfff] transition-colors">
              Artificial Data Development
            </Link>
            <Link href="/digital_twin" className="text-gray-600 hover:text-[#33bfff] transition-colors">
              Digital Twin
            </Link>
            <Link href="/insights" className="text-gray-600 hover:text-[#33bfff] transition-colors">
              Insights
            </Link>
          </nav>

          {/* Legal Links */}
          <nav className="flex flex-col items-center md:items-start gap-2 text-sm">
            <span className="font-semibold text-gray-900 mb-1">Legal</span>
            <Link href="/privacy-policy" className="text-gray-600 hover:text-[#33bfff] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-[#33bfff] transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-[#33bfff] transition-colors">
              Contact
            </Link>
            <Link href="mailto:info@photonecho.dev" className="text-gray-600 hover:text-[#33bfff] transition-colors flex items-center gap-1">
              <MailIcon className="h-4 w-4" />
              info@photonecho.dev
            </Link>
          </nav>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start gap-2 text-sm">
            <span className="font-semibold text-gray-900 mb-1">Connect</span>
            <Link
              href="https://www.linkedin.com/company/photonecho/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#33bfff] transition-colors flex items-center gap-2"
            >
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
            </Link>
            <Link
              href="https://x.com/EchoPhoton"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#33bfff] transition-colors flex items-center gap-2"
            >
              <XIcon className="h-4 w-4" />
              X (Twitter)
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 text-sm text-gray-600 w-full flex flex-col items-center gap-3">
        <Image src="/photon_logo.png" alt="Photon Logo" width={53} height={13} />
        <span>&copy; 2026 Photon. All rights reserved.</span>
      </div>
    </footer>
  )
}
