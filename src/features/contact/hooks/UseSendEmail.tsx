import emailjs from '@emailjs/browser';

interface FormValues {
  from: string;
  senderEmail: string;
  message: string;
}

export const useSendEmail = () => {
  const serviceId = import.meta.env.EMAILJS_SERVICE_ID || '';

  const templateId = import.meta.env.EMAILJS_TEMPLATE_ID || '';

  const apiKey = import.meta.env.EMAILJS_API_KEY || '';

  const sendEmail = async (formValues: Record<keyof FormValues, string>) =>
    emailjs.send(serviceId, templateId, formValues, apiKey);

  return { sendEmail };
};
