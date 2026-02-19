'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

type RevealProps = {
  children: React.ReactNode
  delay?: number
}

export default function Reveal({ children, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) return

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry?.isIntersecting) return

        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 18, rotateX: 6, transformPerspective: 800 },
          {
            autoAlpha: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            delay,
            ease: 'power3.out',
          },
        )
        io.disconnect()
      },
      { threshold: 0.18 },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [delay])

  return (
    <div ref={ref} style={{ opacity: 0 }}>
      {children}
    </div>
  )
}

