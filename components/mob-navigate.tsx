import { siteContent } from '@/data/site-content';

export function MobNavigate() {
  return (
    <div className='md:hidden flex justify-center gap-6 mb-8'>
      <a href='#about' className='font-medium hover:text-primary text-sm'>
        {siteContent.nav.about}
      </a>
      <a href='#skills' className='font-medium hover:text-primary text-sm'>
        {siteContent.nav.skills}
      </a>
      <a href='#projects' className='font-medium hover:text-primary text-sm'>
        {siteContent.nav.projects}
      </a>
      <a href='#contact' className='font-medium hover:text-primary text-sm'>
        {siteContent.nav.contact}
      </a>
    </div>
  );
}
