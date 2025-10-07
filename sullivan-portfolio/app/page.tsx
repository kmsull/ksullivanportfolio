"use client";
import HeaderInfo from "@/components/HeaderInfo/HeaderInfo";
import MyInfoCard from "../components/MyInfoCard/MyInfoCard";
import LanguageList from "../components/LanguageList/LanguageList";
import InterestsList from "../components/InterestsLIst/InterestsList";
import { ThemeProvider } from "next-themes";

/**
 * Home Component
 * 
 * The main homepage of the portfolio website.
 * Displays a three-column layout with interests, personal info, and skills.
 * 
 * Layout structure:
 * - Top: Header with social links and theme toggle
 * - Left column (20%): Interests list
 * - Center column (60%): Personal info card with bio and profile picture
 * - Right column (20%): Languages and skills list
 * 
 * Features:
 * - Dark/Light theme support via next-themes
 * - Responsive layout with Tailwind CSS
 * - Flexbox-based responsive design
 * 
 * @component
 * @returns {JSX.Element} The homepage layout with all main components
 * 
 * @example
 * ```tsx
 * export default function Home() {
 *   return <HomePage />
 * }
 * ```
 */
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
