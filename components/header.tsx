"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MenuIcon, XIcon } from "lucide-react"
import { useState, useEffect } from "react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/phase-i", label: "Phase I" },
    { href: "/market", label: "Market" },
    { href: "/investors", label: "Investors" },
    { href: "/early-access", label: "Early Access" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg" : "bg-white"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg group">
          <div className="relative">
            <Image
              src="/echo_Logo_Dark_Grey.png"
              alt="Photon Echo Logo"
              width={120}
              height={28}
              priority
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <span className="sr-only">Photon Echo</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group tracking-wide"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden md:block">
            <Button variant="default" className="bg-blue-600 hover:bg-blue-700 text-white">
              Request Demo
            </Button>
          </Link>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:scale-105 transition-all duration-300 text-gray-700 hover:text-blue-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            <span className="sr-only">Toggle mobile menu</span>
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4 animate-in slide-in-from-top-2 duration-300 shadow-lg">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors py-2 hover:scale-105"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="mt-2">
              <Button variant="default" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Request Demo
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
