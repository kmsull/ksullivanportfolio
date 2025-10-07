import React from "react";
import styled from "styled-components";

const Button = () => {
  return (
    <StyledWrapper>
      <a
        href="https://docs.google.com/document/d/11rq8Ex_5kn4m3W0aYB0xlXSLIP2IcXsHO375tRhJEeg/edit?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <button className="button" data-text="Awesome">
          <span className="actual-text">&nbsp;Resume&nbsp;</span>
          <span aria-hidden="true" className="hover-text">
            &nbsp;Resume&nbsp;
          </span>
        </button>
      </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* === removing default button style ===*/
  .button {
    margin: 0;
    height: auto;
    background: transparent;
    padding: 0;
    border: none;
    cursor: pointer;
  }

  /* button styling */
  .button {
    --border-right: 6px;
    --text-stroke-color: rgba(44, 162, 136, 0.6);
    --animation-color: rgb(13, 181, 219);
    --fs-size: 2em;
    letter-spacing: 3px;
    text-decoration: none;
    font-size: var(--fs-size);
    font-family: "Arial";
    position: relative;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1px var(--text-stroke-color);
  }
  /* this is the text, when you hover on button */
  .hover-text {
    position: absolute;
    box-sizing: border-box;
    content: attr(data-text);
    color: var(--animation-color);
    width: 0%;
    inset: 0;
    border-right: var(--border-right) solid var(--animation-color);
    overflow: hidden;
    transition: 0.5s;
    -webkit-text-stroke: 1px var(--animation-color);
  }
  /* hover */
  .button:hover .hover-text {
    width: 100%;
    filter: drop-shadow(0 0 23px var(--animation-color));
  }
`;

export default Button;
