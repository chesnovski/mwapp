import { INews } from "@/app/shared/types/category.types";
import { FC } from "react";
import styles from "./NewsList.module.scss";
import { getCategoryUrl, getNewsUrl } from "@/app/config/url.config";
import Link from "next/link";
import Image from "next/image";
import { getCategoriesListEach } from "@/app/utils/meta/getCategoriesList";

const NewsItem: FC<{ news: INews }> = ({ news }) => {
  return (
    <div className={styles.item}>
      <Link href={getNewsUrl(news.slug)}>
        <a>
          <Image
            width={65}
            height={97}
            src={news.poster}
            alt={news.title}
            draggable={false}
            priority
          />
        </a>
      </Link>
      <div className={styles.info}>
        <div>
          <div className={styles.title}>{news.title}</div>
          <div className={styles.categories}>
            {news.categories.map((category, idx) => (
              <Link key={category._id} href={getCategoryUrl(category.slug)}>
                <a>
                  {getCategoriesListEach(
                    idx,
                    news.categories.length,
                    category.name
                  )}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
