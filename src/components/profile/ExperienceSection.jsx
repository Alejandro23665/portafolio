import { cn } from '../../utils/helpers'
import { useIntersectionObserver } from '../../hooks/useIndex'
import { Card, Badge } from '../ui/UIComponents'

function ExperienceItem({ experience, profileColor, index, isVisible }) {
  return (
    <article
      className={cn(
        'relative',
        isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'
      )}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="relative pl-8 pb-10 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-neutral-800 last:before:hidden">
        <div className="absolute left-0 top-0 w-4 h-4 rounded-full border-4 border-neutral-900 bg-gradient-to-br z-10" style={{ 
          borderColor: profileColor === 'backend' ? '#10B981' : '#8B5CF6' 
        }} />
        
        <Card className="hover:border-neutral-700" padding="p-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
            <div>
              <h3 className="text-xl font-semibold text-neutral-100">{experience.role}</h3>
              <p className={cn('text-lg font-medium mt-1', profileColor === 'backend' ? 'text-backend-primary' : 'text-ai-primary')}>
                {experience.company}
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm text-neutral-500 whitespace-nowrap">
              <span>{experience.period}</span>
              <span className="hidden sm:inline">•</span>
              <span>{experience.location}</span>
            </div>
          </div>
          
          <p className="text-neutral-300 mb-4 leading-relaxed">{experience.description}</p>
          
          {experience.achievements && experience.achievements.length > 0 && (
            <ul className="space-y-2 mb-4" role="list">
              {experience.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-3 text-neutral-400 text-sm">
                  <span className={cn('flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full', profileColor === 'backend' ? 'bg-backend-primary' : 'bg-ai-primary')} />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          )}
          
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, i) => (
              <Badge key={i} variant={profileColor} className="text-xs">{tech}</Badge>
            ))}
          </div>
        </Card>
      </div>
    </article>
  )
}

export function ExperienceSection({ profile, profileColor, sectionId }) {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section 
      id={sectionId} 
      ref={ref}
      className="section-padding"
      aria-labelledby={`${sectionId}-title`}
    >
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <Badge variant={profileColor} className="mb-4">{profile.title} - Trayectoria</Badge>
          <h2 id={`${sectionId}-title`} className="heading-1 mb-4">
            Experiencia <span className={cn('gradient-text-' + profileColor)}>Profesional</span>
          </h2>
          <p className="body-text">Mi trayectoria construyendo {profileColor === 'backend' ? 'sistemas backend de alto rendimiento' : 'soluciones de IA que automatizan y escalan'}.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {profile.experience.map((experience, index) => (
            <ExperienceItem
              key={`${experience.company}-${experience.period}`}
              experience={experience}
              profileColor={profileColor}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}