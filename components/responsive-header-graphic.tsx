"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export function ResponsiveHeaderGraphic() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const totalDots = 3
  const mobileDots = 2
  const totalSteps = totalDots * 2 // 3 dots in first section + 3 dots in second section
  const mobileSteps = mobileDots * 2 // Should be 4 total steps for mobile (2 dots * 2 sections)

  useEffect(() => {
    // Set initial mobile state
    setIsMobile(window.innerWidth < 640)

    // Handle resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        const maxSteps = isMobile ? mobileSteps : totalSteps
        return (prev + 1) % maxSteps
      })
    }, 800)

    return () => clearInterval(interval)
  }, [totalSteps, mobileSteps, isMobile])

  // Determine which dot should be glowing for desktop
  const getGlowPosition = (sectionIndex: number) => {
    if (sectionIndex === 0) {
      // First section (Idea to Echo) - steps 0, 1, 2
      return currentStep < totalDots ? currentStep : -1
    } else {
      // Second section (Echo to Product) - steps 3, 4, 5
      return currentStep >= totalDots ? currentStep - totalDots : -1
    }
  }

  // Determine which dot should be glowing for mobile (2 dots)
  const getMobileGlowPosition = (sectionIndex: number) => {
    const mobileStep = currentStep % mobileSteps
    if (sectionIndex === 0) {
      // First section (Idea to Echo) - steps 0, 1
      return mobileStep < mobileDots ? mobileStep : -1
    } else {
      // Second section (Echo to Product) - steps 2, 3 (mapped to 0, 1)
      return mobileStep >= mobileDots ? mobileStep - mobileDots : -1
    }
  }

  // Rest dot component - always visible with faint appearance
  const RestDot = ({ isActive }: { isActive: boolean }) => (
    <div className="relative w-2.5 h-2.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5">
      {/* Base rest dot - always visible and faint with thin white stroke */}
      <div className="absolute inset-0 rounded-full bg-gray-400 opacity-40 border border-white" />

      {/* Glow dot overlay - blue/active with thin white stroke - only shows when active */}
      {isActive && (
        <div
          className="absolute inset-0 rounded-full bg-blue-400 border border-white"
          style={{
            boxShadow: "0 0 12px rgba(59, 130, 246, 0.8), 0 0 24px rgba(59, 130, 246, 0.4)",
          }}
        />
      )}
    </div>
  )

  // Rest dots section component
  const RestDotsSection = ({ sectionIndex }: { sectionIndex: number }) => (
    <div className="flex items-center justify-center gap-2 sm:gap-2 md:gap-3 mx-1 sm:mx-2 md:mx-3 lg:mx-4">
      {/* Mobile: 2 dots */}
      <div className="flex sm:hidden items-center gap-2">
        {Array.from({ length: mobileDots }).map((_, index) => (
          <RestDot
            key={`mobile-dot-${sectionIndex}-${index}`}
            isActive={getMobileGlowPosition(sectionIndex) === index}
          />
        ))}
      </div>

      {/* Desktop: 3 dots */}
      <div className="hidden sm:flex items-center gap-2 md:gap-3">
        {Array.from({ length: totalDots }).map((_, index) => (
          <RestDot key={`desktop-dot-${sectionIndex}-${index}`} isActive={getGlowPosition(sectionIndex) === index} />
        ))}
      </div>
    </div>
  )

  return (
    <div className="flex flex-row justify-center items-center my-8 sm:my-0 sm:-my-4 md:my-0">
      {/* Idea Icon - loads immediately with fetchPriority */}
      <div className="flex-shrink-0">
        <Image
          src="/images/Idea ButtonV2@2x.png"
          alt="Innovation and Ideas"
          width={150}
          height={150}
          className="w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
          priority
          fetchPriority="high"
          loading="eager"
        />
      </div>

      {/* First Rest Dots Section - Idea to Echo */}
      <RestDotsSection sectionIndex={0} />

      {/* Main Photon Echo Logo - loads immediately with fetchPriority */}
      <div className="flex-shrink-0">
        <Image
          src="/Echo button fold@2x.png"
          alt="Photon Echo Logo"
          width={200}
          height={200}
          className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40"
          priority
          fetchPriority="high"
          loading="eager"
        />
      </div>

      {/* Second Rest Dots Section - Echo to Product */}
      <RestDotsSection sectionIndex={1} />

      {/* Product Icon - loads immediately with fetchPriority */}
      <div className="flex-shrink-0">
        <Image
          src="/images/Product ButtonV2@2x.png"
          alt="Product Development"
          width={150}
          height={150}
          className="w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
          priority
          fetchPriority="high"
          loading="eager"
        />
      </div>
    </div>
  )
}
