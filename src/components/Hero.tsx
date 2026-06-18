import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-gradient-to-br from-gray-950 via-gray-900 to-violet-950/30 relative overflow-hidden"
    >
      {/* Decorative orbs */}
      <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-violet-800/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">

          {/* Text — left */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Available for freelance work
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
              Jessica Oshiro
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-violet-400 mb-6">
              Data & Process Automation Specialist
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto md:mx-0">
              I help businesses reduce manual work, eliminate bottlenecks, and
              turn raw data into clear decisions. 6+ years of experience in data
              analysis, process improvement, and automation.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/jessicaoshiro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 transition-colors text-white font-semibold px-6 py-3 rounded-xl"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://www.upwork.com/freelancers/~012b185b7db37e59c2?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-violet-500 text-violet-400 hover:bg-violet-500/10 transition-colors font-semibold px-6 py-3 rounded-xl"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13.012 0C5.828 0 0 5.829 0 13.012c0 5.789 3.784 10.732 9.055 12.46l3.103-9.6a3.853 3.853 0 01-1.345-2.896 3.855 3.855 0 013.854-3.855 3.855 3.855 0 013.854 3.855 3.854 3.854 0 01-3.854 3.854c-.1 0-.198-.005-.295-.013l-3.12 9.648c.234.017.47.024.706.024 7.183 0 13.012-5.83 13.012-13.013C26.77 5.83 20.195 0 13.012 0z" />
                </svg>
                Upwork
              </a>
              <a
                href="mailto:jessica_oshiro@hotmail.com"
                className="inline-flex items-center gap-2 border border-gray-700 text-gray-300 hover:border-violet-500 hover:text-violet-400 transition-colors font-semibold px-6 py-3 rounded-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get in Touch
              </a>
            </div>
          </div>

          {/* Photo — right */}
          <div className="shrink-0 flex justify-center">
            <div className="relative">
              {/* Violet glow ring behind photo */}
              <div className="absolute inset-0 rounded-3xl bg-violet-500/20 blur-2xl scale-105 pointer-events-none" />
              <div className="relative w-64 h-80 md:w-72 md:h-96 lg:w-80 lg:h-[440px] rounded-3xl overflow-hidden ring-1 ring-violet-500/30 shadow-2xl shadow-violet-900/40">
                <Image
                  src="/jessica.jpg"
                  alt="Jessica Oshiro"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 hover:text-violet-400 transition-colors animate-bounce"
        aria-label="Scroll to about"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
