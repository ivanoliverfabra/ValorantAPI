import { MatchHistoryV3OptionalProps, MatchHistoryV3Response, MatchHistoryV4OptionalProps, MatchHistoryV4Response, Platform, Region, StoredMatchesV1OptionalProps, StoredMatchesV1Response } from "../types";
import { getExampleData } from "../utils/lib";

/**
 * Match History V3
 * Fetch match history by name and tag or puuid
 * @param region - The region to fetch the match history for
 * @param nameOrPuuid - The name or puuid of the player
 * @param tagOrApiKey - The tag or API key of the player
 * @param apiKeyOrProps - The API key or optional parameters
 * @param optionalProps - Optional parameters
 * @returns {MatchHistoryV3Response}
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
 * @throws {INVALID_REGION} - If the region is invalid
 */
export async function getMatchHistoryV3(region: Region, name: string, tag: string, apiKey?: string): Promise<MatchHistoryV3Response>;
export async function getMatchHistoryV3(region: Region, name: string, tag: string, apiKey?: string, props?: MatchHistoryV3OptionalProps): Promise<MatchHistoryV3Response>;
export async function getMatchHistoryV3(region: Region, puuid: string, apiKey?: string): Promise<MatchHistoryV3Response>;
export async function getMatchHistoryV3(region?: Region, nameOrPuuid?: string, tagOrApiKey?: string, apiKeyOrProps?: string | MatchHistoryV3OptionalProps, optionalProps?: MatchHistoryV3OptionalProps): Promise<MatchHistoryV3Response> {
  return getExampleData<MatchHistoryV3Response>('getMatchHistoryV3');
}

/**
 * Match History V4
 * Fetch match history by name and tag or puuid
 * @param region - The region to fetch the match history for
 * @param platform - The platform to fetch the match history for
 * @param nameOrPuuid - The name or puuid of the player
 * @param tagOrApiKey - The tag or API key of the player
 * @param apiKeyOrProps - The API key or optional parameters
 * @param optionalProps - Optional parameters
 * @returns {MatchHistoryV4Response}
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
 * @throws {INVALID_REGION} - If the region is invalid
 */
export async function getMatchHistoryV4(region: Region, platform: Platform, name: string, tag: string, apiKey?: string): Promise<MatchHistoryV4Response>;
export async function getMatchHistoryV4(region: Region, platform: Platform, name: string, tag: string, apiKey?: string, props?: MatchHistoryV4OptionalProps): Promise<MatchHistoryV4Response>;
export async function getMatchHistoryV4(region: Region, platform: Platform, puuid: string, apiKey?: string): Promise<MatchHistoryV4Response>;
export async function getMatchHistoryV4(region?: Region, platform?: Platform, nameOrPuuid?: string, tagOrApiKey?: string, apiKeyOrProps?: string | MatchHistoryV4OptionalProps, optionalProps?: MatchHistoryV4OptionalProps): Promise<MatchHistoryV4Response> {
  return getExampleData<MatchHistoryV4Response>('getMatchHistoryV4');
}

/**
 * Stored Matches V1
 * Fetch stored matches by name and tag or puuid
 * @param region - The region to fetch the stored matches for
 * @param nameOrPuuid - The name or puuid of the player
 * @param tagOrApiKey - The tag or API key of the player
 * @param apiKeyOrProps - The API key or optional parameters
 * @param optionalProps - Optional parameters
 * @returns {StoredMatchesV1Response}
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
 * @throws {INVALID_REGION} - If the region is invalid
 */
export async function getStoredMatchesV1(region: Region, name: string, tag: string, apiKey?: string): Promise<StoredMatchesV1Response>;
export async function getStoredMatchesV1(region: Region, name: string, tag: string, apiKey?: string, props?: StoredMatchesV1OptionalProps): Promise<StoredMatchesV1Response>;
export async function getStoredMatchesV1(region: Region, puuid: string, apiKey?: string): Promise<StoredMatchesV1Response>;
export async function getStoredMatchesV1(region?: Region, nameOrPuuid?: string, tagOrApiKey?: string, apiKeyOrProps?: string | StoredMatchesV1OptionalProps, optionalProps?: StoredMatchesV1OptionalProps): Promise<StoredMatchesV1Response> {
  return getExampleData<StoredMatchesV1Response>('getStoredMatchesV1');
}