import React from "react";
import InstagramButton from "../SocialButton/InstagramButton";
import LinkedInButton from "../SocialButton/LinkedInButton";
import GithubButton from "../SocialButton/GithubButton";
import ResumeLink from "../SocialButton/ResumeLink";

export default function HeaderInfo() {
  return (
    <div className="w-full h-[10%] rounded-lg p-[1%] border-4 border-gray-400">
      <div className="flex flex-row justify-center items-center space-x-[50%]">
        <div>
          <ResumeLink />
        </div>
        <div className="flex flex-row space-x-[10%]">
          <InstagramButton />
          <LinkedInButton />
          <GithubButton />
        </div>
      </div>
    </div>
  );
}
