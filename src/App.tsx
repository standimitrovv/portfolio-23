import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactSection } from './features/contact/ContactSection';
import { ExperienceSection } from './features/experience/ExperienceSection';
import { Navbar } from './features/navbar/Navbar';
import { MobileMenuProvider } from './features/navbar/state/MobileMenuProvider';
import { useNotifications } from './hooks/UseNotifications';

export const App = () => {
  const { containerConfiguration } = useNotifications();

  return (
    <main className='font-geistMono text-sm leading-7 grid grid-cols-2 max-w-7xl mx-auto min-h-screen'>
      <MobileMenuProvider>
        <Navbar />

        <div className='py-24'>
          <ExperienceSection />

          <ContactSection />
        </div>

        <ToastContainer {...containerConfiguration} />
      </MobileMenuProvider>
    </main>
  );
};
