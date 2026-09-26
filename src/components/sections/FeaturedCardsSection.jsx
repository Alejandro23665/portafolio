import { useIntersectionObserver } from '../../hooks/useIndex'
import { Card, Badge } from '../ui/UIComponents'
import { cn } from '../../utils/helpers'


const featuredCards = [
  {
    id: 'rpa-automation',
    title: 'Alejandro Castellanos',
    description: 'Especialista en desarrollo backend y automatización con Python, enfocado en construir arquitecturas eficientes, APIs robustas y agentes de IA. Combino lógica de sistemas con soluciones modernas para optimizar procesos y crear productos escalables.',
    image: null, // Placeholder para imagen
    gradient: 'from-backend-primary to-backend-secondary',
  },
  {
    id: 'api-ecosystem',
    title: 'Nelson Encalada',
    description: 'Arquitectura de microservicios con FastAPI para alta concurrencia, incluyendo gateway unificado, colas de tareas distribuidas, autenticación centralizada y observabilidad completa con métricas en tiempo real.',
    image: null,
    tags: ['FastAPI', 'Redis', 'PostgreSQL', 'Docker', 'Kubernetes'],
    highlight: '50k+ req/s capacidad',
    gradient: 'from-blue-500 to-indigo-600',
  },
]

export function FeaturedCardsSection({ profileColor }) {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section 
      id="featured-cards" 
      ref={ref}
      className="section-padding bg-neutral-950/30"
      aria-labelledby="featured-cards-title"
    >
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <Badge variant={profileColor} className="mb-4">Quienes Somos</Badge>
          <h2 id="featured-cards-title" className="heading-1 mb-4">
            Quienes <span className="gradient-text-backend">Somos</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8">
          {featuredCards.map((card, index) => (
            <article
              key={card.id}
              className={cn(
                'group',
                isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'
              )}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Card hover className="h-full flex flex-col overflow-hidden">
                {/* Espacio para imagen */}
                <div className="relative aspect-video bg-neutral-900 overflow-hidden">
                  {card.image ? (
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br">
                      <div className="text-center p-6">
                        <div className={cn(
                          'w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center',
                          `bg-gradient-to-br ${card.gradient}`
                        )}>
                          <svg className="w-8 h-8 text-neutral-950" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-neutral-500 text-sm">Imagen del proyecto</p>
                        <p className="text-neutral-700 text-xs mt-1">Agregar: /public/projects/{card.id}.jpg</p>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 flex flex-1 flex-col">

                  <h3 className="text-xl font-semibold text-neutral-100 mb-2 group-hover:text-backend-primary transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-neutral-400 text-base leading-relaxed mb-4 flex-1">
                    {card.description}
                  </p>
                </div>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}