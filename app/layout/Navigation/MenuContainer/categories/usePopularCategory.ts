import { CategoryService } from '@/app/services/category.services'
import { useQuery } from 'react-query'
import { IMenuItem } from '../menu.interface'
import { getCategoryUrl } from '@/app/config/url.config'


export const usePopularCategory = () => {
    const queryData = useQuery('popular category menu', () => CategoryService.getPopularCategories(), {
        select: ({data}) => data.map(category => ({
            icon: category.icon,
            link: getCategoryUrl(category.slug),
            title: category.name
        } as IMenuItem)).splice(0,4)
    })


    return queryData
}