"use client"

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

        <div className="container relative z-10 px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-tight mb-8">
              Contact Photon Echo
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              If you are building perception models, robotics systems, or other physical AI tools that need realistic and controlled training data, reach out to discuss how simulation based data can support your work.
            </p>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-6">
              Get in touch
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Tell us about your work and we will respond within one or two business days.
            </p>
            <div className="bg-gray-100 rounded-lg p-6 inline-block">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <a href="mailto:info@photonecho.dev" className="text-[#33bfff] hover:text-[#2aa3d9] transition-colors text-lg">
                info@photonecho.dev
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
