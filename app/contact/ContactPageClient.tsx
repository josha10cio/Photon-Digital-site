"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { MessageSquareIcon, CalendarIcon, FileTextIcon, ClockIcon } from "lucide-react"

export default function ContactPageClient() {
  const [serviceInterested, setServiceInterested] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Contact form submitted!")
    alert("Your message has been sent! We will get back to you soon.")
  }

  return (
    <div className="flex flex-col min-h-[calc(100dvh-4rem)]">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 lg:py-48 bg-photon-gradient-hero text-white text-center animate-fadeIn">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
            Contact Photon Echo
          </h1>
          <p className="mt-4 text-lg md:text-xl text-photon-100 max-w-3xl mx-auto">
            Ready to start your project? Get in touch for consultations, quotes, and expert guidance on your design and engineering needs.
          </p>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="w-full py-16 md:py-24 bg-photon-900/30 text-white relative z-10">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Multiple Ways to Connect</h2>
            <p className="text-lg text-photon-200 max-w-2xl mx-auto">
              Choose the engagement option that works best for your project needs and timeline.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <div className="glassmorphism p-6 text-center group card-lift-on-hover">
              <MessageSquareIcon className="h-12 w-12 text-photon-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">Quick Quote</h3>
              <p className="text-sm text-photon-300 mb-4">Get a rapid project estimate for standard design and engineering services.</p>
              <p className="text-xs text-photon-400">Response within 24 hours</p>
            </div>

            <div className="glassmorphism p-6 text-center group card-lift-on-hover">
              <FileTextIcon className="h-12 w-12 text-photon-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">Detailed Brief</h3>
              <p className="text-sm text-photon-300 mb-4">Submit comprehensive project requirements for complex or custom solutions.</p>
              <p className="text-xs text-photon-400">Full proposal within 3-5 days</p>
            </div>

            <div className="glassmorphism p-6 text-center group card-lift-on-hover">
              <CalendarIcon className="h-12 w-12 text-photon-700 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">Schedule Consultation</h3>
              <p className="text-sm text-photon-300 mb-4">Book a free 30-minute strategy session with our technical experts.</p>
              <p className="text-xs text-photon-400">Available within 48 hours</p>
            </div>

            <div className="glassmorphism p-6 text-center group card-lift-on-hover">
              <ClockIcon className="h-12 w-12 text-photon-800 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">Urgent Projects</h3>
              <p className="text-sm text-photon-300 mb-4">Fast-track inquiry for time-sensitive government or commercial projects.</p>
              <p className="text-xs text-photon-400">Same-day response</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-16 md:py-24 bg-photon-950 text-white relative z-10">
        <div className="container px-4 md:px-6">
          {/* Contact Form */}
          <div className="max-w-2xl mx-auto glassmorphism p-8 shadow-outer-shadow animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            <div className="text-center mb-8">
              <h2 className="section-title">Project Inquiry Form</h2>
              <p className="mt-2 text-lg text-photon-200">Tell us about your design or engineering project.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-photon-100">
                    Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    required
                    className="bg-photon-800 border-photon-700 text-white focus:ring-photon-500 focus:border-photon-500 glassmorphism shadow-inner-bevel"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-photon-100">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@example.com"
                    required
                    className="bg-photon-800 border-photon-700 text-white focus:ring-photon-500 focus:border-photon-500 glassmorphism shadow-inner-bevel"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="service" className="text-photon-100">
                  Service Category
                </Label>
                <Select value={serviceInterested} onValueChange={setServiceInterested}>
                  <SelectTrigger className="w-full bg-photon-800 border-photon-700 text-white focus:ring-photon-500 focus:border-photon-500 glassmorphism shadow-inner-bevel">
                    <SelectValue placeholder="Select service category" />
                  </SelectTrigger>
                  <SelectContent className="bg-photon-900 border-photon-800 text-white glassmorphism shadow-outer-shadow">
                    <SelectItem value="design-services">Design Services</SelectItem>
                    <SelectItem value="visualization-services">Visualization Services</SelectItem>
                    <SelectItem value="engineering-services">Engineering & Industrial Design</SelectItem>
                    <SelectItem value="government-contract">Government Contract Inquiry</SelectItem>
                    <SelectItem value="multi-service">Multiple Services</SelectItem>
                    <SelectItem value="consultation">Strategic Consultation</SelectItem>
                    <SelectItem value="general-inquiry">General Inquiry</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-photon-100">
                  Message <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="message"
                  placeholder="Describe your project goals, technical requirements, timeline, and any specific challenges you're facing..."
                  required
                  rows={6}
                  className="bg-photon-800 border-photon-700 text-white focus:ring-photon-500 focus:border-photon-500 glassmorphism shadow-inner-bevel"
                />
              </div>
              <Button
                type="submit"
                className="w-full px-8 py-3 text-lg bg-photon-500 hover:bg-photon-600 transition-all duration-300 shadow-lg hover:scale-105 icon-glow-blue animate-pulse-glow"
              >
                Submit Project Inquiry
              </Button>
            </form>
          </div>


        </div>
      </section>
    </div>
  )
}
