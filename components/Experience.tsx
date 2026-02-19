import Reveal from '@/components/Reveal'

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-slate-950/60"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <div className="section-title-accent mx-auto" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-50">
              Work <span className="gradient-text">Experience</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 p-8 rounded-xl border border-white/10 shadow-lg shadow-black/20 hover:shadow-cyan-500/10 hover:border-cyan-500/20 transition-all duration-300 backdrop-blur">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-2xl font-bold text-slate-100 mb-2">
                    WordPress Developer
                  </h3>
                  <p className="text-lg font-semibold text-blue-400 mb-2">
                    Antier Solutions Pvt. Ltd.
                  </p>
                  <p className="text-slate-400 mb-4">Mohali, Punjab</p>
                </div>
                <span className="text-slate-400 font-medium">
                  Oct 2022 – Present
                </span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-slate-300 ml-2">
                <li>Developed and maintained custom WordPress websites</li>
                <li>Customized Elementor, Divi, and BeTheme</li>
                <li>Implemented Headless WordPress using REST APIs</li>
                <li>Built and optimized WooCommerce stores</li>
                <li>Improved performance and security</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
