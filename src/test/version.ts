import { Region, ValorantVersionV1Response } from "../types";
import { getExampleData } from "../utils/lib";

/**
 * Valorant Version V1
 * Fetch the Valorant version for a region
 * @param region - The region to fetch the Valorant version for
 * @param apiKey - The API key
 * @returns {ValorantVersionV1Response}
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
 * @throws {INVALID_REGION} - If the region is invalid
 */
export async function getValorantVersionV1(region?: Region, apiKey?: string): Promise<ValorantVersionV1Response> {
  return getExampleData<ValorantVersionV1Response>('getValorantVersionV1');
}