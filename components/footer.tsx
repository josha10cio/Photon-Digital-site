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
      className="bg-photon-950 border-t border-photon-800 py-8 md:py-12 glassmorphism animate-fadeIn"
      style={{ animationDelay: "1.2s" }}
    >
      <div className="container flex flex-col items-center justify-between gap-6 px-4 md:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <Image src="/echo_Logo.png" alt="Photon Echo Logo" width={100} height={24} />
          <span className="sr-only">Photon Echo</span>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 text-sm md:gap-6">
          <Link
            href="/privacy-policy"
            className="text-muted-foreground hover:text-foreground transition-colors hover:scale-103"
          >
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors hover:scale-103">
            Terms & Conditions
          </Link>
          <Link
            href="/contact"
            className="text-muted-foreground hover:text-foreground transition-colors hover:scale-103"
          >
            Contact Us
          </Link>
          <Link
            href="mailto:info@photonecho.dev"
            className="text-muted-foreground hover:text-foreground transition-colors hover:scale-103 flex items-center gap-1"
          >
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
            className="text-muted-foreground hover:text-photon-500 transition-colors icon-glow-blue"
          >
            <LinkedinIcon className="h-5 w-5" />
          </Link>
          <Link
            href="https://x.com/photon_digital"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="text-muted-foreground hover:text-photon-500 transition-colors icon-glow-blue"
          >
            <XIcon className="h-5 w-5" />
          </Link>
          {/* GitHub removed per request */}
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Photon. All rights reserved.
      </div>
    </footer>
  )
}
