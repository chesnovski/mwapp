import React, { FC } from "react";
import { INewsList } from "./news-list.iterface";
import styles from "./NewsList.module.scss";
import NewsItem from "./NewsItem";
import Link from "next/link";

const NewsList: FC<INewsList> = ({ link, title, news }) => {
  return (
    <div className={styles.list}>
      <div className={styles.heading}>{title}</div>
      {news.map((news) => (
        <NewsItem key={news._id} news={news} />
      ))}
      <Link legacyBehavior href={link}>
        <a className={styles.button}>See more</a>
      </Link>
    </div>
  );
};

export default NewsList;
