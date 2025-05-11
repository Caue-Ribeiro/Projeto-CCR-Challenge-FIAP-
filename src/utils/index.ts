import axios, { AxiosInstance } from 'axios'

const URL_PYTHON = 'https://api-python-ccr.onrender.com/'

const URL_JAVA =
    'https://15c8-2804-14c-bf48-8ad5-c045-78fc-cc3f-a4c1.ngrok-free.app/usuario'

export const customFetchPython: AxiosInstance = axios.create({
    baseURL: URL_PYTHON,
    headers: {
        Accept: 'application/json',
    },
})

export const customFetchJava: AxiosInstance = axios.create({
    baseURL: URL_JAVA,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
})
