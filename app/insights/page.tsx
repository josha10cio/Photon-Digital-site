import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRightIcon, CalendarIcon, UserIcon, EyeIcon } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Insights & Research",
  description: "Expert analysis, case studies, and technical knowledge on simulation, sensors, and data for physical AI.",
}

export default function InsightsPage() {
  return (
    <div className="flex flex-col min-h-[calc(100dvh-4rem)]">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 lg:py-48 bg-[#272727] text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-photon-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
          <div
            className="absolute top-1/3 right-1/4 w-96 h-96 bg-photon-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-photon-700/20 text-photon-100 border-photon-700/30 px-4 py-2 text-sm font-medium">
                Insights & Research
              </Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-8 animate-fadeIn">
              Insights & Research
            </h1>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto font-light mb-12 animate-fadeIn" style={{ animationDelay: "0.3s" }}>
              Expert analysis, case studies, and technical knowledge on simulation, sensors, and data for physical AI.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-20 md:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Insights Coming Soon
                </h2>
                <p className="text-lg text-photon-200 max-w-2xl mx-auto mb-8">
                  We're preparing valuable content including case studies, technical guides, industry trends, and expert analysis.
                </p>
              </div>

              {/* Preview Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <Card className="card-standard card-hover">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-photon-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <EyeIcon className="h-6 w-6 text-photon-300" />
                    </div>
                    <CardTitle className="text-xl">Case Studies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-photon-200">
                      Real-world examples of how we've solved complex design and engineering challenges.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="card-standard card-hover">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-photon-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <UserIcon className="h-6 w-6 text-photon-300" />
                    </div>
                    <CardTitle className="text-xl">Industry Trends</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-photon-200">
                      Analysis of emerging technologies and trends in design, visualization, and engineering.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="card-standard card-hover md:col-span-2 lg:col-span-1">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-photon-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <CalendarIcon className="h-6 w-6 text-photon-300" />
                    </div>
                    <CardTitle className="text-xl">Technical Guides</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-photon-200">
                      Step-by-step guides and best practices for design and engineering processes.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button variant="secondary" size="lg">
                    Get Notified
                    <ArrowRightIcon className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    Start Your Project
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
