import React from "react";
import styled from "styled-components";
import ProfilePic from "../images/profile.png";
import Image from "next/image";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="img">
          <Image
            className="rounded-full"
            src={ProfilePic}
            alt="Profile Picture"
          />{" "}
        </div>
        <span>Kenneth Sullivan</span>
        <p className="info">
          I earned my Bachelors degree in Computer Science from the University
          of Rhode Island. I'm a passionate computer scientist who thrives on
          learning new technologies and taking on challenging projects to expand
          my skills and knowledge.
        </p>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 17em;
    height: 22.5em;
    background: #171717;
    transition: 1s ease-in-out;
    clip-path: polygon(
      30px 0%,
      100% 0,
      100% calc(100% - 30px),
      calc(100% - 30px) 100%,
      0 100%,
      0% 30px
    );
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    display: flex;
    flex-direction: column;
  }

  .card span {
    font-weight: bold;
    color: white;
    text-align: center;
    display: block;
    font-size: 1em;
  }

  .card .info {
    font-weight: 400;
    color: white;
    display: block;
    text-align: center;
    font-size: 0.72em;
    margin: 1em;
  }

  .card .img {
    width: 4.8em;
    height: 4.8em;
    background: white;
    border-radius: 15px;
    margin: auto;
  }
`;

export default Card;
