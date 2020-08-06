import { LaunchYear, Action, Launch } from "@app/types";
import { Dispatch } from "redux";
import * as services from "@app/services";

export const getLaunches = (
  successfulLaunch?: boolean,
  successLanding?: boolean,
  launchYear?: LaunchYear
) => async (dispatch: Dispatch<Action>): Promise<void> => {
  dispatch({ type: "FETCH_LAUNCHES_START" });

  try {
    const launches: Launch[] = await services.getLaunches(
      successfulLaunch,
      successLanding,
      launchYear
    );

    dispatch({ type: "FETCH_LAUNCHES_SUCCESS", launches });
  } catch (err) {
    dispatch({ type: "FETCH_LAUNCH_FAILURE", message: err.message });
  }
};
