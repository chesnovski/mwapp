// import { getCategoriesUrl } from "../config/api.config"
// import { ICategory } from "../shared/types/category.types"
// import { axiosClassic } from "../api/interceptors"
// import axios from "axios"

import axios from "axios"
import { ICategory } from "../shared/types/category.types"
import { IMenu, IMenuItem } from "../layout/Navigation/MenuContainer/menu.interface"

// export const CategoryService = {
//     async getPopularCategories(){
//         return axios.get<ICategory[]>("http://localhost:3004/categories")
//     }

// }

const API_URL = 'http://localhost:3004'

axios.defaults.baseURL = API_URL


export const CategoryService = {
    async getAll(){
        return axios.get('/categories')
    }

}