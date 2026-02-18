"use client"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

const faqItems = [
  {
    question: "What is Photon Echo?",
    answer: "Photon Echo is a structured synthetic data and validation infrastructure company serving robotics perception teams and industrial autonomy operators. It builds simulation driven scenario libraries, dataset governance, and regression benchmarking workflows for reproducible evaluation."
  },
  {
    question: "What industry does Photon Echo focus on?",
    answer: "Photon Echo focuses on robotics perception, industrial autonomy, advanced manufacturing, and autonomous inspection systems. The platform supports enterprise teams that need reproducible validation in physical environments."
  },
  {
    question: "What problem does Photon Echo solve?",
    answer: "Real world data is incomplete, uncontrolled, and often too slow to collect. Photon Echo provides structured scenario coverage, controlled edge case simulation, and reproducible regression benchmarking to expand validation beyond field capture."
  },
  {
    question: "What types of data does Photon Echo produce?",
    answer: "Photon Echo does not generate raw sensor streams such as vision, lidar, radar, or audio. It produces structured synthetic datasets with scenario metadata, lineage tracking, and validation analytics that support repeatable evaluation workflows."
  },
  {
    question: "Who is Photon Echo built for?",
    answer: "Photon Echo is designed for organizations developing or evaluating robotics perception systems. This includes robotics companies, industrial autonomy and inspection teams, advanced manufacturing groups, defense autonomy programs, and enterprise research organizations working in embodied AI."
  },
  {
    question: "What failure modes does Photon Echo address?",
    answer: "Photon Echo addresses gaps that arise when real world data is incomplete, unsafe, or too rare to collect. Controlled scenario libraries and regression benchmarks expose failure modes that field data cannot reliably provide."
  },
  {
    question: "How is Photon Echo's simulation approach different?",
    answer: "Photon Echo emphasizes structured simulation artifacts, dataset governance, and regression benchmarking rather than visual rendering alone. The system is built around reproducible workflows that keep scenario coverage, outcomes, and model comparisons consistent over time."
  },
  {
    question: "Does Photon Echo replace real world data",
    answer: "Photon Echo augments real world data by providing structured scenario coverage, controlled edge case simulation, and reproducible regression benchmarking. It does not replace field data collection but reduces dependency on uncontrolled data capture cycles."
  },
  {
    question: "Does Photon Echo use game engines?",
    answer: "Photon Echo is simulator agnostic and not a game development tool. It focuses on behavior grounded simulation that supports robotics perception validation workflows."
  },
  {
    question: "Is Photon Echo a software platform or a service?",
    answer: "Photon Echo is a platform delivered through enterprise licensing and integration. Pilot engagements focus on scenario library deployment and validation benchmarking workflows."
  },
  {
    question: "Does Photon Echo support custom use cases?",
    answer: "Custom domain environment extensions are available when they align with structured scenario libraries and validation requirements."
  },
  {
    question: "Can Photon Echo integrate with existing autonomy or robotics tools?",
    answer: "Photon Echo integrates with existing ML workflows by delivering structured datasets, benchmark results, and validation analytics in formats teams can incorporate into training and evaluation pipelines."
  },
  {
    question: "Is Photon Echo available for public use?",
    answer: "Photon Echo is available through a selective enterprise pilot program and enterprise licensing roadmap."
  },
  {
    question: "How does Photon Echo handle proprietary customer data?",
    answer: "Photon Echo does not require raw proprietary sensor data to operate. If customer information is provided for scenario modeling or validation, it is handled confidentially and used only for the intended purpose."
  },
  {
    question: "Is Photon Echo available for collaboration or research partnerships?",
    answer: "Photon Echo engages in enterprise pilot integrations and infrastructure partnerships with robotics perception and industrial autonomy teams."
  }
]

export default function FAQClient() {
  return (
    <div className="flex flex-col min-h-[calc(100dvh-4rem)] bg-white">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 bg-[#272727] text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-photon-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
          <div
            className="absolute top-1/3 right-1/4 w-96 h-96 bg-photon-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-tight mb-8 animate-fadeIn">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light animate-fadeIn" style={{ animationDelay: "0.3s" }}>
              Learn more about Photon Echo, our approach to Physical AI, and how we can help your organization.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-[#33bfff] hover:no-underline py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 mb-4">
              Still have questions?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We'd love to hear from you. Reach out to learn more about Photon Echo and how we can support your Physical AI initiatives.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="xl">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

