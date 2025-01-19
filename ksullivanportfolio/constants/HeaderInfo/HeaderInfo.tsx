import React from "react";
import InstagramButton from "../SocialButton/InstagramButton";
import LinkedInButton from "../SocialButton/LinkedInButton";
import GithubButton from "../SocialButton/GithubButton";
import ResumeLink from "../SocialButton/ResumeLink";

export default function HeaderInfo() {
  return (
    <div>
      <div className=" flex flex-row justify-center">
        <div>
          <ResumeLink />
        </div>
        <div className="flex flex-row ">
          <InstagramButton />
          <LinkedInButton />
          <GithubButton />
        </div>
      </div>
    </div>
  );
}
