import styled from "styled-components";

export const Wrapper = styled.header`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 66px;
    align-items: center;
    max-width: 1216px;
    margin: 115px auto 0;
    padding: 0 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: 1fr;
        grid-gap: 12px;
        margin-top: 32px;
    }
`;

export const Logo = styled.div`
    width: 30vw;
    height: 30vw;
    max-width: 398px;
    max-height: 398px;
    min-width: 132px;
    min-height: 132px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    font-size: clamp(30px, 8vw, 80px);
    font-weight: 700;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Caption = styled.div`
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.text};
`;

export const Title = styled.h1`
    font-size: clamp(22px, 5vw, 38px);
    font-weight: 700;
    margin: 12px 0 16px 0;
    color: ${({ theme }) => theme.colors.text};
`;

export const Lead = styled.p`
    font-size: clamp(17px, 3vw, 20px);
    font-weight: 400;
    margin: 0 0 32px 0;
    max-width: 600px;
    line-height: 1.4;
    color: ${({ theme }) => theme.colors.text};
`;

export const Button = styled.a`
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 12px 24px;
    width: fit-content;
    height: 49px;
    background-color: ${({ theme }) => theme.button.background};
    color: ${({ theme }) => theme.button.text};
    border: 1px solid ${({ theme }) => theme.button.borderColor};
    border-radius: 4px;
    font-weight: 600;
    font-size: 19px;
    transition: all 0.3s ease-in-out;

    span {
        font-size: 22px;
    }

    &:hover {
        filter: brightness(110%);
        box-shadow: ${({ theme }) => theme.button.hoverShadow};
    }

    &:active {
        box-shadow: ${({ theme }) => theme.button.activeShadow};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 17px;
        padding: 12px 20px;
    }
`;