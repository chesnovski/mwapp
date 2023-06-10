import { TypeMaterialIconName } from "./icon.types"

export interface ICategory {
    _id: string
    name: string
    slug: string
    description: string
    icon: TypeMaterialIconName
}