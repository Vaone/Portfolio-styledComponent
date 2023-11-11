import React from 'react';
import styled from 'styled-components';
import { Button } from '../../components/Button/Button';
import { theme } from '../../styles/Theme';

type ProjectCardPropsType = {
  image: string,
  title: string,
  techs: string[],
  description: string
}

export const ProjectCard = (props: ProjectCardPropsType) => {
  return (
    <StyledCard>
      <img src={props.image}/>
      <div className="btmSide">
        <div className="title">{props.title}</div>
        <div className='techs'>
          {props.techs.map((tech)=>{
            return <Button>{tech}</Button>
          })}
        </div>
        <div className="description">{props.description}</div>
      </div>
    </StyledCard>
  )
};

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  background: ${theme.colors.CardBackground};
  width: 30em;
  overflow: hidden;
  box-shadow: 0 0 32px rgba(0,0,0,.15);

  img {
    height: 24em;
  }

  .btmSide {
    margin: 0 26px;
  }

  .title {
    text-transform: uppercase;
    margin: 30px 0 0 0;
  }

  .techs {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 10px;
    
    button {
      text-transform: uppercase;
      padding: 8px 16px;
    }
  }

  .description {
    margin: 20px 0 30px 0;
    font-family: Montserrat;
    font-weight: 400;
    line-height: 24px;
  }
`