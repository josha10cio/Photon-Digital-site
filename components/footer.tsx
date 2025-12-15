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
      <div className="container flex flex-col items-center justify-between gap-6 px-4 md:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <Image src="/echo_Update_Logo_Dark-Grey.png" alt="Photon Echo Logo" width={100} height={24} />
          <span className="sr-only">Photon Echo</span>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 text-sm md:gap-6">
          <Link href="/privacy-policy" className="text-gray-600 hover:text-[#33bfff] transition-colors hover:scale-103">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-gray-600 hover:text-[#33bfff] transition-colors hover:scale-103">
            Terms
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-[#33bfff] transition-colors hover:scale-103">
            Contact
          </Link>
          <Link href="mailto:info@photonecho.dev" className="text-gray-600 hover:text-[#33bfff] transition-colors hover:scale-103 flex items-center gap-1">
            <MailIcon className="h-4 w-4" />
            info@photonecho.dev
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="https://www.linkedin.com/company/photonecho/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-600 hover:text-[#33bfff] transition-colors"
          >
            <LinkedinIcon className="h-5 w-5" />
          </Link>
          <Link
            href="https://x.com/EchoPhoton"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="text-gray-600 hover:text-[#33bfff] transition-colors"
          >
            <XIcon className="h-5 w-5" />
          </Link>
          {/* GitHub removed per request */}
        </div>
      </div>
      <div className="mt-8 text-sm text-gray-600 w-full flex flex-col items-center gap-3">
        <Image src="/photon_logo.png" alt="Photon Logo" width={80} height={20} />
        <span>&copy; {new Date().getFullYear()} Photon. All rights reserved.</span>
      </div>
    </footer>
  )
}
