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
    <main className='font-geistMono text-sm leading-7'>
      <MobileMenuProvider>
        <Navbar />

        <main>
          <ExperienceSection />
        </main>

        <footer className='bg-[#fafafa]'>
          <ContactSection />
        </footer>

        <ToastContainer {...containerConfiguration} />
      </MobileMenuProvider>
    </main>
  );
};
