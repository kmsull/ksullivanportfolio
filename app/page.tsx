"use client";
import HeaderInfo from "@/components/HeaderInfo/HeaderInfo";
import MyInfoCard from "../components/MyInfoCard/MyInfoCard";
import LanguageList from "../components/LanguageList/LanguageList";
import InterestsList from "../components/InterestsLIst/InterestsList";
import Education from "../components/Education/Education";
import Projects from "../components/Projects/Projects";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <div className="min-h-screen pb-4">
        <HeaderInfo />
        <div className="flex flex-col lg:flex-row mb-4">
          <div className="w-full lg:w-[20%] border-2 border-red-100">
            <InterestsList />
          </div>
          <div className="w-full lg:flex-1 border-2 border-red-100 flex justify-center">
            <MyInfoCard />
          </div>
          <div className="w-full lg:w-[20%] flex justify-center border-2 border-red-100">
            <LanguageList />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 px-2">
          <div className="w-full lg:w-1/2">
            <Education />
          </div>
          <div className="w-full lg:w-1/2">
            <Projects />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
