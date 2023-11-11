import React, { useContext } from 'react';
import styled from 'styled-components';
import { Button } from '../../components/Button/Button';
import { Container } from '../../components/Container';
import { theme } from '../../styles/Theme';

export const Header = () => {

  return (
    <StyledHeader>
      <Container>
        <a className='homeLink'>Home</a>
        <nav className='nav'>
          <a className='link'>Projects</a>
          <a className='link'>Contact</a> 
          <a className='link'>Theme Changer</a>
        </nav>
      </Container>
    </StyledHeader>
  )
};

const StyledHeader = styled.header`
  position: fixed;
  top:0;
  left:0;
  right:0;
  background: ${theme.colors.Background}f2;
  z-index:999;


  &>div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
  }

  .homeLink {
    cursor: pointer;
  }

  .nav {
    display: flex;

    .link {
      display: flex;
      align-items: center;
      margin-right: 80px;
      cursor: pointer;
      border-radius: 6px;
      padding: 12px 20px;
      transition: background linear .2s, color linear .2s;

      &:last-child {
        border: 1px solid ${theme.colors.Primary};
        padding: 10px;
        border-radius: 5px;
      }

      &:hover {
        background: ${theme.colors.Primary};
        color: ${theme.colors.SecondaryFont};
      }
    }
  }
`