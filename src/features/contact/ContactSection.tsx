import { SocialMediaLinks } from '../../components/SocialMediaLinks';
import { ContactForm } from './components/ContactForm';
import { ContactMessage } from './components/ContactMessage';

export const ContactSection = () => {
  return (
    <section id='contact' className='max-w-5xl py-7 px-6 mx-auto'>
      <h1 className='text-2xl font-bold mb-9'>
        Do not hesitate to contact me!
      </h1>

      <div className='flex justify-between gap-14'>
        <div className='flex flex-col'>
          <ContactMessage />
          <SocialMediaLinks />
        </div>

        <ContactForm />
      </div>
    </section>
  );
};
