import { MMRHistoryV1Response, Region, StoredMMRV1OptionalProps, StoredMMRV1Response } from "../types";
import { getExampleData } from "../utils/lib";

/**
 * MMR History V1
 * Fetch MMR history by name and tag or puuid
 * @param region - The region to fetch the MMR history for
 * @param nameOrPuuid - The name or puuid of the player
 * @param tagOrAPIKey - The tag or API key of the player
 * @param apiKey - The API key
 * @returns {MMRHistoryV1Response}
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
 * @throws {INVALID_REGION} - If the region is invalid
 */
export async function getMMRHistoryV1(region: Region, name: string, tag: string, apiKey?: string): Promise<MMRHistoryV1Response>;
export async function getMMRHistoryV1(region: Region, puuid: string, apiKey?: string): Promise<MMRHistoryV1Response>;
export async function getMMRHistoryV1(region?: Region, nameOrPuuid?: string, tagOrAPIKey?: string, apiKey?: string): Promise<MMRHistoryV1Response> {
  return getExampleData<MMRHistoryV1Response>('getMMRHistoryV1');
}

/**
 * Stored MMR History V1
 * Fetch stored MMR history by name and tag or puuid
 * @param region - The region to fetch the stored MMR history for
 * @param nameOrPuuid - The name or puuid of the player
 * @param tagOrAPIKey - The tag or API key of the player
 * @param apiKeyOrProps - The API key or optional parameters
 * @param optionalProps - Optional parameters
 * @returns {StoredMMRV1Response}
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
 * @throws {INVALID_REGION} - If the region is invalid
 */
export async function getStoredMMRHistoryV1(region: Region, name: string, tag: string, apiKey?: string, props?: StoredMMRV1OptionalProps): Promise<StoredMMRV1Response>;
export async function getStoredMMRHistoryV1(region: Region, puuid: string, apiKey?: string, props?: StoredMMRV1OptionalProps): Promise<StoredMMRV1Response>;
export async function getStoredMMRHistoryV1(region?: Region, nameOrPuuid?: string, tagOrAPIKey?: string, apiKeyOrProps?: string | StoredMMRV1OptionalProps, optionalProps?: StoredMMRV1OptionalProps): Promise<StoredMMRV1Response> {
  return getExampleData<StoredMMRV1Response>('getStoredMMRHistoryV1');
}