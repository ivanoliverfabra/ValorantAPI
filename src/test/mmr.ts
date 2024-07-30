import { MMRDataV2OptionalProps, MMRDataV2Response, MMRDataV3Response, Platform, Region } from "../types";
import { getExampleData } from "../utils/lib";

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
export async function getMMRDataV2(region?: Region, nameOrPuuid?: string, tagOrApiKey?: string, apiKeyOrProps?: string | MMRDataV2OptionalProps, optionalProps?: MMRDataV2OptionalProps): Promise<MMRDataV2Response> {
  return getExampleData<MMRDataV2Response>('getMMRDataV2');
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
export async function getMMRDataV3(region?: Region, platform?: Platform, nameOrPuuid?: string, tagOrApiKey?: string, possiblyApiKey?: string): Promise<MMRDataV3Response> {
  return getExampleData<MMRDataV3Response>('getMMRDataV3');
}