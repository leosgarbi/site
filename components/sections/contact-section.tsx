import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

type ContactDictionary = {
  title: string;
  connectTitle: string;
  description: string;
  form: {
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    submitLabel: string;
    placeholders: {
      name: string;
      email: string;
      message: string;
    };
  };
};

type ContactInfo = {
  value: string;
  href: string;
  icon: React.ReactNode;
};

type ContactSectionProps = {
  t: ContactDictionary;
  contacts: ContactInfo[];
};

export function ContactSection({ t, contacts }: ContactSectionProps) {
  return (
    <section id='contact' className='space-y-6 py-16'>
      <h2 className='font-bold text-3xl tracking-tight'>{t.title}</h2>

      <div className='gap-8 grid grid-cols-1 md:grid-cols-2'>
        <Card>
          <CardContent className='space-y-4 p-6'>
            <h3 className='font-semibold text-xl'>{t.connectTitle}</h3>

            <p className='text-muted-foreground'>{t.description}</p>

            <div className='space-y-3 pt-2'>
              {contacts.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className='flex items-center gap-2 hover:text-primary'
                >
                  {contact.icon}
                  {contact.value}
                </a>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className='space-y-4 p-6'>
            <form className='space-y-4'>
              <div className='space-y-2'>
                <label className='font-medium text-sm'>
                  {t.form.nameLabel}
                </label>
                <input
                  className='px-3 border rounded-md w-full h-10'
                  placeholder={t.form.placeholders.name}
                />
              </div>

              <div className='space-y-2'>
                <label className='font-medium text-sm'>
                  {t.form.emailLabel}
                </label>
                <input
                  type='email'
                  className='px-3 border rounded-md w-full h-10'
                  placeholder={t.form.placeholders.email}
                />
              </div>

              <div className='space-y-2'>
                <label className='font-medium text-sm'>
                  {t.form.messageLabel}
                </label>
                <textarea
                  className='px-3 border rounded-md w-full min-h-[120px]'
                  placeholder={t.form.placeholders.message}
                />
              </div>

              <Button className='w-full'>{t.form.submitLabel}</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
