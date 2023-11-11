import React from "react";
import styled from "styled-components";
import sprite from "../../assets/images/sprite-skills.svg";

type SkillPropsType = {
  iconId: string;
  title: string;
  width?: number;
  height?: number;
  viewBox?: string;
};

export const Skill = (props: SkillPropsType) => {
  const { iconId, title, width, height, viewBox } = props;

  return (
    <StyledSkill>
      <svg
        width={width || "120"}
        height={height || "120"}
        viewBox={viewBox || "0 0 120 120"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <use xlinkHref={`${sprite}#${iconId}`} />
      </svg>
      <span>{title}</span>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    margin-bottom: 22px;
  }

  span {
    text-transform: uppercase;
  }
`;
