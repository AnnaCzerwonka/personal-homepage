import { all } from "redux-saga/effects";
import { personalHomepageSaga } from "../features/personalHomepage/personalHomepageSaga";

export default function* rootSaga() {
    yield all([
        personalHomepageSaga(),
    ]);
}