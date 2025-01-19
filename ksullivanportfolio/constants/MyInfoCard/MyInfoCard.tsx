import React from "react";
import styled from "styled-components";
import profilePicture from "../images/profile.png";
import Image from "next/image";

export default function NewMyInfoCard() {
  return (
    <StyledWrapper>
      <div className="MainCard">
        <div className="CardMedia">
          <Image src={profilePicture} alt="Placeholder" width={50} />
        </div>

        <div className="CardHeader">
          <h2>Kenneth Sullivan</h2>
        </div>

        <div className="CardContent">
          <p>
            Computer Science graduate from the University of Rhode Island.
            Passionate developer focused on innovative solutions and continuous
            learning. Dedicated to mastering new technologies and taking on
            complex challenges.
          </p>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .MainCard {
    width: 100%;
    height: 100%;
    border-color: rgb(68, 68, 68);
    border-width: 2px;
    border-style: solid;
    border-radius: 10px;
    padding: 3%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(68, 68, 68);
    color: white;
  }
  .CardMedia {
    margin-bottom: 4%;
  }
  .CardHeader {
    margin-bottom: 4%;
    font-size: 2em;
  }
  .CardContent {
    text-align: center;
  }
`;
