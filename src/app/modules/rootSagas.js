import { all } from "redux-saga/effects";
import tasksSaga from "./tasks/sagas";
import loginSaga from "./login/sagas";

export default function* rootSaga() {
  yield all([
    tasksSaga(),
    loginSaga()
  ])
}