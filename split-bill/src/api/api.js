import axios from 'axios';

const API = axios.create({
    baseURL: "https://my-json-server.typicode.com/sarah-specialist/receipt"
})

export default API;