import { ToastContainerProps, toast } from 'react-toastify';

const commonProps: ToastContainerProps = {
  position: 'bottom-left',
  autoClose: 4000,
  closeOnClick: true,
  pauseOnHover: true,
  theme: 'dark',
  hideProgressBar: true,
};

const containerConfiguration: ToastContainerProps = {
  ...commonProps,
  newestOnTop: true,
  rtl: false,
};

export const useNotifications = () => {
  const createSuccessNotification = (text: string) => {
    toast.success(text, {
      ...commonProps,
    });
  };

  const createErrorNotification = (text: string) => {
    toast.error(text, {
      ...commonProps,
      className: 'width: 300px',
    });
  };

  return {
    containerConfiguration,
    createSuccessNotification,
    createErrorNotification,
  };
};
