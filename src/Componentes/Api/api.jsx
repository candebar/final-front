import axios from "axios";
const api = axios.create({
    baseURL: 'https://final-back-1-rzpe.onrender.com/api'
})

export default api;