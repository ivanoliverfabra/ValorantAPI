import { INTERNAL_ERROR, INVALID_API_KEY } from "../constants";
import { addQueryParams, initiateAxios, validateAPIKey, warnDeprecated } from "./lib";

export async function getLeaderboardV1(region: Region, apiKey: string, props?: LeaderboardV1OptionalProps): Promise<LeaderboardV1Response> {
  warnDeprecated('getLeaderboardV1', 'getLeaderboardV3');
  if (!validateAPIKey(apiKey)) return { errors: [INVALID_API_KEY] };
  
  try {
    const axiosInstance = initiateAxios(apiKey);
    const url = addQueryParams(`/v1/leaderboards/${region}`, props || {});
    const response = await axiosInstance.get<LeaderboardV1Response>(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return { errors: [INTERNAL_ERROR] };
  }
}

export async function getLeaderboardV3(region: Region, platform: Platform, apiKey: string, props?: LeaderboardV3OptionalProps): Promise<LeaderboardV3Response> {
  if (!validateAPIKey(apiKey)) return { errors: [INVALID_API_KEY] };
  
  try {
    const axiosInstance = initiateAxios(apiKey);
    const url = addQueryParams(`/v1/leaderboards/${region}/${platform}`, props || {});
    const response = await axiosInstance.get<LeaderboardV3Response>(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return { errors: [INTERNAL_ERROR] };
  }
}