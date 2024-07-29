import { INTERNAL_ERROR, INVALID_API_KEY, INVALID_REGION } from "../constants";
import { MMRHistoryV1Response, Region, StoredMMRV1OptionalProps, StoredMMRV1Response } from "../types";
import { get, parseError, validateAPIKey, validateRegion } from "./lib";

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
export async function getMMRHistoryV1(region: Region, name: string, tag: string, apiKey: string): Promise<MMRHistoryV1Response>;
export async function getMMRHistoryV1(region: Region, puuid: string, apiKey: string): Promise<MMRHistoryV1Response>;
export async function getMMRHistoryV1(region: Region, nameOrPuuid: string, tagOrAPIKey: string, apiKey?: string): Promise<MMRHistoryV1Response> {
  let url: string;

  if (apiKey) {
    const name = nameOrPuuid;
    const tag = tagOrAPIKey;
    url = `/v1/mmr-history/${region}/${name}/${tag}`;
  } else {
    const puuid = nameOrPuuid;
    apiKey = tagOrAPIKey;
    url = `/v1/by-puuid/mmr-history/${region}/${puuid}`;
  }

  if (!validateAPIKey(apiKey)) return parseError(INVALID_API_KEY);
  if (!validateRegion(region)) return parseError(INVALID_REGION);

  try {
    return get<MMRHistoryV1Response>(apiKey, url);
  } catch (error) {
    console.error("Error fetching MMR history:", error);
    return parseError(INTERNAL_ERROR);
  }
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
export async function getStoredMMRHistoryV1(region: Region, name: string, tag: string, apiKey: string, props?: StoredMMRV1OptionalProps): Promise<StoredMMRV1Response>;
export async function getStoredMMRHistoryV1(region: Region, puuid: string, apiKey: string, props?: StoredMMRV1OptionalProps): Promise<StoredMMRV1Response>;
export async function getStoredMMRHistoryV1(region: Region, nameOrPuuid: string, tagOrAPIKey: string, apiKeyOrProps?: string | StoredMMRV1OptionalProps, optionalProps?: StoredMMRV1OptionalProps): Promise<StoredMMRV1Response> {
  let url: string;
  let apiKey: string;
  let props: StoredMMRV1OptionalProps | undefined;

  if (typeof apiKeyOrProps === 'string') {
    apiKey = apiKeyOrProps;
    props = optionalProps;
    url = `/v1/stored-mmr-history/${region}/${nameOrPuuid}/${tagOrAPIKey}`;
  } else {
    apiKey = tagOrAPIKey as string;
    props = apiKeyOrProps as StoredMMRV1OptionalProps | undefined;
    url = `/v1/by-puuid/stored-mmr-history/${region}/${nameOrPuuid}`;
  }

  if (!validateAPIKey(apiKey)) return parseError(INVALID_API_KEY);
  if (!validateRegion(region)) return parseError(INVALID_REGION);

  try {
    return get<StoredMMRV1Response>(apiKey, url, props || {});
  } catch (error) {
    console.error("Error fetching stored MMR history:", error);
    return parseError(INTERNAL_ERROR);
  }
}