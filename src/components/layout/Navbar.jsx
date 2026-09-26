import { useState, useEffect } from 'react'
import { useScrollPosition } from '../../hooks/useIndex'
import { cn } from '../../utils/helpers'
import { Button } from '../ui/UIComponents'
import Logo from '../../assets/Logo_Rekreuz.jpeg'

const navLinks = [
  { id: 'about', label: 'Sobre nosotros' },
  { id: 'backend-projects', label: 'Proyectos' },
  { id: 'backend-skills', label: 'Habilidades' },
  { id: 'backend-experience', label: 'Experiencia' },
  { id: 'contact', label: 'Contacto' },
]

export function Navbar({ activeProfile, onProfileChange, profiles }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const scrollY = useScrollPosition()

  useEffect(() => {
    setScrolled(scrollY > 20)
  }, [scrollY])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800' : 'bg-transparent'
      )}
      role="banner"
    >
      <nav className="container-custom" aria-label="Navegación principal">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-2 font-bold text-xl text-neutral-100 hover:opacity-80 transition-opacity" aria-label="Rekreuz - Inicio">
              <img src={Logo} width={60} className="rounded-full" /> REKREUZ
            </a>

            {/* Profile selector comentado - solo backend activo
            <div className="hidden lg:flex items-center gap-1 bg-neutral-900/50 rounded-xl p-1 border border-neutral-800">
              {profiles.map(profile => (
                <button
                  key={profile.id}
                  onClick={() => onProfileChange(profile.id)}
                  className={cn(
                    'relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300',
                    activeProfile === profile.id
                      ? `bg-gradient-to-r ${profile.gradient} text-neutral-950 shadow-lg`
                      : 'text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800'
                  )}
                  aria-current={activeProfile === profile.id ? 'page' : undefined}
                  aria-label={`Ver perfil: ${profile.title}`}
                >
                  {profile.title}
                </button>
              ))}
            </div>*/}
            
            {/* Solo mostrar badge de perfil activo (Backend) */}
            <div className="hidden lg:flex items-center">
              <span className="px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-backend-primary to-backend-secondary text-neutral-950 shadow-lg">
                Desarrollador Backend
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map(link => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="text-sm font-medium text-neutral-400 hover:text-neutral-100 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-current after:scale-x-0 after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <Button variant="ghost" size="sm" asChild>
                <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </Button>
            </div>

            {/* Botón de cambio de perfil comentado - solo backend
            <Button
              variant={activeProfile === 'backend' ? 'backend' : 'ai'}
              size="sm"
              className="hidden lg:inline-flex"
              onClick={() => onProfileChange(activeProfile === 'backend' ? 'ai' : 'backend')}
            >
              Ver perfil {activeProfile === 'backend' ? 'IA' : 'Backend'}
            </Button>*/}

            <button
              className="lg:hidden p-2 rounded-lg text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Abrir menú"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden py-4 border-t border-neutral-800 animate-slide-down">
            <div className="flex flex-col gap-4">
              {/* Selector de perfil móvil comentado - solo backend
              <div className="flex gap-2">
                {profiles.map(profile => (
                  <button
                    key={profile.id}
                    onClick={() => { onProfileChange(profile.id); setMobileMenuOpen(false); }}
                    className={cn(
                      'flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300',
                      activeProfile === profile.id
                        ? `bg-gradient-to-r ${profile.gradient} text-neutral-950`
                        : 'bg-neutral-900 text-neutral-400'
                    )}
                  >
                    {profile.title}
                  </button>
                ))}
              </div>*/}
              <div className="px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-backend-primary to-backend-secondary text-neutral-950 text-center">
                Desarrollador Backend
              </div>
              {navLinks.map(link => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-neutral-400 hover:text-neutral-100 transition-colors rounded-lg hover:bg-neutral-800"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-3 pt-2">
                <Button variant="ghost" size="sm" asChild className="flex-1">
                  <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                </Button>
                {/* <Button variant="ghost" size="sm" asChild className="flex-1">
                  <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </Button> */}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

import { personalInfo } from '../../data/profileData'