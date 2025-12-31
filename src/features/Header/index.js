import { Wrapper, Logo, Content, Caption, Title, Lead, Button } from "./styled";

export const Header = () => (
    <Wrapper>
        <Logo>AC</Logo>
        <Content>
            <Caption>THIS IS</Caption>
            <Title>Anna Czerwonka</Title>
            <Lead>
                I’m a passionate Frontend Developer in love with React,
                currently looking for new opportunities.
            </Lead>
            <Button>
                <span>✉</span> Hire me
            </Button>
        </Content>
    </Wrapper>
);