import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  PenToolIcon,
  BrushIcon,
  BoxIcon,
  CodeIcon,
  PaletteIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PlayIcon,
  EyeIcon,
  LayersIcon,
  MousePointerIcon,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Design Services",
  description: "Concept design, 3D modeling, CAD drawings, and branding.",
}

export default function DesignServicesPage() {
  return (
    <div className="flex flex-col min-h-[calc(100dvh-4rem)]">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 lg:py-48 bg-photon-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-photon-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
          <div
            className="absolute top-1/3 right-1/4 w-96 h-96 bg-photon-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <Badge className="bg-photon-500/20 text-photon-100 border-photon-500/30 px-4 py-2 text-sm font-medium">
                Design Services • Creative Solutions
              </Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-8 animate-fadeIn">
              Professional Design Services
            </h1>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto font-light mb-12 animate-fadeIn" style={{ animationDelay: "0.3s" }}>
              From initial concept sketches to complete visual identity systems, we deliver creative design solutions 
              that combine aesthetic excellence with functional innovation.
            </p>
            <div className="flex justify-center animate-fadeIn" style={{ animationDelay: "0.6s" }}>
              <Link href="/contact">
                <Button variant="primary" size="xl">
                  <PlayIcon className="mr-2 w-5 h-5" />
                  Start Your Project
                  <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Design Services Overview */}
      <section className="w-full py-20 md:py-32 bg-photon-950">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Design Service Categories</h2>
            <p className="text-lg text-photon-200 max-w-2xl mx-auto">Design for visual communication and product development.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {/* Concept Design */}
            <Card className="card-standard card-hover">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-500 transition-all duration-300 group-hover:border-photon-400 mx-auto">
                  <BrushIcon className="h-8 w-8 text-photon-500 group-hover:text-photon-400" />
                </div>
                <CardTitle className="text-xl font-bold">Concept Design</CardTitle>
                <div className="w-12 h-1 bg-photon-500 rounded-full mx-auto mt-2"></div>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-photon-200 text-sm mb-4">
                  Initial sketches, ideation sessions, and concept development to explore and refine your vision.
                </CardDescription>
                <ul className="text-xs text-photon-300 space-y-1">
                  <li>• Ideation workshops</li>
                  <li>• Concept sketching</li>
                  <li>• Design exploration</li>
                  <li>• Feasibility analysis</li>
                </ul>
              </CardContent>
            </Card>

            {/* 3D Modeling & CAD */}
            <Card className="card-standard card-hover">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-500 transition-all duration-300 group-hover:border-photon-400 mx-auto">
                  <BoxIcon className="h-8 w-8 text-photon-500 group-hover:text-photon-400" />
                </div>
                <CardTitle className="text-xl font-bold">3D Modeling & CAD</CardTitle>
                <div className="w-12 h-1 bg-photon-500 rounded-full mx-auto mt-2"></div>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-photon-200 text-sm mb-4">
                  Professional 3D models and CAD drawings for product development and manufacturing.
                </CardDescription>
                <ul className="text-xs text-photon-300 space-y-1">
                  <li>• Parametric modeling</li>
                  <li>• Assembly design</li>
                  <li>• Technical drawings</li>
                  <li>• Manufacturing specs</li>
                </ul>
              </CardContent>
            </Card>

            {/* Removed UI/UX Design card per request */}

            {/* Branding & Graphics */}
            <Card className="card-standard card-hover">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-500 transition-all duration-300 group-hover:border-photon-400 mx-auto">
                  <PaletteIcon className="h-8 w-8 text-photon-500 group-hover:text-photon-400" />
                </div>
                <CardTitle className="text-xl font-bold">Branding & Graphics</CardTitle>
                <div className="w-12 h-1 bg-photon-500 rounded-full mx-auto mt-2"></div>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-photon-200 text-sm mb-4">
                  Visual identity systems and graphic design solutions for complete brand experiences.
                </CardDescription>
                <ul className="text-xs text-photon-300 space-y-1">
                  <li>• Brand strategy</li>
                  <li>• Logo design</li>
                  <li>• Visual guidelines</li>
                  <li>• Marketing materials</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="w-full py-20 md:py-32 bg-photon-900/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Our Design Process</h2>
            <p className="text-lg text-photon-200 max-w-2xl mx-auto">
              A structured approach ensuring creative excellence and client satisfaction at every stage.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5 max-w-7xl mx-auto">
            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-photon-500/20 flex items-center justify-center mb-4 mx-auto border border-photon-500/30 group-hover:border-photon-500 transition-all duration-300">
                <EyeIcon className="h-8 w-8 text-photon-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Research</h3>
              <p className="text-sm text-photon-300">Understanding requirements, audience, and market context</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-photon-500/20 flex items-center justify-center mb-4 mx-auto border border-photon-500/30 group-hover:border-photon-500 transition-all duration-300">
                <BrushIcon className="h-8 w-8 text-photon-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Ideation</h3>
              <p className="text-sm text-photon-300">Creative exploration and concept development</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-photon-500/20 flex items-center justify-center mb-4 mx-auto border border-photon-500/30 group-hover:border-photon-500 transition-all duration-300">
                <LayersIcon className="h-8 w-8 text-photon-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Design</h3>
              <p className="text-sm text-photon-300">Creating detailed designs and visual solutions</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-photon-500/20 flex items-center justify-center mb-4 mx-auto border border-photon-500/30 group-hover:border-photon-500 transition-all duration-300">
                <CheckCircleIcon className="h-8 w-8 text-photon-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Refinement</h3>
              <p className="text-sm text-photon-300">Iterating based on feedback and testing</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-photon-500/20 flex items-center justify-center mb-4 mx-auto border border-photon-500/30 group-hover:border-photon-500 transition-all duration-300">
                <CheckCircleIcon className="h-8 w-8 text-photon-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Delivery</h3>
              <p className="text-sm text-photon-300">Final assets with documentation and guidelines</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-32 bg-photon-gradient-hero text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <Card className="card-standard card-hover max-w-4xl mx-auto p-8 md:p-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-photon-200 font-medium">Ready to Start Your Design Project?</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Transform Your Vision into Reality
            </h2>
            <p className="text-lg md:text-xl text-photon-100 max-w-2xl mx-auto mb-8">
              Let our design experts bring your concepts to life with professional, innovative solutions.
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



