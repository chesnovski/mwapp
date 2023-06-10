import React, { FC } from "react";
import { usePopularCategory } from "./usePopularCategory";
import Menu from "../Menu";
import { CategoryService } from "@/app/services/category.services";
import { useQuery } from "react-query";
import { IMenuItem } from "../menu.interface";

const CategoryMenu: FC = () => {
  // const { isLoading, data } = usePopularCategory;
  const { isLoading, data } = useQuery(
    "category list",
    () => CategoryService.getAll(),
    {
      select: ({ data }) =>
        data.map(
          (category: any) =>
            ({
              icon: category.icon,
              link: `categories${category.slug}`,
              title: category.name,
            } as IMenuItem)
        ),
    }
  );
  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Menu menu={{ title: "Popular categories", items: data || [] }} />
        </div>
      )}
    </div>
  );
};

export default CategoryMenu;
