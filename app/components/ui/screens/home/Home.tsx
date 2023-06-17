import { FC } from "react";

import { IHome } from "./home.interface";
import Layout from "@/app/layout/Layout";
import Heading from "../../heading/Heading";

const Home: FC<IHome> = () => {
  return (
    <Heading
      title="Watch the latest news of crypto"
      className="text-gray-500 mb-8 text-xl "
    />
  );
};

export default Home;
