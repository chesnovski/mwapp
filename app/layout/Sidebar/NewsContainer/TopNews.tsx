import { NewsService } from "@/app/services/news.service";
import React, { FC } from "react";
import { useQuery } from "react-query";
import SkeletonLoader from "@/app/components/ui/SkeletonLoader";
import NewsList from "./NewsList";

const TopNews: FC = () => {
  const { isLoading, data: popularNews } = useQuery(
    "Popular news in sidebar",
    () => NewsService.getPopularNews()
  );
  return isLoading ? (
    <div className="mt-11">
      <SkeletonLoader count={3} className="h-28 mb-4" />
    </div>
  ) : (
    <NewsList link="/treanding" news={popularNews || []} title="Popular News" />
  );
};

export default TopNews;
