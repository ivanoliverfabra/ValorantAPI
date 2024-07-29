import { INTERNAL_ERROR, INVALID_API_KEY, INVALID_REGION } from "../constants";
import { LeaderboardV1OptionalProps, LeaderboardV1Response, LeaderboardV3OptionalProps, LeaderboardV3Response, Platform, Region } from "../types";
import { get, parseError, validateAPIKey, validateRegion, warnDeprecated } from "./lib";

/**
 * Get Leaderboard V1
 * Fetch the leaderboard for a region
 * @param region - The region to fetch the leaderboard for
 * @param apiKey - The API key
 * @param props - Optional parameters
 * @returns {LeaderboardV1Response}
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
 * @throws {INVALID_REGION} - If the region is invalid
 * @deprecated Use getLeaderboardV3 instead
 */
export async function getLeaderboardV1(region: Region, apiKey: string, props?: LeaderboardV1OptionalProps): Promise<LeaderboardV1Response> {
  warnDeprecated('getLeaderboardV1', 'getLeaderboardV3');
  if (!validateAPIKey(apiKey)) return parseError(INVALID_API_KEY);
  if (!validateRegion(region)) return parseError(INVALID_REGION);
  
  try {
    return get<LeaderboardV1Response>(apiKey, `/v1/leaderboards/${region}`, props);
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return parseError(INTERNAL_ERROR);
  }
}

/**
 * Get Leaderboard V3
 * Fetch the leaderboard for a region and platform
 * @param region - The region to fetch the leaderboard for
 * @param platform - The platform to fetch the leaderboard for
 * @param apiKey - The API key
 * @param props - Optional parameters
 * @returns {LeaderboardV3Response}
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
 * @throws {INVALID_REGION} - If the region is invalid
 */
export async function getLeaderboardV3(region: Region, platform: Platform, apiKey: string, props?: LeaderboardV3OptionalProps): Promise<LeaderboardV3Response> {
  if (!validateAPIKey(apiKey)) return parseError(INVALID_API_KEY);
  if (!validateRegion(region)) return parseError(INVALID_REGION);
  
  try {
    return get<LeaderboardV3Response>(apiKey, `/v1/leaderboards/${region}/${platform}`, props);
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return parseError(INTERNAL_ERROR);
  }
}