import { Tabs } from './Tabs';

interface Section {
  name: Tabs;
  href: Lowercase<Tabs>;
}

const sections: Section[] = [
  {
    name: 'About',
    href: 'about',
  },
  {
    name: 'Experience',
    href: 'experience',
  },
  { name: 'Skills', href: 'skills' },
  {
    name: 'Contact',
    href: 'contact',
  },
];

export const Navbar: React.FunctionComponent = () => {
  return (
    <section id='menu' className='border-b'>
      <nav className='flex justify-between items-center py-4 max-w-5xl m-auto'>
        <span className='font-permanentMarker text-lg'>Stanimir Dimitrov</span>

        <ul className='flex gap-12 items-center'>
          {sections.map((s, index) => (
            <li key={`${s.name}-${s.href}-${index}`} className='list-none'>
              <a
                href={`#${s.href}`}
                className='hover:text-[#6E57E0] hover:border-b cursor-pointer py-1'
              >
                <span>{s.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};
