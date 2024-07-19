import { Inter } from "next/font/google";
import React from "react";
import Blog from "@/pages/Blog";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <Blog />;
}
