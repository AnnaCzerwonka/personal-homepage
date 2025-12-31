import { useEffect, useState } from "react";
import { Section, Title } from "../Skills/styled";
import { Wrapper, Tile, RepoName, Description, Links, Link } from "./styled";

export const Portfolio = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users/AnnaCzerwonka/repos?sort=updated")
            .then(response => response.json())
            .then(data => setRepos(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <Section>
            <Title>Portfolio</Title>
            <p>My recent projects from GitHub:</p>

            <Wrapper>
                {repos.map(repo => (
                    <Tile key={repo.id}>
                        <RepoName>{repo.name.replace(/-/g, " ")}</RepoName>

                        {repo.description && (
                            <Description>{repo.description}</Description>
                        )}

                        <Links>
                            {repo.homepage && (
                                <Link href={repo.homepage} target="_blank" rel="noreferrer">
                                    Live Demo
                                </Link>
                            )}
                            <Link href={repo.html_url} target="_blank" rel="noreferrer">
                                View Code
                            </Link>
                        </Links>
                    </Tile>
                ))}
            </Wrapper>
        </Section>
    );
};