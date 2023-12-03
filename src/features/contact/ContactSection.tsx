import { SocialMediaLinks } from '../../components/SocialMediaLinks';
import { ContactMessage } from './components/ContactMessage';

export const ContactSection = () => {
  return (
    <section id='contact' className='max-w-5xl py-7 px-6 mx-auto'>
      <h1 className='text-2xl font-bold mb-9'>
        Do not hesitate to contact me!
      </h1>

      <div className='flex justify-between'>
        <div className='flex flex-col'>
          <ContactMessage />
          <SocialMediaLinks />
        </div>
        <div>contact form</div>
      </div>
    </section>
  );
};
