import { useState } from 'react';
import { Sections } from './Sections';
import { HamburgerButton } from './components/HamburgerButton';
import { MobileMenu } from './components/MobileMenu';
import { useMobileMenu } from './hooks/UseMobileMenu';

export const Navbar: React.FunctionComponent = () => {
  const { isMenuOpen, toggleMenu, closeMenu } = useMobileMenu();

  const [activeSection, setActiveSection] = useState<Sections>('About');

  const handleTabClick = (section: Sections) => {
    setActiveSection(section);
  };

  return (
    <header className='relative border-b'>
      <section
        id='desktop-menu'
        className={`flex justify-between items-center py-4 px-6 max-w-5xl mx-auto ${
          isMenuOpen && 'border-b'
        }`}
      >
        <a href='#'>
          <span className='font-permanentMarker text-lg'>
            Stanimir Dimitrov
          </span>
        </a>

        <HamburgerButton triggerAnimation={isMenuOpen} onClick={toggleMenu} />

        <ul className='hidden md:flex gap-12 items-center'>
          {renderSections({
            onClick: handleTabClick,
            addSelectedSectionStyles: (section: Sections) =>
              `${activeSection === section ? `border-b text-activeText` : ''}`,
          })}
        </ul>
      </section>

      {isMenuOpen && (
        <MobileMenu>
          {renderSections({
            additionalStyles: 'py-6 text-center w-full',
            onClick: closeMenu,
          })}
        </MobileMenu>
      )}
    </header>
  );
};

interface Section {
  name: Sections;
  href: Lowercase<Sections>;
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

interface Dependencies {
  additionalStyles?: string;
  addSelectedSectionStyles?: (section: Sections) => string;
  onClick: (section: Sections) => void;
}

const renderSections = ({
  onClick,
  additionalStyles,
  addSelectedSectionStyles,
}: Dependencies) =>
  sections.map((s, index) => (
    <li
      key={`${s.name}-${s.href}-${index}`}
      className={`${additionalStyles} list-none`}
      onClick={() => onClick(s.name)}
    >
      <a
        href={`#${s.href}`}
        className={`md:hover:text-activeText md:hover:border-b cursor-pointer py-1 ${addSelectedSectionStyles?.(
          s.name
        )}`}
      >
        <span>{s.name}</span>
      </a>
    </li>
  ));
