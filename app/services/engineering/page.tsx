import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CogIcon,
  Settings2Icon,
  ClipboardListIcon,
  WrenchIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PlayIcon,
  EyeIcon,
  CalculatorIcon,
  TestTubeIcon,
  PackageIcon,
  ShieldCheckIcon,
  FactoryIcon,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Engineering & Industrial Design",
  description: "Product engineering, documentation, and manufacturing support.",
}

export default function EngineeringServicesPage() {
  return (
    <div className="flex flex-col min-h-[calc(100dvh-4rem)]">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 lg:py-48 bg-photon-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-photon-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
          <div
            className="absolute top-1/3 right-1/4 w-96 h-96 bg-photon-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <Badge className="bg-photon-600/20 text-photon-100 border-photon-600/30 px-4 py-2 text-sm font-medium">
                Engineering Services • Technical Excellence
              </Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-8 animate-fadeIn">
              Engineering & Industrial Design
            </h1>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto font-light mb-12 animate-fadeIn" style={{ animationDelay: "0.3s" }}>
              Engineering and industrial design for product development, documentation, and manufacturing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn" style={{ animationDelay: "0.6s" }}>
              <Link href="/contact">
                <Button variant="primary" size="xl" className=" px-10 py-4 text-lg font-medium group animate-pulse-glow">
                  <PlayIcon className="mr-2 w-5 h-5" />
                  Start Your Project
                  <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="xl">
                  Start Your Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Services Overview */}
      <section className="w-full py-20 md:py-32 bg-photon-950">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Engineering Service Categories</h2>
            <p className="text-lg text-photon-200 max-w-2xl mx-auto">Engineering and industrial design services for product development and manufacturing.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {/* Product Engineering */}
            <Card className="card-standard card-hover card-lift-on-hover">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-600 transition-all duration-300 group-hover:border-photon-500 mx-auto">
                  <Settings2Icon className="h-8 w-8 text-photon-600 group-hover:text-photon-500" />
                </div>
                <CardTitle className="text-xl font-bold">Product Engineering</CardTitle>
                <div className="w-12 h-1 bg-photon-600 rounded-full mx-auto mt-2"></div>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-photon-200 text-sm mb-4">
                  Technical design and engineering solutions for product development from concept to production.
                </CardDescription>
                <ul className="text-xs text-photon-300 space-y-1">
                  <li>• Mechanical design</li>
                  <li>• Systems engineering</li>
                  <li>• Performance optimization</li>
                  <li>• Design validation</li>
                </ul>
              </CardContent>
            </Card>

            {/* Industrial Design */}
            <Card className="card-standard card-hover card-lift-on-hover">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-600 transition-all duration-300 group-hover:border-photon-500 mx-auto">
                  <CogIcon className="h-8 w-8 text-photon-600 group-hover:text-photon-500" />
                </div>
                <CardTitle className="text-xl font-bold">Industrial Design</CardTitle>
                <div className="w-12 h-1 bg-photon-600 rounded-full mx-auto mt-2"></div>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-photon-200 text-sm mb-4">
                  Functional and aesthetic product design balancing user needs, manufacturing requirements, and business goals.
                </CardDescription>
                <ul className="text-xs text-photon-300 space-y-1">
                  <li>• Form & function balance</li>
                  <li>• Ergonomic analysis</li>
                  <li>• Material selection</li>
                  <li>• Aesthetic refinement</li>
                </ul>
              </CardContent>
            </Card>

            {/* Technical Documentation */}
            <Card className="card-standard card-hover card-lift-on-hover">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-600 transition-all duration-300 group-hover:border-photon-500 mx-auto">
                  <ClipboardListIcon className="h-8 w-8 text-photon-600 group-hover:text-photon-500" />
                </div>
                <CardTitle className="text-xl font-bold">Technical Documentation</CardTitle>
                <div className="w-12 h-1 bg-photon-600 rounded-full mx-auto mt-2"></div>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-photon-200 text-sm mb-4">Technical specifications, documentation, and compliance materials.</CardDescription>
                <ul className="text-xs text-photon-300 space-y-1">
                  <li>• Engineering specifications</li>
                  <li>• Compliance documentation</li>
                  <li>• Test protocols</li>
                  <li>• Manufacturing guides</li>
                </ul>
              </CardContent>
            </Card>

            {/* Manufacturing Support */}
            <Card className="card-standard card-hover card-lift-on-hover">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-600 transition-all duration-300 group-hover:border-photon-500 mx-auto">
                  <WrenchIcon className="h-8 w-8 text-photon-600 group-hover:text-photon-500" />
                </div>
                <CardTitle className="text-xl font-bold">Manufacturing Support</CardTitle>
                <div className="w-12 h-1 bg-photon-600 rounded-full mx-auto mt-2"></div>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-photon-200 text-sm mb-4">
                  Production planning, manufacturing consultation, and process optimization for efficient production.
                </CardDescription>
                <ul className="text-xs text-photon-300 space-y-1">
                  <li>• Production planning</li>
                  <li>• Process optimization</li>
                  <li>• Quality assurance</li>
                  <li>• Supply chain support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Engineering Process */}
      <section className="w-full py-20 md:py-32 bg-photon-900/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Our Engineering Process</h2>
            <p className="text-lg text-photon-200 max-w-2xl mx-auto">A clear method for engineering work from requirements to production.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6 max-w-7xl mx-auto">
            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-photon-600/20 flex items-center justify-center mb-4 mx-auto border border-photon-600/30 group-hover:border-photon-600 transition-all duration-300">
                <EyeIcon className="h-8 w-8 text-photon-600" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Requirements</h3>
              <p className="text-sm text-photon-300">Defining technical specifications and constraints</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-photon-600/20 flex items-center justify-center mb-4 mx-auto border border-photon-600/30 group-hover:border-photon-600 transition-all duration-300">
                <CalculatorIcon className="h-8 w-8 text-photon-600" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Analysis</h3>
              <p className="text-sm text-photon-300">Engineering calculations and feasibility studies</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-photon-600/20 flex items-center justify-center mb-4 mx-auto border border-photon-600/30 group-hover:border-photon-600 transition-all duration-300">
                <CogIcon className="h-8 w-8 text-photon-600" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Design</h3>
              <p className="text-sm text-photon-300">Detailed engineering design and modeling</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-photon-600/20 flex items-center justify-center mb-4 mx-auto border border-photon-600/30 group-hover:border-photon-600 transition-all duration-300">
                <TestTubeIcon className="h-8 w-8 text-photon-600" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Testing</h3>
              <p className="text-sm text-photon-300">Validation through simulation and prototyping</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-photon-600/20 flex items-center justify-center mb-4 mx-auto border border-photon-600/30 group-hover:border-photon-600 transition-all duration-300">
                <CheckCircleIcon className="h-8 w-8 text-photon-600" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Validation</h3>
              <p className="text-sm text-photon-300">Performance verification and optimization</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-photon-600/20 flex items-center justify-center mb-4 mx-auto border border-photon-600/30 group-hover:border-photon-600 transition-all duration-300">
                <PackageIcon className="h-8 w-8 text-photon-600" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Production</h3>
              <p className="text-sm text-photon-300">Manufacturing preparation and support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Capabilities */}
      <section className="w-full py-20 md:py-32 bg-photon-950">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Engineering Capabilities & Expertise</h2>
            <p className="text-lg text-photon-200 max-w-2xl mx-auto">Capabilities across analysis, documentation, and production support.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            <Card className="card-standard">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheckIcon className="h-8 w-8 text-photon-600" />
                  <CardTitle className="text-xl">Quality & Compliance</CardTitle>
                </div>
                <div className="w-12 h-1 bg-photon-600 rounded-full"></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-photon-300">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-photon-600" />
                    ISO 9001 Quality Standards
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-photon-600" />
                    Compliance-Ready Documentation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-photon-600" />
                    Design Controls & Risk Management
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-photon-600" />
                    Verification & Validation Testing
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-standard">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <CalculatorIcon className="h-8 w-8 text-photon-600" />
                  <CardTitle className="text-xl">Simulation & Analysis</CardTitle>
                </div>
                <div className="w-12 h-1 bg-photon-600 rounded-full"></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-photon-300">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-photon-600" />
                    Finite Element Analysis (FEA)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-photon-600" />
                    Computational Fluid Dynamics (CFD)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-photon-600" />
                    Thermal & Stress Analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-photon-600" />
                    Vibration & Modal Analysis
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-standard">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <FactoryIcon className="h-8 w-8 text-photon-600" />
                  <CardTitle className="text-xl">Manufacturing Excellence</CardTitle>
                </div>
                <div className="w-12 h-1 bg-photon-600 rounded-full"></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-photon-300">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-photon-600" />
                    Design for Manufacturing (DFM)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-photon-600" />
                    Lean Manufacturing Principles
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-photon-600" />
                    Process Optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-photon-600" />
                    Supply Chain Management
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-32 bg-photon-gradient-hero text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <Card className="card-standard card-hover max-w-4xl mx-auto p-8 md:p-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-photon-200 font-medium">Ready to get started</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Start Your Project
            </h2>
            <p className="text-lg md:text-xl text-photon-100 max-w-2xl mx-auto mb-8">
              Share your goals and we will propose a practical plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="xl">
                  <PlayIcon className="mr-2 w-5 h-5" />
                  Start Your Project
                  <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}




