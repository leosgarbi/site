import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ProjectType } from '@/types';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

type ProjectsDictionary = {
  title: string;
  buttons: {
    code: string;
    demo: string;
  };
  items: Record<
    string,
    {
      title: string;
      description: string;
    }
  >;
};

type ProjectsSectionProps = {
  t: ProjectsDictionary;
  projects: ProjectType[];
};

export function ProjectsSection({ t, projects }: ProjectsSectionProps) {
  return (
    <section id='projects' className='space-y-6 py-16'>
      <h2 className='font-bold text-3xl tracking-tight'>{t.title}</h2>

      <div className='gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project) => {
          const text = t.items[project.id];

          if (!text) return null;

          return (
            <Card key={project.id} className='overflow-hidden'>
              <div className='relative w-full h-48'>
                <Image
                  src={project.imageUrl}
                  alt={text.title}
                  fill
                  className='object-cover'
                />
              </div>

              <CardContent className='space-y-4 p-6'>
                <h3 className='font-semibold text-xl'>{text.title}</h3>

                <p className='text-muted-foreground'>{text.description}</p>

                <div className='flex flex-wrap gap-2'>
                  {project.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>

                <div className='flex gap-2 pt-2'>
                  {project.repoUrl && (
                    <Button variant='outline' size='sm' asChild>
                      <a
                        href={project.repoUrl}
                        target='_blank'
                        rel='noreferrer'
                      >
                        <Github className='mr-2 w-4 h-4' />
                        {t.buttons.code}
                      </a>
                    </Button>
                  )}

                  {project.demoUrl && (
                    <Button size='sm' asChild>
                      <a
                        href={project.demoUrl}
                        target='_blank'
                        rel='noreferrer'
                      >
                        <ExternalLink className='mr-2 w-4 h-4' />
                        {t.buttons.demo}
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
