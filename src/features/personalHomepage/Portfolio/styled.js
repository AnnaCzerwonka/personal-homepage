import styled from "styled-components";

export const Section = styled.section`
  margin-top: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GitHubIconContainer = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 12px;
  
  & svg {
    width: 40px;
    height: 40px;
    fill: currentColor;
  }
`;

export const Header = styled.h2`
  font-size: 30px;
  font-weight: 900;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
`;

export const SubHeader = styled.p`
  font-size: 20px;
  margin: 8px 0 24px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  width: 100%;
  max-width: 1216px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const Tile = styled.article`
  background: ${({ theme }) => theme.colors.boxBackground};
  padding: 40px;
  border: 6px solid rgba(209, 213, 218, 0.1);
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 8px;
  transition: 0.3s;
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: rgba(0, 128, 128, 0.3);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 24px;
  }
`;

export const RepoName = styled.h3`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  text-transform: capitalize;
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.text};
  margin: 24px 0;
  flex-grow: 1;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
`;

export const Link = styled.a`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: 400;
  width: fit-content;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(1.2);
  }
`;