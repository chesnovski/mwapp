import axios from "axios"

export const NewsService = {
    async getAll(){
        return axios.get('/news')
    }

}