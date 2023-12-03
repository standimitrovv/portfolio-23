import { SocialMediaLinks } from '../../components/SocialMediaLinks';

export const ContactSection = () => {
  return (
    <section className='max-w-5xl py-4 px-6'>
      <h1 className='text-2xl font-bold mb-12'>
        Do not hesitate to contact me!
      </h1>

      <div className='flex justify-between'>
        <div className='flex flex-col'>
          <div className='mb-8'>
            <span>
              Feel free to reach out if you are in need of a Frontend Developer.
            </span>
            <br />
            <span>
              Whether that means you need a website, web app, or you are looking
              to fill a full-time position.
            </span>
            <br />
            <span>
              I am <strong>always</strong> open to a conversation.
            </span>
          </div>
          <SocialMediaLinks />
        </div>
        <div>contact form</div>
      </div>
    </section>
  );
};
