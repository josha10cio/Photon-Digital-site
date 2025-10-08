import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MonitorIcon,
  FileTextIcon,
  PlayIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  EyeIcon,
  CameraIcon,
  SettingsIcon,
  PresentationIcon,
  VideoIcon,
  ImageIcon,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Visualization Services",
  description: "Technical drawings, renderings, animations, and interactive demos for clear communication.",
}

export default function VisualizationServicesPage() {
  return (
    <div className="flex flex-col min-h-[calc(100dvh-4rem)]">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 lg:py-48 bg-photon-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-photon-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
          <div
            className="absolute top-1/3 right-1/4 w-96 h-96 bg-photon-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <Badge className="bg-photon-700/20 text-photon-100 border-photon-700/30 px-4 py-2 text-sm font-medium">
                Visualization Services
              </Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-8 animate-fadeIn">
              Visualization for AI and Digital Twins
            </h1>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto font-light mb-12 animate-fadeIn" style={{ animationDelay: "0.3s" }}>
              Visualization turns complex training and twin activity into clear frames, previews, and interactive demos for inspection and communication.
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

      {/* Visualization Services Overview */}
      <section className="w-full py-20 md:py-32 bg-photon-950">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Visualization Service Categories</h2>
            <p className="text-lg text-photon-200 max-w-2xl mx-auto">
              Comprehensive visualization solutions for technical communication, marketing, and presentation needs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {/* Technical Drawings */}
            <Card className="card-standard card-hover card-lift-on-hover">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-700 transition-all duration-300 group-hover:border-photon-600 mx-auto">
                  <FileTextIcon className="h-8 w-8 text-photon-700 group-hover:text-photon-600" />
                </div>
                <CardTitle className="text-xl font-bold">Technical Drawings</CardTitle>
                <div className="w-12 h-1 bg-photon-700 rounded-full mx-auto mt-2"></div>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-photon-200 text-sm mb-4">
                  Detailed schematics, technical documentation, and precision drawings for engineering and manufacturing.
                </CardDescription>
                <ul className="text-xs text-photon-300 space-y-1">
                  <li>• Engineering schematics</li>
                  <li>• Assembly drawings</li>
                  <li>• Technical specifications</li>
                  <li>• Manufacturing prints</li>
                </ul>
              </CardContent>
            </Card>

            {/* Mockups & Renderings */}
            <Card className="card-standard card-hover card-lift-on-hover">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-700 transition-all duration-300 group-hover:border-photon-600 mx-auto">
                  <ImageIcon className="h-8 w-8 text-photon-700 group-hover:text-photon-600" />
                </div>
                <CardTitle className="text-xl font-bold">Mockups & Renderings</CardTitle>
                <div className="w-12 h-1 bg-photon-700 rounded-full mx-auto mt-2"></div>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-photon-200 text-sm mb-4">
                  Photorealistic renders and professional mockups for product visualization and marketing.
                </CardDescription>
                <ul className="text-xs text-photon-300 space-y-1">
                  <li>• Product renderings</li>
                  <li>• Environmental mockups</li>
                  <li>• Material studies</li>
                  <li>• Lighting simulations</li>
                </ul>
              </CardContent>
            </Card>

            {/* Animations */}
            <Card className="card-standard card-hover card-lift-on-hover">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-700 transition-all duration-300 group-hover:border-photon-600 mx-auto">
                  <VideoIcon className="h-8 w-8 text-photon-700 group-hover:text-photon-600" />
                </div>
                <CardTitle className="text-xl font-bold">Animations</CardTitle>
                <div className="w-12 h-1 bg-photon-700 rounded-full mx-auto mt-2"></div>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-photon-200 text-sm mb-4">
                  Motion graphics and 3D animations to demonstrate functionality and showcase design concepts.
                </CardDescription>
                <ul className="text-xs text-photon-300 space-y-1">
                  <li>• Product demonstrations</li>
                  <li>• Assembly animations</li>
                  <li>• Motion graphics</li>
                  <li>• Exploded views</li>
                </ul>
              </CardContent>
            </Card>

            {/* Interactive Presentations */}
            <Card className="card-standard card-hover card-lift-on-hover">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-700 transition-all duration-300 group-hover:border-photon-600 mx-auto">
                  <PresentationIcon className="h-8 w-8 text-photon-700 group-hover:text-photon-600" />
                </div>
                <CardTitle className="text-xl font-bold">Real time Demos</CardTitle>
                <div className="w-12 h-1 bg-photon-700 rounded-full mx-auto mt-2"></div>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-photon-200 text-sm mb-4">
                  Interactive presentations and real time demonstrations using Unreal Engine and modern visualization tools.
                </CardDescription>
                <ul className="text-xs text-photon-300 space-y-1">
                  <li>• Unreal Engine demos</li>
                  <li>• Interactive models</li>
                  <li>• VR experiences</li>
                  <li>• Real time rendering</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Visualization Process */}
      <section className="w-full py-20 md:py-32 bg-photon-900/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Our Visualization Process</h2>
            <p className="text-lg text-photon-200 max-w-2xl mx-auto">
              A systematic approach to creating impactful visual communications that clearly convey complex information.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5 max-w-7xl mx-auto">
            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-photon-700/20 flex items-center justify-center mb-4 mx-auto border border-photon-700/30 group-hover:border-photon-700 transition-all duration-300">
                <EyeIcon className="h-8 w-8 text-photon-700" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Analysis</h3>
              <p className="text-sm text-photon-300">Understanding content, audience, and communication goals</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-photon-700/20 flex items-center justify-center mb-4 mx-auto border border-photon-700/30 group-hover:border-photon-700 transition-all duration-300">
                <SettingsIcon className="h-8 w-8 text-photon-700" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Planning</h3>
              <p className="text-sm text-photon-300">Developing visualization strategy and technical approach</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-photon-700/20 flex items-center justify-center mb-4 mx-auto border border-photon-700/30 group-hover:border-photon-700 transition-all duration-300">
                <CameraIcon className="h-8 w-8 text-photon-700" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Creation</h3>
              <p className="text-sm text-photon-300">Building visualizations with attention to detail and accuracy</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-photon-700/20 flex items-center justify-center mb-4 mx-auto border border-photon-700/30 group-hover:border-photon-700 transition-all duration-300">
                <CheckCircleIcon className="h-8 w-8 text-photon-700" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Review</h3>
              <p className="text-sm text-photon-300">Quality assurance and client feedback integration</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-photon-700/20 flex items-center justify-center mb-4 mx-auto border border-photon-700/30 group-hover:border-photon-700 transition-all duration-300">
                <CheckCircleIcon className="h-8 w-8 text-photon-700" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Delivery</h3>
              <p className="text-sm text-photon-300">Final assets optimized for intended use and platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Tools */}
      <section className="w-full py-20 md:py-32 bg-photon-950">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Advanced Visualization Technology</h2>
            <p className="text-lg text-photon-200 max-w-2xl mx-auto">
              Leveraging advanced tools and techniques for superior visual communication results.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <Card className="card-standard">
              <CardHeader>
                <CardTitle className="text-xl text-center">3D Rendering & Animation</CardTitle>
                <div className="w-12 h-1 bg-photon-700 rounded-full mx-auto"></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-photon-300">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-photon-700" />
                    Autodesk Maya & 3ds Max
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-photon-700" />
                    Blender & Cinema 4D
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-photon-700" />
                    V-Ray & Arnold Rendering
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-photon-700" />
                    Keyshot Product Rendering
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-standard">
              <CardHeader>
                <CardTitle className="text-xl text-center">Real time Visualization</CardTitle>
                <div className="w-12 h-1 bg-photon-700 rounded-full mx-auto"></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-photon-300">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-photon-700" />
                    Unreal Engine 5
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-photon-700" />
                    Unity 3D Platform
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-photon-700" />
                    WebGL & Three.js
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-photon-700" />
                    VR/AR Development
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-standard">
              <CardHeader>
                <CardTitle className="text-xl text-center">Technical Documentation</CardTitle>
                <div className="w-12 h-1 bg-photon-700 rounded-full mx-auto"></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-photon-300">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-photon-700" />
                    AutoCAD & SolidWorks
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-photon-700" />
                    Adobe Creative Suite
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-photon-700" />
                    Technical Illustration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-photon-700" />
                    Interactive Manuals
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
              <span className="text-photon-200 font-medium">Ready to Visualize Your Concepts?</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Make Complex Ideas Clear
            </h2>
            <p className="text-lg md:text-xl text-photon-100 max-w-2xl mx-auto mb-8">
              Transform your technical concepts into compelling visual communications that engage and inform your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="xl">
                  <PlayIcon className="mr-2 w-5 h-5" />
                  Start Your Project
                  <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="px-12 py-4 text-lg font-semibold border-white/30 text-white hover:bg-white/10 bg-transparent"
                >
                  Start Your Project
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}



