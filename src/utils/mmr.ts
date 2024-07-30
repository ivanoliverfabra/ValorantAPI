import { INTERNAL_ERROR, INVALID_API_KEY, INVALID_REGION } from "../constants";
import { MMRDataV2OptionalProps, MMRDataV2Response, MMRDataV3Response, Platform, Region } from "../types";
import { get, parseAPIKey, parseError, validateAPIKey, validatePUUID, validateRegion } from "./lib";

/**
 * MMR Data V2
 * Fetch MMR data by region and player name or puuid
 * @param region - The region to fetch the MMR data for
 * @param nameOrPuuid - The name or puuid of the player
 * @param tagOrApiKey - The tag or API key of the player
 * @param apiKeyOrProps - The API key or optional parameters
 * @param props - Optional parameters
 * @returns {MMRDataV2Response}
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
 * @throws {INVALID_REGION} - If the region is invalid
 */
export async function getMMRDataV2(region: Region, name: string, tag: string, apiKey?: string, props?: MMRDataV2OptionalProps): Promise<MMRDataV2Response>;
export async function getMMRDataV2(region: Region, puuid: string, apiKey?: string, props?: MMRDataV2OptionalProps): Promise<MMRDataV2Response>;
export async function getMMRDataV2(region: Region, nameOrPuuid?: string, tagOrApiKey?: string, apiKeyOrProps?: string | MMRDataV2OptionalProps, optionalProps?: MMRDataV2OptionalProps): Promise<MMRDataV2Response> {
  let url: string;
  let apiKey: string;
  let props: MMRDataV2OptionalProps | undefined;

  if (typeof apiKeyOrProps === 'string' || typeof apiKeyOrProps === 'undefined' && !validatePUUID(nameOrPuuid || "")) {
    apiKey = parseAPIKey(apiKeyOrProps);
    props = optionalProps;
    url = `/v2/mmr/${region}/${nameOrPuuid!}/${tagOrApiKey!}`;
  } else {
    apiKey = parseAPIKey(tagOrApiKey);
    props = apiKeyOrProps as MMRDataV2OptionalProps | undefined;
    url = `/v2/by-puuid/mmr/${region}/${nameOrPuuid!}`;
  }

  if (!validateAPIKey(apiKey)) return parseError(INVALID_API_KEY);
  if (!validateRegion(region)) return parseError(INVALID_REGION);

  try {
    return await get<MMRDataV2Response>(apiKey, url, props || {});
  } catch (error) {
    console.error("Error fetching MMR data:", error);
    return parseError(INTERNAL_ERROR);
  }
}

/**
 * MMR Data V3
 * Fetch MMR data by region and player name or puuid
 * @param region - The region to fetch the MMR data for
 * @param platform - The platform to fetch the MMR data for
 * @param nameOrPuuid - The name or puuid of the player
 * @param tagOrApiKey - The tag or API key of the player
 * @param apiKey - The API key
 * @returns {MMRDataV3Response}
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
 * @throws {INVALID_REGION} - If the region is invalid
 */
export async function getMMRDataV3(region: Region, platform: Platform, name: string, tag: string, apiKey?: string): Promise<MMRDataV3Response>;
export async function getMMRDataV3(region: Region, platform: Platform, puuid: string, apiKey?: string): Promise<MMRDataV3Response>;
export async function getMMRDataV3(region: Region, platform: Platform, nameOrPuuid: string, tagOrApiKey?: string, possiblyApiKey?: string): Promise<MMRDataV3Response> {
  let url: string;
  let apiKey: string;

  if (typeof possiblyApiKey === 'string' || !validatePUUID(nameOrPuuid)) {
    apiKey = parseAPIKey(possiblyApiKey);
    url = `/v3/mmr/${region}/${platform}/${nameOrPuuid}/${tagOrApiKey}`;
  } else {
    apiKey = parseAPIKey(tagOrApiKey);
    url = `/v3/by-puuid/mmr/${region}/${platform}/${nameOrPuuid!}`;
  }

  if (!validateAPIKey(apiKey)) return parseError(INVALID_API_KEY);
  if (!validateRegion(region)) return parseError(INVALID_REGION);

  try {
    return get<MMRDataV3Response>(apiKey, url);
  } catch (error) {
    console.error("Error fetching MMR data:", error);
    return parseError(INTERNAL_ERROR);
  }
}