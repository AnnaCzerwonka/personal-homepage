import styled from "styled-components";

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.boxBackground};
  padding: 32px;
  margin: 72px auto 0;
  max-width: 1216px;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 48px 16px 0;
    padding: 16px;
  }
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 900;
  margin: 0;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(209, 213, 218, 0.3);
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px 32px;
  list-style: none;
  padding: 0;
  margin-top: 32px;

  @media (max-width: 1150px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    margin-top: 12px;
  }
`;

export const ListItem = styled.li`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  line-height: 1.4;

  &::before {
    content: "•";
    color: ${({ theme }) => theme.colors.primary};
    margin-right: 16px;
    font-size: 25px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;

    &::before {
      font-size: 18px;
      margin-right: 8px;
    }
  }
`;