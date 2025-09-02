"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PortfolioClientPage() {
  const projects = [
    {
      id: 1,
      category: "Design",
      industry: "Aerospace",
      service: "Concept Design",
      title: "Next-Gen Aircraft Interior",
      description: "Complete interior design for next-generation commercial aircraft focusing on passenger experience and efficiency.",
      capabilities: "3D modeling, ergonomic analysis, material selection, regulatory compliance",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      category: "Visualization",
      industry: "Manufacturing",
      service: "Technical Documentation",
      title: "Assembly Line Optimization",
      description: "Comprehensive technical drawings and process visualization for automated manufacturing systems.",
      capabilities: "CAD drawings, process flow diagrams, 3D assembly animations, training materials",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      category: "Engineering",
      industry: "Defense",
      service: "Product Engineering",
      title: "Tactical Communication System",
      description: "Ruggedized communication hardware for military field operations with enhanced security protocols.",
      capabilities: "Systems engineering, environmental testing, security compliance, technical specifications",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 4,
      category: "Design",
      industry: "Medical",
      service: "Industrial Design",
      title: "Surgical Instrument Suite",
      description: "Ergonomic design of precision surgical instruments with focus on usability and sterility.",
      capabilities: "Ergonomic analysis, material science, FDA compliance, user testing",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 5,
      category: "Visualization",
      industry: "Architecture",
      service: "Real-time Demos",
      title: "Smart Building Visualization",
      description: "Interactive Unreal Engine demonstration of smart building systems and environmental controls.",
      capabilities: "Real-time rendering, interactive interfaces, system integration visualization",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 6,
      category: "Engineering",
      industry: "Automotive",
      service: "Manufacturing Support",
      title: "Electric Vehicle Components",
      description: "Design for manufacturing optimization of EV battery cooling systems and assembly processes.",
      capabilities: "DFM analysis, thermal modeling, process optimization, quality assurance protocols",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 7,
      category: "Design",
      industry: "Government",
      service: "UI/UX Design",
      title: "Agency Data Dashboard",
      description: "Secure, accessible interface design for government data analysis and reporting systems.",
      capabilities: "Section 508 compliance, security protocols, user experience design, accessibility standards",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 8,
      category: "Visualization",
      industry: "Energy",
      service: "Animations",
      title: "Renewable Energy Systems",
      description: "Technical animations explaining complex renewable energy infrastructure and maintenance procedures.",
      capabilities: "Technical illustration, process animation, training content, safety documentation",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 9,
      category: "Engineering",
      industry: "Healthcare",
      service: "Technical Documentation",
      title: "Medical Device Compliance",
      description: "Complete regulatory documentation package for FDA approval of innovative medical monitoring device.",
      capabilities: "FDA 510(k) documentation, risk analysis, validation testing, regulatory strategy",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const [filterCategory, setFilterCategory] = useState("All")
  const [filterIndustry, setFilterIndustry] = useState("All")

  const filteredProjects = projects.filter((project) => {
    const categoryMatch = filterCategory === "All" || project.category === filterCategory
    const industryMatch = filterIndustry === "All" || project.industry === filterIndustry
    return categoryMatch && industryMatch
  })

  const industries = Array.from(new Set(projects.map(p => p.industry))).sort()
  const categories = ["Design", "Visualization", "Engineering"]

  return (
    <div className="flex flex-col min-h-[calc(100dvh-4rem)]">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 lg:py-48 bg-photon-gradient-hero text-white text-center animate-fadeIn">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
            Portfolio & Capabilities
          </h1>
          <p className="mt-4 text-lg md:text-xl text-photon-100 max-w-3xl mx-auto">
            Explore our expertise through successful projects across design, visualization, and engineering services for commercial and government clients.
          </p>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="w-full py-16 md:py-24 bg-photon-950 text-white relative z-10">
        <div className="container px-4 md:px-6">
          <div
            className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4 animate-fadeIn"
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="section-title text-photon-500">Capabilities Showcase</h2>
            {/* Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              <Button
                variant="outline"
                className={`bg-photon-800 border-photon-700 text-photon-100 hover:bg-photon-700 hover:text-white hover:scale-103 transition-all duration-300 glassmorphism icon-glow-blue ${
                  filterCategory === "All" && filterIndustry === "All" ? "bg-photon-500 text-white animate-pulse-glow" : ""
                }`}
                onClick={() => {
                  setFilterCategory("All")
                  setFilterIndustry("All")
                }}
              >
                All Projects
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  className={`bg-photon-800 border-photon-700 text-photon-100 hover:bg-photon-700 hover:text-white hover:scale-103 transition-all duration-300 glassmorphism icon-glow-blue ${
                    filterCategory === category ? "bg-photon-500 text-white animate-pulse-glow" : ""
                  }`}
                  onClick={() => setFilterCategory(category)}
                >
                  {category}
                </Button>
              ))}
              {industries.map((industry) => (
                <Button
                  key={industry}
                  variant="outline"
                  className={`bg-photon-800 border-photon-700 text-photon-100 hover:bg-photon-700 hover:text-white hover:scale-103 transition-all duration-300 glassmorphism icon-glow-blue ${
                    filterIndustry === industry ? "bg-photon-500 text-white animate-pulse-glow" : ""
                  }`}
                  onClick={() => setFilterIndustry(industry)}
                >
                  {industry}
                </Button>
              ))}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="bg-photon-900 border border-photon-800 text-white overflow-hidden group glassmorphism shadow-inner-bevel card-lift-on-hover relative z-10 animate-fadeIn"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="relative h-48 w-full border-b border-photon-700">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-110 filter blur-[1px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-photon-950/70 to-transparent"></div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="inline-flex items-center rounded-full bg-photon-700 px-3 py-1 text-xs font-medium text-photon-100 glassmorphism">
                      {project.category}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-photon-600 px-3 py-1 text-xs font-medium text-photon-100 glassmorphism">
                      {project.industry}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-photon-500">{project.title}</CardTitle>
                  <CardDescription className="text-photon-200">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <span className="text-xs font-semibold text-photon-400 uppercase tracking-wide">Service Type</span>
                      <p className="text-sm text-photon-200">{project.service}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-photon-400 uppercase tracking-wide">Key Capabilities</span>
                      <p className="text-sm text-photon-300">{project.capabilities}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {filteredProjects.length === 0 && (
            <div className="col-span-full text-center text-photon-300 text-lg py-12">
              No projects match your current filters.
            </div>
          )}
        </div>
      </section>

      {/* CTA at bottom */}
      <section
        className="w-full py-16 md:py-24 bg-photon-gradient-hero text-white text-center relative z-10 animate-fadeIn"
        style={{ animationDelay: "0.4s" }}
      >
        <div className="container px-4 md:px-6">
          <h2 className="section-title">Ready to Work with Our Expert Team?</h2>
          <p className="mt-4 text-lg md:text-xl text-photon-100 max-w-2xl mx-auto">
            Leverage our proven capabilities for your next design, visualization, or engineering project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact">
              <Button className="px-8 py-3 text-lg bg-white text-photon-900 hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105 icon-glow-blue animate-pulse-glow">
                Start Your Project
              </Button>
            </Link>
            <Link href="/services">
              <Button className="px-8 py-3 text-lg bg-transparent border-2 border-white text-white hover:bg-white hover:text-photon-900 transition-all duration-300 shadow-lg hover:scale-105">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
