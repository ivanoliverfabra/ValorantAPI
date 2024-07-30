import { Region, StatusV1Response } from "../types";
import { getExampleData } from "../utils/lib";

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
export async function getRegionStatusV1(region?: Region, apiKey?: string): Promise<StatusV1Response> {
  return getExampleData<StatusV1Response>('getRegionStatusV1');
}