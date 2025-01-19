"use client";
import HeaderInfo from "@/components/HeaderInfo/HeaderInfo";
import MyInfoCard from "../components/MyInfoCard/MyInfoCard";

export default function Home() {
  return (
    <div className=" h-screen">
      <HeaderInfo />
      <div className=" flex flex-row">
        <div className="w-[15%] border-2 border-red-100"></div>
        <div className="border-2 border-red-100 h-screen flex flex-col justify-center">
          <MyInfoCard />
        </div>
        <div className="w-[15%] border-2 border-red-100"></div>
      </div>
    </div>
  );
}
