import React from "react";
import styled from "styled-components";
import InstagramButton from "../SocialButton/InstagramButton";
import LinkedInButton from "../SocialButton/LinkedInButton";
import GithubButton from "../SocialButton/GithubButton";
import ResumeLink from "../SocialButton/ResumeLink";

export default function HeaderInfo() {
  return (
    <StyledWrapper>
      <div className="header">
        <div className="flex flex-row">
          <ResumeLink />
          <div className="flex flex-row">
            <InstagramButton />
            <LinkedInButton />
            <GithubButton />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    padding: 1%;
    background-color: transparent;
  }
`;
