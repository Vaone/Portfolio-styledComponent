import styled from "styled-components";
import sprite from '../../assets/images/sprite-socials.svg';
import { theme } from "../../styles/Theme";

type SocialLinkPropsType = {
  iconId: string,
  title: string,
  width?: number;
  height?: number;
  viewBox?: string;
  svg?: string;
}

export const SocialLink = (props: SocialLinkPropsType) => {

  const {
    iconId,
    title,
    width,
    height,
    viewBox,
    svg
  } = props

  return (
    <StyledSocialLink href="#">
      <div className="logo">
        <svg width={width || "38"} height={height || "38"} viewBox={viewBox || '0 0 38 38'} fill="none" xmlns="http://www.w3.org/2000/svg">
          <use xlinkHref={`${sprite}#${iconId}`}/>
        </svg>
      </div>
      
      <span>{title}</span>
    </StyledSocialLink>
  )
};

const StyledSocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${theme.colors.PrimaryFont};

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: ${theme.colors.Primary};
    margin: 0 0 10px 0;

    svg {
      fill: ${theme.colors.Background};
    }
  }
  

  span {
    text-transform: uppercase;
  }
`