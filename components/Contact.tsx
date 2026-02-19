import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload } from 'react-icons/fa'
import Reveal from '@/components/Reveal'

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-slate-950"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <div className="mb-8">
              <div className="section-title-accent mx-auto mb-4" />
              <h2 className="text-4xl md:text-5xl font-bold text-slate-50">
                Get In <span className="gradient-text">Touch</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="flex flex-col items-center p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/7 hover:border-cyan-500/20 transition-colors backdrop-blur">
                <FaMapMarkerAlt className="text-3xl text-cyan-400 mb-3" />
                <h3 className="font-semibold text-slate-100 mb-2">Location</h3>
                <p className="text-slate-300">Mohali, Punjab</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/7 hover:border-cyan-500/20 transition-colors backdrop-blur">
                <FaEnvelope className="text-3xl text-cyan-400 mb-3" />
                <h3 className="font-semibold text-slate-100 mb-2">Email</h3>
                <a
                  href="mailto:manikmahajan43@gmail.com"
                  className="text-slate-300 hover:text-blue-300 transition-colors break-all"
                >
                  manikmahajan43@gmail.com
                </a>
              </div>
              <div className="flex flex-col items-center p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/7 hover:border-cyan-500/20 transition-colors backdrop-blur">
                <FaPhone className="text-3xl text-cyan-400 mb-3" />
                <h3 className="font-semibold text-slate-100 mb-2">Phone</h3>
                <a
                  href="tel:9582211638"
                  className="text-slate-300 hover:text-blue-300 transition-colors"
                >
                  9582211638
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:manikmahajan43@gmail.com"
                className="px-8 py-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-400 transition-all duration-300 transform hover:scale-[1.03] shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 flex items-center gap-2"
              >
                <FaEnvelope /> Email Me
              </a>
              <a
                href="/resume.docx"
                download="Manik_Mahajan_Resume.docx"
                className="px-8 py-4 bg-white/5 text-slate-100 border border-white/15 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.03] shadow-lg shadow-black/30 hover:shadow-black/40 flex items-center gap-2 backdrop-blur"
              >
                <FaDownload /> Download Resume
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
