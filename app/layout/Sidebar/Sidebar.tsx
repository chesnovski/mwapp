import { FC } from "react";

import styles from "./Sidebar.module.scss";
import Search from "./Search/Search";
import NewsContainer from "./NewsContainer/NewsContainer";

const Sidebar: FC = () => {
  return (
    <div className={styles.sidebar}>
      <Search />
      <NewsContainer />
    </div>
  );
};

export default Sidebar;
