import { createContext, useCallback, useEffect, useState } from 'react';
import { mediaQueries } from '../../../Styles';
import { useMediaQuery } from '../../../hooks/UseMediaQuery';

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

  const isMobile = !useMediaQuery(mediaQueries.md);

  const toggleMenu = useCallback(
    () => setIsMenuOpen((prevState) => !prevState),
    []
  );

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      closeMenu();
    }
  }, [closeMenu, isMenuOpen, isMobile]);

  const contextValue: Context = {
    isMenuOpen: isMenuOpen && isMobile,
    toggleMenu,
    closeMenu,
  };

  return (
    <MobileMenuContext.Provider value={contextValue}>
      {props.children}
    </MobileMenuContext.Provider>
  );
};
