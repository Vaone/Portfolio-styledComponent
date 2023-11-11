import React from 'react';
import type { FC, ButtonHTMLAttributes } from 'react'
import styled from 'styled-components';
import {theme} from '../../styles/Theme';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // другие типы дополнительные
}

export const Button: FC<ButtonProps> = ({children}) => {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  )
};

const StyledButton = styled.button`
  padding: 12px 20px;
  background: ${theme.colors.Primary};
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  line-height: 20px;
  outline: none;
  color: ${theme.colors.SecondaryFont}
`

