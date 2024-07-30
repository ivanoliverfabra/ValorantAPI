import { MatchDetailsV2Response, MatchDetailsV4Response, Region } from "../types";
import { getExampleData } from "../utils/lib";

/**
 * Match Details V2
 * Fetch match details by match id
 * @param matchId - The id of the match
 * @param apiKey - The API key
 * @returns {MatchDetailsV2Response}
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
 */
export async function getMatchDetailsV2(matchId?: string, apiKey?: string): Promise<MatchDetailsV2Response> {
  return getExampleData<MatchDetailsV2Response>('getMatchDetailsV2');
};

/**
 * Match Details V3
 * Fetch match details by match id
 * @param platform - The platform of the match
 * @param matchId - The id of the match
 * @param apiKey - The API key
 * @returns {MatchDetailsV3Response}
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
 */
export async function getMatchDetailsV4(region?: Region, matchId?: string, apiKey?: string): Promise<MatchDetailsV4Response> {
  return getExampleData<MatchDetailsV4Response>('getMatchDetailsV4');
}