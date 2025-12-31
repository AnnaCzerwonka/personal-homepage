import { createSlice } from "@reduxjs/toolkit";

const personalHomepageSlice = createSlice({
    name: "personalHomepage",
    initialState: {
        repositories: [],
        status: "initial",
    },
    reducers: {
        fetchRepositories: (state) => {
            state.status = "loading";
        },
        setRepositories: (state, { payload: repositories }) => {
            state.status = "success";
            state.repositories = repositories;
        },
        fetchRepositoriesError: (state) => {
            state.status = "error";
        },
    },
});

export const {
    fetchRepositories,
    setRepositories,
    fetchRepositoriesError,
} = personalHomepageSlice.actions;

const selectPersonalHomepageState = (state) => state.personalHomepage;

export const selectRepositories = (state) => selectPersonalHomepageState(state).repositories;
export const selectRepositoriesStatus = (state) => selectPersonalHomepageState(state).status;

export default personalHomepageSlice.reducer;