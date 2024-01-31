import {
  ArrowUpRightIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/solid';
import { useState } from 'react';
import { LoadingSpinner } from '../../../components/LoadingSpinner';
import { useNotifications } from '../../../hooks/UseNotifications';
import { useSendEmail } from '../hooks/UseSendEmail';

interface FormValidationProperties {
  isNameValid: boolean | undefined;
  isEmailValid: boolean | undefined;
  isMessageValid: boolean | undefined;
}

const INITIAL_FORM_VALUES: FormValidationProperties = {
  isNameValid: undefined,
  isEmailValid: undefined,
  isMessageValid: undefined,
};

export const ContactForm = () => {
  const { sendEmail } = useSendEmail();

  const { createErrorNotification, createSuccessNotification } =
    useNotifications();

  const [name, setName] = useState<string>('');

  const [email, setEmail] = useState<string>('');

  const [message, setMessage] = useState<string>('');

  const [isSubmittingForm, setIsSubmittingForm] = useState<boolean>(false);

  const [formValidation, setFormValidation] =
    useState<FormValidationProperties>(INITIAL_FORM_VALUES);

  const isSubmitButtonDisabled =
    !Object.values(formValidation).every(Boolean) || isSubmittingForm;

  const validateField = (
    condition: boolean,
    formValidationProp: keyof FormValidationProperties
  ) => {
    if (condition) {
      setFormValidation((prevState) => ({
        ...prevState,
        [formValidationProp]: false,
      }));

      return;
    }

    setFormValidation((prevState) => ({
      ...prevState,
      [formValidationProp]: true,
    }));
  };

  const handleNameInputFieldValidation = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    const fieldValue = e.currentTarget.value;

    validateField(fieldValue.length < 2, 'isNameValid');
  };

  const handleEmailFieldValidation = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    const fieldValue = e.currentTarget.value;

    validateField(
      !fieldValue.match('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      'isEmailValid'
    );
  };

  const handleMessageFieldValidation = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    const fieldValue = e.currentTarget.value.split(' ').join('').trim();

    validateField(fieldValue.length < 8, 'isMessageValid');
  };

  const defaultForm = () => {
    setName('');

    setEmail('');

    setMessage('');

    setFormValidation(INITIAL_FORM_VALUES);
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

      defaultForm();
    }
  };

  return (
    <form
      className='flex flex-col w-full border p-4 rounded-md'
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor='name' className='font-semibold'>
        Name
      </label>
      <div className='flex items-center relative mt-2 mb-4'>
        <input
          type='text'
          id='name'
          placeholder='What is your name?'
          className={`py-2 pl-4 pr-10 outline-1 border rounded-md w-full ${
            formValidation.isNameValid === false ? 'border-red-500' : ''
          }`}
          disabled={isSubmittingForm}
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyUp={handleNameInputFieldValidation}
        />
        {formValidation.isNameValid === false &&
          renderIcon('Please enter more than 2 characters!')}
      </div>
      <label htmlFor='email' className='font-semibold'>
        Email
      </label>
      <div className='flex items-center relative mt-2 mb-4'>
        <input
          type='email'
          id='email'
          placeholder='What is your email?'
          className={`py-2 pl-4 pr-10 outline-1 border rounded-md w-full ${
            formValidation.isEmailValid === false ? 'border-red-500' : ''
          }`}
          disabled={isSubmittingForm}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyUp={handleEmailFieldValidation}
        />
        {formValidation.isEmailValid === false &&
          renderIcon('Please enter a valid email!')}
      </div>

      <label htmlFor='message' className='font-semibold'>
        Message
      </label>
      <div className='flex items-center relative mt-2 mb-4 '>
        <textarea
          id='message'
          rows={5}
          cols={12}
          placeholder='How can I help you?'
          className={`py-2 pl-4 pr-10 outline-1 border rounded-md w-full ${
            formValidation.isMessageValid === false ? 'border-red-500' : ''
          }`}
          disabled={isSubmittingForm}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyUp={handleMessageFieldValidation}
        />
        {formValidation.isMessageValid === false &&
          renderIcon('Please enter more than 8 characters!', {
            isLargeField: true,
          })}
      </div>

      <button
        type='submit'
        className={`bg-activeText py-2 rounded-md text-white flex justify-center items-center gap-2 ${
          isSubmitButtonDisabled ? 'opacity-20' : 'group cursor-pointer'
        }`}
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

interface Options {
  isLargeField?: boolean;
}

function renderIcon(tooltipText: string, options?: Options) {
  return (
    <div
      className={`absolute right-3 group ${options?.isLargeField && 'top-3'}`}
    >
      <ExclamationTriangleIcon className='w-6 h-6 fill-red-400' />
      <div
        role='tooltip'
        className='opacity-0 group-hover:opacity-100 min-w-max absolute -top-11 -left-32 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-sm'
      >
        {tooltipText}
      </div>
    </div>
  );
}
