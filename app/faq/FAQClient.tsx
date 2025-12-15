"use client"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

const faqItems = [
  {
    question: "What is Photon Echo?",
    answer: "Photon Echo is a simulation and synthetic data company focused on enabling Physical AI. It develops systems that model environments, behaviors, and interactions so that autonomous technologies can be trained and evaluated safely and efficiently before deployment."
  },
  {
    question: "What industry does Photon Echo focus on?",
    answer: "Photon Echo works within the Physical AI and Embodied Autonomy space. The company develops simulation based systems that support robots and other autonomous technologies that need to perceive and interact with the physical world. These tools are designed for environments where high quality synthetic training data improves reliability, safety, and development speed."
  },
  {
    question: "What problem does Photon Echo solve?",
    answer: "Many real world scenarios are difficult, unsafe, or too expensive to capture at scale. Photon Echo provides simulation based tools that help teams explore variations, edge cases, and structured conditions that real environments cannot reliably offer."
  },
  {
    question: "What types of data does Photon Echo produce?",
    answer: "Photon Echo does not generate raw sensor streams such as vision, lidar, radar, or audio. Instead, it creates structured simulation based artifacts that describe environments, behaviors, interactions, and scenario conditions. These outputs are designed to be consistent and repeatable, enabling teams to explore variations and edge cases that are difficult or unsafe to capture in real world settings."
  },
  {
    question: "Who is Photon Echo built for?",
    answer: "Photon Echo is designed for organizations developing or evaluating physical AI systems. This includes robotics companies, industrial automation and inspection teams, advanced manufacturing groups, defense autonomy programs, and research organizations working in embodied AI. The platform supports workflows that depend on high quality, structured simulation data."
  },
  {
    question: "What failure modes does Photon Echo address?",
    answer: "Photon Echo focuses on failure modes that arise when real world data is incomplete, unsafe, expensive, or too rare to collect. These gaps can lead to unpredictable system behavior and limited test coverage. By providing controlled, simulation based scenarios, Photon Echo enables teams to examine and validate conditions that the real world cannot easily or safely provide."
  },
  {
    question: "How is Photon Echo's simulation approach different?",
    answer: "Photon Echo emphasizes structured, behavior grounded simulation rather than visual rendering alone. The approach focuses on generating consistent, repeatable, and distribution aligned simulation artifacts that support high quality training and validation. The system is designed around the end to end workflow of creating and managing simulated data, allowing teams to explore variation and edge cases with clarity and control."
  },
  {
    question: "Does Photon Echo replace real world data?",
    answer: "No. Real world data remains essential, but it is often incomplete or limited. Photon Echo complements real data by generating controlled simulation based scenarios that improve coverage, reduce risk, and accelerate testing and validation."
  },
  {
    question: "Does Photon Echo use game engines?",
    answer: "Photon Echo is not a game development tool and is not focused on entertainment style rendering. It emphasizes structured, behavior oriented simulation designed specifically for Physical AI workflows."
  },
  {
    question: "Is Photon Echo a software platform or a service?",
    answer: "Photon Echo is currently in its foundational development stage. The long term direction is a platform that provides repeatable simulation workflows. Early offerings may include project based simulation work, scenario modeling, and validation support as the platform evolves."
  },
  {
    question: "Does Photon Echo support custom use cases?",
    answer: "Photon Echo is designed to be adaptable to different physical AI applications. Custom use cases can be supported as long as they align with simulation based scenario modeling and structured environment generation."
  },
  {
    question: "Can Photon Echo integrate with existing autonomy or robotics tools?",
    answer: "Photon Echo's outputs are intended to complement existing development workflows. The system focuses on producing simulation based artifacts that can be incorporated into training, evaluation, or research pipelines. Specific integrations may depend on the tools or frameworks used."
  },
  {
    question: "Is Photon Echo available for public use?",
    answer: "Photon Echo is in early development and not yet widely available. Updates on availability, pilot programs, and partnership opportunities will be shared as the platform matures."
  },
  {
    question: "How does Photon Echo handle proprietary customer data?",
    answer: "Photon Echo does not require raw proprietary sensor data to operate. If customer information is provided for scenario modeling or validation, it is handled confidentially and used only for the intended purpose."
  },
  {
    question: "Is Photon Echo available for collaboration or research partnerships?",
    answer: "Photon Echo is open to partnerships with organizations working in Physical AI, robotics, autonomy research, and related fields. Collaboration opportunities may be available depending on project scope and alignment."
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

