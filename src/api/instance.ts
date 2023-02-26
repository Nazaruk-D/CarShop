import axios from 'axios'

export const instance = axios.create({
    // baseURL: 'https://backend-tesla-m8e8sus9r-nazaruk-d.vercel.app/',
    baseURL: 'http://localhost:7542/',
    withCredentials: true,
})
