import axios from "axios"

export const NewsService = {
    async getAll(){
        return axios.get('/news')
    },


    async getPopularNews() {
        const { data: news} = await axios.get('popular-news')

        return news

    }

}