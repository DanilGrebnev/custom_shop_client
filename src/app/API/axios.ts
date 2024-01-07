import axios from 'axios'

export const $axios = axios.create({
    baseURL:
        (process.env.URL_BACKEND ?? process.env.NEXT_PUBLIC_URL_BACKEND) +
        '/api/',
    headers: {
        'Content-Type': 'application/json',
    },
})
