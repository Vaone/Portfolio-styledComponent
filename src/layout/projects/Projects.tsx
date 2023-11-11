import React from "react";
import styled from "styled-components";
import workImage from "../../assets/images/work.webp";
import { Container } from "../../components/Container";
import { ProjectCard } from "./ProjectCard";

const projectItems = [
  {
    title: "TITLE PROJECT",
    techs: [
      "Javascript",
      "Typescript",
      "React",
      "Redux",
      "Javascript",
      "Typescript",
      "React",
      "Redux",
    ],
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    src: workImage,
  },
  {
    title: "Instagram",
    techs: ["Javascript", "React-Native", "Redux"],
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    src: workImage,
  },
  {
    title: "TITLE PROJECT",
    techs: ["Javascript", "Typescript", "React", "Redux"],
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    src: workImage,
  },
  {
    title: "Instagram",
    techs: ["Javascript", "React-Native", "Redux"],
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    src: workImage,
  },
  {
    title: "TITLE PROJECT",
    techs: ["Javascript", "Typescript", "React", "Redux"],
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    src: workImage,
  },
];

export const Projects = () => {
  return (
    <StyledProjects>
      <Container>
        <h2>Projects</h2>

        <div className="wrapper">
          {projectItems.map((item) => {
            return (
              <ProjectCard
                image={item.src}
                title={item.title}
                techs={item.techs}
                description={item.description}
              />
            );
          })}
        </div>
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  & > div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 100px 0 100px 0;
  }

  .wrapper {
    display: flex;
    justify-content: center;
    margin-top: 32px;
    flex-wrap: wrap;
    gap: 28px;
  }
`;
