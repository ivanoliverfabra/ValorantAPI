import { INTERNAL_ERROR, INVALID_API_KEY, INVALID_REGION } from "../constants";
import { get, validateAPIKey, validateRegion } from "./lib";

/**
 * Queue Status V1
 * Fetch the queue status for a region
 * @param region - The region to fetch the queue status for
 * @param apiKey - The API key
 * @returns {QueueStatusV1Response}
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
 * @throws {INVALID_REGION} - If the region is invalid
 */
export async function getQueueStatus(region: Region, apiKey: string): Promise<QueueStatusV1Response> {
  if (!validateAPIKey(apiKey)) return { errors: [INVALID_API_KEY] };
  if (!validateRegion(region)) return { errors: [INVALID_REGION] };

  try {
    return get<QueueStatusV1Response>(apiKey, `/v1/queue-status/${region}`);
  } catch (error) {
    return { errors: [INTERNAL_ERROR] };
  }
}