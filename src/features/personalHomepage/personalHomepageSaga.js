import { takeLatest, call, put, delay } from "redux-saga/effects";
import { fetchRepositories, setRepositories, fetchRepositoriesError } from "./personalHomepageSlice";
import { getRepositories } from "./getRepositories";

function* fetchRepositoriesHandler() {
    try {
        yield delay(2000);
        const repositories = yield call(getRepositories, "AnnaCzerwonka");

        const sortedRepositories = [...repositories].sort((a, b) =>
            new Date(b.updated_at) - new Date(a.updated_at)
        );

        yield put(setRepositories(sortedRepositories));
    } catch (error) {
        yield put(fetchRepositoriesError());
    }
}

export function* personalHomepageSaga() {
    yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
}