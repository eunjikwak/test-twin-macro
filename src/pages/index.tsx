import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div onClick={() => router.push("/login")}>로그인하기</div>
    </>
  );
}
