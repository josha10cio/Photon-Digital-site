import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BrainIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  EyeIcon,
  CogIcon,
  ZapIcon,
  PlayIcon,
  CameraIcon,
  BotIcon,
  ScanIcon,
  CarIcon,
  FactoryIcon,
  ShieldIcon,
  TrendingUpIcon,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Physical AI Development Services",
  description:
    "Advanced Physical AI development services including computer vision, robotics integration, and autonomous systems. AI that understands and interacts with the physical world.",
  keywords: [
    "Physical AI",
    "robotics integration",
    "computer vision",
    "sensor fusion",
    "autonomous systems",
    "edge computing",
  ],
  openGraph: {
    title: "Physical AI Development Services",
    description:
      "Build AI systems that perceive, understand, and interact with the physical world through advanced perception, robotics, and autonomy.",
    url: "https://www.photonecho.dev/services/physical-ai",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Physical AI Development Services",
    description:
      "AI that bridges digital intelligence and physical reality: perception, robotics, autonomy.",
  },
}

export default function PhysicalAIPage() {
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
                Physical AI • Real-World Intelligence
              </Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-8 animate-fadeIn">
              Physical AI Development
            </h1>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto font-light mb-12 animate-fadeIn" style={{ animationDelay: "0.3s" }}>
              Build AI systems that perceive, understand, and interact with the physical world through advanced computer vision, 
              robotics, and autonomous technologies. Bridge the digital-physical divide with intelligent systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn" style={{ animationDelay: "0.6s" }}>
              <Link href="/contact">
                <Button variant="primary" size="xl">
                  <PlayIcon className="mr-2 w-5 h-5" />
                  Start Your Project
                  <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/mission">
                <Button variant="outline" size="xl">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-20 md:py-32 bg-photon-900/30">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Physical AI FAQs</h2>
            <p className="text-lg text-photon-200">Common questions about scope, timelines, and requirements.</p>
          </div>
          <Card className="card-standard card-hover p-6 md:p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-semibold mb-2">What inputs do you need to start?</h3>
                <p className="text-photon-300">A problem statement, target environment, sensor/hardware constraints, and success criteria.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Typical project duration?</h3>
                <p className="text-photon-300">Pilot prototypes: 4–8 weeks. Full integrated systems: 3–6 months depending on scope.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Do you work with existing hardware?</h3>
                <p className="text-photon-300">Yes. We integrate with your platforms or recommend COTS hardware when appropriate.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Can this run at the edge without cloud?</h3>
              <p className="text-photon-300">Yes. We optimize models and pipelines for on device or on prem inference with low latency.</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* What is Physical AI Section */}
      <section className="w-full py-20 md:py-32 bg-photon-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="section-title">What is Physical AI?</h2>
              <div className="space-y-4 text-photon-200">
                <p className="text-lg leading-relaxed">
                  Physical AI represents the next frontier in artificial intelligence, where AI systems can perceive, 
                  understand, and interact with the physical world in real time. Unlike traditional AI that operates 
                  on digital data, Physical AI bridges the gap between digital intelligence and physical reality.
                </p>
                <p className="text-lg leading-relaxed">
                  Through advanced computer vision, sensor fusion, and robotics integration, Physical AI enables 
                  machines to see, navigate, manipulate objects, and make autonomous decisions in complex, 
                  unpredictable environments.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-photon-500/20 text-photon-500 border-photon-500/30">Computer Vision</Badge>
                <Badge className="bg-photon-600/20 text-photon-600 border-photon-600/30">Robotics</Badge>
                <Badge className="bg-photon-700/20 text-photon-700 border-photon-700/30">Autonomous Systems</Badge>
              </div>
            </div>
            <div className="grid gap-6">
              <Card className="card-standard card-hover">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-photon-500/20 flex items-center justify-center">
                      <EyeIcon className="h-6 w-6 text-photon-500" />
                    </div>
                    <CardTitle className="text-xl">Visual Perception</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-photon-300">AI systems that see and understand visual environments like humans</p>
                </CardContent>
              </Card>
              <Card className="card-standard card-hover">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-photon-600/20 flex items-center justify-center">
                      <BotIcon className="h-6 w-6 text-photon-600" />
                    </div>
                    <CardTitle className="text-xl">Physical Interaction</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-photon-300">Intelligent manipulation and navigation in real-world environments</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technologies Section */}
      <section className="w-full py-20 md:py-32 bg-photon-900/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Physical AI Technologies</h2>
            <p className="text-lg text-photon-200 max-w-2xl mx-auto">Physical AI capabilities spanning perception, cognition, and action.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <Card className="card-standard card-hover">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-500 mx-auto group-hover:border-photon-400 transition-colors">
                  <CameraIcon className="h-8 w-8 text-photon-500 group-hover:text-photon-400" />
                </div>
                <CardTitle>Computer Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-photon-300">
                  Advanced visual processing for object detection, recognition, tracking, and scene understanding in real time environments.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-standard card-hover card-hover">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-600 mx-auto group-hover:border-photon-500 transition-colors">
                  <BotIcon className="h-8 w-8 text-photon-600 group-hover:text-photon-500" />
                </div>
                <CardTitle>Robotics Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-photon-300">
                  Intelligent robotic systems with advanced manipulation, navigation, and task execution capabilities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-standard card-hover card-hover">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-700 mx-auto group-hover:border-photon-600 transition-colors">
                  <ScanIcon className="h-8 w-8 text-photon-700 group-hover:text-photon-600" />
                </div>
                <CardTitle>Sensor Fusion</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-photon-300">
                  Multi sensor integration combining cameras, LIDAR, radar, and other sensors for comprehensive environmental awareness.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-standard card-hover card-hover">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-500 mx-auto group-hover:border-photon-400 transition-colors">
                  <BrainIcon className="h-8 w-8 text-photon-500 group-hover:text-photon-400" />
                </div>
                <CardTitle>Decision Making</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-photon-300">
                  Real time AI decision systems that process sensory input and execute appropriate actions autonomously.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-standard card-hover card-hover">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-600 mx-auto group-hover:border-photon-500 transition-colors">
                  <ZapIcon className="h-8 w-8 text-photon-600 group-hover:text-photon-500" />
                </div>
                <CardTitle>Edge Computing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-photon-300">
                  Local AI processing for real time responses without cloud dependencies, ensuring low latency and privacy.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-standard card-hover card-hover">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-700 mx-auto group-hover:border-photon-600 transition-colors">
                  <CogIcon className="h-8 w-8 text-photon-700 group-hover:text-photon-600" />
                </div>
                <CardTitle>Motion Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-photon-300">
                  Advanced path planning and motion control for safe and efficient navigation in dynamic environments.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="w-full py-20 md:py-32 bg-photon-950">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Physical AI Applications</h2>
            <p className="text-lg text-photon-200 max-w-2xl mx-auto">
              Revolutionary applications across industries transforming how machines interact with our world.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
            <Card className="card-standard">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <CarIcon className="h-6 w-6 text-photon-500" />
                  Autonomous Vehicles
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-photon-200">
                  Self-driving cars and autonomous vehicles that perceive their environment, make real time decisions, 
                  and navigate safely through complex traffic scenarios.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-photon-500/20 text-photon-500 border-photon-500/30">Path Planning</Badge>
                  <Badge className="bg-photon-600/20 text-photon-600 border-photon-600/30">Object Detection</Badge>
                  <Badge className="bg-photon-700/20 text-photon-700 border-photon-700/30">Traffic Analysis</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="card-standard">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <FactoryIcon className="h-6 w-6 text-photon-600" />
                  Industrial Automation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-photon-200">
                  Intelligent manufacturing systems with robotic arms, quality inspection, and automated assembly 
                  lines that adapt to different products and conditions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-photon-600/20 text-photon-600 border-photon-600/30">Quality Control</Badge>
                  <Badge className="bg-photon-700/20 text-photon-700 border-photon-700/30">Assembly Automation</Badge>
                  <Badge className="bg-photon-500/20 text-photon-500 border-photon-500/30">Predictive Maintenance</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="card-standard">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <ShieldIcon className="h-6 w-6 text-photon-700" />
                  Security & Surveillance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-photon-200">
                  Intelligent security systems with facial recognition, behavior analysis, and automated threat 
                  detection for enhanced safety and security.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-photon-700/20 text-photon-700 border-photon-700/30">Facial Recognition</Badge>
                  <Badge className="bg-photon-500/20 text-photon-500 border-photon-500/30">Behavior Analysis</Badge>
                  <Badge className="bg-photon-600/20 text-photon-600 border-photon-600/30">Threat Detection</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="card-standard">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <BotIcon className="h-6 w-6 text-photon-500" />
                  Service Robotics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-photon-200">
                  Autonomous service robots for warehouses, hospitals, and retail environments that navigate 
                  complex spaces and interact safely with humans.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-photon-500/20 text-photon-500 border-photon-500/30">Navigation</Badge>
                  <Badge className="bg-photon-600/20 text-photon-600 border-photon-600/30">Human Interaction</Badge>
                  <Badge className="bg-photon-700/20 text-photon-700 border-photon-700/30">Task Automation</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="w-full py-20 md:py-32 bg-photon-900/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Physical AI Development Process</h2>
            <p className="text-lg text-photon-200 max-w-2xl mx-auto">
              Our systematic approach to building intelligent physical systems.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-photon-500/20 flex items-center justify-center mb-4 mx-auto border border-photon-500/30 group-hover:border-photon-500 transition-all duration-300">
                <span className="text-2xl font-bold text-photon-500">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Perception Design</h3>
              <p className="text-sm text-photon-300">Define sensor requirements and visual processing capabilities</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-photon-600/20 flex items-center justify-center mb-4 mx-auto border border-photon-600/30 group-hover:border-photon-600 transition-all duration-300">
                <span className="text-2xl font-bold text-photon-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI Model Development</h3>
              <p className="text-sm text-photon-300">Train and optimize AI models for specific physical tasks</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-photon-700/20 flex items-center justify-center mb-4 mx-auto border border-photon-700/30 group-hover:border-photon-700 transition-all duration-300">
                <span className="text-2xl font-bold text-photon-700">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">System Integration</h3>
              <p className="text-sm text-photon-300">Integrate AI with hardware platforms and control systems</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-photon-400/20 flex items-center justify-center mb-4 mx-auto border border-photon-400/30 group-hover:border-photon-400 transition-all duration-300">
                <span className="text-2xl font-bold text-photon-400">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Testing & Deployment</h3>
              <p className="text-sm text-photon-300">Validate performance and deploy to real-world environments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-20 md:py-32 bg-photon-950">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Why Physical AI?</h2>
            <p className="text-lg text-photon-200 max-w-2xl mx-auto">
              Transform your operations with intelligent systems that bridge digital and physical worlds.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-photon-500/20 flex items-center justify-center mx-auto border border-photon-500/30">
                <ZapIcon className="h-8 w-8 text-photon-500" />
              </div>
              <h3 className="text-lg font-semibold text-white">Real Time Intelligence</h3>
              <p className="text-sm text-photon-300">Instant AI decisions and responses to physical world changes</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-photon-600/20 flex items-center justify-center mx-auto border border-photon-600/30">
                <TrendingUpIcon className="h-8 w-8 text-photon-600" />
              </div>
              <h3 className="text-lg font-semibold text-white">Enhanced Efficiency</h3>
              <p className="text-sm text-photon-300">Automate complex physical tasks with intelligent precision</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-photon-700/20 flex items-center justify-center mx-auto border border-photon-700/30">
                <ShieldIcon className="h-8 w-8 text-photon-700" />
              </div>
              <h3 className="text-lg font-semibold text-white">Improved Safety</h3>
              <p className="text-sm text-photon-300">Reduce human risk in dangerous or repetitive environments</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-photon-400/20 flex items-center justify-center mx-auto border border-photon-400/30">
                <CogIcon className="h-8 w-8 text-photon-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Adaptive Systems</h3>
              <p className="text-sm text-photon-300">AI that learns and adapts to changing physical conditions</p>
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
              <BrainIcon className="w-6 h-6 text-photon-500" />
              <span className="text-photon-200 font-medium">Ready to Build Physical AI?</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Bridge Digital Intelligence with Physical Reality
            </h2>
            <p className="text-lg md:text-xl text-photon-100 max-w-2xl mx-auto mb-8">
              Partner with us to develop intelligent systems that see, understand, and interact with the physical world.
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
