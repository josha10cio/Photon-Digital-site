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
  title: "Digital Twin Development Services",
  description: "Advanced digital twin development services using AI powered virtual replicas for simulation, testing, and optimization. Real-time system modeling and predictive analytics.",
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
              Digital Twin Development
            </h1>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto font-light mb-12 animate-fadeIn" style={{ animationDelay: "0.3s" }}>
              Create intelligent virtual replicas of physical systems for real time simulation, testing, and optimization. 
              Bridge the gap between digital and physical worlds with AI powered digital twin technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn" style={{ animationDelay: "0.6s" }}>
              <Link href="/contact">
                <Button className="btn-primary px-10 py-4 text-lg font-medium group animate-pulse-glow">
                  <PlayIcon className="mr-2 w-5 h-5" />
                  Start Your Digital Twin
                  <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/mission">
                <Button variant="outline" className="px-10 py-4 text-lg font-medium border-white/30 text-white hover:bg-white/10 bg-transparent">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What are Digital Twins Section */}
      <section className="w-full py-20 md:py-32 bg-photon-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="section-title">What are Digital Twins?</h2>
              <div className="space-y-4 text-photon-200">
                <p className="text-lg leading-relaxed">
                  Digital twins are virtual replicas of physical systems that mirror their real-world counterparts in real time. 
                  These AI powered models enable unprecedented insights into system behavior, performance optimization, and predictive maintenance.
                </p>
                <p className="text-lg leading-relaxed">
                  By connecting IoT sensors, AI algorithms, and simulation technologies, digital twins provide a safe sandbox 
                  for testing scenarios, training AI models, and optimizing operations without risk to physical assets.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-photon-400/20 text-photon-400 border-photon-400/30">Real Time Monitoring</Badge>
                <Badge className="bg-photon-500/20 text-photon-500 border-photon-500/30">Predictive Analytics</Badge>
                <Badge className="bg-photon-600/20 text-photon-600 border-photon-600/30">AI Driven Insights</Badge>
              </div>
            </div>
            <div className="grid gap-6">
              <Card className="bg-photon-900/50 border border-photon-800 text-white glassmorphism">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-photon-400/20 flex items-center justify-center">
                      <NetworkIcon className="h-6 w-6 text-photon-400" />
                    </div>
                    <CardTitle className="text-xl">System Integration</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-photon-300">Connect physical sensors and systems to create comprehensive virtual models</p>
                </CardContent>
              </Card>
              <Card className="bg-photon-900/50 border border-photon-800 text-white glassmorphism">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-photon-500/20 flex items-center justify-center">
                      <ZapIcon className="h-6 w-6 text-photon-500" />
                    </div>
                    <CardTitle className="text-xl">AI-Powered Analysis</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-photon-300">Leverage machine learning for predictive maintenance and optimization</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="w-full py-20 md:py-32 bg-photon-900/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Digital Twin Capabilities</h2>
            <p className="text-lg text-photon-200 max-w-2xl mx-auto">
              Comprehensive digital twin services spanning modeling, simulation, and real time analytics.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <Card className="bg-photon-900/50 border border-photon-800 text-white group glassmorphism card-lift-on-hover">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-400 mx-auto group-hover:border-photon-300 transition-colors">
                  <BoxIcon className="h-8 w-8 text-photon-400 group-hover:text-photon-300" />
                </div>
                <CardTitle>3D System Modeling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-photon-300">
                  Create detailed 3D virtual replicas of physical systems, facilities, and processes with real time data integration.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-photon-900/50 border border-photon-800 text-white group glassmorphism card-lift-on-hover">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-500 mx-auto group-hover:border-photon-400 transition-colors">
                  <TrendingUpIcon className="h-8 w-8 text-photon-500 group-hover:text-photon-400" />
                </div>
                <CardTitle>Predictive Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-photon-300">
                  AI-driven analytics to predict system behavior, maintenance needs, and performance optimization opportunities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-photon-900/50 border border-photon-800 text-white group glassmorphism card-lift-on-hover">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-600 mx-auto group-hover:border-photon-500 transition-colors">
                  <CpuIcon className="h-8 w-8 text-photon-600 group-hover:text-photon-500" />
                </div>
                <CardTitle>IoT Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-photon-300">
                  Connect physical sensors and devices to continuously update digital models with real-world data.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-photon-900/50 border border-photon-800 text-white group glassmorphism card-lift-on-hover">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-700 mx-auto group-hover:border-photon-600 transition-colors">
                  <MonitorIcon className="h-8 w-8 text-photon-700 group-hover:text-photon-600" />
                </div>
                <CardTitle>Real Time Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-photon-300">
                  Live dashboards and monitoring systems for continuous observation of digital twin performance and insights.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-photon-900/50 border border-photon-800 text-white group glassmorphism card-lift-on-hover">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-500 mx-auto group-hover:border-photon-400 transition-colors">
                  <SettingsIcon className="h-8 w-8 text-photon-500 group-hover:text-photon-400" />
                </div>
                <CardTitle>Simulation Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-photon-300">
                  Safe testing environment for scenario analysis, what-if modeling, and system optimization without physical risk.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-photon-900/50 border border-photon-800 text-white group glassmorphism card-lift-on-hover">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-600 mx-auto group-hover:border-photon-500 transition-colors">
                  <ShieldIcon className="h-8 w-8 text-photon-600 group-hover:text-photon-500" />
                </div>
                <CardTitle>Risk Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-photon-300">
                  Identify potential failures, optimize safety protocols, and minimize downtime through predictive modeling.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="w-full py-20 md:py-32 bg-photon-950">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Digital Twin Applications</h2>
            <p className="text-lg text-photon-200 max-w-2xl mx-auto">
              Real-world applications across industries, from manufacturing to smart cities.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
            <Card className="bg-photon-900/50 border border-photon-800 text-white glassmorphism">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <ClockIcon className="h-6 w-6 text-photon-400" />
                  Manufacturing Optimization
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-photon-200">
                  Create digital twins of production lines, equipment, and entire factories to optimize workflows, 
                  predict maintenance needs, and improve efficiency.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-photon-400/20 text-photon-400 border-photon-400/30">Production Planning</Badge>
                  <Badge className="bg-photon-500/20 text-photon-500 border-photon-500/30">Quality Control</Badge>
                  <Badge className="bg-photon-600/20 text-photon-600 border-photon-600/30">Predictive Maintenance</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-photon-900/50 border border-photon-800 text-white glassmorphism">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <NetworkIcon className="h-6 w-6 text-photon-500" />
                  Smart City Infrastructure
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-photon-200">
                  Model urban infrastructure, traffic systems, and utilities to optimize city operations, 
                  reduce energy consumption, and improve citizen services.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-photon-500/20 text-photon-500 border-photon-500/30">Traffic Management</Badge>
                  <Badge className="bg-photon-600/20 text-photon-600 border-photon-600/30">Energy Optimization</Badge>
                  <Badge className="bg-photon-700/20 text-photon-700 border-photon-700/30">Urban Planning</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-photon-900/50 border border-photon-800 text-white glassmorphism">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <ShieldIcon className="h-6 w-6 text-photon-600" />
                  Healthcare Systems
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-photon-200">
                  Digital twins of medical devices, patient care workflows, and hospital operations to improve 
                  treatment outcomes and operational efficiency.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-photon-600/20 text-photon-600 border-photon-600/30">Patient Monitoring</Badge>
                  <Badge className="bg-photon-700/20 text-photon-700 border-photon-700/30">Device Optimization</Badge>
                  <Badge className="bg-photon-500/20 text-photon-500 border-photon-500/30">Workflow Analysis</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-photon-900/50 border border-photon-800 text-white glassmorphism">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <ZapIcon className="h-6 w-6 text-photon-700" />
                  Energy & Utilities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-photon-200">
                  Model power grids, renewable energy systems, and utility infrastructure for optimized 
                  energy distribution and sustainable operations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-photon-700/20 text-photon-700 border-photon-700/30">Grid Optimization</Badge>
                  <Badge className="bg-photon-500/20 text-photon-500 border-photon-500/30">Renewable Integration</Badge>
                  <Badge className="bg-photon-600/20 text-photon-600 border-photon-600/30">Demand Forecasting</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-20 md:py-32 bg-photon-900/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Digital Twin Benefits</h2>
            <p className="text-lg text-photon-200 max-w-2xl mx-auto">
              Transform your operations with data-driven insights and predictive capabilities.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-photon-400/20 flex items-center justify-center mx-auto border border-photon-400/30">
                <TrendingUpIcon className="h-8 w-8 text-photon-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Increased Efficiency</h3>
              <p className="text-sm text-photon-300">Optimize operations and reduce waste through data-driven insights</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-photon-500/20 flex items-center justify-center mx-auto border border-photon-500/30">
                <ShieldIcon className="h-8 w-8 text-photon-500" />
              </div>
              <h3 className="text-lg font-semibold text-white">Risk Reduction</h3>
              <p className="text-sm text-photon-300">Prevent failures and minimize downtime with predictive analytics</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-photon-600/20 flex items-center justify-center mx-auto border border-photon-600/30">
                <ClockIcon className="h-8 w-8 text-photon-600" />
              </div>
              <h3 className="text-lg font-semibold text-white">Faster Innovation</h3>
              <p className="text-sm text-photon-300">Test and iterate rapidly in virtual environments</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-photon-700/20 flex items-center justify-center mx-auto border border-photon-700/30">
                <SettingsIcon className="h-8 w-8 text-photon-700" />
              </div>
              <h3 className="text-lg font-semibold text-white">Better Decisions</h3>
              <p className="text-sm text-photon-300">Make informed choices with comprehensive system visibility</p>
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
              <BoxIcon className="w-6 h-6 text-photon-400" />
              <span className="text-photon-200 font-medium">Ready to Build Your Digital Twin?</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Transform Your Operations with Digital Twins
            </h2>
            <p className="text-lg md:text-xl text-photon-100 max-w-2xl mx-auto mb-8">
              Partner with us to create intelligent virtual replicas that drive innovation, optimize performance, and predict the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="btn-primary px-12 py-4 text-lg font-semibold group animate-pulse-glow">
                  <PlayIcon className="mr-2 w-5 h-5" />
                  Start Your Digital Twin Project
                  <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="px-12 py-4 text-lg font-semibold border-white/30 text-white hover:bg-white/10 bg-transparent"
                >
                  Explore All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
