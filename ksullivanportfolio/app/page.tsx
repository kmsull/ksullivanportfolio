"use client";
import HeaderInfo from "@/constants/HeaderInfo/HeaderInfo";
import MyInfoCard from "../constants/MyInfoCard/MyInfoCard";

export default function Home() {
  return (
    <div>
      <HeaderInfo />
      <div className=" flex flex-row">
        <div className="w-[10%]"></div>
        <div className="containerBorder flex flex-row justify-center">
          <MyInfoCard />
        </div>
        <div className="w-[10%]"></div>
      </div>
    </div>
  );
}
