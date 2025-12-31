import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositories, selectRepositories, selectRepositoriesStatus } from "../personalHomepageSlice";
import {
    Section,
    GitHubIconContainer,
    Header,
    SubHeader,
    Wrapper,
    Tile,
    RepoName,
    Description,
    Links,
    Link
} from "./styled";
import { GithubIcon } from "./GithubIcon";
import { Loader } from "./Loader";
import { Error } from "./Error";

export const Portfolio = () => {
    const dispatch = useDispatch();
    const repos = useSelector(selectRepositories);
    const status = useSelector(selectRepositoriesStatus);

    useEffect(() => {
        dispatch(fetchRepositories("AnnaCzerwonka"));
    }, [dispatch]);

    return (
        <Section>
            <GitHubIconContainer>
                <GithubIcon />
            </GitHubIconContainer>
            <Header>Portfolio</Header>
            <SubHeader>My recent projects from GitHub:</SubHeader>

            {status === "loading" && <Loader />}

            {status === "error" && <Error />}

            {status === "success" && (
                <Wrapper>
                    {repos.map(repo => (
                        <Tile key={repo.id}>
                            <RepoName>{repo.name.replace(/-/g, " ")}</RepoName>
                            {repo.description && <Description>{repo.description}</Description>}
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
            )}
        </Section>
    );
};