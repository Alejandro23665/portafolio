import { useState } from 'react'
import { cn } from '../../utils/helpers'
import { useIntersectionObserver } from '../../hooks/useIndex'
import { Card, Input, Textarea, Button, Badge } from '../ui/UIComponents'
import { personalInfo } from '../../data/profileData'

export function ContactSection({ activeProfile, profiles }) {
  const [ref, isVisible] = useIntersectionObserver()
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')
  const currentProfile = profiles.find(p => p.id === activeProfile)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    await new Promise(resolve => setTimeout(resolve, 1500))
    setStatus('success')
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus('idle'), 3000)
  }

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section 
      id="contact" 
      ref={ref}
      className="section-padding"
      aria-labelledby="contact-title"
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="sticky top-24 space-y-6">
                <div className={cn(
                  'text-center lg:text-left',
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                )}>
                  <Badge variant={currentProfile?.color || 'backend'} className="mb-4">
                    Contacto
                  </Badge>
                  <h2 id="contact-title" className="heading-2 mb-4">
                    Trabajemos <span className="gradient-text-backend">juntos</span>
                  </h2>
                  <p className="body-text mb-6">
                    ¿Tienes un proyecto en mente? ¿Necesitas arquitectura backend escalable o automatizaciones que optimicen flujos complejos? Hablemos.
                  </p>

                  <div className="space-y-4">
                    {[
                      { label: 'Email', value: personalInfo.email, href: personalInfo.social.email, icon: 'mail' },
                      { label: 'GitHub', value: '@rekreuz', href: personalInfo.social.github, icon: 'github' },
                    ].map((item, i) => (
                      <a
                        key={i}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-all group"
                      >
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-backend-primary/20 text-backend-primary">
                          {contactIcons[item.icon]}
                        </div>
                        <div className="text-left">
                          <p className="text-neutral-500 text-sm">{item.label}</p>
                          <p className="text-neutral-100 font-medium group-hover:text-backend-primary transition-colors">{item.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className={cn(
                isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'
              )}>
                <Card padding="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <Input
                        label="Nombre"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Tu nombre"
                        autoComplete="name"
                      />
                      <Input
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="tu@email.com"
                        autoComplete="email"
                      />
                    </div>
                    
                    <Input
                      label="Asunto"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="¿Sobre qué quieres hablar?"
                    />
                    
                    <Textarea
                      label="Mensaje"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Cuéntame sobre tu proyecto, desafíos técnicos o lo que necesitas..."
                    />
                    
                    <div className="flex items-center gap-4">
                      <Button
                        type="submit"
                        variant="backend"
                        size="lg"
                        loading={status === 'submitting'}
                        disabled={status === 'submitting'}
                      >
                        {status === 'submitting' ? 'Enviando...' : 'Enviar mensaje'}
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
                      </Button>
                      
                      {status === 'success' && (
                        <div className="flex items-center gap-2 text-green-400 animate-scale-in">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                          <span className="font-medium">¡Enviado! Te responderé pronto.</span>
                        </div>
                      )}
                    </div>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const contactIcons = {
  mail: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>,
  github: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>,
  /* linkedin: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.065 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>, */
}