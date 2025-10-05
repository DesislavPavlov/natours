import axios from 'axios';
import { showAlert } from './alert';

export const updateSettings = async (data, type) => {
  // type is either 'password' or 'data'
  try {
    const res = await axios({
      method: 'PATCH',
      url:
        type === 'data'
          ? 'http://127.0.0.1:3000/api/v1/users/updateMe'
          : 'http://127.0.0.1:3000/api/v1/users/updateMyPassword',
      data
    });

    if (res.data.status === 'success') {
      showAlert('success', `${type.toUpperCase()} uploaded successfully!`);
      setTimeout(() => {
        location.reload();
      }, 1000);
    }
  } catch (error) {
    showAlert('error', error.response.data.message);
  }
};
