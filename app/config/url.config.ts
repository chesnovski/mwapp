export const getNewsUrl = (slug:string) => `/news/${slug}`
export const getCoinUrl = (slug:string) => `/coin/${slug}`
export const getCategoryUrl = (slug:string) => `/category/${slug}`


export const getAdminUrl = (url:string) => `/manage/${url}` 
export const getAdminHomeUrl = () => getAdminUrl('').slice(0, -1)