import { colors } from '../../Styles';
import { Tabs } from './Tabs';
import { HamburgerButton } from './components/HamburgerButton';
import { MobileMenu } from './components/MobileMenu';
import { useMobileMenu } from './hooks/UseMobileMenu';

export const Navbar: React.FunctionComponent = () => {
  const { isMenuOpen, toggleMenu, closeMenu } = useMobileMenu();

  return (
    <header className='relative border-b'>
      <section
        id='desktop-menu'
        className={`flex justify-between items-center p-4 max-w-5xl mx-auto ${
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
            addSelectedSectionStyles: (path: string) =>
              `${
                path === 'about' ? `border-b text-[${colors.activeText}]` : ''
              }`,
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

interface Dependencies {
  additionalStyles?: string;
  addSelectedSectionStyles?: (path: string) => string;
  onClick?: () => void;
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
      onClick={onClick}
    >
      <a
        href={`#${s.href}`}
        className={`md:hover:text-[${
          colors.activeText
        }] md:hover:border-b cursor-pointer py-1 ${addSelectedSectionStyles?.(
          s.href
        )}`}
      >
        <span>{s.name}</span>
      </a>
    </li>
  ));
