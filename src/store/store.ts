import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './saga/rootSaga';
import { TodosReducer, initialState as todosInitialState } from './todos/todos.reducer';

const sagaMiddleware = createSagaMiddleware();

const combineReducer = combineReducers({
  todos: TodosReducer
});

const preloadedState = {
  todos: todosInitialState // Usa el estado inicial del reducer como parte del estado inicial de la aplicación
};

export const rootStore = createStore(
  combineReducer,
  preloadedState,
  applyMiddleware(sagaMiddleware)
);

export type RootState = ReturnType<typeof combineReducer>;

sagaMiddleware.run(rootSaga);
