import { INTERNAL_ERROR, INVALID_API_KEY } from "../constants";
import { UpcomingMatchV1OptionalProps, UpcomingMatchV1Response } from "../types";
import { get, parseError, validateAPIKey } from "./lib";

/**
 * Upcoming Match V1
 * Fetch upcoming esports matches
 * @param apiKey - The API key
 * @param props - Optional parameters
 * @returns {UpcomingMatchV1Response}
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
 */
export async function getUpcomingMatches(apiKey: string, props?: UpcomingMatchV1OptionalProps): Promise<UpcomingMatchV1Response> {
  if (!validateAPIKey(apiKey)) return parseError(INVALID_API_KEY);

  try {
    return get<UpcomingMatchV1Response>(apiKey, '/v1/esports/schedule', props || {});
  } catch (error) {
    console.error('Error fetching upcoming matches:', error);
    return parseError(INTERNAL_ERROR);
  }
}