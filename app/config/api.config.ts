import axios from "axios"

export const API_URL = 'http://localhost:3004'

axios.defaults.baseURL = API_URL


export const getCategoriesUrl = (string:string) => `${string}`