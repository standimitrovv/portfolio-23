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
    description:
      'I was responsible for building and maintaining a cloud-based go-to-market platform, while working in a collaborative environment with other Frontend engineers and UI/UX designers to ensure we deliver the best possible user experience meanwhile applying the best practices for creating an elegant, efficient, and reusable code.',
    techStack: ['React', 'Typescript', 'Redux', 'MUI', 'Jest'],
  },
];

export const ExperienceSection = () => {
  return (
    <section
      id='experience'
      className='max-w-5xl py-7 px-6 mx-auto flex border-b'
    >
      <div>
        {workplaces.map((w) => (
          <WorkplaceDescription key={w.id} workplace={w} />
        ))}
      </div>
    </section>
  );
};
