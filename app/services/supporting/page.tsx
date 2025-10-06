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
  BrainIcon,
  DatabaseIcon,
  NetworkIcon,
  ZapIcon,
  CpuIcon,
  ArrowUpIcon,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Supporting Services",
  description:
    "Comprehensive design, visualization, engineering, and artificial data services that support our primary Physical AI Training and Digital Twin Development solutions.",
}

export default function SupportingServicesPage() {
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
              <Badge className="bg-photon-600/20 text-photon-100 border-photon-600/30 px-4 py-2 text-sm font-medium">
                Supporting Services • Integrated Solutions
              </Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-8 animate-fadeIn">
              Supporting Services
            </h1>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto font-light mb-12 animate-fadeIn" style={{ animationDelay: "0.3s" }}>
              Comprehensive design, visualization, engineering, and data services that enhance and support our primary Physical AI Training and Digital Twin Development solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn" style={{ animationDelay: "0.6s" }}>
              <Link href="/services/physical-ai">
                <Button className="btn-primary px-10 py-4 text-lg font-medium group animate-pulse-glow">
                  <BrainIcon className="mr-2 w-5 h-5" />
                  Physical AI Training
                  <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/services/digital-twin">
                <Button className="btn-primary px-10 py-4 text-lg font-medium group animate-pulse-glow">
                  <BoxIcon className="mr-2 w-5 h-5" />
                  Digital Twin Development
                  <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How We Support Section */}
      <section className="w-full py-20 md:py-32 bg-photon-950">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">How We Support Your Primary Services</h2>
            <p className="text-lg text-photon-200 max-w-3xl mx-auto">
              Our supporting services are designed to complement and enhance your Physical AI Training and Digital Twin projects, providing comprehensive solutions for every stage of development.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto mb-16">
            <Card className="bg-photon-900/50 border border-photon-800 text-white glassmorphism">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-photon-500/20 flex items-center justify-center">
                    <BrainIcon className="w-6 h-6 text-photon-500" />
                  </div>
                  <CardTitle className="text-xl">Physical AI Training Support</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-photon-200">
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-photon-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Design Services:</strong> Create intuitive interfaces and user experiences for AI systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-photon-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Visualization Services:</strong> Develop training visualizations and interactive demos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-photon-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Engineering Services:</strong> Build robust hardware integration and system architecture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-photon-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Artificial Data:</strong> Generate synthetic datasets for training and validation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-photon-900/50 border border-photon-800 text-white glassmorphism">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-photon-400/20 flex items-center justify-center">
                    <BoxIcon className="w-6 h-6 text-photon-400" />
                  </div>
                  <CardTitle className="text-xl">Digital Twin Development Support</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-photon-200">
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-photon-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Design Services:</strong> Model physical systems and create realistic 3D representations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-photon-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Visualization Services:</strong> Build immersive 3D environments and real-time visualizations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-photon-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Engineering Services:</strong> Ensure accurate system modeling and performance optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-photon-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Artificial Data:</strong> Create realistic simulation data for twin validation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Design Services Section */}
      <section id="design" className="w-full py-20 md:py-32 bg-photon-900">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-photon-500/20 flex items-center justify-center">
                  <PenToolIcon className="w-8 h-8 text-photon-500" />
                </div>
              </div>
              <h2 className="section-title mb-4">Design Services</h2>
              <p className="text-lg text-photon-200 max-w-3xl mx-auto">
                Comprehensive design solutions that bring your Physical AI and Digital Twin concepts to life through intuitive interfaces, realistic 3D models, and user-centered design principles.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto mb-12">
              <Card className="bg-photon-900/50 border border-photon-800 text-white group glassmorphism hover:border-photon-500/50 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-500 transition-all duration-300 group-hover:border-photon-400 mx-auto">
                    <BrushIcon className="h-8 w-8 text-photon-500 group-hover:text-photon-400" />
                  </div>
                  <CardTitle className="text-xl font-bold">Concept Design</CardTitle>
                  <div className="w-12 h-1 bg-photon-500 rounded-full mx-auto mt-2"></div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-photon-200 text-sm mb-4">
                    Initial sketches, ideation sessions, and concept development for AI systems and digital twins.
                  </CardDescription>
                  <ul className="text-xs text-photon-300 space-y-1">
                    <li>• AI interface ideation</li>
                    <li>• Digital twin concept sketches</li>
                    <li>• User experience exploration</li>
                    <li>• System architecture visualization</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-photon-900/50 border border-photon-800 text-white group glassmorphism hover:border-photon-500/50 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-500 transition-all duration-300 group-hover:border-photon-400 mx-auto">
                    <PaletteIcon className="h-8 w-8 text-photon-500 group-hover:text-photon-400" />
                  </div>
                  <CardTitle className="text-xl font-bold">3D Modeling & CAD</CardTitle>
                  <div className="w-12 h-1 bg-photon-500 rounded-full mx-auto mt-2"></div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-photon-200 text-sm mb-4">
                    Precision 3D models and CAD drawings for physical AI systems and digital twin components.
                  </CardDescription>
                  <ul className="text-xs text-photon-300 space-y-1">
                    <li>• Physical AI hardware models</li>
                    <li>• Digital twin 3D assets</li>
                    <li>• Manufacturing-ready CAD</li>
                    <li>• Assembly documentation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-photon-900/50 border border-photon-800 text-white group glassmorphism hover:border-photon-500/50 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-500 transition-all duration-300 group-hover:border-photon-400 mx-auto">
                    <CodeIcon className="h-8 w-8 text-photon-500 group-hover:text-photon-400" />
                  </div>
                  <CardTitle className="text-xl font-bold">UI/UX Design</CardTitle>
                  <div className="w-12 h-1 bg-photon-500 rounded-full mx-auto mt-2"></div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-photon-200 text-sm mb-4">
                    User interface and experience design for AI training platforms and digital twin interfaces.
                  </CardDescription>
                  <ul className="text-xs text-photon-300 space-y-1">
                    <li>• AI training dashboards</li>
                    <li>• Digital twin controls</li>
                    <li>• Data visualization interfaces</li>
                    <li>• User workflow optimization</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Link href="/contact">
                <Button className="btn-primary px-8 py-3 text-lg font-semibold group animate-pulse-glow">
                  Discuss Design Needs
                  <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Visualization Services Section */}
      <section id="visualization" className="w-full py-20 md:py-32 bg-photon-950">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-photon-700/20 flex items-center justify-center">
                  <MonitorIcon className="w-8 h-8 text-photon-700" />
                </div>
              </div>
              <h2 className="section-title mb-4">Visualization Services</h2>
              <p className="text-lg text-photon-200 max-w-3xl mx-auto">
                Advanced visualization solutions that make complex AI training processes and digital twin simulations accessible, engaging, and effective for training, demonstration, and analysis.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto mb-12">
              <Card className="bg-photon-900/50 border border-photon-800 text-white group glassmorphism hover:border-photon-700/50 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-700 transition-all duration-300 group-hover:border-photon-600 mx-auto">
                    <FileTextIcon className="h-8 w-8 text-photon-700 group-hover:text-photon-600" />
                  </div>
                  <CardTitle className="text-xl font-bold">Technical Drawings</CardTitle>
                  <div className="w-12 h-1 bg-photon-700 rounded-full mx-auto mt-2"></div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-photon-200 text-sm mb-4">
                    Detailed schematics and technical documentation for AI systems and digital twin infrastructure.
                  </CardDescription>
                  <ul className="text-xs text-photon-300 space-y-1">
                    <li>• AI system schematics</li>
                    <li>• Digital twin architecture</li>
                    <li>• Network topology diagrams</li>
                    <li>• Integration specifications</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-photon-900/50 border border-photon-800 text-white group glassmorphism hover:border-photon-700/50 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-700 transition-all duration-300 group-hover:border-photon-600 mx-auto">
                    <PlayIcon className="h-8 w-8 text-photon-700 group-hover:text-photon-600" />
                  </div>
                  <CardTitle className="text-xl font-bold">Interactive Demos</CardTitle>
                  <div className="w-12 h-1 bg-photon-700 rounded-full mx-auto mt-2"></div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-photon-200 text-sm mb-4">
                    Real-time interactive demonstrations of AI training processes and digital twin simulations.
                  </CardDescription>
                  <ul className="text-xs text-photon-300 space-y-1">
                    <li>• AI training visualizations</li>
                    <li>• Digital twin interactions</li>
                    <li>• Real-time data displays</li>
                    <li>• Training progress tracking</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-photon-900/50 border border-photon-800 text-white group glassmorphism hover:border-photon-700/50 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-700 transition-all duration-300 group-hover:border-photon-600 mx-auto">
                    <ZapIcon className="h-8 w-8 text-photon-700 group-hover:text-photon-600" />
                  </div>
                  <CardTitle className="text-xl font-bold">Real-time Presentations</CardTitle>
                  <div className="w-12 h-1 bg-photon-700 rounded-full mx-auto mt-2"></div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-photon-200 text-sm mb-4">
                    Dynamic presentations and training materials for AI systems and digital twin demonstrations.
                  </CardDescription>
                  <ul className="text-xs text-photon-300 space-y-1">
                    <li>• Training presentations</li>
                    <li>• Stakeholder demos</li>
                    <li>• Progress visualizations</li>
                    <li>• Performance dashboards</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Link href="/contact">
                <Button className="btn-primary px-8 py-3 text-lg font-semibold group animate-pulse-glow">
                  Explore Visualization Options
                  <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Services Section */}
      <section id="engineering" className="w-full py-20 md:py-32 bg-photon-900">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-photon-600/20 flex items-center justify-center">
                  <CogIcon className="w-8 h-8 text-photon-600" />
                </div>
              </div>
              <h2 className="section-title mb-4">Engineering Services</h2>
              <p className="text-lg text-photon-200 max-w-3xl mx-auto">
                Comprehensive engineering solutions that ensure your Physical AI systems and Digital Twins are robust, scalable, and optimized for real-world performance and reliability.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto mb-12">
              <Card className="bg-photon-900/50 border border-photon-800 text-white group glassmorphism hover:border-photon-600/50 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-600 transition-all duration-300 group-hover:border-photon-500 mx-auto">
                    <Settings2Icon className="h-8 w-8 text-photon-600 group-hover:text-photon-500" />
                  </div>
                  <CardTitle className="text-xl font-bold">System Architecture</CardTitle>
                  <div className="w-12 h-1 bg-photon-600 rounded-full mx-auto mt-2"></div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-photon-200 text-sm mb-4">
                    Robust system design and architecture for AI training infrastructure and digital twin platforms.
                  </CardDescription>
                  <ul className="text-xs text-photon-300 space-y-1">
                    <li>• AI training infrastructure</li>
                    <li>• Digital twin architecture</li>
                    <li>• Scalability planning</li>
                    <li>• Performance optimization</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-photon-900/50 border border-photon-800 text-white group glassmorphism hover:border-photon-600/50 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-600 transition-all duration-300 group-hover:border-photon-500 mx-auto">
                    <WrenchIcon className="h-8 w-8 text-photon-600 group-hover:text-photon-500" />
                  </div>
                  <CardTitle className="text-xl font-bold">Hardware Integration</CardTitle>
                  <div className="w-12 h-1 bg-photon-600 rounded-full mx-auto mt-2"></div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-photon-200 text-sm mb-4">
                    Physical hardware integration and sensor systems for AI training and digital twin data collection.
                  </CardDescription>
                  <ul className="text-xs text-photon-300 space-y-1">
                    <li>• Sensor integration</li>
                    <li>• Hardware optimization</li>
                    <li>• Data collection systems</li>
                    <li>• Real-time processing</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-photon-900/50 border border-photon-800 text-white group glassmorphism hover:border-photon-600/50 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-600 transition-all duration-300 group-hover:border-photon-500 mx-auto">
                    <ClipboardListIcon className="h-8 w-8 text-photon-600 group-hover:text-photon-500" />
                  </div>
                  <CardTitle className="text-xl font-bold">Technical Documentation</CardTitle>
                  <div className="w-12 h-1 bg-photon-600 rounded-full mx-auto mt-2"></div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-photon-200 text-sm mb-4">
                    Comprehensive documentation for AI systems and digital twin implementations and maintenance.
                  </CardDescription>
                  <ul className="text-xs text-photon-300 space-y-1">
                    <li>• System specifications</li>
                    <li>• Maintenance procedures</li>
                    <li>• User manuals</li>
                    <li>• Compliance documentation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Link href="/contact">
                <Button className="btn-primary px-8 py-3 text-lg font-semibold group animate-pulse-glow">
                  Discuss Engineering Needs
                  <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Artificial Data Services Section */}
      <section id="artificial-data" className="w-full py-20 md:py-32 bg-photon-950">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-photon-600/20 flex items-center justify-center">
                  <DatabaseIcon className="w-8 h-8 text-photon-600" />
                </div>
              </div>
              <h2 className="section-title mb-4">Artificial Data Development</h2>
              <p className="text-lg text-photon-200 max-w-3xl mx-auto">
                Synthetic datasets and data generation solutions specifically designed to support and enhance your Physical AI Training programs with realistic, diverse, and high-quality training data.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto mb-12">
              <Card className="bg-photon-900/50 border border-photon-800 text-white group glassmorphism hover:border-photon-600/50 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-600 transition-all duration-300 group-hover:border-photon-500 mx-auto">
                    <CpuIcon className="h-8 w-8 text-photon-600 group-hover:text-photon-500" />
                  </div>
                  <CardTitle className="text-xl font-bold">Training Datasets</CardTitle>
                  <div className="w-12 h-1 bg-photon-600 rounded-full mx-auto mt-2"></div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-photon-200 text-sm mb-4">
                    Custom synthetic datasets tailored for Physical AI training scenarios and applications.
                  </CardDescription>
                  <ul className="text-xs text-photon-300 space-y-1">
                    <li>• Physical world simulations</li>
                    <li>• Sensor data generation</li>
                    <li>• Edge case scenarios</li>
                    <li>• Performance validation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-photon-900/50 border border-photon-800 text-white group glassmorphism hover:border-photon-600/50 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-600 transition-all duration-300 group-hover:border-photon-500 mx-auto">
                    <NetworkIcon className="h-8 w-8 text-photon-600 group-hover:text-photon-500" />
                  </div>
                  <CardTitle className="text-xl font-bold">Simulation Data</CardTitle>
                  <div className="w-12 h-1 bg-photon-600 rounded-full mx-auto mt-2"></div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-photon-200 text-sm mb-4">
                    Realistic simulation data for digital twin validation and AI model testing.
                  </CardDescription>
                  <ul className="text-xs text-photon-300 space-y-1">
                    <li>• Digital twin test data</li>
                    <li>• Simulation scenarios</li>
                    <li>• Performance benchmarks</li>
                    <li>• Validation datasets</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-photon-900/50 border border-photon-800 text-white group glassmorphism hover:border-photon-600/50 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-600 transition-all duration-300 group-hover:border-photon-500 mx-auto">
                    <ZapIcon className="h-8 w-8 text-photon-600 group-hover:text-photon-500" />
                  </div>
                  <CardTitle className="text-xl font-bold">Data Augmentation</CardTitle>
                  <div className="w-12 h-1 bg-photon-600 rounded-full mx-auto mt-2"></div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-photon-200 text-sm mb-4">
                    Advanced data augmentation techniques to enhance existing datasets and improve AI training outcomes.
                  </CardDescription>
                  <ul className="text-xs text-photon-300 space-y-1">
                    <li>• Dataset enhancement</li>
                    <li>• Variant generation</li>
                    <li>• Quality improvement</li>
                    <li>• Training optimization</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Link href="/contact">
                <Button className="btn-primary px-8 py-3 text-lg font-semibold group animate-pulse-glow">
                  Discuss Data Solutions
                  <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-20 md:py-32 bg-photon-900">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-photon-200 max-w-2xl mx-auto mb-8">
              Our supporting services are designed to enhance your Physical AI Training and Digital Twin projects. Let's discuss how we can support your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="btn-primary px-10 py-4 text-lg font-semibold group animate-pulse-glow">
                  <PlayIcon className="mr-2 w-5 h-5" />
                  Start Your Project
                  <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/services">
                <Button className="btn-primary px-10 py-4 text-lg font-semibold group animate-pulse-glow">
                  View All Services
                  <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link href="#top">
          <Button
            variant="outline"
            size="icon"
            className="bg-photon-900/80 backdrop-blur-xl border border-photon-800/50 text-white hover:bg-photon-800/80 hover:border-photon-700/50 transition-all duration-300 hover:scale-110"
            aria-label="Back to top"
          >
            <ArrowUpIcon className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
