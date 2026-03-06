import Reveal from '@/components/Reveal'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'jQuery', 'Responsive Design'],
    },
    {
      title: 'WordPress & Page Builders',
      skills: [
        'WordPress',
        'Elementor',
        'Divi Theme',
        'BeTheme',
        'Advanced Custom Fields (ACF)',
        'Custom Themes & Plugins',
      ],
    },
    {
      title: 'E-Commerce',
      skills: ['WooCommerce', 'Payment & Checkout Integration', 'Product Catalogs'],
    },
    {
      title: 'Backend & API',
      skills: ['PHP', 'WordPress REST API', 'Headless WordPress', 'REST API Integration'],
    },
    {
      title: 'Tools & Workflow',
      skills: ['Git', 'GitHub', 'FTP', 'cPanel', 'Performance Optimization', 'Security Hardening'],
    },
  ]

  return (
    <section
      id="skills"
      className="py-20 bg-slate-950/60"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <div className="section-title-accent mx-auto" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-50">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-slate-300 max-w-3xl mx-auto mt-4">
              <strong>Headless WordPress:</strong> Using WordPress as a decoupled
              content management system — content lives in WordPress while a
              separate frontend (static or SPA) consumes the WordPress REST API
              or GraphQL endpoints. This approach improves frontend
              performance, enables modern toolchains (Next.js, Gatsby, etc.),
              and gives developers more flexibility in UI and deployment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <Reveal key={index} delay={index * 0.06}>
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg shadow-black/20 hover:shadow-blue-500/10 hover:border-blue-500/20 transition-all duration-300 backdrop-blur hover:shadow-xl">
                  <h3 className="text-xl font-semibold text-slate-100 mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-blue-500/10 text-blue-200 border border-blue-500/20 rounded-full text-sm font-medium hover:bg-blue-500/15 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
