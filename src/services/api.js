// api.js
import Axios from 'axios';

let urls = {
  test: `https://api-operacao-sarmento.pixland.com.br/`,
  development: 'https://api-operacao-sarmento.pixland.com.br/',
  production: 'https://api-operacao-sarmento.pixland.com.br/',
};
const api = Axios.create({
  baseURL: urls[process.env.NODE_ENV],
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default api;
