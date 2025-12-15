"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPageClient() {
  const [inquiryType, setInquiryType] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const name = String(formData.get('name') || '')
    const email = String(formData.get('email') || '')
    const inquiry = inquiryType
    const message = String(formData.get('message') || '')

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, service: inquiry, message }),
    })

    if (res.ok) {
      form.reset()
      setInquiryType('')
      alert('Thanks! Your inquiry has been sent.')
    } else {
      alert('Sorry, something went wrong sending your message. Please email info@photonecho.dev directly.')
    }
  }

  return (
    <div className="flex flex-col min-h-[calc(100dvh-4rem)] bg-white">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-[#272727] text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-photon-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
          <div
            className="absolute top-1/3 right-1/4 w-96 h-96 bg-photon-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-tight mb-8">
                Contact Photon Echo
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                If you are building perception models, robotics systems, or other physical AI tools that need realistic and controlled training data, reach out to discuss how simulation based data can support your work.
              </p>
            </div>

            {/* Right Column - Placeholder for Image */}
            <div className="bg-gray-800 rounded-lg min-h-[300px] flex items-center justify-center">
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-start max-w-6xl mx-auto">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-6">
                Get in touch
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Tell us about your work and we will respond within one or two business days.
              </p>
              <div className="bg-gray-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                <a href="mailto:info@photonecho.dev" className="text-[#33bfff] hover:text-[#2aa3d9] transition-colors text-lg">
                  info@photonecho.dev
                </a>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <Card className="bg-[#272727] border border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white text-left">Inquiry form</CardTitle>
                <p className="mt-2 text-lg text-gray-300 text-left">
                  Share a brief overview of your physical AI or simulation needs and how you think Photon Echo might help.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-200">
                      Name <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      required
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:ring-[#33bfff] focus:border-[#33bfff]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-200">
                      Email <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@example.com"
                      required
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:ring-[#33bfff] focus:border-[#33bfff]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="inquiry-type" className="text-gray-200">
                      Inquiry type
                    </Label>
                    <Select value={inquiryType} onValueChange={setInquiryType}>
                      <SelectTrigger className="w-full bg-white border-gray-300 text-gray-900 focus:ring-[#33bfff] focus:border-[#33bfff]">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-gray-300 text-gray-900">
                        <SelectItem value="investor-inquiry">Investor inquiry</SelectItem>
                        <SelectItem value="pilot-early-access">Pilot or early access</SelectItem>
                        <SelectItem value="research-collaboration">Research or technical collaboration</SelectItem>
                        <SelectItem value="government-contract">Government contract inquiry</SelectItem>
                        <SelectItem value="general-question">General question</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-200">
                      Message <span className="text-red-400">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your physical AI work, simulation needs, or how we might collaborate..."
                      required
                      rows={6}
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:ring-[#33bfff] focus:border-[#33bfff]"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    className="w-full bg-[#33bfff] hover:bg-[#2aa3d9] text-white"
                  >
                    Submit inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
