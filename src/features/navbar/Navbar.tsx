import { Tabs } from './Tabs';
import { HamburgerButton } from './components/HamburgerButton';

export const Navbar: React.FunctionComponent = () => {
  return (
    <header className='border-b'>
      <section
        id='desktop-menu'
        className='flex justify-between items-center p-4 max-w-5xl mx-auto'
      >
        <a href='#'>
          <span className='font-permanentMarker text-lg'>
            Stanimir Dimitrov
          </span>
        </a>

        <div>
          <HamburgerButton triggerAnimation={true} onClick={() => {}} />

          <ul className='hidden md:flex gap-12 items-center'>
            {renderSections()}
          </ul>
        </div>
      </section>
    </header>
  );
};

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
  {
    name: 'Skills',
    href: 'skills',
  },
  {
    name: 'Contact',
    href: 'contact',
  },
];

const renderSections = () =>
  sections.map((s, index) => (
    <li key={`${s.name}-${s.href}-${index}`} className='list-none'>
      <a
        href={`#${s.href}`}
        className='hover:text-[#6E57E0] hover:border-b cursor-pointer py-1'
      >
        <span>{s.name}</span>
      </a>
    </li>
  ));
