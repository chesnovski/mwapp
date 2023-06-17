import React, { FC } from "react";
import TopNews from "./TopNews";
import FavoriteCoins from "./FavoriteCoins.tsx/FavoriteCoins";

const NewsContainer: FC = () => {
  return (
    <div>
      <TopNews />
      <FavoriteCoins />
    </div>
  );
};

export default NewsContainer;
