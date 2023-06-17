import { INews } from "@/app/shared/types/category.types";

export interface INewsList{
    title: string;
    link: string;
    news: INews[];
}