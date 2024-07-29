import { INTERNAL_ERROR, INVALID_API_KEY } from "../constants";
import { GameData, GameDataOptionalProps, GameDataResponse } from "../types";
import { get, validateAPIKey } from "./lib";

/**
 * Game Data V1
 * Fetch game data by locale
 * @param apiKey - The API key
 * @param props - Optional parameters
 * @returns {GameDataResponse}
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
 */
export async function fetchGameData(apiKey: string, props?: GameDataOptionalProps): Promise<GameDataResponse> {
  if (!validateAPIKey(apiKey)) return { errors: [INVALID_API_KEY] };

  try {
    return get<GameData>(apiKey, '/v1/game-data', props || {});
  } catch (error) {
    console.error('Error fetching game data:', error);
    return { errors: [INTERNAL_ERROR] };
  }
}