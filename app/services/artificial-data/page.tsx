import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  DatabaseIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  BrainIcon,
  ShieldIcon,
  ZapIcon,
  PlayIcon,
  CpuIcon,
  LayersIcon,
  RefreshCwIcon,
  BarChartIcon,
  LockIcon,
  TrendingUpIcon,
  SparklesIcon,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Artificial Data Development Services",
  description: "Synthetic data for AI training, testing, and validation. Privacy safe when real data is limited or sensitive.",
}

export default function ArtificialDataPage() {
  return (
    <div className="flex flex-col min-h-[calc(100dvh-4rem)]">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 lg:py-48 bg-[#272727] text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-photon-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
          <div
            className="absolute top-1/3 right-1/4 w-96 h-96 bg-photon-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <Badge className="bg-photon-600/20 text-photon-100 border-photon-600/30 px-4 py-2 text-sm font-medium">
                Synthetic Data • AI Training Revolution
              </Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-8 animate-fadeIn">
              Artificial Data Development
            </h1>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto font-light mb-12 animate-fadeIn" style={{ animationDelay: "0.3s" }}>
              Generate high-quality synthetic datasets for AI training, testing, and validation. Overcome data limitations 
              with privacy-safe artificial data that maintains statistical properties of real-world information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn" style={{ animationDelay: "0.6s" }}>
              <Link href="/contact">
                <Button variant="primary" size="xl">
                  <PlayIcon className="mr-2 w-5 h-5" />
                  Generate Your Data
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

      {/* What is Artificial Data Section */}
      <section className="w-full py-20 md:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="section-title">What is Artificial Data?</h2>
              <div className="space-y-4 text-photon-200">
                <p className="text-lg leading-relaxed">
                  Artificial or synthetic data is algorithmically generated information that mimics the statistical 
                  properties of real-world data without containing actual sensitive information. This revolutionary 
                  approach solves the data scarcity problem in AI development.
                </p>
                <p className="text-lg leading-relaxed">
                  Using advanced generative AI models, we create datasets that maintain the same patterns, distributions, 
                  and relationships as original data while ensuring complete privacy protection and unlimited scalability 
                  for AI training and testing.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-photon-600/20 text-photon-600 border-photon-600/30">Privacy Safe</Badge>
                <Badge className="bg-photon-700/20 text-photon-700 border-photon-700/30">Scalable</Badge>
                <Badge className="bg-photon-500/20 text-photon-500 border-photon-500/30">High Quality</Badge>
              </div>
            </div>
            <div className="grid gap-6">
              <Card className="card-standard card-hover">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-photon-600/20 flex items-center justify-center">
                      <ShieldIcon className="h-6 w-6 text-photon-600" />
                    </div>
                    <CardTitle className="text-xl">Privacy Protection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-photon-300">Train AI models without exposing sensitive real-world data</p>
                </CardContent>
              </Card>
              <Card className="card-standard card-hover">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-photon-700/20 flex items-center justify-center">
                      <LayersIcon className="h-6 w-6 text-photon-700" />
                    </div>
                    <CardTitle className="text-xl">Unlimited Scale</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-photon-300">Generate massive datasets without collection or storage limitations</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="w-full py-20 md:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Artificial Data Services</h2>
            <p className="text-lg text-photon-200 max-w-2xl mx-auto">
              Comprehensive synthetic data generation across multiple data types and use cases.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <Card className="bg-[#272727] card-standard card-hover card-lift-on-hover">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-600 mx-auto group-hover:border-photon-500 transition-colors">
                  <DatabaseIcon className="h-8 w-8 text-photon-600 group-hover:text-photon-500" />
                </div>
                <CardTitle>Synthetic Data Generation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-photon-300">
                  Create artificial datasets that preserve statistical properties and relationships of original data while ensuring privacy.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-[#272727] card-standard card-hover card-lift-on-hover">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-700 mx-auto group-hover:border-photon-600 transition-colors">
                  <LayersIcon className="h-8 w-8 text-photon-700 group-hover:text-photon-600" />
                </div>
                <CardTitle>Data Augmentation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-photon-300">
                  Expand existing datasets with synthetic variations to improve AI model robustness and performance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-[#272727] card-standard card-hover card-lift-on-hover">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-500 mx-auto group-hover:border-photon-400 transition-colors">
                  <SparklesIcon className="h-8 w-8 text-photon-500 group-hover:text-photon-400" />
                </div>
                <CardTitle>Bias Mitigation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-photon-300">
                  Generate balanced synthetic datasets to reduce bias and improve fairness in AI model training.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-[#272727] card-standard card-hover card-lift-on-hover">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-600 mx-auto group-hover:border-photon-500 transition-colors">
                  <BarChartIcon className="h-8 w-8 text-photon-600 group-hover:text-photon-500" />
                </div>
                <CardTitle>Edge Case Generation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-photon-300">
                  Create rare scenarios and edge cases that are difficult to collect in real-world datasets.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-[#272727] card-standard card-hover card-lift-on-hover">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-700 mx-auto group-hover:border-photon-600 transition-colors">
                  <LockIcon className="h-8 w-8 text-photon-700 group-hover:text-photon-600" />
                </div>
                <CardTitle>Compliance Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-photon-300">
                  Generate synthetic data that meets regulatory requirements while maintaining utility for AI development.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-[#272727] card-standard card-hover card-lift-on-hover">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-photon-500 mx-auto group-hover:border-photon-400 transition-colors">
                  <RefreshCwIcon className="h-8 w-8 text-photon-500 group-hover:text-photon-400" />
                </div>
                <CardTitle>Continuous Generation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-photon-300">
                  Ongoing synthetic data generation pipelines that adapt to changing requirements and use cases.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Types Section */}
      <section className="w-full py-20 md:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Synthetic Data Types</h2>
            <p className="text-lg text-photon-200 max-w-2xl mx-auto">
              Generate artificial data across various formats and domains for comprehensive AI training.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
            <Card className="bg-[#272727] card-standard">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <BarChartIcon className="h-6 w-6 text-photon-600" />
                  Tabular Data
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-photon-200">
                  Generate synthetic structured data including customer records, financial transactions, 
                  and business metrics while preserving relationships and statistical distributions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-photon-600/20 text-photon-600 border-photon-600/30">Customer Data</Badge>
                  <Badge className="bg-photon-700/20 text-photon-700 border-photon-700/30">Financial Records</Badge>
                  <Badge className="bg-photon-500/20 text-photon-500 border-photon-500/30">Business Metrics</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#272727] card-standard">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <CpuIcon className="h-6 w-6 text-photon-700" />
                  Image & Visual Data
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-photon-200">
                  Create synthetic images, faces, objects, and scenes for computer vision training 
                  without privacy concerns or copyright issues.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-photon-700/20 text-photon-700 border-photon-700/30">Synthetic Faces</Badge>
                  <Badge className="bg-photon-600/20 text-photon-600 border-photon-600/30">Object Images</Badge>
                  <Badge className="bg-photon-500/20 text-photon-500 border-photon-500/30">Scene Generation</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#272727] card-standard">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <ZapIcon className="h-6 w-6 text-photon-500" />
                  Text & Language Data
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-photon-200">
                  Generate synthetic text, conversations, and language data for natural language processing 
                  and chatbot training applications.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-photon-500/20 text-photon-500 border-photon-500/30">Conversations</Badge>
                  <Badge className="bg-photon-600/20 text-photon-600 border-photon-600/30">Documents</Badge>
                  <Badge className="bg-photon-700/20 text-photon-700 border-photon-700/30">Multilingual Text</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#272727] card-standard">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <TrendingUpIcon className="h-6 w-6 text-photon-600" />
                  Time Series Data
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-photon-200">
                  Create synthetic time series data for forecasting models, IoT sensor data, 
                  and temporal pattern analysis applications.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-photon-600/20 text-photon-600 border-photon-600/30">Sensor Data</Badge>
                  <Badge className="bg-photon-700/20 text-photon-700 border-photon-700/30">Market Data</Badge>
                  <Badge className="bg-photon-500/20 text-photon-500 border-photon-500/30">Usage Patterns</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="w-full py-20 md:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Artificial Data Applications</h2>
            <p className="text-lg text-photon-200 max-w-2xl mx-auto">
              Solve real-world AI challenges with synthetic data across industries and applications.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <Card className="bg-[#272727] card-standard">
              <CardHeader>
                <CardTitle className="text-lg">Healthcare AI Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-photon-300 text-sm">
                  Train medical AI models with synthetic patient data that preserves clinical patterns without exposing sensitive health information.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#272727] card-standard">
              <CardHeader>
                <CardTitle className="text-lg">Financial Model Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-photon-300 text-sm">
                  Generate synthetic financial data for stress testing, fraud detection, and risk modeling without regulatory concerns.
                </p>
              </CardContent>
            </Card>

            <Card className="card-standard">
              <CardHeader>
                <CardTitle className="text-lg">Autonomous Vehicle Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-photon-300 text-sm">
                  Create diverse driving scenarios and edge cases for testing autonomous vehicle AI in safe, controlled environments.
                </p>
              </CardContent>
            </Card>

            <Card className="card-standard card-hover">
              <CardHeader>
                <CardTitle className="text-lg">Retail Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-photon-300 text-sm">
                  Generate synthetic customer behavior data for recommendation systems and demand forecasting models.
                </p>
              </CardContent>
            </Card>

            <Card className="card-standard card-hover">
              <CardHeader>
                <CardTitle className="text-lg">Cybersecurity Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-photon-300 text-sm">
                  Create synthetic attack patterns and network data for training security AI models without exposing vulnerabilities.
                </p>
              </CardContent>
            </Card>

            <Card className="card-standard card-hover">
              <CardHeader>
                <CardTitle className="text-lg">Manufacturing Quality Control</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-photon-300 text-sm">
                  Generate synthetic defect data and production scenarios for training quality control AI systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-20 md:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Benefits of Artificial Data</h2>
            <p className="text-lg text-photon-200 max-w-2xl mx-auto">
              Unlock AI potential while maintaining privacy, compliance, and cost efficiency.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-photon-600/20 flex items-center justify-center mx-auto border border-photon-600/30">
                <ShieldIcon className="h-8 w-8 text-photon-600" />
              </div>
              <h3 className="text-lg font-semibold text-white">Privacy Protection</h3>
              <p className="text-sm text-photon-300">Train AI models without exposing sensitive personal or business data</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-photon-700/20 flex items-center justify-center mx-auto border border-photon-700/30">
                <LayersIcon className="h-8 w-8 text-photon-700" />
              </div>
              <h3 className="text-lg font-semibold text-white">Unlimited Scale</h3>
              <p className="text-sm text-photon-300">Generate massive datasets without collection or storage limitations</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-photon-500/20 flex items-center justify-center mx-auto border border-photon-500/30">
                <ZapIcon className="h-8 w-8 text-photon-500" />
              </div>
              <h3 className="text-lg font-semibold text-white">Faster Development</h3>
              <p className="text-sm text-photon-300">Accelerate AI development with instant data availability</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-photon-600/20 flex items-center justify-center mx-auto border border-photon-600/30">
                <LockIcon className="h-8 w-8 text-photon-600" />
              </div>
              <h3 className="text-lg font-semibold text-white">Regulatory Compliance</h3>
              <p className="text-sm text-photon-300">Meet data protection regulations while advancing AI capabilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-20 md:py-32 bg-[#272727] text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <Card className="card-standard card-hover max-w-4xl mx-auto p-8 md:p-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <DatabaseIcon className="w-6 h-6 text-photon-600" />
              <span className="text-photon-200 font-medium">Ready to Generate Artificial Data?</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Unlock AI Potential with Synthetic Data
            </h2>
            <p className="text-lg md:text-xl text-photon-100 max-w-2xl mx-auto mb-8">
              Partner with us to generate high-quality artificial datasets that accelerate AI development while protecting privacy.
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
