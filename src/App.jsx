import { useState, useEffect, useMemo } from 'react'
import { useScrollPosition, useActiveSection } from './hooks/useIndex'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { ProjectsSection } from './components/profile/ProjectsSection'
import { SkillsSection } from './components/profile/SkillsSection'
import { ExperienceSection } from './components/profile/ExperienceSection'
import { AboutSection } from './components/sections/AboutSection'
import { ContactSection } from './components/sections/ContactSection'
import { backendProfile, personalInfo } from './data/profileData'
// import { aiProfile } from './data/profileData' // AI Profile - Comentado para uso futuro

// const profiles = [backendProfile, aiProfile] // AI Profile - Comentado para uso futuro
const profiles = [backendProfile]

function ProfileView({ profile, profileColor }) {
  return (
    <>
      <ProjectsSection profile={profile} profileColor={profileColor} sectionId={`${profile.id}-projects`} />
      <SkillsSection profile={profile} profileColor={profileColor} sectionId={`${profile.id}-skills`} />
      <ExperienceSection profile={profile} profileColor={profileColor} sectionId={`${profile.id}-experience`} />
    </>
  )
}

export default function App() {
  const [activeProfile, setActiveProfile] = useState('backend')
  const scrollY = useScrollPosition()
  
  const sectionIds = ['about', 'backend-projects', 'backend-skills', 'backend-experience', 'contact']
  const activeSection = useActiveSection(sectionIds)

  const currentProfile = useMemo(() => 
    profiles.find(p => p.id === activeProfile), 
    [activeProfile]
  )

  const profileColor = currentProfile?.color || 'backend'

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      <Navbar
        activeProfile={activeProfile}
        onProfileChange={() => {}}
        profiles={profiles}
      />
      
      <main id="main-content" className="pt-20" role="main">
        {/* 1. Sección "Sobre nosotros" */}
        <AboutSection activeProfile={activeProfile} profiles={profiles} />

        {/* 2. Sección de Proyectos */}
        {activeProfile && currentProfile && (
          <ProfileView profile={currentProfile} profileColor={profileColor} />
        )}

        {/* 3. Sección "Trabajemos Juntos" (Contacto) */}
        <ContactSection activeProfile={activeProfile} profiles={profiles} />
      </main>

      <Footer activeProfile={activeProfile} />
    </div>
  )
}