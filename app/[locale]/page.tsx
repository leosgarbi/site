import LanguageSwitcher from '@/components/LanguageSwitcher';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getDictionary } from '@/lib/getDictionary';
import { Locale } from '@/lib/i18n';
import { Badge, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getDictionary(locale);

  return (
    <div className='bg-background px-4 sm:px-6 min-h-screen'>
      {/* Header */}
      <header className='top-0 z-40 sticky bg-background/95 backdrop-blur border-b w-full'>
        <div className='flex justify-between items-center mx-auto px-4 sm:px-6 max-w-6xl h-16 container'>
          <span className='font-bold text-xl'>{t.site.name}</span>

          <div className='flex items-center gap-6'>
            <nav className='hidden md:flex items-center gap-6'>
              <a
                href='#about'
                className='font-medium hover:text-primary text-sm'
              >
                {t.nav.about}
              </a>
              <a
                href='#skills'
                className='font-medium hover:text-primary text-sm'
              >
                {t.nav.skills}
              </a>
              <a
                href='#projects'
                className='font-medium hover:text-primary text-sm'
              >
                {t.nav.projects}
              </a>
              <a
                href='#contact'
                className='font-medium hover:text-primary text-sm'
              >
                {t.nav.contact}
              </a>
              <LanguageSwitcher />
            </nav>

            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className='mx-auto px-4 sm:px-6 py-10 md:py-16 max-w-6xl container'>
        {/* Mobile Navigation */}
        <div className='md:hidden flex justify-center gap-6 mb-8'>
          <a href='#about' className='font-medium hover:text-primary text-sm'>
            {t.nav.about}
          </a>
          <a href='#skills' className='font-medium hover:text-primary text-sm'>
            {t.nav.skills}
          </a>
          <a
            href='#projects'
            className='font-medium hover:text-primary text-sm'
          >
            {t.nav.projects}
          </a>
          <a href='#contact' className='font-medium hover:text-primary text-sm'>
            {t.nav.contact}
          </a>
        </div>

        {/* Hero */}
        <section className='flex md:flex-row flex-col items-center gap-8 py-12'>
          <div className='flex-1 space-y-4'>
            <h1 className='font-bold text-2xl md:text-4xl tracking-tight'>
              {t.hero.role}
            </h1>

            <p className='text-muted-foreground text-xl'>{t.hero.subtitle}</p>

            <div className='flex gap-4 pt-4'>
              <a href='#contact'>
                <Button>
                  <Mail className='mr-2 w-4 h-4' />
                  {t.hero.contact}
                </Button>
              </a>

              <a href='https://github.com/leosgarbi' target='_blank'>
                <Button variant='outline'>
                  <Github className='mr-2 w-4 h-4' />
                  {t.hero.github}
                </Button>
              </a>
            </div>
          </div>

          <div className='flex flex-1 justify-center'>
            <div className='relative border-4 border-primary rounded-full w-64 h-64 overflow-hidden'>
              <Image
                src='https://avatars.githubusercontent.com/u/124069013?v=4'
                alt='Profile'
                fill
                className='object-cover'
                priority
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id='about' className='space-y-6 py-16'>
          <h2 className='font-bold text-3xl tracking-tight'>Sobre Mim</h2>
          <div className='gap-8 grid grid-cols-1 md:grid-cols-2'>
            <div className='space-y-4'>
              <p className='text-lg'>{t.about.p1}</p>
              <p className='text-lg'>{t.about.p2}</p>
            </div>
            <div className='space-y-4'>
              <div className='p-4 border rounded-lg'>
                <h3 className='mb-2 font-semibold text-lg'>
                  {t.about.goalTitle}
                </h3>
                <p>{t.about.goalText}</p>
              </div>
              <div className='p-4 border rounded-lg'>
                <h3 className='mb-2 font-semibold text-lg'>
                  {t.about.learningTitle}
                </h3>
                <p>{t.about.learningText}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        {/* <section id='skills' className='space-y-6 py-16'>
          <h2 className='font-bold text-3xl tracking-tight'>
            {t.skills.title}
          </h2>

          <Card>
            <CardContent className='space-y-4 p-6'>
              <h3 className='font-semibold text-xl'>{t.skills.frontend}</h3>

              <div className='flex flex-wrap gap-2'>
                {t.skills.badges.map((skill: string) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section> */}

        {/* Skills Section */}
        <section id='skills' className='space-y-6 py-16'>
          <h2 className='font-bold text-3xl tracking-tight'>Minhas Skills</h2>
          <div className='gap-6 grid grid-cols-1 md:grid-cols-3'>
            <Card>
              <CardContent className='space-y-4 p-6'>
                <h3 className='font-semibold text-xl'>Front-End</h3>
                <div className='flex flex-wrap gap-2'>
                  <Badge className='bg-blue-600'>React</Badge>
                  <Badge className='bg-black'>Next.js</Badge>
                  <Badge className='bg-blue-400'>Tailwind CSS</Badge>
                  <Badge className='bg-pink-500'>Styled Components</Badge>
                  <Badge>HTML5</Badge>
                  <Badge>CSS3</Badge>
                  <Badge className='bg-yellow-500'>JavaScript</Badge>
                  <Badge className='bg-blue-500'>TypeScript</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className='space-y-4 p-6'>
                <h3 className='font-semibold text-xl'>Ferramentas</h3>
                <div className='flex flex-wrap gap-2'>
                  <Badge className='bg-purple-600'>Git</Badge>
                  <Badge className='bg-gray-700'>GitHub</Badge>
                  <Badge className='bg-blue-700'>VS Code</Badge>
                  <Badge className='bg-orange-500'>Figma</Badge>
                  <Badge className='bg-green-600'>Node.js</Badge>
                  <Badge className='bg-red-500'>npm</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className='space-y-4 p-6'>
                <h3 className='font-semibold text-xl'>Soft Skills</h3>
                <div className='flex flex-wrap gap-2'>
                  <Badge className='bg-green-500'>Trabalho em Equipe</Badge>
                  <Badge className='bg-indigo-500'>Comunicação</Badge>
                  <Badge className='bg-yellow-600'>
                    Resolução de Problemas
                  </Badge>
                  <Badge className='bg-red-600'>Adaptabilidade</Badge>
                  <Badge className='bg-purple-500'>Aprendizado Contínuo</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact */}
        <section id='contact' className='space-y-6 py-16'>
          <h2 className='font-bold text-3xl tracking-tight'>
            {t.contact.title}
          </h2>

          <Card>
            <CardContent className='space-y-4 p-6'>
              <h3 className='font-semibold text-xl'>{t.contact.connect}</h3>

              <p className='text-muted-foreground'>{t.contact.description}</p>

              <a
                href='mailto:leosgarbi92@gmail.com'
                className='flex items-center gap-2 hover:text-primary'
              >
                <Mail className='w-5 h-5' />
                {t.contact.email}
              </a>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className='py-6 border-t'>
        <div className='flex md:flex-row flex-col justify-between items-center gap-4 mx-auto px-4 sm:px-6 max-w-6xl container'>
          <p className='text-muted-foreground text-sm'>
            {t.site.copyright.replace(
              '{year}',
              new Date().getFullYear().toString()
            )}
          </p>

          <div className='flex gap-4'>
            <a href='https://github.com/leosgarbi'>
              <Github className='w-5 h-5' />
            </a>
            <a href='https://linkedin.com/in/leosgarbi'>
              <Linkedin className='w-5 h-5' />
            </a>
            <a href='mailto:leosgarbi92@gmail.com'>
              <Mail className='w-5 h-5' />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
