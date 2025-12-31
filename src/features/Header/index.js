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
            <Button href="mailto:annaczerwonka.p@gmail.com" title="annaczerwonka.p@gmail.com">
                <span>✉</span> Hire me
            </Button>
        </Content>
    </Wrapper>
);