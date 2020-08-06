import axios, { AxiosInstance } from "axios";
import getConfig from "next/config";
import { LaunchYear, LaunchResponse } from "@app/types";
import { addQueryParam, mapLaunchResponseToLaunch } from "@app/utils";

const { publicRuntimeConfig } = getConfig();

const LIMIT = 100; // ? this is hundred specs doesn't mention pagination anywhere

const createClient = (): AxiosInstance => {
  return axios.create({ baseURL: publicRuntimeConfig.API_URL });
};

// https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true&amp;launch_year=2014

export const getLaunches = async (
  successfulLaunch?: boolean,
  successLanding?: boolean,
  launchYear?: LaunchYear
) => {
  try {
    let url: string = `/launches?limit=${LIMIT}`;

    if (successLanding) {
      url = addQueryParam(url, "land_success", successLanding);
    }

    if (successfulLaunch) {
      url = addQueryParam(url, "launch_success", successfulLaunch);
    }

    if (launchYear) {
      url = addQueryParam(url, "launch_year", launchYear);
    }

    const response = await createClient().get<LaunchResponse>(url);

    return mapLaunchResponseToLaunch(response.data);
  } catch (err) {
    console.error(
      "error > services > api > getLaunches > api error",
      err.message,
      err.stack
    );
  }
};
