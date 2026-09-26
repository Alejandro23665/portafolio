import { useState } from 'react'
import { cn } from '../../utils/helpers'
import { useIntersectionObserver } from '../../hooks/useIndex'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Badge, Button } from '../ui/UIComponents'

function ProjectCard({ project, profileColor, index, isVisible }) {
  return (
    <article
      className={cn(
        'group',
        isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <Card hover className="h-full flex flex-col">
        <CardHeader>
          <CardTitle className="text-neutral-100 group-hover:text-backend-primary transition-colors mb-3">
            {project.title}
          </CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        
        <CardContent className="flex-1">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, i) => (
              <Badge key={i} variant={profileColor} className="text-xs">{tag}</Badge>
            ))}
          </div>
          
          {project.highlights && (
            <ul className="space-y-2 text-sm text-neutral-400">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className={cn('flex-shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full', profileColor === 'backend' ? 'bg-backend-primary' : 'bg-ai-primary')} />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
        
        <CardFooter className="flex flex-wrap gap-3">
          {project.github && (
            <Button variant="outline" size="sm" asChild className="flex-1 sm:flex-none">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                Código
              </a>
            </Button>
          )}
          {project.demo && (
            <Button variant={profileColor} size="sm" asChild className="flex-1 sm:flex-none">
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                Demo
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </article>
  )
}

export function ProjectsSection({ profile, profileColor, sectionId }) {
  const [ref, isVisible] = useIntersectionObserver()
  const [filter, setFilter] = useState('all')
  
  const categories = ['all', ...new Set(profile.projects.map(p => p.category))]
  const filteredProjects = filter === 'all' 
    ? profile.projects 
    : profile.projects.filter(p => p.category === filter)

  return (
    <section 
      id={sectionId} 
      ref={ref}
      className="section-padding"
      aria-labelledby={`${sectionId}-title`}
    >
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <Badge variant={profileColor} className="mb-4">Proyectos</Badge>
          <h2 id={`${sectionId}-title`} className="heading-1 mb-4">
            Proyectos <span className={cn('gradient-text-' + profileColor)}>Destacados</span>
          </h2>
          <p className="body-text">Selección de proyectos que demuestran experiencia en desarrollo y automatizacion</p>
        </div>

        {/*<div className="flex flex-wrap gap-2 justify-center mb-10" role="tablist" aria-label="Filtrar proyectos por categoría">
          {categories.map(cat => (
            <button
              key={cat}
              role="tab"
              aria-selected={filter === cat}
              aria-controls={`${sectionId}-projects`}
              onClick={() => setFilter(cat)}
              className={cn(
                'px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200',
                filter === cat
                  ? `bg-gradient-to-r ${profileColor === 'backend' ? 'from-backend-primary to-backend-secondary' : 'from-ai-primary to-ai-secondary'} text-neutral-950 shadow-lg`
                  : 'bg-neutral-900 text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800 border border-neutral-800'
              )}
            >
              {cat === 'all' ? 'Todos' : cat}
            </button>
          ))}
        </div>*/}

        <div id={`${sectionId}-projects`} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="tabpanel">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              profileColor={profileColor} 
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-500">No hay proyectos en esta categoría</p>
          </div>
        )}
      </div>
    </section>
  )
}