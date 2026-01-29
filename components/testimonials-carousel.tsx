"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription } from "@/components/ui/card"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TestimonialsCarousel() {
  const testimonials = [
    {
      id: 1,
      quote:
        "Photon's engineering team delivered exceptional technical documentation and CAD designs for our aerospace project. Their attention to detail and compliance expertise made the difference in securing our government contract.",
      author: "Sarah Mitchell",
      title: "VP Engineering, AeroSpace Dynamics",
      avatar: "",
    },
    {
      id: 2,
      quote:
        "The visualization services were outstanding. Photon created interactive Unreal Engine demos that helped our stakeholders understand complex manufacturing processes, leading to faster project approval.",
      author: "David Chen",
      title: "Operations Director, Advanced Manufacturing Corp",
      avatar: "",
    },
    {
      id: 3,
      quote:
        "Working with Photon on our medical device design was seamless. Their industrial design expertise and FDA compliance knowledge accelerated our path to market by months.",
      author: "Dr. Lisa Rodriguez",
      title: "Chief Medical Officer, BioTech Solutions",
      avatar: "",
    },
    {
      id: 4,
      quote:
        "Photon's government services team understood our security requirements perfectly. Their technical drawings and compliance documentation exceeded all government standards.",
      author: "Colonel James Wright",
      title: "Program Manager, Defense Systems",
      avatar: "",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000) // Auto-slide every 5 seconds
    return () => clearInterval(interval)
  }, [testimonials.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <section className="w-full py-16 md:py-24 bg-photon-950 text-white relative z-10">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 animate-fadeIn" style={{ animationDelay: "0.8s" }}>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-photon-200 max-w-2xl mx-auto">
            Hear from innovators who have partnered with Photon.
          </p>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden rounded-lg glassmorphism shadow-outer-shadow p-4">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 p-4">
                  <Card className="bg-photon-900 border border-photon-800 text-white glassmorphism shadow-inner-bevel p-6 card-lift-on-hover">
                    <CardContent className="text-center">
                      <p className="text-lg italic text-photon-100 mb-6">&quot;{testimonial.quote}&quot;</p>
                      <div className="flex flex-col items-center">
                        {testimonial.avatar ? (
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.author}
                            width={80}
                            height={80}
                            className="rounded-full object-cover mb-3 border-2 border-photon-700"
                          />
                        ) : null}
                        <h3 className="text-xl font-semibold text-photon-50">{testimonial.author}</h3>
                        <CardDescription className="text-photon-200">{testimonial.title}</CardDescription>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/50 rounded-full p-2 icon-glow-blue"
            onClick={goToPrevious}
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/50 rounded-full p-2 icon-glow-blue"
            onClick={goToNext}
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </Button>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-photon-500 w-6 icon-glow-blue" : "bg-photon-700"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
