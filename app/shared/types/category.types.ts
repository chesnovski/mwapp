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


export interface INews  extends React.HTMLAttributes<HTMLInputElement> {
    _id: string
    poster: string
    bigPoster: string
    title: string
    categories: ICategory[]
    countOpened: number
    slug: string

}