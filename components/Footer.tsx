'use client'

import { FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]


export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 text-white border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Top: same structure as header - logo + nav + CTA */}
        <div className="py-10 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <a
            href="#home"
            className="text-xl md:text-2xl font-bold text-slate-100 hover:text-blue-400 transition-colors"
          >
            MANIK MAHAJAN
          </a>

          <nav>
            <ul className="flex flex-wrap items-center justify-center md:justify-end gap-4 md:gap-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-slate-300 hover:text-blue-400 font-medium transition-colors text-sm md:text-base"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex justify-center md:justify-end">
            <a
              href="/resume.docx"
              download="Manik_Mahajan_Resume.docx"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-400 transition-all duration-300 shadow-lg shadow-blue-500/20"
            >
              <FaDownload /> Download Resume
            </a>
          </div>
        </div>

        {/* Contact row - like header meta */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 text-slate-400 text-sm">
          <a
            href="mailto:manikmahajan43@gmail.com"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <FaEnvelope /> manikmahajan43@gmail.com
          </a>
          <a
            href="tel:9582211638"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <FaPhone /> 9582211638
          </a>
          <span className="flex items-center gap-2">
            <FaMapMarkerAlt /> Mohali, Punjab
          </span>
          <a
            href="https://github.com/improove-coding-experience"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/manik-mahajan-29964856/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-white/10 text-center">
          <p className="text-slate-500 text-sm">
            © {currentYear} Manik Mahajan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
