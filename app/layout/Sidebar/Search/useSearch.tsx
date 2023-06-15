import { useDebounce } from "@/app/hooks/useDebounce";
import { NewsService } from "@/app/services/news.service";
import { ChangeEvent, useState } from "react";
import { useQuery } from "react-query";

export const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 500);

  const { isSuccess, data } = useQuery(
    ["search news list", debouncedSearch],
    // @ts-ignore
    () => NewsService.getAll(debouncedSearch),
    {
      select: ({ data }) => data,
      enabled: !!debouncedSearch,
    }
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return { isSuccess, handleSearch, data, searchTerm };
};
