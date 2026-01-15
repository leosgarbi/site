import Footer from '@/components/footer';
import Header from '@/components/header';
import { MobNavigate } from '@/components/mob-navigate';
import { AboutSection } from '@/components/sections/about-section';
import { ContactSection } from '@/components/sections/contact-section';
import { HeroSection } from '@/components/sections/hero-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { siteContent } from '@/data/site-content';
import { skillGroups } from '@/data/skill-groups';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  return (
    <div className='bg-background px-4 sm:px-6 min-h-screen'>
      <Header />

      <main className='mx-auto px-4 sm:px-6 py-10 md:py-16 max-w-6xl container'>
        <MobNavigate />

        <HeroSection
          text={siteContent.hero}
          githubUrl='https://github.com/leosgarbi'
          avatarUrl='https://avatars.githubusercontent.com/u/124069013?v=4'
        />

        <AboutSection itens={siteContent.about} />

        <SkillsSection title={siteContent.skills.title} groups={skillGroups} />

        <ProjectsSection
          t={siteContent.projects}
          projects={[
            {
              id: 'portfolio',
              imageUrl: '/placeholder.svg?height=200&width=400&text=Projeto',
              technologies: ['React', 'Next.js', 'Tailwind'],
              repoUrl: 'https://github.com/leosgarbi/portfolio',
              demoUrl: 'https://leosgarbi.dev',
            },
            {
              id: 'ecommerce',
              imageUrl: '/placeholder.svg?height=200&width=400&text=Projeto',
              technologies: ['React', 'Vite'],
              repoUrl: 'https://github.com/leosgarbi/pix',
            },
            {
              id: 'EAD',
              imageUrl: '/placeholder.svg?height=200&width=400&text=Projeto',
              technologies: ['React', 'Vite'],
              repoUrl: 'https://github.com/leosgarbi/pix',
            },
          ]}
        />

        <ContactSection
          t={siteContent.contact}
          contacts={[
            {
              href: 'mailto:lsgarbi1@gmail.com',
              value: 'lsgarbi1@gmail.com',
              icon: <Mail className='w-5 h-5' />,
            },
            {
              href: 'https://linkedin.com/in/leosgarbi',
              value: 'LinkedIn',
              icon: <Linkedin className='w-5 h-5' />,
            },
            {
              href: 'https://github.com/leosgarbi',
              value: 'GitHub',
              icon: <Github className='w-5 h-5' />,
            },
          ]}
        />
      </main>

      <Footer />
    </div>
  );
}
