import { cn } from '../../utils/helpers'
import { useIntersectionObserver } from '../../hooks/useIndex'
import { Card, Badge, Avatar } from '../ui/UIComponents'
import { personalInfo } from '../../data/profileData'

export function AboutSection({ activeProfile, profiles }) {
  const [ref, isVisible] = useIntersectionObserver()
  const currentProfile = profiles.find(p => p.id === activeProfile)

  return (
    <section 
      id="about" 
      ref={ref}
      className="section-padding bg-neutral-950/50"
      aria-labelledby="about-title"
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="sticky top-24 space-y-6">
                <div className={cn(
                  'text-center lg:text-left',
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                )}>
                  <Badge variant={currentProfile?.color || 'backend'} className="mb-4">
                    {currentProfile?.title || 'Backend Developer'}
                  </Badge>
                  <h2 id="about-title" className="heading-2 mb-4">
                    Sobre <span className="gradient-text-backend">nosotros</span>
                  </h2>
                  <p className="body-text mb-6">{personalInfo.about.short}</p>
                  
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="backend">Python</Badge>
                    <Badge variant="backend">FastAPI</Badge>
                    <Badge variant="backend">Django</Badge>
                    {/* Badges IA - Comentados para uso futuro
                    <Badge variant="ai">LangGraph</Badge>
                    <Badge variant="ai">RAG</Badge>
                    <Badge variant="ai">Agentes IA</Badge>
                    */}
                    <Badge variant="neutral">PostgreSQL</Badge>
                  </div>
                </div>

                <Card className="mt-8" padding="p-6">
                  <h3 className="text-lg font-semibold text-neutral-100 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-backend-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    Datos rápidos
                  </h3>
                  <dl className="space-y-4 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-neutral-500">Ubicación</dt>
                      <dd className="text-neutral-100 font-medium">{personalInfo.location}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-neutral-500">Disponibilidad</dt>
                      <dd className="text-neutral-100 font-medium">Freelance / Consultoría</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-neutral-500">Enfoque actual</dt>
                      <dd className="text-neutral-100 font-medium">
                        Backend Architecture & APIs
                        {/* {activeProfile === 'backend' ? 'Backend Architecture & APIs' : 'AI Agents & RAG Systems'} */}
                      </dd>
                    </div>
                  </dl>
                </Card>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className={cn('space-y-6', isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8')}>
                {personalInfo.about.long.map((paragraph, index) => (
                  <p key={index} className="body-text leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                <div className="pt-6 border-t border-neutral-800">
                  <h3 className="heading-3 mb-6">Lo que nos diferencia</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { icon: 'code', title: 'Backend Sólido', desc: 'Arquitectura limpia, testing riguroso', color: 'backend' },
                      { icon: 'server', title: 'Automatizaciones', desc: 'RPA, bots, optimización de flujos de trabajo', color: 'backend' },
                      { icon: 'layers', title: 'Full Stack', desc: 'Del backend a la UI, endpoints robustos', color: 'backend' },
                      { icon: 'pencil', title: 'Diseño UX/UI', desc: 'Diseño UX/UI limpio y moderno, focalizado en la experencia de usuario', color: 'backend' },
                    ].map((item, i) => (
                      <Card key={i} hover className="group">
                        <div className={cn('flex items-center gap-3 mb-3', item.color !== 'neutral' ? `text-${item.color}-primary` : 'text-neutral-400')}>
                          <div className={cn('flex items-center justify-center w-10 h-10 rounded-xl', item.color !== 'neutral' ? `bg-${item.color}-primary/20` : 'bg-neutral-800')}>
                            {icons[item.icon]}
                          </div>
                          <h4 className="font-semibold text-neutral-100 group-hover:text-backend-primary transition-colors">{item.title}</h4>
                        </div>
                        <p className="text-neutral-400 text-sm">{item.desc}</p>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const icons = {
  code: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>,
  brain: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>,
  server: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/></svg>,
  layers: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16"/></svg>,
  pencil: <svg 
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 24 24" 
  fill="none" 
  stroke="currentColor" 
  strokeWidth="2" 
  strokeLinecap="round" 
  strokeLinejoin="round" 
  className="w-5 h-5"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
  <path d="M13.5 6.5l4 4" />
</svg>
}