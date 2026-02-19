import Reveal from '@/components/Reveal'

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-slate-950"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-8">
              <div className="section-title-accent mx-auto" />
              <h2 className="text-4xl md:text-5xl font-bold text-slate-50">
                About <span className="gradient-text">Me</span>
              </h2>
            </div>
            <div className="text-lg text-slate-300 leading-relaxed space-y-6">
              <p>
                I am a professional WordPress Developer based in{' '}
                <span className="text-slate-100 font-semibold">Mohali, Punjab</span>, with strong experience in creating
                custom WordPress websites, WooCommerce stores, and Headless
                WordPress solutions.
              </p>
              <div>
                <p className="mb-3">I specialize in:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Custom WordPress development</li>
                  <li>Elementor, Divi & BeTheme customization</li>
                  <li>WooCommerce integration</li>
                  <li>Headless WordPress using REST APIs</li>
                </ul>
              </div>
              <p>
                I focus on clean UI, performance optimization, and scalable code
                that helps businesses grow online.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
