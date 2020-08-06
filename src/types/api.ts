export type LaunchResponse = RemoteLaunchEntity[];

export type RemoteLaunchEntity = {
  mission_name: string;
  mission_id: string[];
  launch_year: string;
  launch_success: boolean;
  links: {
    mission_patch_small: string;
  };
  rocket: {
    first_stage: {
      cores: {
        land_success: boolean | null;
      }[];
    };
  };
};
