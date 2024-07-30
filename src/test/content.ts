import { GameDataOptionalProps, GameDataResponse } from "../types";
import { getExampleData } from "../utils/lib";

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
  return getExampleData<GameDataResponse>('fetchGameData');
}