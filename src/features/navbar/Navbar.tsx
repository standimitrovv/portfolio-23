import { Tabs } from './Tabs';

interface Section {
  name: Tabs;
}

const sections: Section[] = [
  {
    name: 'About',
  },
  {
    name: 'Experience',
  },
  {
    name: 'Contact',
  },
];

export const Navbar: React.FunctionComponent = () => {
  return (
    <section id='menu' className='border-b'>
      <nav className='flex justify-between py-4 max-w-5xl m-auto'>
        <span className='font-permanentMarker text-lg'>Stanimir Dimitrov</span>

        <ul className='flex gap-12 items-center'>
          {sections.map((s) => (
            <li className='list-none'>{s.name}</li>
          ))}
        </ul>
      </nav>
    </section>
  );
};
