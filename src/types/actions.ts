import {
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import { ThunkDispatch } from "redux-thunk";

import { LaunchYear, Launch, State } from "./state";

export const useSelector: TypedUseSelectorHook<State> = useReduxSelector;
export type Dispatch = ThunkDispatch<State, any, Action>;
export function useDispatch(): Dispatch {
  return useReduxDispatch();
}

export type Action =
  | {
      type: "SET_FILTER_LAUNCH_YEAR";
      launchYear: LaunchYear;
    }
  | {
      type: "SET_FILTER_SUCCESSFUL_LAUNCH";
      payload: boolean;
    }
  | {
      type: "SET_FILTER_SUCCESSFUL_LANDING";
      payload: boolean;
    }
  | {
      type: "FETCH_LAUNCHES_START";
    }
  | {
      type: "FETCH_LAUNCHES_SUCCESS";
      launches: Launch[];
    }
  | {
      type: "FETCH_LAUNCH_FAILURE";
      message?: string;
    };
