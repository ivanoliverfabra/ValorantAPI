import { INTERNAL_ERROR, INVALID_API_KEY } from "../constants";
import { MatchDetailsV2Response, MatchDetailsV4Response, Platform } from "../types";
import { get, parseError, validateAPIKey } from "./lib";

/**
 * Match Details V2
 * Fetch match details by match id
 * @param matchId - The id of the match
 * @param apiKey - The API key
 * @returns {MatchDetailsV2Response}
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
 */
export async function getMatchDetailsV2(matchId: string, apiKey: string): Promise<MatchDetailsV2Response> {
  if (!validateAPIKey(apiKey)) return parseError(INVALID_API_KEY);
  
  try {
    return get<MatchDetailsV2Response>(apiKey, `/v2/match/${matchId}`);
  } catch (error) {
    console.error('Error fetching match details:', error);
    return parseError(INTERNAL_ERROR);
  }
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
export async function getMatchDetailsV4(platform: Platform, matchId: string, apiKey: string): Promise<MatchDetailsV4Response> {
  if (!validateAPIKey(apiKey)) return parseError(INVALID_API_KEY);
  
  try {
    return get<MatchDetailsV4Response>(apiKey, `/v4/match/${platform}/${matchId}`);
  } catch (error) {
    console.error('Error fetching match details:', error);
    return parseError(INTERNAL_ERROR);
  }
}