import { AboutTypes } from '@/types';

type AboutSectionProps = {
  itens: AboutTypes;
};

export function AboutSection({ itens }: AboutSectionProps) {
  return (
    <section id='about' className='space-y-6 py-16'>
      <h2 className='font-bold text-3xl tracking-tight'>{itens.title}</h2>

      <div className='gap-8 grid grid-cols-1 md:grid-cols-2'>
        <div className='space-y-4'>
          <p className='text-lg'>{itens.paragraph}</p>
          <p className='text-lg'>{itens.auxParagraph}</p>
        </div>

        <div className='space-y-4'>
          <div className='p-4 border rounded-lg'>
            <h3 className='mb-2 font-semibold text-lg'>{itens.goalTitle}</h3>
            <p>{itens.goalText}</p>
          </div>

          <div className='p-4 border rounded-lg'>
            <h3 className='mb-2 font-semibold text-lg'>
              {itens.learningTitle}
            </h3>
            <p>{itens.learningText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
