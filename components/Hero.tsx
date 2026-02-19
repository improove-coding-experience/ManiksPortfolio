'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { FaDownload, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa'
import HeroBackground3D from '@/components/HeroBackground3D'

export default function Hero() {
  const contentRef = useRef<HTMLDivElement | null>(null)
  const [profileError, setProfileError] = useState(false)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const q = gsap.utils.selector(el)
    gsap.fromTo(
      q('[data-hero]'),
      { autoAlpha: 0, y: 20, rotateX: 6, transformPerspective: 900 },
      {
        autoAlpha: 1,
        y: 0,
        rotateX: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.07,
        delay: 0.15,
      },
    )
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-600/25 blur-3xl" />
        <div className="absolute -bottom-52 right-[-120px] h-[520px] w-[520px] rounded-full bg-purple-600/25 blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="pointer-events-none absolute inset-0">
        <HeroBackground3D />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 relative">
        <div
          ref={contentRef}
          className="relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 max-w-6xl mx-auto"
        >
          {/* Profile image - left on desktop, top on mobile */}
          <div
            data-hero
            className="flex-shrink-0 order-first lg:order-none animate-float"
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-blue-500/30 ring-offset-4 ring-offset-slate-950 shadow-2xl shadow-blue-500/20">
              {!profileError ? (
                <Image
                  src="/profile.png"
                  alt="Manik Mahajan"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                  priority
                  onError={() => setProfileError(true)}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-slate-100 text-4xl md:text-5xl font-bold">
                  MM
                </div>
              )}
            </div>
          </div>

          {/* Content - right on desktop */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <h1
              data-hero
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-50 mb-3"
            >
              Hi, I&apos;m{' '}
              <span className="gradient-text">Manik Mahajan</span> 👋
            </h1>
            <h2
              data-hero
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-200 mb-2"
            >
              WordPress Developer | Headless WordPress Specialist
            </h2>
            <p
              data-hero
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30 mb-6"
            >
              3+ Years Experience
            </p>
            <p
              data-hero
              className="text-base md:text-lg text-slate-300 mb-8 leading-relaxed"
            >
              I&apos;m a results-driven WordPress Developer building fast,
              scalable, and business-focused websites using WordPress,
              Elementor, WooCommerce, and Headless WordPress (REST API).
            </p>

            <div
              data-hero
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8"
            >
              <a
                href="#projects"
                className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-400 transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 animate-glow"
              >
                View Projects
              </a>
              <a
                href="/resume.docx"
                download="Manik_Mahajan_Resume.docx"
                className="px-6 py-3 bg-white/5 text-slate-100 border border-white/20 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-[1.03] flex items-center gap-2 backdrop-blur"
              >
                <FaDownload /> Download Resume
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded-lg font-semibold hover:bg-cyan-500/30 transition-all duration-300 hover:scale-[1.03] flex items-center gap-2"
              >
                <FaPaperPlane /> Get In Touch
              </a>
            </div>

            <div
              data-hero
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-slate-400 text-sm"
            >
              <a
                href="https://www.google.com/maps?q=Mohali,Punjab"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                📍 Mohali, Punjab
              </a>
              <a
                href="tel:9582211638"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                📞 9582211638
              </a>
              <a
                href="https://github.com/improove-coding-experience"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <FaGithub className="text-lg" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/manik-mahajan-29964856/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <FaLinkedin className="text-lg" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
