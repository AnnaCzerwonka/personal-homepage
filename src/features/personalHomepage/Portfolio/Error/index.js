import { Wrapper, Header, Message, ButtonLink, BlueWarningIcon } from "./styled";

export const Error = () => (
    <Wrapper>
        <BlueWarningIcon />
        <Header>Ooops! Something went wrong... ✨</Header>
        <Message>
            Please check your internet connection and try again in a moment. 🌐
        </Message>
        <ButtonLink href="https://github.com/AnnaCzerwonka" target="_blank" rel="noreferrer">
            Go to GitHub
        </ButtonLink>
    </Wrapper>
);