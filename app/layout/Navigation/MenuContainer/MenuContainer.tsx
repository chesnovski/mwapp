import React, { FC } from "react";
import Menu from "./Menu";
import { firstMenu, userMenu } from "./menu.data";
import CategoryMenu from "./categories/CategoryMenu";

const MenuContainer: FC = () => {
  return (
    <div>
      <Menu menu={firstMenu} />
      <CategoryMenu />
      <Menu menu={userMenu} />
    </div>
  );
};

export default MenuContainer;
