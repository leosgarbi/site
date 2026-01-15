import { siteContent } from '@/data/site-content';
import { ThemeToggle } from './theme-toggle';

const Header = () => {
  return (
    <header className='top-0 z-40 sticky bg-background/95 backdrop-blur border-b w-full'>
      <div className='flex justify-between items-center mx-auto px-4 sm:px-6 max-w-6xl h-16 container'>
        <span className='font-bold text-xl'>{siteContent.site.name}</span>

        <div className='flex items-center gap-6'>
          <nav className='hidden md:flex items-center gap-6'>
            <a href='#about' className='font-medium hover:text-primary text-sm'>
              {siteContent.nav.about}
            </a>
            <a
              href='#skills'
              className='font-medium hover:text-primary text-sm'
            >
              {siteContent.nav.skills}
            </a>
            <a
              href='#projects'
              className='font-medium hover:text-primary text-sm'
            >
              {siteContent.nav.projects}
            </a>
            <a
              href='#contact'
              className='font-medium hover:text-primary text-sm'
            >
              {siteContent.nav.contact}
            </a>
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
