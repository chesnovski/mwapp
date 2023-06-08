import { TypeMaterialIconName } from "@/app/shared/types/icon.types";
import * as MaterialIcons from "react-icons/md";
import React, { FC } from "react";

const MaterialIcon: FC<{ name: TypeMaterialIconName }> = ({ name }) => {
  const IconComponent = MaterialIcons[name];

  return <IconComponent /> || <MaterialIcons.MdDragIndicator />;
};

export default MaterialIcon;
