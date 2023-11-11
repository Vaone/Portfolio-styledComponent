import git from "../../assets/images/git.svg";
import styled from "styled-components";
import { Skill } from "./Skill";
import { Container } from "../../components/Container";

export const Skills = (props: {
  SkillItems: { icon: string; title: string }[];
}) => {
  return (
    <StyledSkills>
      <Container>
        <h2>Skills</h2>
        <div className="techs">
          {props.SkillItems.map((item) => {
            switch (item.icon) {
              case "mongo":
                return (
                  <Skill
                    iconId={item.icon}
                    title={item.title}
                    viewBox="-30 0 120 120"
                  />
                );
              case "git":
                return (
                  <Skill
                    iconId={item.icon}
                    title={item.title}
                    viewBox="-5 -5 100 100"
                  />
                );
              default:
                return <Skill iconId={item.icon} title={item.title} />;
            }
          })}
        </div>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  & > div {
    margin: 100px 0 100px 0;
  }

  .techs {
    margin: 30px 0 0 0;
    display: grid;
    grid-template-columns: repeat(5, 120px);
    grid-auto-rows: minmax(164px, auto);
    align-content:center;
    gap: 60px 120px;
    & div:nth-child(11){
      grid-column: 2/3;
      text-align: center;
    }
  }
`;
