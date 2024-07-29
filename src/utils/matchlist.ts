import { INTERNAL_ERROR, INVALID_API_KEY } from "../constants";
import { addQueryParams, initiateAxios, validateAPIKey, warnDeprecated } from "./lib";

export async function getUserMatchHistoryV3(region: Region, name: string, tag: string, apiKey: string): Promise<MatchHistoryV3Response>;
export async function getUserMatchHistoryV3(region: Region, name: string, tag: string, apiKey: string, props?: MatchHistoryV3OptionalProps): Promise<MatchHistoryV3Response>;
export async function getUserMatchHistoryV3(region: Region, puuid: string, apiKey: string): Promise<MatchHistoryV3Response>;
export async function getUserMatchHistoryV3(region: Region, nameOrPuuid: string, tagOrApiKey: string, apiKeyOrProps?: string | MatchHistoryV3OptionalProps, optionalProps?: MatchHistoryV3OptionalProps): Promise<MatchHistoryV3Response> {
  warnDeprecated("getUserMatchHistoryV3", "getUserMatchHistoryV4");

  let url: string;
  let apiKey: string;
  let props: MatchHistoryV3OptionalProps | undefined;

  if (typeof apiKeyOrProps === 'string') {
    const name = nameOrPuuid;
    const tag = tagOrApiKey;
    apiKey = apiKeyOrProps;
    props = optionalProps;

    url = addQueryParams(`/v3/matches/${region}/${name}/${tag}`, props || {});
  } else {
    const puuid = nameOrPuuid;
    apiKey = tagOrApiKey as string;
    props = apiKeyOrProps as MatchHistoryV3OptionalProps | undefined;

    url = addQueryParams(`/v3/by-puuid/matches/${region}/${puuid}`, props || {});
  }

  if (!validateAPIKey(apiKey)) return { errors: [INVALID_API_KEY] };

  try {
    const axiosInstance = initiateAxios(apiKey);
    const response = await axiosInstance.get<MatchHistoryV3Response>(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching match history:", error);
    return { errors: [INTERNAL_ERROR] };
  }
}

export async function getUserMatchHistoryV4(region: Region, platform: Platform, name: string, tag: string, apiKey: string): Promise<MatchHistoryV4Response>;
export async function getUserMatchHistoryV4(region: Region, platform: Platform, name: string, tag: string, apiKey: string, props?: MatchHistoryV4OptionalProps): Promise<MatchHistoryV4Response>;
export async function getUserMatchHistoryV4(region: Region, platform: Platform, puuid: string, apiKey: string): Promise<MatchHistoryV4Response>;
export async function getUserMatchHistoryV4(region: Region, platform: Platform, nameOrPuuid: string, tagOrApiKey: string, apiKeyOrProps?: string | MatchHistoryV4OptionalProps, optionalProps?: MatchHistoryV4OptionalProps): Promise<MatchHistoryV4Response> {
  let url: string;
  let apiKey: string;
  let props: MatchHistoryV4OptionalProps | undefined;

  if (typeof apiKeyOrProps === 'string') {
    const name = nameOrPuuid;
    const tag = tagOrApiKey;
    apiKey = apiKeyOrProps;
    props = optionalProps;

    url = addQueryParams(`/v4/matches/${region}/${platform}/${name}/${tag}`, props || {});
  } else {
    const puuid = nameOrPuuid;
    apiKey = tagOrApiKey as string;
    props = apiKeyOrProps as MatchHistoryV4OptionalProps | undefined;

    url = addQueryParams(`/v4/by-puuid/matches/${region}/${platform}/${puuid}`, props || {});
  }

  if (!validateAPIKey(apiKey)) return { errors: [INVALID_API_KEY] };

  try {
    const axiosInstance = initiateAxios(apiKey);
    const response = await axiosInstance.get<MatchHistoryV4Response>(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching match history:", error);
    return { errors: [INTERNAL_ERROR] };
  }
}