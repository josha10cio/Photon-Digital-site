import Link from "next/link"
import Image from "next/image"
import {
  YoutubeIcon,
  XIcon,
  FacebookIcon,
  InstagramIcon as TiktokIcon,
  DiscIcon as DiscordIcon,
  InstagramIcon,
} from "lucide-react"

export function Footer() {
  return (
    <footer
      className="bg-photon-950 border-t border-photon-800 py-8 md:py-12 glassmorphism animate-fadeIn"
      style={{ animationDelay: "1.2s" }}
    >
      <div className="container flex flex-col items-center justify-between gap-6 px-4 md:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <Image src="/echo_Logo.png" alt="Echo Logo" width={100} height={24} />
          <span className="sr-only">Echo Design & Engineering</span>
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
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="#"
            aria-label="YouTube"
            className="text-muted-foreground hover:text-photon-500 transition-colors icon-glow-blue"
          >
            <YoutubeIcon className="h-5 w-5" />
          </Link>
          <Link
            href="#"
            aria-label="X (Twitter)"
            className="text-muted-foreground hover:text-photon-500 transition-colors icon-glow-blue"
          >
            <XIcon className="h-5 w-5" />
          </Link>
          <Link
            href="#"
            aria-label="Facebook"
            className="text-muted-foreground hover:text-photon-500 transition-colors icon-glow-blue"
          >
            <FacebookIcon className="h-5 w-5" />
          </Link>
          <Link
            href="#"
            aria-label="TikTok"
            className="text-muted-foreground hover:text-photon-500 transition-colors icon-glow-blue"
          >
            <TiktokIcon className="h-5 w-5" />
          </Link>
          <Link
            href="#"
            aria-label="Discord"
            className="text-muted-foreground hover:text-photon-500 transition-colors icon-glow-blue"
          >
            <DiscordIcon className="h-5 w-5" />
          </Link>
          <Link
            href="#"
            aria-label="Instagram"
            className="text-muted-foreground hover:text-photon-500 transition-colors icon-glow-blue"
          >
            <InstagramIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Photon. All rights reserved.
      </div>
    </footer>
  )
}
