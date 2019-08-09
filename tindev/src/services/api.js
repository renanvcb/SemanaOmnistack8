import axios from 'axios';

const api = axios.create({
    //mudar sempre pro endereço do host
    baseURL: 'http://192.168.10.134:3333'
});

export default api;