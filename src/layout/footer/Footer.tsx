import styled from "styled-components";
import { Container } from "../../components/Container";
import { theme } from "../../styles/Theme";
import { SocialLink } from "./SocialLink";

const socials = [
  { iconId: "email", title: "gmail" },
  { iconId: "git", title: "github" },
  { iconId: "linkedin", title: "linkedin" },
];

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <div className="socials">
          {socials.map((link) => {
            switch (link.iconId) {
              case "email":
                return (
                  <SocialLink
                    iconId={link.iconId}
                    title={link.title}
                    viewBox="0 0 25 18"
                    width={25}
                    height={18}
                  />
                );
              case "git":
                return (
                  <SocialLink
                    iconId={link.iconId}
                    title={link.title}
                    viewBox="0 0 98 96"
                    width={98}
                    height={96}
                  />
                );
              case "linkedin":
                return (
                  <SocialLink
                    iconId={link.iconId}
                    title={link.title}
                    viewBox="0 0 22 22"
                    width={22}
                    height={22}
                  />
                );
              default:
                return <SocialLink iconId={link.iconId} title={link.title} />;
            }
          })}
        </div>

        <div className="links">
          <a href="#">Projects</a>
          <a href="#">Contacts</a>
        </div>
        <div>
          <h2>Web Developer</h2>
        </div>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 490px;
  }

  .socials {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 73px;
    margin: 0 0 50px 0;
  }

  .links {
    display: flex;
    gap: 48px;
    margin: 0 0 50px 0;
    a {
      color: ${theme.colors.PrimaryFont};
    }
  }
`;
