import { CrosshairResponse } from "../types";
import { getExampleData } from "../utils/lib";

/**
 * Crosshair Data V1
 * Generate a crosshair image by id
 * @param id - The id of the crosshair
 * @param apiKey - The API key
 * @returns CrosshairResponse
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
 */
export async function generateCrosshairImage(id?: string, apiKey?: string): Promise<CrosshairResponse> {
  return getExampleData<CrosshairResponse>('generateCrosshairImage');
};