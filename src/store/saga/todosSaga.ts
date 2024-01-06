import { takeEvery, call, put } from "redux-saga/effects";

const getTodos = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();
    return todos;
  } catch (error) {
    return error;
  }
};

function* sagaCallback(): any {
  
  const todos = yield call(getTodos);

  if (todos.length > 0) {
    yield put({ type: "REQUEST_SUCCESS", payload: todos });
  } else {
    yield put({ type: "REQUEST_FAILED", payload: "No data found" });
  }
}

export function* todoSaga(): any {
  return yield takeEvery("REQUEST_LOADING", sagaCallback);
}
