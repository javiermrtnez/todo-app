import toast from 'react-hot-toast';

export const notificationSuccess = (message) => {
  toast.success(message);
};

export const notificationError = (message) => {
  toast.error(message);
};
