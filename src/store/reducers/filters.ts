import { FilterState, Action } from "@app/types";

export const initialState: FilterState = {};

export const handler = (
  state: FilterState = initialState,
  action: Action
): FilterState => {
  switch (action.type) {
    case "SET_FILTER_LAUNCH_YEAR":
      return {
        ...state,
        launchYear: action.launchYear,
      };
    case "SET_FILTER_SUCCESSFUL_LANDING":
      return {
        ...state,
        successfulLanding: action.payload,
      };
    case "SET_FILTER_SUCCESSFUL_LAUNCH":
      return {
        ...state,
        successfulLaunch: action.payload,
      };
    default:
      return state;
  }
};
