import { BROKEN_ROUTE, INTERNAL_ERROR, INVALID_API_KEY, INVALID_REGION } from "../constants";
import { Region, StatusV1Response } from "../types";
import { get, parseAPIKey, parseError, validateAPIKey, validateRegion, warnBroken } from "./lib";

/**
 * Status V1
 * Fetch the status for a region
 * @param region - The region to fetch the status for
 * @param apiKey - The API key
 * @returns {StatusV1Response}
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
 * @throws {INVALID_REGION} - If the region is invalid
 * @deprecated No longer supported
 */
export async function getRegionStatusV1(region: Region, apiKey?: string): Promise<StatusV1Response> {
  warnBroken("getRegionStatusV1");
  return parseError(BROKEN_ROUTE);

  apiKey = parseAPIKey(apiKey);
  if (!validateAPIKey(apiKey)) return parseError(INVALID_API_KEY);
  if (!validateRegion(region)) return parseError(INVALID_REGION);

  try {
    return get<StatusV1Response>(apiKey!, `/v1/status/${region}`);
  } catch (e) {
    return parseError(INTERNAL_ERROR);
  }
}