import { cn } from '../../utils/helpers'
import { useIntersectionObserver } from '../../hooks/useIndex'
import { Card, Badge } from '../ui/UIComponents'

const skillCategories = [
  { key: 'languages', label: 'Lenguajes', icon: 'code' },
  { key: 'frameworks', label: 'Frameworks', icon: 'layers' },
  { key: 'databases', label: 'Bases de datos', icon: 'database' },
  { key: 'tools', label: 'Herramientas', icon: 'wrench' },
  /* Categorías IA - Comentadas para uso futuro
  { key: 'llmFrameworks', label: 'Frameworks LLM', icon: 'brain' },
  { key: 'ragVector', label: 'RAG & Vector DBs', icon: 'search' },
  { key: 'agentSystems', label: 'Sistemas de Agentes', icon: 'bot' },
  { key: 'mlOps', label: 'MLOps', icon: 'cpu' },
  */
]

const icons = {
  code: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>,
  layers: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16"/></svg>,
  database: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/></svg>,
  server: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/></svg>,
  wrench: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>,
  /* Iconos IA - Comentados para uso futuro
  brain: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>,
  search: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>,
  bot: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>,
  cpu: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>,
  */
}

function SkillCategory({ category, skills, profileColor, index, isVisible }) {
  const Icon = icons[category.icon] || icons.code
  
  return (
    <article
      className={cn(
        'group',
        isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <Card hover className="h-full">
        <div className="flex items-center gap-3 mb-5">
          <div className={cn(
            'flex items-center justify-center w-12 h-12 rounded-xl',
            `bg-gradient-to-br ${profileColor === 'backend' ? 'from-backend-primary to-backend-secondary' : 'from-ai-primary to-ai-secondary'}`
          )}>
            <span className="text-neutral-950">{Icon}</span>
          </div>
          <h3 className="text-lg font-semibold text-neutral-100">{category.label}</h3>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <Badge
              key={`${category.key}-${i}`}
              variant={typeof skill === 'object' && skill.level > 85 ? profileColor : 'neutral'}
              className="group-hover:scale-105 transition-transform duration-200"
            >
              {typeof skill === 'object' ? skill.name : skill}
              {typeof skill === 'object' && (
                <span className="ml-1 opacity-70">{skill.level}%</span>
              )}
            </Badge>
          ))}
        </div>
      </Card>
    </article>
  )
}

export function SkillsSection({ profile, profileColor, sectionId }) {
  const [ref, isVisible] = useIntersectionObserver()
  
  // Solo categorías backend (IA comentado para uso futuro)
  const relevantCategories = skillCategories.filter(c => 
    ['languages', 'frameworks', 'databases', 'infrastructure', 'tools'].includes(c.key)
  )

  return (
    <section 
      id={sectionId} 
      ref={ref}
      className="section-padding bg-neutral-950/50"
      aria-labelledby={`${sectionId}-title`}
    >
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <Badge variant={profileColor} className="mb-4">{profile.title} - Habilidades</Badge>
          <h2 id={`${sectionId}-title`} className="heading-1 mb-4">
            Habilidades <span className={cn('gradient-text-' + profileColor)}>Técnicas</span>
          </h2>
          <p className="body-text">Tecnologías y herramientas que domino para construir soluciones {profileColor === 'backend' ? 'backend robustas y escalables' : 'de IA inteligentes y autónomas'}.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relevantCategories.map((category, index) => {
            const skills = profile.skills[category.key] || []
            return (
              <SkillCategory
                key={category.key}
                category={category}
                skills={skills}
                profileColor={profileColor}
                index={index}
                isVisible={isVisible}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}