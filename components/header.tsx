import { ThemeToggle } from './theme-toggle';

const Header = () => {
  return (
    <header className='top-0 z-40 sticky bg-background/95 backdrop-blur border-b w-full'>
      <div className='flex justify-between items-center mx-auto px-4 sm:px-6 max-w-6xl h-16 container'>
        <div className='font-bold text-xl'>Léo Sgarbi</div>
        <div className='flex items-center gap-6'>
          <nav className='hidden md:flex items-center gap-6'>
            <a href='#about' className='font-medium hover:text-primary text-sm'>
              Sobre
            </a>
            <a
              href='#skills'
              className='font-medium hover:text-primary text-sm'
            >
              Skills
            </a>
            <a
              href='#projects'
              className='font-medium hover:text-primary text-sm'
            >
              Projetos
            </a>
            <a
              href='#contact'
              className='font-medium hover:text-primary text-sm'
            >
              Contato
            </a>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
