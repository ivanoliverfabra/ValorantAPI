import { INTERNAL_ERROR, INVALID_API_KEY } from "../constants";
import { GameDataOptionalProps, GameDataResponse } from "../types";
import { get, parseAPIKey, parseError, validateAPIKey } from "./lib";

/**
 * Game Data V1
 * Fetch game data by locale
 * @param apiKey - The API key
 * @param props - Optional parameters
 * @returns {GameDataResponse}
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
 */
export async function fetchGameData(apiKey?: string, props?: GameDataOptionalProps): Promise<GameDataResponse> {
  apiKey = parseAPIKey(apiKey);
  if (!validateAPIKey(apiKey)) return parseError(INVALID_API_KEY);

  try {
    return get<GameDataResponse>(apiKey, '/v1/content', props || {});
  } catch (error) {
    console.error('Error fetching game data:', error);
    return parseError(INTERNAL_ERROR);
  }
}