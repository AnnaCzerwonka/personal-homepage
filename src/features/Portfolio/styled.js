import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-top: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const Tile = styled.article`
  background: ${({ theme }) => theme.colors.sectionBackground};
  padding: 40px;
  border: 3px solid rgba(209, 213, 218, 0.2);
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    border-color: ${({ theme }) => theme.colors.primary}4D;
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
  gap: 16px;
  margin-top: auto;
`;

export const Link = styled.a`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary}33;
  font-weight: 600;
  transition: 0.3s;

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    filter: brightness(0.8);
  }
`;