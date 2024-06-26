import axios from "axios";

// const BASE_URL = import.meta.env.VITE_BASE_URL

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {'Content-Type': 'application/json'}
})

export default api