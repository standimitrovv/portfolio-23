import { WorkplaceDescription } from './components/WorkplaceDescription';
import { Workplace } from './models/Workplace';

const workplaces: Workplace[] = [
  {
    id: 1,
    role: 'Frontend Developer',
    name: 'PixelPool',
    href: 'https://www.dtail.com',
    dateFrom: 'FEB, 2022',
    dateTo: 'PRESENT',
    description: 'Responsible for building and maintaining ....',
    techStack: ['React', 'Typescript', 'MUI', 'Redux', 'Jest'],
  },
];

export const ExperienceSection = () => {
  return (
    <section id='experience' className='max-w-5xl py-7 px-6 mx-auto flex'>
      <div>
        {workplaces.map((w) => (
          <WorkplaceDescription key={w.id} workplace={w} />
        ))}
      </div>
    </section>
  );
};
