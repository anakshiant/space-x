export type State = {
  filter: FilterState;
  launch: LaunchState;
};

export type LaunchState = {
  processing: boolean;
  launches: Launch[];
  error?: string;
};

export type Launch = {
  patchUrl: string;
  title: string;
  missionIds: string[];
  launchYear: LaunchYear;
  successfulLaunch: boolean;
  successfulLanding: boolean;
};

export type LaunchYear =
  | "2006"
  | "2007"
  | "2008"
  | "2009"
  | "2010"
  | "2011"
  | "2012"
  | "2013"
  | "2014"
  | "2015"
  | "2016"
  | "2017"
  | "2018"
  | "2019"
  | "2020";

export type FilterState = {
  launchYear?: LaunchYear;
  successfulLaunch?: boolean;
  successfulLanding?: boolean;
};

export const LaunchYears: LaunchYear[] = [
  "2006",
  "2007",
  "2008",
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
];
