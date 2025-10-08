import React from "react";
import InstagramButton from "../SocialButton/InstagramButton";
import LinkedInButton from "../SocialButton/LinkedInButton";
import GithubButton from "../SocialButton/GithubButton";
import ResumeLink from "../SocialButton/ResumeLink";
import BB8Switch from "../LightDark/BB8Switch";

export default function HeaderInfo() {
  return (
    <div className="w-full h-auto lg:h-[10%] rounded-lg p-2 lg:p-[1%] border-4 border-gray-400">
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-[20%]">
        <div>
          <ResumeLink />
        </div>
        <div className="flex flex-row space-x-4 lg:space-x-[10%]">
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
