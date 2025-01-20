"use client";
import HeaderInfo from "@/components/HeaderInfo/HeaderInfo";
import MyInfoCard from "../components/MyInfoCard/MyInfoCard";
import LanguageList from "../components/LanguageList/LanguageList";
import InterestsList from "../components/InterestsLIst/InterestsList";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <div className=" h-screen">
        <HeaderInfo />
        <div className=" flex flex-row">
          <div className="w-[20%] border-2 border-red-100">
            <InterestsList />
          </div>
          <div className="border-2 border-red-100 h-screen flex justify-center">
            <MyInfoCard />
          </div>
          <div className="w-[20%] flex justify-center border-2 border-red-100">
            <LanguageList />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
