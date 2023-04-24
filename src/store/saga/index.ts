import { SagaIterator } from "redux-saga";
import { all, fork } from "redux-saga/effects";
import { chatBot } from "../../store/chat/chat";

export default function* root(): SagaIterator {
  yield all([
    fork(chatBot.saga)
  ])
}