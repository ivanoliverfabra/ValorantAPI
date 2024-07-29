import { INTERNAL_ERROR, INVALID_API_KEY, INVALID_REGION } from "../constants";
import { get, validateAPIKey, validateRegion } from "./lib";

/**
 * Status V1
 * Fetch the status for a region
 * @param region - The region to fetch the status for
 * @param apiKey - The API key
 * @returns {StatusV1Response}
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
 * @throws {INVALID_REGION} - If the region is invalid
 */
export async function getRegionStatusV1(region: Region, apiKey: string): Promise<StatusV1Response> {
  if (!validateAPIKey(apiKey)) return { errors: [INVALID_API_KEY] };
  if (!validateRegion(region)) return { errors: [INVALID_REGION] };

  try {
    return get<StatusV1Response>(apiKey, `/v1/status/${region}`);
  } catch (e) {
    return { errors: [INTERNAL_ERROR] };
  }
}