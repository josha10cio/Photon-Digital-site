import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BoxIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  NetworkIcon,
  ZapIcon,
  CpuIcon,
  PlayIcon,
  MonitorIcon,
  SettingsIcon,
  TrendingUpIcon,
  ShieldIcon,
  ClockIcon,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Digital Twin Systems",
  description:
    "Develop virtual replicas used for simulation, testing, and validation to improve AI system performance and reliability.",
  keywords: [
    "digital twin",
    "real time simulation",
    "predictive analytics",
    "IoT integration",
    "system modeling",
  ],
  openGraph: {
    title: "Digital Twin Systems – Photon Echo",
    description:
      "Develop virtual replicas used for simulation, testing, and validation to improve AI system performance and reliability.",
    url: "https://www.photonecho.dev/digital_twin",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Twin Systems – Photon Echo",
    description:
      "Develop virtual replicas used for simulation, testing, and validation to improve AI system performance and reliability.",
  },
}

export default function DigitalTwinPage() {
  return (
    <div className="flex flex-col min-h-[calc(100dvh-4rem)]">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 lg:py-48 bg-photon-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-photon-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
          <div
            className="absolute top-1/3 right-1/4 w-96 h-96 bg-photon-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <Badge className="bg-photon-400/20 text-photon-100 border-photon-400/30 px-4 py-2 text-sm font-medium">
                AI-Powered • Digital Twin Technology
              </Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-8 animate-fadeIn">
              Digital Twin Systems
            </h1>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto font-light mb-12 animate-fadeIn" style={{ animationDelay: "0.3s" }}>
              Digital twins extend the same simulation pipeline used for training into live testing and monitoring. 
              They help teams validate models and track performance in realistic conditions.
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

      {/* Digital Twin Services Overview */}
      <section className="w-full py-20 md:py-32 bg-photon-950">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Digital Twin Service Categories</h2>
            <p className="text-lg text-photon-200 max-w-2xl mx-auto">
              Intelligent virtual replicas for simulation, testing, and optimization.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {/* Real-time Simulation */}
            <Card className="card-standard card-hover">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-400 transition-all duration-300 group-hover:border-photon-300 mx-auto">
                  <ZapIcon className="h-8 w-8 text-photon-400 group-hover:text-photon-300" />
                </div>
                <CardTitle className="text-xl font-bold">Real Time Simulation</CardTitle>
                <div className="w-12 h-1 bg-photon-400 rounded-full mx-auto mt-2"></div>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-photon-200 text-sm mb-4">
                  Live virtual replicas that mirror physical systems in real-time for continuous monitoring and analysis.
                </CardDescription>
                <ul className="text-xs text-photon-300 space-y-1">
                  <li>• Live data synchronization</li>
                  <li>• Real-time modeling</li>
                  <li>• Continuous monitoring</li>
                  <li>• Instant feedback loops</li>
                </ul>
              </CardContent>
            </Card>

            {/* Predictive Analytics */}
            <Card className="card-standard card-hover">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-400 transition-all duration-300 group-hover:border-photon-300 mx-auto">
                  <TrendingUpIcon className="h-8 w-8 text-photon-400 group-hover:text-photon-300" />
                </div>
                <CardTitle className="text-xl font-bold">Predictive Analytics</CardTitle>
                <div className="w-12 h-1 bg-photon-400 rounded-full mx-auto mt-2"></div>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-photon-200 text-sm mb-4">
                  AI-powered forecasting that predicts system behavior and identifies optimization opportunities.
                </CardDescription>
                <ul className="text-xs text-photon-300 space-y-1">
                  <li>• Performance forecasting</li>
                  <li>• Failure prediction</li>
                  <li>• Optimization insights</li>
                  <li>• Maintenance scheduling</li>
                </ul>
              </CardContent>
            </Card>

            {/* IoT Integration */}
            <Card className="card-standard card-hover">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-400 transition-all duration-300 group-hover:border-photon-300 mx-auto">
                  <NetworkIcon className="h-8 w-8 text-photon-400 group-hover:text-photon-300" />
                </div>
                <CardTitle className="text-xl font-bold">IoT Integration</CardTitle>
                <div className="w-12 h-1 bg-photon-400 rounded-full mx-auto mt-2"></div>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-photon-200 text-sm mb-4">
                  Seamless connectivity between physical systems and digital twins through IoT sensors and data streams.
                </CardDescription>
                <ul className="text-xs text-photon-300 space-y-1">
                  <li>• Sensor integration</li>
                  <li>• Data streaming</li>
                  <li>• Device management</li>
                  <li>• Edge computing</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Digital Twin Process */}
      <section className="w-full py-20 md:py-32 bg-photon-900/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Our Digital Twin Process</h2>
            <p className="text-lg text-photon-200 max-w-2xl mx-auto">
              A systematic approach to creating intelligent virtual replicas of physical systems.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5 max-w-7xl mx-auto">
            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-photon-400/20 flex items-center justify-center mb-4 mx-auto border border-photon-400/30 group-hover:border-photon-400 transition-all duration-300">
                <SettingsIcon className="h-8 w-8 text-photon-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Assessment</h3>
              <p className="text-sm text-photon-300">Analyzing system requirements and data sources</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-photon-400/20 flex items-center justify-center mb-4 mx-auto border border-photon-400/30 group-hover:border-photon-400 transition-all duration-300">
                <MonitorIcon className="h-8 w-8 text-photon-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Modeling</h3>
              <p className="text-sm text-photon-300">Creating accurate virtual representations</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-photon-400/20 flex items-center justify-center mb-4 mx-auto border border-photon-400/30 group-hover:border-photon-400 transition-all duration-300">
                <NetworkIcon className="h-8 w-8 text-photon-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Integration</h3>
              <p className="text-sm text-photon-300">Connecting with IoT sensors and data streams</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-photon-400/20 flex items-center justify-center mb-4 mx-auto border border-photon-400/30 group-hover:border-photon-400 transition-all duration-300">
                <CpuIcon className="h-8 w-8 text-photon-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Analytics</h3>
              <p className="text-sm text-photon-300">Implementing AI-powered insights and predictions</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-photon-400/20 flex items-center justify-center mb-4 mx-auto border border-photon-400/30 group-hover:border-photon-400 transition-all duration-300">
                <CheckCircleIcon className="h-8 w-8 text-photon-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Optimization</h3>
              <p className="text-sm text-photon-300">Continuous improvement and system enhancement</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 md:py-32 bg-photon-950">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">What a Twin Provides</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="card-standard card-hover">
              <CardContent className="p-8">
                <ul className="space-y-4 text-photon-200">
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-photon-400 mt-0.5 flex-shrink-0" />
                    <span>Real time simulation and dashboards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-photon-400 mt-0.5 flex-shrink-0" />
                    <span>Safe testing for changes and updates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-photon-400 mt-0.5 flex-shrink-0" />
                    <span>Feedback loops that guide the next round of dataset generation</span>
                  </li>
          </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-photon-900">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <h2 className="section-title mb-6">How this supports the data loop</h2>
          <p className="text-photon-200">
            Synthetic data trains the model. The twin tests the model in realistic conditions. Results guide the next round of dataset generation.
          </p>
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



