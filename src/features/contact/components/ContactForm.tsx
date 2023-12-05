import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { LoadingSpinner } from '../../../components/LoadingSpinner';
import { useNotifications } from '../../../hooks/UseNotifications';
import { useSendEmail } from '../hooks/UseSendEmail';

export const ContactForm = () => {
  const { sendEmail } = useSendEmail();

  const { createErrorNotification, createSuccessNotification } =
    useNotifications();

  const [name, setName] = useState<string>('');

  const [email, setEmail] = useState<string>('');

  const [message, setMessage] = useState<string>('');

  const [isSubmittingForm, setIsSubmittingForm] = useState<boolean>(false);

  const isSubmitButtonDisabled =
    !name || !email || !message || isSubmittingForm;

  const clearFormFields = () => {
    setName('');

    setEmail('');

    setMessage('');
  };

  const handleSubmit = async () => {
    setIsSubmittingForm(true);

    try {
      await sendEmail({ user_name: name, message, user_email: email });

      createSuccessNotification('Email successfully sent!');
    } catch (error) {
      createErrorNotification("Email wasn't sent. Try again later.");
    } finally {
      setIsSubmittingForm(false);

      clearFormFields();
    }
  };

  return (
    <form className='flex flex-col w-full' onSubmit={(e) => e.preventDefault()}>
      <label htmlFor='name' className='font-semibold'>
        Name
      </label>
      <input
        type='text'
        id='name'
        placeholder='What is your name?'
        className='py-2 px-4 outline-none rounded-md mt-2 mb-4'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor='email' className='font-semibold'>
        Email
      </label>
      <input
        type='email'
        id='email'
        placeholder='What is your email?'
        className='py-2 px-4 outline-none rounded-md mt-2 mb-4'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor='message' className='font-semibold'>
        Message
      </label>
      <textarea
        id='message'
        rows={5}
        cols={12}
        placeholder='How can I help you?'
        className='py-2 px-4 outline-none rounded-md mt-2 mb-4'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        type='submit'
        className='bg-activeText py-2 rounded-md text-white flex justify-center items-center gap-2 group cursor-pointer'
        disabled={isSubmitButtonDisabled}
        onClick={handleSubmit}
      >
        {isSubmittingForm ? (
          <LoadingSpinner />
        ) : (
          <>
            <span>Send</span>
            <ArrowUpRightIcon className='h-4 w-4 transform group-hover:-translate-y-1 group-hover:translate-x-1 translate-y-px motion-reduce:transition-none transition-all' />
          </>
        )}
      </button>
    </form>
  );
};
