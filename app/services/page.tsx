import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  PenToolIcon,
  MonitorIcon,
  CogIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  BrushIcon,
  BoxIcon,
  CodeIcon,
  PaletteIcon,
  PlayIcon,
  FileTextIcon,
  Settings2Icon,
  WrenchIcon,
  ClipboardListIcon,
  CubeIcon,
  BrainIcon,
  DatabaseIcon,
  NetworkIcon,
  ZapIcon,
  CpuIcon,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Professional Services",
  description:
    "Advanced AI-driven services including Digital Twin Development, Physical AI, and Artificial Data Development alongside comprehensive design, visualization, and engineering solutions.",
}

export default function ServicesPage() {
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
                AI-Driven Services • Next Generation Solutions
              </Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-8 animate-fadeIn">
              Advanced AI & Engineering Services
            </h1>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto font-light mb-12 animate-fadeIn" style={{ animationDelay: "0.3s" }}>
              From digital twins to physical AI systems, we deliver cutting edge AI-driven solutions alongside 
              comprehensive design and engineering services for complex projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn" style={{ animationDelay: "0.6s" }}>
              <Link href="/contact">
                <Button className="btn-primary px-10 py-4 text-lg font-medium group animate-pulse-glow">
                  <PlayIcon className="mr-2 w-5 h-5" />
                  Start Your Project
                  <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="px-10 py-4 text-lg font-medium border-white/30 text-white hover:bg-white/10 bg-transparent">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="w-full py-20 md:py-32 bg-photon-950">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Our Core Service Categories</h2>
            <p className="text-lg text-photon-200 max-w-2xl mx-auto">
              Six specialized service areas spanning AI-driven innovation and traditional engineering excellence.
            </p>
          </div>

          {/* AI-Driven Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">AI-Driven Innovation Services</h3>
            <div className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
              
              {/* Digital Twin Development */}
              <Card className="bg-photon-900/50 border border-photon-800 text-white group glassmorphism card-lift-on-hover relative z-10 animate-fadeIn" style={{ animationDelay: "0.1s" }}>
                <CardHeader className="text-center pb-6">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 border-2 border-photon-400 transition-all duration-300 group-hover:border-photon-300 group-hover:animate-pulse-glow mx-auto">
                    <CubeIcon className="h-10 w-10 text-photon-400 group-hover:text-photon-300" />
                  </div>
                  <CardTitle className="text-2xl font-bold mb-2">Digital Twin Development</CardTitle>
                  <div className="w-16 h-1 bg-photon-400 rounded-full mx-auto"></div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <CardDescription className="text-photon-200 text-base leading-relaxed text-center">
                    Create virtual replicas of physical systems for simulation, testing, and optimization using AI-powered digital twin technology.
                  </CardDescription>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <NetworkIcon className="h-5 w-5 text-photon-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">System Modeling</h4>
                        <p className="text-sm text-photon-300">Real-time virtual replicas of physical systems</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <ZapIcon className="h-5 w-5 text-photon-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Predictive Analytics</h4>
                        <p className="text-sm text-photon-300">AI-driven performance prediction and optimization</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CpuIcon className="h-5 w-5 text-photon-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">IoT Integration</h4>
                        <p className="text-sm text-photon-300">Connect physical sensors to digital models</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link href="/services/digital-twin">
                      <Button className="w-full btn-primary group">
                        Explore Digital Twins
                        <ArrowRightIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Physical AI Development */}
              <Card className="bg-photon-900/50 border border-photon-800 text-white group glassmorphism card-lift-on-hover relative z-10 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
                <CardHeader className="text-center pb-6">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 border-2 border-photon-500 transition-all duration-300 group-hover:border-photon-400 group-hover:animate-pulse-glow mx-auto">
                    <BrainIcon className="h-10 w-10 text-photon-500 group-hover:text-photon-400" />
                  </div>
                  <CardTitle className="text-2xl font-bold mb-2">Physical AI Development</CardTitle>
                  <div className="w-16 h-1 bg-photon-500 rounded-full mx-auto"></div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <CardDescription className="text-photon-200 text-base leading-relaxed text-center">
                    Develop AI systems that understand and interact with the physical world through robotics, computer vision, and autonomous systems.
                  </CardDescription>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <BrainIcon className="h-5 w-5 text-photon-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Computer Vision</h4>
                        <p className="text-sm text-photon-300">AI-powered visual perception and analysis</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CogIcon className="h-5 w-5 text-photon-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Robotics Integration</h4>
                        <p className="text-sm text-photon-300">Intelligent robotic systems and automation</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <ZapIcon className="h-5 w-5 text-photon-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Autonomous Systems</h4>
                        <p className="text-sm text-photon-300">Self-operating intelligent machines</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link href="/services/physical-ai">
                      <Button className="w-full btn-primary group">
                        Explore Physical AI
                        <ArrowRightIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Artificial Data Development */}
              <Card className="bg-photon-900/50 border border-photon-800 text-white group glassmorphism card-lift-on-hover relative z-10 animate-fadeIn" style={{ animationDelay: "0.3s" }}>
                <CardHeader className="text-center pb-6">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 border-2 border-photon-600 transition-all duration-300 group-hover:border-photon-500 group-hover:animate-pulse-glow mx-auto">
                    <DatabaseIcon className="h-10 w-10 text-photon-600 group-hover:text-photon-500" />
                  </div>
                  <CardTitle className="text-2xl font-bold mb-2">Artificial Data Development</CardTitle>
                  <div className="w-16 h-1 bg-photon-600 rounded-full mx-auto"></div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <CardDescription className="text-photon-200 text-base leading-relaxed text-center">
                    Generate high-quality synthetic datasets for AI training, testing, and validation when real-world data is limited or sensitive.
                  </CardDescription>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <DatabaseIcon className="h-5 w-5 text-photon-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Synthetic Data Generation</h4>
                        <p className="text-sm text-photon-300">AI-generated datasets for training and testing</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CpuIcon className="h-5 w-5 text-photon-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Data Augmentation</h4>
                        <p className="text-sm text-photon-300">Expand existing datasets with synthetic variations</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <ZapIcon className="h-5 w-5 text-photon-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Privacy-Safe Training</h4>
                        <p className="text-sm text-photon-300">Train AI models without sensitive real data</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link href="/services/artificial-data">
                      <Button className="w-full btn-primary group">
                        Explore Artificial Data
                        <ArrowRightIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Traditional Services */}
          <div>
            <h3 className="text-2xl font-bold text-white text-center mb-8">Traditional Engineering Excellence</h3>
            <div className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
            {/* Design Services */}
            <Card className="bg-photon-900/50 border border-photon-800 text-white group glassmorphism card-lift-on-hover relative z-10 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 border-2 border-photon-500 transition-all duration-300 group-hover:border-photon-400 group-hover:animate-pulse-glow mx-auto">
                  <PenToolIcon className="h-10 w-10 text-photon-500 group-hover:text-photon-400" />
                </div>
                <CardTitle className="text-2xl font-bold mb-2">Design Services</CardTitle>
                <div className="w-16 h-1 bg-photon-500 rounded-full mx-auto"></div>
              </CardHeader>
              <CardContent className="space-y-6">
                <CardDescription className="text-photon-200 text-base leading-relaxed text-center">
                  Creative design solutions from initial concept through final visual identity and user experience design.
                </CardDescription>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <BrushIcon className="h-5 w-5 text-photon-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Concept Design</h4>
                      <p className="text-sm text-photon-300">Initial sketches, ideation, and concept development</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <BoxIcon className="h-5 w-5 text-photon-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">3D Modeling & CAD</h4>
                      <p className="text-sm text-photon-300">Professional 3D models and CAD drawings</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CodeIcon className="h-5 w-5 text-photon-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">UI/UX Design</h4>
                      <p className="text-sm text-photon-300">User interface and experience design</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <PaletteIcon className="h-5 w-5 text-photon-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Branding & Graphics</h4>
                      <p className="text-sm text-photon-300">Visual identity and graphic design solutions</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Link href="/services/design">
                    <Button className="w-full btn-primary group">
                      Explore Design Services
                      <ArrowRightIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Visualization Services */}
            <Card className="bg-photon-900/50 border border-photon-800 text-white group glassmorphism card-lift-on-hover relative z-10 animate-fadeIn" style={{ animationDelay: "0.5s" }}>
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 border-2 border-photon-700 transition-all duration-300 group-hover:border-photon-600 group-hover:animate-pulse-glow mx-auto">
                  <MonitorIcon className="h-10 w-10 text-photon-700 group-hover:text-photon-600" />
                </div>
                <CardTitle className="text-2xl font-bold mb-2">Visualization Services</CardTitle>
                <div className="w-16 h-1 bg-photon-700 rounded-full mx-auto"></div>
              </CardHeader>
              <CardContent className="space-y-6">
                <CardDescription className="text-photon-200 text-base leading-relaxed text-center">
                  Professional visualization and presentation solutions to communicate complex concepts effectively.
                </CardDescription>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FileTextIcon className="h-5 w-5 text-photon-700 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Technical Drawings</h4>
                      <p className="text-sm text-photon-300">Detailed schematics and technical documentation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MonitorIcon className="h-5 w-5 text-photon-700 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Mockups & Renderings</h4>
                      <p className="text-sm text-photon-300">Photorealistic renders and professional mockups</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <PlayIcon className="h-5 w-5 text-photon-700 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Animations</h4>
                      <p className="text-sm text-photon-300">Motion graphics and 3D animations</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div>
                      <h4 className="font-semibold text-white mb-1">Real-time Demos</h4>
                      <p className="text-sm text-photon-300">Interactive presentations using Unreal Engine</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Link href="/services/visualization">
                    <Button className="w-full btn-primary group">
                      Explore Visualization Services
                      <ArrowRightIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Engineering Services */}
            <Card className="bg-photon-900/50 border border-photon-800 text-white group glassmorphism card-lift-on-hover relative z-10 animate-fadeIn" style={{ animationDelay: "0.6s" }}>
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 border-2 border-photon-600 transition-all duration-300 group-hover:border-photon-500 group-hover:animate-pulse-glow mx-auto">
                  <CogIcon className="h-10 w-10 text-photon-600 group-hover:text-photon-500" />
                </div>
                <CardTitle className="text-2xl font-bold mb-2">Engineering & Industrial Design</CardTitle>
                <div className="w-16 h-1 bg-photon-600 rounded-full mx-auto"></div>
              </CardHeader>
              <CardContent className="space-y-6">
                <CardDescription className="text-photon-200 text-base leading-relaxed text-center">
                  Technical engineering solutions and industrial design expertise for product development and manufacturing.
                </CardDescription>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Settings2Icon className="h-5 w-5 text-photon-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Product Engineering</h4>
                      <p className="text-sm text-photon-300">Technical design and engineering solutions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CogIcon className="h-5 w-5 text-photon-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Industrial Design</h4>
                      <p className="text-sm text-photon-300">Functional and aesthetic product design</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <ClipboardListIcon className="h-5 w-5 text-photon-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Technical Documentation</h4>
                      <p className="text-sm text-photon-300">Comprehensive technical specifications</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <WrenchIcon className="h-5 w-5 text-photon-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Manufacturing Support</h4>
                      <p className="text-sm text-photon-300">Production planning and manufacturing consultation</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Link href="/services/engineering">
                    <Button className="w-full btn-primary group">
                      Explore Engineering Services
                      <ArrowRightIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Excellence Section */}
      <section className="w-full py-20 md:py-32 bg-photon-900/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Our Process Excellence</h2>
            <p className="text-lg text-photon-200 max-w-2xl mx-auto">
              Proven methodology ensuring quality delivery and client satisfaction across all project types.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-photon-500/20 flex items-center justify-center mb-4 mx-auto border border-photon-500/30 group-hover:border-photon-500 transition-all duration-300">
                <span className="text-2xl font-bold text-photon-500">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Discovery</h3>
              <p className="text-sm text-photon-300">Understanding your vision, requirements, and project goals</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-photon-600/20 flex items-center justify-center mb-4 mx-auto border border-photon-600/30 group-hover:border-photon-600 transition-all duration-300">
                <span className="text-2xl font-bold text-photon-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Concept Development</h3>
              <p className="text-sm text-photon-300">Creating initial designs and exploring solutions</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-photon-700/20 flex items-center justify-center mb-4 mx-auto border border-photon-700/30 group-hover:border-photon-700 transition-all duration-300">
                <span className="text-2xl font-bold text-photon-700">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Refinement</h3>
              <p className="text-sm text-photon-300">Iterating based on feedback and technical requirements</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-photon-400/20 flex items-center justify-center mb-4 mx-auto border border-photon-400/30 group-hover:border-photon-400 transition-all duration-300">
                <span className="text-2xl font-bold text-photon-400">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Delivery</h3>
              <p className="text-sm text-photon-300">Final deliverables with ongoing support and documentation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-32 bg-photon-gradient-hero text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto glassmorphism p-8 md:p-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-photon-200 font-medium">Ready to Start Your Project?</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Let's Bring Your Vision to Life
            </h2>
            <p className="text-lg md:text-xl text-photon-100 max-w-2xl mx-auto mb-8">
              Contact us to discuss your project requirements and discover how our expertise can accelerate your success.
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
                  View Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
