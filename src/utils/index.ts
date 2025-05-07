import axios, { AxiosInstance } from 'axios'

const URL_PYTHON = 'https://api-python-ccr.onrender.com/'

const URL_JAVA = 'http://localhost:8080/usuario'

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
