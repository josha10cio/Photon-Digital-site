import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRightIcon,
  CheckCircleIcon,
  PlayIcon,
  EyeIcon,
  MessageSquareIcon,
  PenToolIcon,
  TestTubeIcon,
  PackageIcon,
  SettingsIcon,
  UserCheckIcon,
  FileCheckIcon,
  ClockIcon,
  StarIcon,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "Discover Echo's proven 4-step design and engineering process: Discovery, Concept Development, Refinement, and Delivery. Fresh approach ensuring quality results.",
}

export default function ProcessPage() {
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

        <div className="container relative z-10 px-4 md:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <Badge className="bg-photon-500/20 text-photon-100 border-photon-500/30 px-4 py-2 text-sm font-medium">
                Our Process • Quality Assured
              </Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-8 animate-fadeIn">
              Our Proven Process
            </h1>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto font-light mb-12 animate-fadeIn" style={{ animationDelay: "0.3s" }}>
              A systematic approach to delivering exceptional design and engineering solutions, 
              refined through years of experience across commercial and government projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn" style={{ animationDelay: "0.6s" }}>
              <Link href="/contact">
                <Button className="btn-primary px-10 py-4 text-lg font-medium group animate-pulse-glow">
                  <PlayIcon className="mr-2 w-5 h-5" />
                  Start Your Project
                  <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="px-10 py-4 text-lg font-medium border-white/30 text-white hover:bg-white/10 bg-transparent">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="w-full py-20 md:py-32 bg-photon-950">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Process Excellence</h2>
            <p className="text-lg text-photon-200 max-w-2xl mx-auto">
              Our methodical approach ensures consistent quality, timely delivery, and client satisfaction across all project types.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto mb-16">
            <div className="text-center group">
              <div className="w-20 h-20 rounded-full bg-photon-500/20 flex items-center justify-center mb-4 mx-auto border border-photon-500/30 group-hover:border-photon-500 transition-all duration-300">
                <EyeIcon className="h-10 w-10 text-photon-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Discovery</h3>
              <p className="text-sm text-photon-300">Understanding your vision and requirements</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 rounded-full bg-photon-600/20 flex items-center justify-center mb-4 mx-auto border border-photon-600/30 group-hover:border-photon-600 transition-all duration-300">
                <PenToolIcon className="h-10 w-10 text-photon-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Design</h3>
              <p className="text-sm text-photon-300">Creating solutions that meet your goals</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 rounded-full bg-photon-700/20 flex items-center justify-center mb-4 mx-auto border border-photon-700/30 group-hover:border-photon-700 transition-all duration-300">
                <TestTubeIcon className="h-10 w-10 text-photon-700" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Refinement</h3>
              <p className="text-sm text-photon-300">Iterating based on feedback and testing</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 rounded-full bg-photon-800/20 flex items-center justify-center mb-4 mx-auto border border-photon-800/30 group-hover:border-photon-800 transition-all duration-300">
                <PackageIcon className="h-10 w-10 text-photon-800" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Delivery</h3>
              <p className="text-sm text-photon-300">Final products with ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Process Steps */}
      <section className="w-full py-20 md:py-32 bg-photon-900/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Step-by-Step Workflow</h2>
            <p className="text-lg text-photon-200 max-w-2xl mx-auto">
              Each phase is carefully planned and executed to ensure optimal results and client satisfaction.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Phase 1: Discovery */}
            <Card className="bg-photon-900/50 border border-photon-800 text-white glassmorphism">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-photon-500/20 flex items-center justify-center border border-photon-500/30">
                    <span className="text-xl font-bold text-photon-500">1</span>
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Discovery & Requirements</CardTitle>
                    <CardDescription className="text-photon-300">Understanding your project goals and constraints</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="ml-16">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <MessageSquareIcon className="h-5 w-5 text-photon-500" />
                      Initial Consultation
                    </h4>
                    <ul className="space-y-2 text-sm text-photon-300">
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-photon-500" />
                        Project scope and objectives
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-photon-500" />
                        Technical requirements analysis
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-photon-500" />
                        Budget and timeline discussion
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <FileCheckIcon className="h-5 w-5 text-photon-500" />
                      Documentation
                    </h4>
                    <ul className="space-y-2 text-sm text-photon-300">
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-photon-500" />
                        Detailed project brief
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-photon-500" />
                        Technical specifications
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-photon-500" />
                        Success criteria definition
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phase 2: Concept Development */}
            <Card className="bg-photon-900/50 border border-photon-800 text-white glassmorphism">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-photon-600/20 flex items-center justify-center border border-photon-600/30">
                    <span className="text-xl font-bold text-photon-600">2</span>
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Concept Development</CardTitle>
                    <CardDescription className="text-photon-300">Creating initial designs and exploring solutions</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="ml-16">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <PenToolIcon className="h-5 w-5 text-photon-600" />
                      Design Exploration
                    </h4>
                    <ul className="space-y-2 text-sm text-photon-300">
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-photon-600" />
                        Initial concept sketches
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-photon-600" />
                        Multiple design alternatives
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-photon-600" />
                        Feasibility assessment
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <UserCheckIcon className="h-5 w-5 text-photon-600" />
                      Client Collaboration
                    </h4>
                    <ul className="space-y-2 text-sm text-photon-300">
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-photon-600" />
                        Regular progress reviews
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-photon-600" />
                        Feedback incorporation
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-photon-600" />
                        Concept approval process
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phase 3: Detailed Design */}
            <Card className="bg-photon-900/50 border border-photon-800 text-white glassmorphism">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-photon-700/20 flex items-center justify-center border border-photon-700/30">
                    <span className="text-xl font-bold text-photon-700">3</span>
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Detailed Design & Development</CardTitle>
                    <CardDescription className="text-photon-300">Refining designs and creating final solutions</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="ml-16">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <SettingsIcon className="h-5 w-5 text-photon-700" />
                      Technical Development
                    </h4>
                    <ul className="space-y-2 text-sm text-photon-300">
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-photon-700" />
                        Detailed CAD modeling
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-photon-700" />
                        Engineering calculations
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-photon-700" />
                        Material and component selection
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <TestTubeIcon className="h-5 w-5 text-photon-700" />
                      Testing & Validation
                    </h4>
                    <ul className="space-y-2 text-sm text-photon-300">
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-photon-700" />
                        Simulation and analysis
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-photon-700" />
                        Prototype testing
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-photon-700" />
                        Performance verification
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phase 4: Delivery */}
            <Card className="bg-photon-900/50 border border-photon-800 text-white glassmorphism">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-photon-800/20 flex items-center justify-center border border-photon-800/30">
                    <span className="text-xl font-bold text-photon-800">4</span>
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Final Delivery & Support</CardTitle>
                    <CardDescription className="text-photon-300">Delivering complete solutions with ongoing support</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="ml-16">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <PackageIcon className="h-5 w-5 text-photon-800" />
                      Deliverables
                    </h4>
                    <ul className="space-y-2 text-sm text-photon-300">
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-photon-800" />
                        Complete design files
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-photon-800" />
                        Technical documentation
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-photon-800" />
                        Manufacturing specifications
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <StarIcon className="h-5 w-5 text-photon-800" />
                      Ongoing Support
                    </h4>
                    <ul className="space-y-2 text-sm text-photon-300">
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-photon-800" />
                        Implementation guidance
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-photon-800" />
                        Technical support
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-photon-800" />
                        Post-delivery consultation
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="w-full py-20 md:py-32 bg-photon-950">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Quality Assurance</h2>
            <p className="text-lg text-photon-200 max-w-2xl mx-auto">
              Rigorous quality controls and industry standards ensure exceptional results at every stage.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <Card className="bg-photon-900/50 border border-photon-800 text-white glassmorphism text-center">
              <CardHeader>
                <ClockIcon className="h-12 w-12 text-photon-500 mx-auto mb-4" />
                <CardTitle className="text-xl">On-Time Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-photon-500 mb-2">98%</p>
                <p className="text-photon-300">Projects delivered on schedule with clear milestone tracking</p>
              </CardContent>
            </Card>

            <Card className="bg-photon-900/50 border border-photon-800 text-white glassmorphism text-center">
              <CardHeader>
                <StarIcon className="h-12 w-12 text-photon-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Client Satisfaction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-photon-600 mb-2">4.9/5</p>
                <p className="text-photon-300">Average client rating across all project types and industries</p>
              </CardContent>
            </Card>

            <Card className="bg-photon-900/50 border border-photon-800 text-white glassmorphism text-center">
              <CardHeader>
                <CheckCircleIcon className="h-12 w-12 text-photon-700 mx-auto mb-4" />
                <CardTitle className="text-xl">Quality Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-photon-700 mb-2">ISO</p>
                <p className="text-photon-300">Certified quality management systems and processes</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-32 bg-photon-gradient-hero text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto glassmorphism p-8 md:p-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-photon-200 font-medium">Ready to Experience Our Process?</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Start Your Project Today
            </h2>
            <p className="text-lg md:text-xl text-photon-100 max-w-2xl mx-auto mb-8">
              Experience our proven process firsthand and see how we can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="btn-primary px-12 py-4 text-lg font-semibold group animate-pulse-glow">
                  <PlayIcon className="mr-2 w-5 h-5" />
                  Get Started
                  <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  variant="outline"
                  className="px-12 py-4 text-lg font-semibold border-white/30 text-white hover:bg-white/10 bg-transparent"
                >
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}




