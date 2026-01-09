import Image from "next/image"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-background px-4 sm:px-6">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 flex h-16 items-center justify-between">
          <div className="font-bold text-xl">DevPortfolio</div>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-sm font-medium hover:text-primary">
                Sobre
              </a>
              <a href="#skills" className="text-sm font-medium hover:text-primary">
                Skills
              </a>
              <a href="#projects" className="text-sm font-medium hover:text-primary">
                Projetos
              </a>
              <a href="#contact" className="text-sm font-medium hover:text-primary">
                Contato
              </a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-6xl px-4 sm:px-6 py-10 md:py-16">
        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-center gap-6 mb-8">
          <a href="#about" className="text-sm font-medium hover:text-primary">
            Sobre
          </a>
          <a href="#skills" className="text-sm font-medium hover:text-primary">
            Skills
          </a>
          <a href="#projects" className="text-sm font-medium hover:text-primary">
            Projetos
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary">
            Contato
          </a>
        </div>

        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center gap-8 py-12">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Desenvolvedor Front-End Júnior</h1>
            <p className="text-xl text-muted-foreground">Construindo experiências para a web</p>
            <div className="flex gap-4 pt-4">
              <Button>
                <Mail className="mr-2 h-4 w-4" /> Contato
              </Button>
              <Button variant="outline">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary">
              <Image src="/placeholder.svg?height=256&width=256" alt="Profile" fill className="object-cover" priority />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Sobre Mim</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg">
                Atuo como desenvolvedor front-end, com foco em React JS, Next, Tailwind e Styled Components, sempre
                buscando aprimorar minhas habilidades e contribuir para projetos inovadores.
              </p>
              <p className="text-lg">
                Como desenvolvedor júnior, estou sempre em busca de aprendizado e evolução. Valorizo ambientes que
                incentivam o crescimento profissional e a troca de conhecimento.
              </p>
            </div>
            <div className="space-y-4">
              <div className="border p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Meta para 2025</h3>
                <p>Desenvolver mais projetos em React e elevar minha qualidade de código.</p>
              </div>
              <div className="border p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Aprendizado contínuo</h3>
                <p>Trabalhando para transformar o caos do código em soluções bem estruturadas.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Minhas Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Front-End</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-600">React</Badge>
                  <Badge className="bg-black">Next.js</Badge>
                  <Badge className="bg-blue-400">Tailwind CSS</Badge>
                  <Badge className="bg-pink-500">Styled Components</Badge>
                  <Badge>HTML5</Badge>
                  <Badge>CSS3</Badge>
                  <Badge className="bg-yellow-500">JavaScript</Badge>
                  <Badge className="bg-blue-500">TypeScript</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Ferramentas</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-purple-600">Git</Badge>
                  <Badge className="bg-gray-700">GitHub</Badge>
                  <Badge className="bg-blue-700">VS Code</Badge>
                  <Badge className="bg-orange-500">Figma</Badge>
                  <Badge className="bg-green-600">Node.js</Badge>
                  <Badge className="bg-red-500">npm</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-green-500">Trabalho em Equipe</Badge>
                  <Badge className="bg-indigo-500">Comunicação</Badge>
                  <Badge className="bg-yellow-600">Resolução de Problemas</Badge>
                  <Badge className="bg-red-600">Adaptabilidade</Badge>
                  <Badge className="bg-purple-500">Aprendizado Contínuo</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((project) => (
              <Card key={project} className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=Projeto ${project}`}
                    alt={`Projeto ${project}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">Projeto {project}</h3>
                  <p className="text-muted-foreground">
                    Uma breve descrição do projeto, tecnologias utilizadas e desafios superados.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge>React</Badge>
                    <Badge>Next.js</Badge>
                    <Badge>Tailwind</Badge>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm">
                      <Github className="mr-2 h-4 w-4" /> Código
                    </Button>
                    <Button size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" /> Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Contato</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Vamos Conectar</h3>
                <p className="text-muted-foreground">
                  Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato
                  comigo através dos canais abaixo.
                </p>
                <div className="space-y-3 pt-2">
                  <a href="#" className="flex items-center gap-2 hover:text-primary">
                    <Mail className="h-5 w-5" /> seu.email@exemplo.com
                  </a>
                  <a href="#" className="flex items-center gap-2 hover:text-primary">
                    <Linkedin className="h-5 w-5" /> LinkedIn
                  </a>
                  <a href="#" className="flex items-center gap-2 hover:text-primary">
                    <Github className="h-5 w-5" /> GitHub
                  </a>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nome
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Sua mensagem"
                    />
                  </div>
                  <Button className="w-full">Enviar Mensagem</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DevPortfolio. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

