import { createContext, useState } from 'react';

interface Context {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

export const MobileMenuContext = createContext<Context>({
  isMenuOpen: false,
  toggleMenu: () => {},
  closeMenu: () => {},
});

interface Props {
  children: JSX.Element;
}

export const MobileMenuProvider: React.FunctionComponent<Props> = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);

  const closeMenu = () => setIsMenuOpen(false);

  const contextValue: Context = {
    isMenuOpen,
    toggleMenu,
    closeMenu,
  };

  return (
    <MobileMenuContext.Provider value={contextValue}>
      {props.children}
    </MobileMenuContext.Provider>
  );
};
