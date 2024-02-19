import { useEffect, useRef, useState } from 'react';
import { SocialMediaLinks } from '../../components/SocialMediaLinks';
import { Sections } from './Sections';

export const Navbar: React.FunctionComponent = () => {
  const sections = useRef<NodeListOf<HTMLElement> | null>(null);

  const [activeSection, setActiveSection] = useState<Sections>('About');

  const handleTabClick = (section: Sections) => {
    setActiveSection(section);
  };

  const handleScroll = () => {
    const MARGIN_TOP = 96;

    const pageYOffset = window.scrollY + MARGIN_TOP;

    let newActiveSection: Sections | undefined;

    sections.current?.forEach((section) => {
      const sectionOffsetTop = section.offsetTop - MARGIN_TOP;

      const sectionHeight = section.offsetHeight;

      if (
        pageYOffset >= sectionOffsetTop &&
        pageYOffset < sectionOffsetTop + sectionHeight
      ) {
        const sectionId = section.id;

        const formattedSection =
          sectionId.slice(0, 1).toUpperCase() +
          sectionId.slice(1).toLowerCase();

        newActiveSection = formattedSection as Sections;
      }
    });

    setActiveSection((prevState) => newActiveSection || prevState);
  };

  useEffect(() => {
    sections.current = document.querySelectorAll('[data-section]');

    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className='py-24 sticky top-0 max-h-screen flex flex-col justify-between items-center'>
      <div>
        <div className='text-center'>
          <span className='font-permanentMarker text-4xl'>
            Stanimir Dimitrov
          </span>

          <p className='text-xl'>Software Engineer</p>
        </div>

        <ul className='flex flex-col gap-4 items-center mt-32'>
          {renderSections({
            onClick: handleTabClick,
            addSelectedSectionStyles: (section: Sections) =>
              `${activeSection === section ? `border-b text-activeText` : ''}`,
          })}
        </ul>
      </div>

      <SocialMediaLinks />
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
