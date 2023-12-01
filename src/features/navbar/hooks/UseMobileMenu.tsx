import { useContext } from 'react';
import { MobileMenuContext } from '../state/MobileMenuProvider';

export const useMobileMenu = () => {
  if (!MobileMenuContext) {
    throw new Error('No Mobile Menu Context nearby');
  }

  return useContext(MobileMenuContext);
};
