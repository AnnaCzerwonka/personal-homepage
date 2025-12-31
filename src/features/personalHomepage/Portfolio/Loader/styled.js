import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 88px;
    gap: 48px;
    text-align: center;
    color: ${({ theme }) => theme.colors.textPrimary};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 48px;
    }
`;

export const StyledSpinner = styled.div`
    width: 91px;
    height: 91px;
    border: 11px solid ${({ theme }) => theme.colors.iron};
    border-top: 11px solid ${({ theme }) => theme.colors.scienceBlue};
    border-radius: 50%;
    animation: ${rotate} 1.2s linear infinite;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 40px;
        height: 40px;
        border-width: 5px;
    }
`;