import { FC } from "react";

import { IHome } from "./home.interface";
import Layout from "@/app/layout/Layout";

const Home: FC<IHome> = () => {
  return (
    <Layout>
      <h1>Home</h1>
    </Layout>
  );
};

export default Home;
