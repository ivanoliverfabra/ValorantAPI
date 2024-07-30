import { UpcomingMatchV1OptionalProps, UpcomingMatchV1Response } from "../types";
import { getExampleData } from "../utils/lib";

/**
 * Upcoming Match V1
 * Fetch upcoming esports matches
 * @param apiKey - The API key
 * @param props - Optional parameters
 * @returns {UpcomingMatchV1Response}
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
 */
export async function getUpcomingMatches(apiKey?: string, props?: UpcomingMatchV1OptionalProps): Promise<UpcomingMatchV1Response> {
  return getExampleData<UpcomingMatchV1Response>('getUpcomingMatches');
}