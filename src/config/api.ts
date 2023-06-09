import axios from 'axios';
import modal from '../helpers/modal';

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})

api.interceptors.response.use(
  function (response) {
    if(response.status > 226) {
      modal.mixinToast("Houve um erro ao tentar se comunicar com o servidor.", 5000, 'error');
      throw new Error("server-error");
    }
    return response;
  },
  function (error) {
    let message = 'Houve um erro ao tentar se comunicar com o servidor'

    switch (error.response.status) {
      case 401:
        message = 'Não autorizado!'
        break;
      case 404:
        message = 'Não encontrado!'
        break;
    }

    modal.mixinToast(message, 4000, 'error', 'bottom');
    throw error;
  }
);

export default api;

export const defaults = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('@App:accessToken')}`,
    },
};