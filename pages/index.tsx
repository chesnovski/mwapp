import Image from "next/image";
import { Inter } from "next/font/google";
import Home from "../app/components/ui/screens/home/Home";

const inter = Inter({ subsets: ["latin"] });

export default function HomeApp() {
  return <Home />;
}
