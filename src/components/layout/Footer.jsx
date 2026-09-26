import { personalInfo } from '../../data/profileData'
import { cn } from '../../utils/helpers'
import Logo from '../../assets/Logo_Rekreuz.jpeg'
import { Button } from '../ui/UIComponents'

export function Footer({ activeProfile }) {
  const currentYear = new Date().getFullYear()
  const profile = 'Backend Developer' // activeProfile === 'backend' ? 'Backend Developer' : 'AI Automation Specialist'

  const socialLinks = [
    { name: 'GitHub', url: personalInfo.social.github, icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
    )},
  ]

  return (
    <footer className="border-t border-neutral-800 bg-neutral-950/50 backdrop-blur-sm" role="contentinfo">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">       
              <img src={Logo} width={60} className="rounded-full" />
              <span className="font-bold text-xl text-neutral-100">Rekreuz</span>
            </div>
            <p className="text-neutral-400 max-w-xs mb-6 leading-relaxed">
              {personalInfo.about.short} Especializado en <span className="text-backend-primary">arquitectura backend</span> y <span className="text-ai-primary">automatizaciones</span>.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="backend">{profile}</Badge>
              <Badge variant="neutral">{personalInfo.location}</Badge>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-100 mb-4">Navegación</h4>
            <nav aria-label="Enlaces del pie de página">
              <ul className="space-y-3">
                <li><a href="#about" className="text-neutral-400 hover:text-neutral-100 transition-colors">Sobre nosotros</a></li>
                <li><a href="#backend-projects" className="text-neutral-400 hover:text-neutral-100 transition-colors">Proyectos</a></li>
                <li><a href="#backend-skills" className="text-neutral-400 hover:text-neutral-100 transition-colors">Habilidades</a></li>
                <li><a href="#backend-experience" className="text-neutral-400 hover:text-neutral-100 transition-colors">Experiencia</a></li>
                <li><a href="#contact" className="text-neutral-400 hover:text-neutral-100 transition-colors">Contacto</a></li>
              </ul>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-100 mb-4">Conectar</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-neutral-100 hover:border-neutral-700 hover:bg-neutral-800 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-500 text-sm">
              © {currentYear} Rekreuz. Construido con React, Tailwind CSS y mucho ☕
            </p>
            <div className="flex items-center gap-4 text-sm text-neutral-500">
              <span className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2 rounded-full bg-backend-primary animate-pulse-soft" />
                <span>Backend</span>
              </span>
              {/* IA indicator comentado para uso futuro
              <span className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2 rounded-full bg-ai-primary animate-pulse-soft" style={{animationDelay: '500ms'}} />
                <span>IA</span>
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { Badge } from '../ui/UIComponents'