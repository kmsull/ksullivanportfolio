import React from "react";
import InstagramButton from "../SocialButton/InstagramButton";
import LinkedInButton from "../SocialButton/LinkedInButton";
import GithubButton from "../SocialButton/GithubButton";
import ResumeLink from "../SocialButton/ResumeLink";
import BB8Switch from "../LightDark/BB8Switch";

/**
 * HeaderInfo Component
 * 
 * Displays the header section of the portfolio with social media links and theme toggle.
 * This component serves as the navigation and utility bar for the portfolio.
 * 
 * Features:
 * - Resume download link
 * - Social media buttons (Instagram, LinkedIn, GitHub)
 * - BB-8 themed dark/light mode toggle
 * - Responsive layout with flexbox
 * 
 * @component
 * @returns {JSX.Element} Header bar with social links and theme toggle
 * 
 * @example
 * ```tsx
 * <HeaderInfo />
 * ```
 */
export default function HeaderInfo() {
  return (
    <div className="w-full h-[10%] rounded-lg p-[1%] border-4 border-gray-400">
      <div className="flex flex-row justify-center items-center space-x-[20%]">
        <div>
          <ResumeLink />
        </div>
        <div className="flex flex-row space-x-[10%]">
          <InstagramButton />
          <LinkedInButton />
          <GithubButton />
        </div>
        <div>
          <BB8Switch />
        </div>
      </div>
    </div>
  );
}
