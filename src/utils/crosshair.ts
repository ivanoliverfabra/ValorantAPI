import { INTERNAL_ERROR, INVALID_API_KEY } from "../constants";
import { CrosshairResponse } from "../types";
import { get, parseAPIKey, parseError, validateAPIKey } from "./lib";

/**
 * Crosshair Data V1
 * Generate a crosshair image by id
 * @param id - The id of the crosshair
 * @param apiKey - The API key
 * @returns CrosshairResponse
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
 */
export async function generateCrosshairImage(id: string, apiKey?: string): Promise<CrosshairResponse> {
  apiKey = parseAPIKey(apiKey);
  if (!validateAPIKey(apiKey)) return parseError(INVALID_API_KEY);

  try {
    return get<CrosshairResponse>(apiKey, `/v1/crosshair/generate`, { id });
  } catch (error) {
    console.error('Error fetching crosshair image:', error);
    return parseError(INTERNAL_ERROR);
  }
};