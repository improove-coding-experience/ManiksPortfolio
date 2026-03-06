import { FaExternalLinkAlt } from 'react-icons/fa'
import Reveal from '@/components/Reveal'

export default function Projects() {
  const projects = [
    {
      title: 'Miracle World Tech',
      url: 'https://miracleworldtech.com/',
      description:
        'Technology & Digital Services website built using WordPress. Focused on clean UI, service presentation, and business credibility.',
      tech: ['WordPress', 'Elementor', 'Custom CSS'],
    },
    {
      title: 'The Royal Group Education',
      url: 'https://new.theroyalgroup.education/',
      description:
        'College admission portal with dynamic content and inquiry forms. Built to be scalable and easy to manage for admins.',
      tech: ['WordPress', 'Elementor', 'ACF'],
    },
    {
      title: 'Arizing Pixel – NFT Gaming Platform',
      url: 'https://arizingpixel.com/',
      description:
        'Modern NFT gaming platform with responsive design and optimized performance.',
      tech: ['WordPress', 'Custom Theme', 'Performance Optimization'],
    },
    {
      title: 'Headless Project',
      url: 'https://headlesswp01.netlify.app/',
      description:
        'A headless WordPress implementation: WordPress is used as the CMS while a decoupled frontend consumes content via the REST API. Deployed on Netlify for fast static delivery and improved performance.',
      tech: ['Headless WordPress', 'WordPress REST API', 'Netlify'],
    },
    {
      title: 'InstaNodes (in progress)',
      url: 'https://www.instanodes.io/',
      description:
        'Currently in development — integrating InstaNodes features and APIs. This project explores API-driven workflows and frontend integration (work is ongoing).',
      tech: ['API Integration', 'Node.js', 'Frontend Development'],
    },
  ]

  return (
    <section
      id="projects"
      className="py-20 bg-slate-950"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <div className="section-title-accent mx-auto" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-50">
              <span className="gradient-text">Projects</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Reveal key={index} delay={index * 0.08}>
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg shadow-black/20 hover:shadow-purple-500/15 hover:border-purple-500/20 transition-all duration-300 transform hover:-translate-y-2 backdrop-blur">
                  <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-100">
                    {project.title}
                  </h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    aria-label={`Visit ${project.title}`}
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-500/10 text-purple-200 border border-purple-500/20 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-blue-400 hover:text-blue-300 font-semibold text-sm break-all"
                >
                  🔗 {project.url}
                </a>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
