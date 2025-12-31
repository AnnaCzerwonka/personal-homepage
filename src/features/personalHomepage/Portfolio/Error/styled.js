import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 96px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 24px;
    color: ${({ theme }) => theme.colors.textPrimary};
`;

export const BlueWarningIcon = styled.div`
    width: 50px;
    height: 50px;
    border: 4px solid ${({ theme }) => theme.colors.scienceBlue};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.scienceBlue};
    
    &::before {
        content: "!";
    }
`;

export const Header = styled.h3`
    font-weight: 700;
    font-size: 24px;
    margin: 0;
`;

export const Message = styled.p`
    font-size: 20px;
    line-height: 1.4;
    margin: 0;
    max-width: 450px;
`;

export const ButtonLink = styled.a`
    text-decoration: none;
    padding: 12px 16px;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 600;
    font-size: 18px;
    border-radius: 4px;
    transition: filter 0.3s;

    &:hover {
        filter: brightness(1.2);
    }
`;