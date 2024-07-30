import { LeaderboardV1OptionalProps, LeaderboardV1Response, LeaderboardV3OptionalProps, LeaderboardV3Response, Platform, Region } from "../types";
import { getExampleData } from "../utils/lib";

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
export async function getLeaderboardV1(region?: Region, apiKey?: string, props?: LeaderboardV1OptionalProps): Promise<LeaderboardV1Response> {
  return getExampleData<LeaderboardV1Response>('getLeaderboardV1');
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
export async function getLeaderboardV3(region?: Region, platform?: Platform, apiKey?: string, props?: LeaderboardV3OptionalProps): Promise<LeaderboardV3Response> {
  return getExampleData<LeaderboardV3Response>('getLeaderboardV3');
}