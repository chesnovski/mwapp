import { FC } from "react";
import styles from "./SearchList.module.scss";
import { INews } from "@/app/shared/types/category.types";
import Link from "next/link";
import { getNewsUrl } from "@/app/config/url.config";
import Image from "next/image";

const SearchList: FC<INews[]> = (news) => {
  return (
    <div className={styles.list}>
      {news.length ? (
        news.map((news) => (
          <Link key={news._id} href={getNewsUrl(news.slug)}>
            <a>
              <Image
                src={news.slug}
                width={50}
                height={50}
                alt={news.title}
                objectFit="cover"
                objectPosition="top"
                draggable={false}
              />
              <span>{news.title}</span>
            </a>
          </Link>
        ))
      ) : (
        <div className="text-white text-center my-4">News not found</div>
      )}
    </div>
  );
};

export default SearchList;
