import LanguageSwitcher from '@/components/language-switcher';
import { ThemeToggle } from '@/components/theme-toggle';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getDictionary } from '@/lib/getDictionary';
import { Locale } from '@/lib/i18n';
import { ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

export default async function Home({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
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
                  <Badge className='bg-green-500'>
                    {t.skills.badges.skills.team}
                  </Badge>
                  <Badge className='bg-indigo-500'>
                    {t.skills.badges.skills.cominitation}
                  </Badge>
                  <Badge className='bg-yellow-600'>
                    {t.skills.badges.skills.problem}
                  </Badge>
                  <Badge className='bg-red-600'>
                    {t.skills.badges.skills.adaptability}
                  </Badge>
                  <Badge className='bg-purple-500'>
                    {t.skills.badges.skills.continuos}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        {/* Projects Section */}
        <section id='projects' className='space-y-6 py-16'>
          <h2 className='font-bold text-3xl tracking-tight'>Projetos</h2>
          <div className='gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {[1, 2, 3].map((project) => (
              <Card key={project} className='overflow-hidden'>
                <div className='relative w-full h-48'>
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=Projeto ${project}`}
                    alt={`Projeto ${project}`}
                    fill
                    className='object-cover'
                  />
                </div>
                <CardContent className='space-y-4 p-6'>
                  <h3 className='font-semibold text-xl'>Projeto {project}</h3>
                  <p className='text-muted-foreground'>
                    Uma breve descrição do projeto, tecnologias utilizadas e
                    desafios superados.
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    <Badge>React</Badge>
                    <Badge>Next.js</Badge>
                    <Badge>Tailwind</Badge>
                  </div>
                  <div className='flex gap-2 pt-2'>
                    <Button variant='outline' size='sm'>
                      <Github className='mr-2 w-4 h-4' /> Código
                    </Button>
                    <Button size='sm'>
                      <ExternalLink className='mr-2 w-4 h-4' /> Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        {/* Contact Section */}
        <section id='contact' className='space-y-6 py-16'>
          <h2 className='font-bold text-3xl tracking-tight'>Contato</h2>
          <div className='gap-8 grid grid-cols-1 md:grid-cols-2'>
            <Card>
              <CardContent className='space-y-4 p-6'>
                <h3 className='font-semibold text-xl'>Vamos Conectar</h3>
                <p className='text-muted-foreground'>
                  Estou sempre aberto a novas oportunidades e colaborações.
                  Sinta-se à vontade para entrar em contato comigo através dos
                  canais abaixo.
                </p>
                <div className='space-y-3 pt-2'>
                  <a
                    href='#'
                    className='flex items-center gap-2 hover:text-primary'
                  >
                    <Mail className='w-5 h-5' /> seu.email@exemplo.com
                  </a>
                  <a
                    href='#'
                    className='flex items-center gap-2 hover:text-primary'
                  >
                    <Linkedin className='w-5 h-5' /> LinkedIn
                  </a>
                  <a
                    href='#'
                    className='flex items-center gap-2 hover:text-primary'
                  >
                    <Github className='w-5 h-5' /> GitHub
                  </a>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className='space-y-4 p-6'>
                <form className='space-y-4'>
                  <div className='space-y-2'>
                    <label htmlFor='name' className='font-medium text-sm'>
                      Nome
                    </label>
                    <input
                      id='name'
                      className='flex bg-background file:bg-transparent disabled:opacity-50 px-3 py-2 border border-input file:border-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ring-offset-background focus-visible:ring-offset-2 w-full h-10 file:font-medium placeholder:text-muted-foreground text-sm file:text-sm disabled:cursor-not-allowed'
                      placeholder='Seu nome'
                    />
                  </div>
                  <div className='space-y-2'>
                    <label htmlFor='email' className='font-medium text-sm'>
                      Email
                    </label>
                    <input
                      id='email'
                      type='email'
                      className='flex bg-background file:bg-transparent disabled:opacity-50 px-3 py-2 border border-input file:border-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ring-offset-background focus-visible:ring-offset-2 w-full h-10 file:font-medium placeholder:text-muted-foreground text-sm file:text-sm disabled:cursor-not-allowed'
                      placeholder='seu.email@exemplo.com'
                    />
                  </div>
                  <div className='space-y-2'>
                    <label htmlFor='message' className='font-medium text-sm'>
                      Mensagem
                    </label>
                    <textarea
                      id='message'
                      className='flex bg-background disabled:opacity-50 px-3 py-2 border border-input rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ring-offset-background focus-visible:ring-offset-2 w-full min-h-[120px] placeholder:text-muted-foreground text-sm disabled:cursor-not-allowed'
                      placeholder='Sua mensagem'
                    />
                  </div>
                  <Button className='w-full'>Enviar Mensagem</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
    </div>
  );
}
