import { Wrapper, StyledSpinner } from "./styled";

export const Loader = () => (
    <Wrapper>
        <p>Please wait, projects are being loaded...</p>
        <StyledSpinner />
    </Wrapper>
);