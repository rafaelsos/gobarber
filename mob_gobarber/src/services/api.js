import axios from 'axios';

// se android studio 'http://10.0.2.2:3333'
// se genymon.. 'http://10.0.3.2:3333'
// se for dispositivo usar a ip da rede

const api = axios.create({
  baseURL: 'http://192.168.0.9:3333',
});

export default api;
