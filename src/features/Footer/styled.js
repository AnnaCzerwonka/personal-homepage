import styled from "styled-components";

export const Wrapper = styled.footer`
  margin: 120px auto 100px;
  max-width: 1216px;
  padding: 0 16px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 48px;
  }
`;

export const Label = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  text-transform: uppercase;
`;

export const Mail = styled.a`
  display: inline-block;
  font-size: 32px;
  font-weight: 900;
  text-decoration: none;
  margin: 24px 0;
  transition: 0.3s;
  color: inherit;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
    margin: 12px 0;
  }
`;

export const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  max-width: 670px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 56px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 40px;
  }
`;

export const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  & svg {
    width: 48px;
    height: 48px;
    fill: currentColor;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
      width: 32px;
      height: 32px;
    }
  }
`;