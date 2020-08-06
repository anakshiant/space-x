import { LaunchState, Action } from "@app/types";

export const initialState: LaunchState = {
  processing: false,
  launches: [],
};

export const handler = (
  state: LaunchState = initialState,
  action: Action
): LaunchState => {
  switch (action.type) {
    case "FETCH_LAUNCHES_START":
      return {
        ...state,
        processing: true,
      };
    case "FETCH_LAUNCH_FAILURE":
      return {
        ...state,
        processing: false,
        error: action.message,
      };
    case "FETCH_LAUNCHES_SUCCESS":
      return {
        ...state,
        processing: false,
        launches: [...state.launches, ...action.launches],
      };
    default:
      return state;
  }
};
