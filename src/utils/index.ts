import {
  LaunchResponse,
  Launch,
  RemoteLaunchEntity,
  LaunchYear,
} from "@app/types";

export const addQueryParam = (url: string, key: string, value: any): string => {
  return `${url}&${key}=${value}`;
};

export const mapLaunchResponseToLaunch = (
  launchResponse: LaunchResponse
): Launch[] => {
  return launchResponse.map((remoteLaunchEntity: RemoteLaunchEntity) => ({
    title: remoteLaunchEntity.mission_name,
    missionIds: remoteLaunchEntity.mission_id,
    patchUrl: remoteLaunchEntity.links.mission_patch_small,
    launchYear: (remoteLaunchEntity.launch_year as unknown) as LaunchYear,
    successfulLaunch: remoteLaunchEntity.launch_success,
    successfulLanding:
      remoteLaunchEntity.rocket.first_stage.cores[0].land_success,
  }));
};
