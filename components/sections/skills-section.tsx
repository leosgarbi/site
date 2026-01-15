import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export type SkillBadge = {
  label: string;
  className?: string;
};

export type SkillGroup = {
  title: string;
  badges: SkillBadge[];
};

type SkillsSectionProps = {
  title: string;
  groups: SkillGroup[];
};

export function SkillsSection({ title, groups }: SkillsSectionProps) {
  return (
    <section id='skills' className='space-y-6 py-16'>
      <h2 className='font-bold text-3xl tracking-tight'>{title}</h2>

      <div className='gap-6 grid md:grid-cols-3'>
        {groups.map((group) => (
          <Card key={group.title}>
            <CardContent className='space-y-4 p-6'>
              <h3 className='font-semibold text-xl'>{group.title}</h3>

              <div className='flex flex-wrap gap-2'>
                {group.badges.map((badge, index) => (
                  <Badge key={index} className={badge.className}>
                    {badge.label}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
