import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShieldCheckIcon, FileTextIcon, AwardIcon, UsersIcon, ClockIcon, CheckCircleIcon } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Capabilities",
  description:
    "Professional design, visualization, and engineering capabilities for complex projects. Fresh approach with cutting edge tools and methodologies.",
}

export default function GovernmentPage() {
  return (
    <div className="flex flex-col min-h-[calc(100dvh-4rem)]">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 lg:py-48 bg-photon-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-photon-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
          <div
            className="absolute top-1/3 right-1/4 w-96 h-96 bg-photon-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-photon-500/20 text-photon-100 border-photon-500/30 px-4 py-2 text-sm font-medium">
                Fresh Approach • Modern Tools
              </Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-tight mb-8 animate-fadeIn">
              Our Design & Engineering Capabilities
            </h1>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto font-light mb-12 animate-fadeIn" style={{ animationDelay: "0.3s" }}>
              Ready to tackle complex design, visualization, and engineering challenges with innovative methodologies 
              and cutting edge technology capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn" style={{ animationDelay: "0.6s" }}>
              <Link href="/contact">
                <Button className="btn-primary px-10 py-4 text-lg font-medium">
                  <ShieldCheckIcon className="mr-2 w-5 h-5" />
                  Discuss Your Project
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="px-10 py-4 text-lg font-medium border-white/30 text-white hover:bg-white/10 bg-transparent">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Government Credentials Section */}
      <section className="w-full py-20 md:py-32 bg-photon-950">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Government Credentials & Compliance</h2>
            <p className="text-lg text-photon-200 max-w-2xl mx-auto">
              Fully qualified and compliant for government contracting with proven security and quality standards.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <Card className="bg-photon-900/50 border border-photon-800 text-white group glassmorphism">
              <CardHeader className="text-center">
                <ShieldCheckIcon className="h-12 w-12 text-photon-500 mx-auto mb-4" />
                <CardTitle className="text-lg">Security Clearance</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-photon-200 text-sm">Secret clearance holders available for classified projects</p>
              </CardContent>
            </Card>

            <Card className="bg-photon-900/50 border border-photon-800 text-white group glassmorphism">
              <CardHeader className="text-center">
                <FileTextIcon className="h-12 w-12 text-photon-500 mx-auto mb-4" />
                <CardTitle className="text-lg">GSA Schedule</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-photon-200 text-sm">Multiple Access • IT Schedule 70 • Professional Services</p>
              </CardContent>
            </Card>

            <Card className="bg-photon-900/50 border border-photon-800 text-white group glassmorphism">
              <CardHeader className="text-center">
                <AwardIcon className="h-12 w-12 text-photon-500 mx-auto mb-4" />
                <CardTitle className="text-lg">Small Business</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-photon-200 text-sm">SBA Certified • 8(a) • HUBZone • Service-Disabled Veteran</p>
              </CardContent>
            </Card>

            <Card className="bg-photon-900/50 border border-photon-800 text-white group glassmorphism">
              <CardHeader className="text-center">
                <UsersIcon className="h-12 w-12 text-photon-500 mx-auto mb-4" />
                <CardTitle className="text-lg">CAGE Code</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-photon-200 text-sm">Verified contractor • DUNS registered • SAM.gov active</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Government Services Section */}
      <section className="w-full py-20 md:py-32 bg-photon-900/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Specialized Government Services</h2>
            <p className="text-lg text-photon-200 max-w-2xl mx-auto">
              Tailored design and engineering solutions meeting strict government requirements and security protocols.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            <Card className="bg-photon-900/50 border border-photon-800 text-white glassmorphism">
              <CardHeader>
                <CardTitle className="text-xl">Defense & Security Design</CardTitle>
                <div className="w-12 h-1 bg-photon-500 rounded-full"></div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-photon-200 mb-4">
                  Specialized design services for defense applications, security systems, and classified projects.
                </CardDescription>
                <ul className="space-y-2 text-sm text-photon-300">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-photon-500" />
                    ITAR compliant designs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-photon-500" />
                    Classified system documentation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-photon-500" />
                    Security protocol visualization
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-photon-900/50 border border-photon-800 text-white glassmorphism">
              <CardHeader>
                <CardTitle className="text-xl">Proposal Support</CardTitle>
                <div className="w-12 h-1 bg-photon-700 rounded-full"></div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-photon-200 mb-4">
                  Comprehensive proposal development support for government RFPs and contract responses.
                </CardDescription>
                <ul className="space-y-2 text-sm text-photon-300">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-photon-500" />
                    Technical volume development
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-photon-500" />
                    Capability demonstrations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-photon-500" />
                    Past performance documentation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-photon-900/50 border border-photon-800 text-white glassmorphism">
              <CardHeader>
                <CardTitle className="text-xl">Compliance Documentation</CardTitle>
                <div className="w-12 h-1 bg-photon-600 rounded-full"></div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-photon-200 mb-4">
                  Technical documentation meeting federal standards and regulatory requirements.
                </CardDescription>
                <ul className="space-y-2 text-sm text-photon-300">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-photon-500" />
                    MIL-STD documentation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-photon-500" />
                    Section 508 compliance
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-photon-500" />
                    FedRAMP documentation
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Past Performance Section */}
      <section className="w-full py-20 md:py-32 bg-photon-950">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Proven Past Performance</h2>
            <p className="text-lg text-photon-200 max-w-2xl mx-auto">
              Successful project delivery for major government agencies and defense contractors.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="glassmorphism p-8 border border-photon-800">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-photon-500/20 rounded-lg flex items-center justify-center">
                  <ClockIcon className="h-6 w-6 text-photon-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Project Timeline Excellence</h3>
                  <p className="text-sm text-photon-300">98% on-time delivery rate</p>
                </div>
              </div>
              <p className="text-photon-200">
                Consistent delivery of critical design and engineering projects within government timelines and budget constraints.
              </p>
            </div>

            <div className="glassmorphism p-8 border border-photon-800">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-photon-500/20 rounded-lg flex items-center justify-center">
                  <AwardIcon className="h-6 w-6 text-photon-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Quality Assurance</h3>
                  <p className="text-sm text-photon-300">Zero security incidents</p>
                </div>
              </div>
              <p className="text-photon-200">
                Maintained perfect security record across all classified and sensitive government projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-32 bg-photon-gradient-hero text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto glassmorphism p-8 md:p-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Ready to Work with Government?
            </h2>
            <p className="text-lg md:text-xl text-photon-100 max-w-2xl mx-auto mb-8">
              Contact us for capability statements, past performance references, or to discuss your government project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="btn-primary px-12 py-4 text-lg font-semibold">
                  <FileTextIcon className="mr-2 w-5 h-5" />
                  Request Capability Statement
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" className="px-12 py-4 text-lg font-semibold border-white/30 text-white hover:bg-white/10 bg-transparent">
                  View Government Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

