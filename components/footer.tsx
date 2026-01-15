import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='py-6 md:py-0 border-t'>
      <div className='flex md:flex-row flex-col justify-between items-center gap-4 mx-auto px-4 sm:px-6 max-w-6xl md:h-16 container'>
        <p className='text-muted-foreground text-sm'>
          © {new Date().getFullYear()} DevPortfolio. Todos os direitos
          reservados.
        </p>
        <div className='flex items-center gap-4'>
          <a href='#' className='text-muted-foreground hover:text-foreground'>
            <Github className='w-5 h-5' />
            <span className='sr-only'>GitHub</span>
          </a>
          <a href='#' className='text-muted-foreground hover:text-foreground'>
            <Linkedin className='w-5 h-5' />
            <span className='sr-only'>LinkedIn</span>
          </a>
          <a href='#' className='text-muted-foreground hover:text-foreground'>
            <Mail className='w-5 h-5' />
            <span className='sr-only'>Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
