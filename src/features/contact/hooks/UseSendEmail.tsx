import emailjs from '@emailjs/browser';

interface FormValues {
  user_name: string;
  user_email: string;
  message: string;
}

export const useSendEmail = () => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';

  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';

  const apiKey = import.meta.env.VITE_EMAILJS_API_KEY || '';

  const sendEmail = async (formValues: Record<keyof FormValues, string>) =>
    emailjs.send(serviceId, templateId, formValues, apiKey);

  return { sendEmail };
};
