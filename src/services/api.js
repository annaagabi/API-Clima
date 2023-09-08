import axios from 'axios';

const api = axios.create({   //Esta fornecendo a URL da requisição
   baseURL: 'https://api.weatherapi.com/v1'
})  

export default api;