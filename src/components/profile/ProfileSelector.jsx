import { useState, useEffect } from 'react'
import { cn } from '../../utils/helpers'
import { Button } from '../ui/UIComponents'

const profileCards = [
  {
    id: 'backend',
    title: 'Desarrollador Backend y Automatizaciones',
    subtitle: 'Python • Django • FastAPI • APIs',
    description: 'Construyo sistemas backend robustos, escalables y de alto rendimiento. Desde APIs RESTful hasta arquitecturas de microservicios, pasando por pipelines de datos y automatización de infraestructura.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    technologies: ['Python', 'FastAPI', 'Django', 'PostgreSQL'],
    gradient: 'from-backend-primary to-backend-secondary',
    glow: 'glow-backend',
    color: 'backend',
  },
  /*{
    id: 'ai',
    title: 'Automatización IA',
    subtitle: 'RAG • Agentes • LLMs • Sistemas Inteligentes',
    description: 'Diseño e implemento sistemas de IA que automatizan flujos de trabajo complejos. Desde pipelines RAG empresariales hasta agentes autónomos con planning, memory y tool use.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    technologies: ['LangGraph', 'LlamaIndex', 'GPT-4', 'Claude', 'FastAPI'],
    gradient: 'from-ai-primary to-ai-secondary',
    glow: 'glow-ai',
    color: 'ai',
  },*/
]

export function ProfileSelector({ activeProfile, onSelectProfile }) {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [entranceAnimation, setEntranceAnimation] = useState(false)

  useEffect(() => {
    setEntranceAnimation(true)
  }, [])

  return (
    <section id="profile-selector" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container-custom w-full max-w-6xl">
        <div 
          className={cn(
            'grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center',
            entranceAnimation ? 'animate-fade-in' : 'opacity-0'
          )}
          role="radiogroup"
          aria-label="Seleccionar perfil profesional"
        >
          {profileCards.map((profile, index) => (
            <article
              key={profile.id}
              className={cn(
                'relative group',
                activeProfile === profile.id ? 'ring-2' : '',
                activeProfile === profile.id && profile.color === 'backend' ? 'ring-backend-primary/50' : '',
                activeProfile === profile.id && profile.color === 'ai' ? 'ring-ai-primary/50' : '',
              )}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div
                className={cn(
                  'relative p-8 lg:p-10 rounded-3xl',
                  'bg-gradient-to-br from-neutral-900 to-neutral-950',
                  'border transition-all duration-500',
                  activeProfile === profile.id
                    ? `border-${profile.color}-primary/30 shadow-xl ${profile.glow}`
                    : 'border-neutral-800 hover:border-neutral-700',
                  hoveredCard === profile.id && 'scale-[1.02] z-10'
                )}
                onMouseEnter={() => setHoveredCard(profile.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => onSelectProfile(profile.id)}
                role="radio"
                aria-checked={activeProfile === profile.id}
                aria-label={profile.title}
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelectProfile(profile.id); }}}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(135deg, ${profile.color === 'backend' ? '#10B981' : '#8B5CF6'}10, ${profile.color === 'backend' ? '#059669' : '#7C3AED'}10)` }} />
                
                <div className="relative z-10 space-y-6">
                  <div className={cn(
                    'flex items-center justify-center w-16 h-16 rounded-2xl mx-auto lg:mx-0',
                    `bg-gradient-to-br ${profile.gradient}`
                  )}>
                    <span className="text-neutral-950">{profile.icon}</span>
                  </div>

                  <div className="text-center lg:text-left">
                    <h2 className="text-3xl lg:text-4xl font-bold text-neutral-100 tracking-tight">
                      {profile.title}
                    </h2>
                    <p className="mt-2 text-neutral-400 text-lg">{profile.subtitle}</p>
                  </div>

                  <p className="text-neutral-300 leading-relaxed text-base lg:text-lg">
                    {profile.description}
                  </p>

                  

                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    {profile.technologies.slice(0, 6).map((tech, i) => (
                      <Badge key={i} variant={profile.color} className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {profile.technologies.length > 6 && (
                      <Badge variant="neutral" className="text-xs">
                        +{profile.technologies.length - 6} más
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {activeProfile && (
          <div className="mt-12 lg:mt-16 animate-slide-up" role="status" aria-live="polite">
            <div className={cn(
              'text-center',
              'bg-gradient-to-r from-neutral-900 to-neutral-950',
              'border rounded-2xl p-6 lg:p-8',
              activeProfile === 'backend' ? 'border-backend-primary/30' : 'border-ai-primary/30'
            )}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className={cn('w-2 h-2 rounded-full', activeProfile === 'backend' ? 'bg-backend-primary' : 'bg-ai-primary')} />
                <span className="font-medium text-neutral-300">Perfil activo:</span>
                <span className={cn('font-bold', activeProfile === 'backend' ? 'text-backend-primary' : 'text-ai-primary')}>
                  {activeProfile === 'backend' ? 'Desarrollador Backend' : 'Especialista IA'}
                </span>
                <div className={cn('w-2 h-2 rounded-full', activeProfile === 'backend' ? 'bg-backend-primary' : 'bg-ai-primary')} />
              </div>
              <Button
                variant="outline"
                onClick={() => onSelectProfile(null)}
                className="w-full sm:w-auto"
              >
                Cambiar perfil
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </Button>
            </div>
          </div>
        )}

        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
          <a href="#about" className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-300 transition-colors">
            <span className="text-sm font-medium">Continuar a sección general</span>
            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

import { Badge } from '../ui/UIComponents'