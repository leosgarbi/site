import { Button } from '@/components/ui/button';
import { HeroTypes } from '@/types';
import { Github, Mail } from 'lucide-react';
import Image from 'next/image';

type HeroSectionProps = {
  text: HeroTypes;
  githubUrl: string;
  avatarUrl: string;
};

export function HeroSection({ text, githubUrl, avatarUrl }: HeroSectionProps) {
  return (
    <section className='flex md:flex-row flex-col items-center gap-8 py-12'>
      <div className='flex-1 space-y-4'>
        <h1 className='font-bold text-2xl md:text-4xl tracking-tight'>
          {text.role}
        </h1>

        <p className='text-muted-foreground text-xl'>{text.subtitle}</p>

        <div className='flex gap-4 pt-4'>
          <a href='#contact'>
            <Button>
              <Mail className='mr-2 w-4 h-4' />
              {text.contact}
            </Button>
          </a>

          <a href={githubUrl} target='_blank' rel='noreferrer'>
            <Button variant='outline'>
              <Github className='mr-2 w-4 h-4' />
              {text.github}
            </Button>
          </a>
        </div>
      </div>

      <div className='flex flex-1 justify-center'>
        <div className='relative border-4 border-primary rounded-full w-64 h-64 overflow-hidden'>
          <Image
            src={avatarUrl}
            alt='Profile'
            fill
            className='object-cover'
            priority
          />
        </div>
      </div>
    </section>
  );
}
