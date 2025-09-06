"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SearchIcon, MenuIcon, XIcon } from "lucide-react"
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
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/government", label: "Government" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        isScrolled ? "bg-photon-950/80 backdrop-blur-xl border-b border-photon-800/50 shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg group">
          <div className="relative">
            <Image
              src="/echo_Logo.png"
              alt="Photon Echo Logo"
              width={120}
              height={28}
              priority
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <span className="sr-only">Photon Echo</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white hover:text-photon-500 transition-all duration-300 hover:scale-105 relative group tracking-wide"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-photon-500 to-photon-700 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-9 pr-4 py-2 w-64 bg-photon-800/50 border border-photon-700/50 text-white placeholder:text-photon-300 focus:ring-photon-500 focus:border-photon-500 glassmorphism transition-all duration-300 focus:w-72 font-medium"
            />
          </div>


          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:scale-105 transition-all duration-300 icon-glow-blue"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            <span className="sr-only">Toggle mobile menu</span>
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden glassmorphism border-t border-photon-800/50 py-4 px-4 animate-in slide-in-from-top-2 duration-300">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-white hover:text-photon-500 transition-colors py-2 hover:scale-105"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="relative mt-2">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full pl-9 pr-4 py-2 bg-photon-800/50 border border-photon-700/50 text-white placeholder:text-photon-300 focus:ring-photon-500 focus:border-photon-500 glassmorphism"
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
