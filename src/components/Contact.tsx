export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Let&apos;s Work Together
        </h2>
        <div className="w-16 h-1 bg-violet-500 mb-12" />

        <div className="max-w-2xl">
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            Looking to automate a process, build a dashboard, or improve your
            data workflows? I&apos;d love to hear about your project. Reach out
            and let&apos;s talk.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href="mailto:jessica_oshiro@hotmail.com"
              className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 transition-colors text-white font-semibold px-8 py-4 rounded-xl text-lg"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              jessica_oshiro@hotmail.com
            </a>
          </div>

          <div className="flex gap-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/jessicaoshiro"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-700 hover:border-violet-500 hover:text-violet-400 text-gray-400 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* Upwork */}
            <a
              href="https://www.upwork.com/freelancers/~012b185b7db37e59c2?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-700 hover:border-violet-500 hover:text-violet-400 text-gray-400 transition-colors"
              aria-label="Upwork"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.012 0C5.828 0 0 5.829 0 13.012c0 5.789 3.784 10.732 9.055 12.46l3.103-9.6a3.853 3.853 0 01-1.345-2.896 3.855 3.855 0 013.854-3.855 3.855 3.855 0 013.854 3.855 3.854 3.854 0 01-3.854 3.854c-.1 0-.198-.005-.295-.013l-3.12 9.648c.234.017.47.024.706.024 7.183 0 13.012-5.83 13.012-13.013C26.77 5.83 20.195 0 13.012 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-20 border-t border-gray-800 pt-8 max-w-6xl mx-auto px-6">
        <p className="text-gray-600 text-sm text-center">
          © 2025 Jessica Oshiro. All rights reserved.
        </p>
      </div>
    </section>
  );
}
