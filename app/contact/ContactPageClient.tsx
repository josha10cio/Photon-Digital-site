"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export default function ContactPageClient() {
  const [serviceInterested, setServiceInterested] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    
    // Create mailto URL with form data
    const name = formData.get('name')
    const email = formData.get('email')
    const service = serviceInterested
    const message = formData.get('message')
    
    const subject = `Project Inquiry from ${name} - ${service || 'General Inquiry'}`
    const body = `Name: ${name}
Email: ${email}
Service Category: ${service || 'Not specified'}

Message:
${message}

---
This message was sent from the Photon Echo contact form.`
    
    const mailtoURL = `mailto:info@photonecho.dev?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoURL
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

      {/* Contact Information Section */}
      <section className="w-full py-16 md:py-24 bg-photon-900/30 text-white relative z-10">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title mb-6">Get In Touch</h2>
            <p className="text-lg text-photon-200 mb-12 max-w-2xl mx-auto">
              Ready to start your project? Send us your inquiry and we'll respond within 24-48 hours.
            </p>
            
            <div className="glassmorphism p-8 max-w-2xl mx-auto">
              <div className="space-y-6">
                <div className="border-b border-photon-800/50 pb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                  <a href="mailto:info@photonecho.dev" className="text-photon-400 hover:text-photon-300 transition-colors text-lg">
                    info@photonecho.dev
                  </a>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Response Time</h3>
                  <p className="text-photon-300">We typically respond to all inquiries within 24-48 hours</p>
                </div>
              </div>
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
                    name="name"
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
                    name="email"
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
                    <SelectItem value="digital-twin">Digital Twin Development</SelectItem>
                    <SelectItem value="physical-ai">Physical AI Development</SelectItem>
                    <SelectItem value="artificial-data">Artificial Data Development</SelectItem>
                    <SelectItem value="design-services">Design Services</SelectItem>
                    <SelectItem value="visualization-services">Visualization Services</SelectItem>
                    <SelectItem value="engineering-services">Engineering & Industrial Design</SelectItem>
                    <SelectItem value="government-contract">Government Contract Inquiry</SelectItem>
                    <SelectItem value="multi service">Multiple Services</SelectItem>
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
                  name="message"
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
