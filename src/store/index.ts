import {
  createStore,
  combineReducers,
  applyMiddleware,
  MiddlewareAPI,
  Dispatch,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";

import { State, Action } from "@app/types";

import * as filterReducer from "./reducers/filters";
import * as launchesReducer from "./reducers/launches";
import { getLaunches } from "@app/store/actions/getLaunches";

export const defaultInitialState: State = {
  filter: filterReducer.initialState,
  launch: launchesReducer.initialState,
};

const reducers = combineReducers({
  filter: filterReducer.handler,
  launch: launchesReducer.handler,
});

const filteredApiCallMiddleware = (
  store: MiddlewareAPI<Dispatch<Action>, State>
) => (next: Dispatch<Action>) => async (action: Action) => {
  const oldState = store.getState().filter;

  next(action);

  const newState = store.getState().filter;

  if (
    newState.launchYear !== oldState.launchYear ||
    oldState.successfulLanding !== newState.successfulLanding ||
    oldState.successfulLaunch !== newState.successfulLaunch
  ) {
    getLaunches(
      newState.successfulLaunch,
      newState.successfulLanding,
      newState.launchYear
    )(store.dispatch);
  }
};

const enhancer = composeWithDevTools(
  applyMiddleware(ReduxThunk, filteredApiCallMiddleware)
);

export function initializeStore(
  initialState: State = defaultInitialState
): ReturnType<typeof createStore> {
  return createStore(reducers, initialState, enhancer);
}
