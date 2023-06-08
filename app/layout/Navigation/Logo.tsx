import Link from "next/link";
import React, { FC } from "react";
import logoImage from "../../assets/images/Untitled-2.png";
import Image from "next/image";

const Logo: FC = () => {
  return (
    <Link legacyBehavior href="/">
      <a className="px-layout mb-10 block">
        <Image
          src={logoImage}
          width={180}
          height={180}
          alt="Financial news"
          draggable={false}
        />
      </a>
    </Link>
  );
};

export default Logo;
