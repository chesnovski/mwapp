import { TypeMaterialIconName } from "./icon.types"

export interface ICategory {
    _id: string
    name: string
    slug: string
    description: string
    icon: TypeMaterialIconName
}

// export interface IParameters{
//     data: string
//     theme: string
//     country: string
// }


export interface INews{
    _id: string
    poster: string
    bigPoster: string
    title: string
    countOpened: number
    slug: string

}