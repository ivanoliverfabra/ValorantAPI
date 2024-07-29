import { INTERNAL_ERROR, INVALID_API_KEY, INVALID_REGION } from "../constants";
import { Region, ValorantVersionV1Response } from "../types";
import { get, validateAPIKey, validateRegion } from "./lib";

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
export async function getValorantVersionV1(region: Region, apiKey: string): Promise<ValorantVersionV1Response> {
  if (!validateAPIKey(apiKey)) return { errors: [INVALID_API_KEY] };
  if (!validateRegion(region)) return { errors: [INVALID_REGION] };

  try {
    return get(apiKey, `/v1/version/${region}`)
  } catch (error) {
    return { errors: [INTERNAL_ERROR] };
  }
}