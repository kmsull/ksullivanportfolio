"use client";
import HeaderInfo from "@/constants/HeaderInfo/HeaderInfo";
import MyInfoCard from "../constants/MyInfoCard/MyInfoCard";

export default function Home() {
  return (
    <div className="">
      <HeaderInfo />
      <div className="flex flex-row">
        <div className="w-[10%]"></div>
        <div className="containerBorder py-[5%] w-[80%] flex flex-row space-x-[20%] justify-center">
          <MyInfoCard />
        </div>
        <div className="w-[10%]"></div>
      </div>
    </div>
  );
}
