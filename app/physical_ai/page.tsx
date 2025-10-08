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
    url: "https://www.photonecho.dev/physical_ai",
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

      {/* Physical AI Services Overview */}
      <section className="w-full py-20 md:py-32 bg-photon-950">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Physical AI Service Categories</h2>
            <p className="text-lg text-photon-200 max-w-2xl mx-auto">
              Advanced AI systems that perceive, understand, and interact with the physical world.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {/* Computer Vision */}
            <Card className="card-standard card-hover">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-500 transition-all duration-300 group-hover:border-photon-400 mx-auto">
                  <EyeIcon className="h-8 w-8 text-photon-500 group-hover:text-photon-400" />
                </div>
                <CardTitle className="text-xl font-bold">Computer Vision</CardTitle>
                <div className="w-12 h-1 bg-photon-500 rounded-full mx-auto mt-2"></div>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-photon-200 text-sm mb-4">
                  Advanced perception systems that enable AI to see, recognize, and understand visual information in real-time.
                </CardDescription>
                <ul className="text-xs text-photon-300 space-y-1">
                  <li>• Object detection & tracking</li>
                  <li>• Scene understanding</li>
                  <li>• Real-time processing</li>
                  <li>• Edge deployment</li>
                </ul>
              </CardContent>
            </Card>

            {/* Robotics Integration */}
            <Card className="card-standard card-hover">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-500 transition-all duration-300 group-hover:border-photon-400 mx-auto">
                  <BotIcon className="h-8 w-8 text-photon-500 group-hover:text-photon-400" />
                </div>
                <CardTitle className="text-xl font-bold">Robotics Integration</CardTitle>
                <div className="w-12 h-1 bg-photon-500 rounded-full mx-auto mt-2"></div>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-photon-200 text-sm mb-4">
                  Intelligent control systems that enable robots to navigate, manipulate objects, and perform complex tasks autonomously.
                </CardDescription>
                <ul className="text-xs text-photon-300 space-y-1">
                  <li>• Autonomous navigation</li>
                  <li>• Manipulation control</li>
                  <li>• Sensor fusion</li>
                  <li>• Safety systems</li>
                </ul>
              </CardContent>
            </Card>

            {/* Autonomous Systems */}
            <Card className="card-standard card-hover">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-500 transition-all duration-300 group-hover:border-photon-400 mx-auto">
                  <CogIcon className="h-8 w-8 text-photon-500 group-hover:text-photon-400" />
                </div>
                <CardTitle className="text-xl font-bold">Autonomous Systems</CardTitle>
                <div className="w-12 h-1 bg-photon-500 rounded-full mx-auto mt-2"></div>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-photon-200 text-sm mb-4">
                  Self-directed AI systems that make intelligent decisions and adapt to changing environments without human intervention.
                </CardDescription>
                <ul className="text-xs text-photon-300 space-y-1">
                  <li>• Decision making</li>
                  <li>• Adaptive learning</li>
                  <li>• Real-time control</li>
                  <li>• Multi-agent coordination</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Physical AI Process */}
      <section className="w-full py-20 md:py-32 bg-photon-900/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Our Physical AI Process</h2>
            <p className="text-lg text-photon-200 max-w-2xl mx-auto">
              A systematic approach to building AI systems that interact with the physical world.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5 max-w-7xl mx-auto">
            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-photon-500/20 flex items-center justify-center mb-4 mx-auto border border-photon-500/30 group-hover:border-photon-500 transition-all duration-300">
                <EyeIcon className="h-8 w-8 text-photon-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Analysis</h3>
              <p className="text-sm text-photon-300">Understanding requirements, environment, and constraints</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-photon-500/20 flex items-center justify-center mb-4 mx-auto border border-photon-500/30 group-hover:border-photon-500 transition-all duration-300">
                <CogIcon className="h-8 w-8 text-photon-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Design</h3>
              <p className="text-sm text-photon-300">Architecting AI systems and integration strategies</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-photon-500/20 flex items-center justify-center mb-4 mx-auto border border-photon-500/30 group-hover:border-photon-500 transition-all duration-300">
                <ZapIcon className="h-8 w-8 text-photon-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Development</h3>
              <p className="text-sm text-photon-300">Building and training AI models for physical interaction</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-photon-500/20 flex items-center justify-center mb-4 mx-auto border border-photon-500/30 group-hover:border-photon-500 transition-all duration-300">
                <CheckCircleIcon className="h-8 w-8 text-photon-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Testing</h3>
              <p className="text-sm text-photon-300">Validating performance in real-world conditions</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-photon-500/20 flex items-center justify-center mb-4 mx-auto border border-photon-500/30 group-hover:border-photon-500 transition-all duration-300">
                <TrendingUpIcon className="h-8 w-8 text-photon-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Deployment</h3>
              <p className="text-sm text-photon-300">Launching and optimizing in production environments</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-photon-950">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <h2 className="section-title mb-6">From simulation to dataset</h2>
          <ol className="space-y-6 text-photon-200">
            <li>
              <h3 className="text-white font-semibold">Step 1: Build the world</h3>
              <p>Create accurate 3D spaces with correct geometry, materials, and lighting.</p>
            </li>
            <li>
              <h3 className="text-white font-semibold">Step 2: Simulate sensors</h3>
              <p>Configure cameras, depth sensors, lidar, and radar to match real devices.</p>
            </li>
            <li>
              <h3 className="text-white font-semibold">Step 3: Generate scenarios</h3>
              <p>Vary lighting, viewpoints, objects, and motion to improve model robustness.</p>
            </li>
            <li>
              <h3 className="text-white font-semibold">Step 4: Create labeled data</h3>
              <p>Export ground truth including boxes, masks, depth, normals, and tracks.</p>
            </li>
            <li>
              <h3 className="text-white font-semibold">Step 5: Validate and refine</h3>
              <p>Compare to small real sets, analyze error modes, regenerate targeted scenes.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-photon-900">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <h2 className="section-title mb-6">Why it matters</h2>
          <ul className="list-disc pl-6 space-y-2 text-photon-200">
            <li>High coverage without field risk</li>
            <li>Faster iteration with full ground truth</li>
            <li>Better transfer through diverse scenarios</li>
          </ul>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-photon-950">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <h2 className="section-title mb-6">FAQ</h2>
          <div className="space-y-6 text-photon-200">
            <div>
              <h3 className="text-white font-semibold">What inputs do you need to start</h3>
              <p>A problem statement, target environment, sensor constraints, and success criteria.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold">Can this run on the edge</h3>
              <p>Yes. We design pipelines that support on device and on prem inference.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold">Do you work with existing hardware</h3>
              <p>Yes. We mirror your sensor specs in sim and align datasets with your target rigs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-photon-gradient-hero text-center">
        <div className="container px-4 md:px-6">
          <Link href="/contact"><Button variant="primary" size="xl">Start Your Project</Button></Link>
        </div>
      </section>
    </div>
  )
}



