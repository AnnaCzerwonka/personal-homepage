export const getRepositories = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json();
};