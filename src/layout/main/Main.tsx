import React from "react";
import styled from "styled-components";
import { Button } from "../../components/Button/Button";
import arrow from "../../assets/images/arrow.svg";
import heroWebp from "../../assets/images/welcomepage.webp";
import { theme } from "../../styles/Theme";
import { Container } from "../../components/Container";

export const Main = ({}) => {
  return (
    <StyledMain>
      <Container>
        <StyledLeftSide>
          <h1>WEB DEVELOPER</h1>
          <h2>Kim Vladimir</h2>
          <span>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt.
          </span>
          <Button>Contact Me</Button>
        </StyledLeftSide>
        <StyledRightSide>
          <img src={heroWebp} />
        </StyledRightSide>
        <div className="arrow">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill= "none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use xlinkHref={`${arrow}#arrow`}/>
          </svg>
        </div>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  & > div {
    display: flex;
    height: 750px;
    position: relative;
    
  }

  .arrow {
    position: absolute;
    right: 50%;
    bottom: 0;
    svg {
      fill: ${theme.colors.Primary};
    }
  }
`;

const StyledLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;

  h1 {
    font-family: Tinos;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    color: ${theme.colors.SecondaryFont};
    margin-bottom: 10px;
  }

  h2 {
    background: ${theme.colors.Primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    display: table;

    font-size: 72px;
    font-weight: 600;
    line-height: 88px;
    margin-bottom: 10px;
  }

  span {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 30px;
  }

  button {
    width: 135px;
  }
`;
const StyledRightSide = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
  }
`;
