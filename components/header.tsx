"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SearchIcon, MenuIcon, XIcon, ChevronDownIcon } from "lucide-react"
import { useState, useEffect } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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
    { href: "/physical_ai", label: "Physical AI" },
    { href: "/digital_twin", label: "Digital Twin" },
    { href: "/services", label: "Services Overview" },
    { href: "/government", label: "Government" },
    { href: "/mission", label: "Mission" },
    { href: "/insights", label: "Insights" },
    { href: "/investors", label: "Investors" },
    { href: "/contact", label: "Contact" },
  ]

  const serviceLinks = [
    { href: "/services/design", label: "Design Services" },
    { href: "/services/visualization", label: "Visualization Services" },
    { href: "/services/engineering", label: "Engineering Services" },
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
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white hover:text-photon-500 transition-all duration-300 hover:scale-105 relative group tracking-wide"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-photon-500 to-photon-700 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
          ))}
          
          {/* Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-medium text-white hover:text-photon-500 transition-all duration-300 relative group tracking-wide flex items-center gap-1">
              Services
              <ChevronDownIcon className="h-4 w-4" />
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-photon-500 to-photon-700 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-photon-900 border-photon-800 text-white">
              <DropdownMenuItem asChild>
                <Link href="/services" className="cursor-pointer hover:bg-photon-800 font-semibold">
                  Services Overview
                </Link>
              </DropdownMenuItem>
              {serviceLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href} className="cursor-pointer hover:bg-photon-800">
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navLinks.slice(2).map((link) => (
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
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-white hover:text-photon-500 transition-colors py-2 hover:scale-105"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Services Section */}
            <div className="border-t border-photon-800/50 pt-4 mt-2">
              <div className="text-sm font-semibold text-photon-400 mb-2">Services</div>
              <Link
                href="/services"
                className="block text-base font-medium text-white hover:text-photon-500 transition-colors py-2 pl-4 hover:scale-105 font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services Overview
              </Link>
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-base font-medium text-white hover:text-photon-500 transition-colors py-2 pl-4 hover:scale-105"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            {navLinks.slice(2).map((link) => (
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
