import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactSection } from './features/contact/ContactSection';
import { ExperienceSection } from './features/experience/ExperienceSection';
import { Navbarv2 } from './features/navbar/Navbarv2';
import { MobileMenuProvider } from './features/navbar/state/MobileMenuProvider';
import { useNotifications } from './hooks/UseNotifications';

export const App = () => {
  const { containerConfiguration } = useNotifications();

  return (
    <main className='font-geistMono text-sm leading-7 grid grid-cols-2 max-w-7xl m-auto'>
      <MobileMenuProvider>
        <Navbarv2 />

        <div>
          <ExperienceSection />

          <ContactSection />
        </div>

        <ToastContainer {...containerConfiguration} />
      </MobileMenuProvider>
    </main>
  );
};
