import { Wrapper, Mail, Paragraph, Label, SocialIcons, SocialLink } from "./styled";
import { GithubIcon } from "../Portfolio/GithubIcon";

export const Footer = () => (
    <Wrapper>
        <Label>LET'S TALK!</Label>
        <Mail href="mailto:annaczerwonka.p@gmail.com">
            annaczerwonka.p@gmail.com
        </Mail>
        <Paragraph>
            I’m always open to new projects and opportunities.
            If you have a question or just want to say hi, feel free to contact me!
        </Paragraph>
        <SocialIcons>
            <SocialLink href="https://github.com/AnnaCzerwonka" target="_blank" rel="noreferrer">
                <GithubIcon />
            </SocialLink>
        </SocialIcons>
    </Wrapper>
);