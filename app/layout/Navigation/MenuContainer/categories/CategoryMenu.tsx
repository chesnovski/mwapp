import React, { FC } from "react";
import { usePopularCategory } from "./usePopularCategory";
import Menu from "../Menu";
import { CategoryService } from "@/app/services/category.services";
import { useQuery } from "react-query";
import { IMenuItem } from "../menu.interface";
import SkeletonLoader from "@/app/components/ui/SkeletonLoader";

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
        <div className="mx-11 mb-6">
          <SkeletonLoader count={5} className="h-7 mt-6" />
        </div>
      ) : (
        <div>
          <Menu menu={{ title: "Popular categories", items: data || [] }} />
        </div>
      )}
    </div>
  );
};

export default CategoryMenu;
