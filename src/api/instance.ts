import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://backend-tesla-qwyt2za5g-nazaruk-d.vercel.app',
    // baseURL: 'https://backend-tesla-dhyygdagn-nazaruk-d.vercel.app', // старая рабочая версия бэка
    // baseURL: 'http://localhost:7542/',
    withCredentials: true,
})
