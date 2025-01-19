"use client";
import HeaderInfo from "@/components/HeaderInfo/HeaderInfo";
import MyInfoCard from "../components/MyInfoCard/MyInfoCard";

export default function Home() {
  return (
    <div className=" h-screen">
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
