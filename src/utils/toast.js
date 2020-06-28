import { notification } from 'antd';

export const toast = (type, message, description) => {
  notification[type]({
    message,
    description,
  });
};
