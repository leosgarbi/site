import { SkillGroup } from '@/components/sections/skills-section';

export const skillGroups: SkillGroup[] = [
  {
    title: 'Front-End',
    badges: [
      { label: 'React', className: 'bg-blue-600' },
      { label: 'Next.js', className: 'bg-black' },
      { label: 'Tailwind CSS', className: 'bg-blue-400' },
      { label: 'Styled Components', className: 'bg-pink-500' },
      { label: 'HTML5' },
      { label: 'CSS3' },
      { label: 'JavaScript', className: 'bg-yellow-500' },
      { label: 'TypeScript', className: 'bg-blue-500' },
    ],
  },
  {
    title: 'Ferramentas',
    badges: [
      { label: 'Git', className: 'bg-purple-600' },
      { label: 'GitHub', className: 'bg-gray-700' },
      { label: 'VS Code', className: 'bg-blue-700' },
      { label: 'Figma', className: 'bg-orange-500' },
      { label: 'Node.js', className: 'bg-green-600' },
      { label: 'npm', className: 'bg-red-500' },
    ],
  },
  {
    title: 'Soft Skills',
    badges: [
      { label: 'Trabalho em Equipe', className: 'bg-green-500' },
      { label: 'Comunicação', className: 'bg-indigo-500' },
      { label: 'Resolução de Problemas', className: 'bg-yellow-600' },
      { label: 'Adaptabilidade', className: 'bg-red-600' },
      { label: 'Aprendizado Contínuo', className: 'bg-purple-500' },
    ],
  },
];
