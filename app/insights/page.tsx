import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRightIcon, CalendarIcon, UserIcon, EyeIcon } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Insights – Photon Echo",
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
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-8">
              Insights
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light">
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Insights coming soon
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                  We are preparing valuable content including case studies, technical guides, industry trends, and expert analysis.
                </p>
              </div>

              {/* Preview Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <Card className="bg-[#272727] border border-gray-700">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <EyeIcon className="h-6 w-6 text-[#33bfff]" />
                    </div>
                    <CardTitle className="text-xl text-white">Case studies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">
                      Real world examples of how simulation and synthetic data support physical AI development.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="bg-[#272727] border border-gray-700">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <UserIcon className="h-6 w-6 text-[#33bfff]" />
                    </div>
                    <CardTitle className="text-xl text-white">Industry trends</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">
                      Analysis of emerging technologies and trends in physical AI, robotics, and autonomy.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="bg-[#272727] border border-gray-700 md:col-span-2 lg:col-span-1">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <CalendarIcon className="h-6 w-6 text-[#33bfff]" />
                    </div>
                    <CardTitle className="text-xl text-white">Technical guides</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">
                      Guides and best practices for simulation workflows and synthetic data pipelines.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button variant="default" size="lg" className="bg-[#33bfff] hover:bg-[#2aa3d9] text-white">
                    Get notified
                    <ArrowRightIcon className="ml-2 w-5 h-5" />
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
