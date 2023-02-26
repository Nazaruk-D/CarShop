import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://test.herokuapp.com/2.0/',
    withCredentials: true,
})
