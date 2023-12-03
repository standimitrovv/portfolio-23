import { ContactSection } from './features/contact/ContactSection';
import { Navbar } from './features/navbar/Navbar';
import { MobileMenuProvider } from './features/navbar/state/MobileMenuProvider';

export const App = () => {
  return (
    <main className='font-geistMono text-sm leading-7'>
      <MobileMenuProvider>
        <Navbar />

        <footer className='bg-[#fafafa]'>
          <ContactSection />
        </footer>
      </MobileMenuProvider>
    </main>
  );
};
