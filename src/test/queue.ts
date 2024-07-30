import { QueueStatusV1Response, Region } from "../types";
import { getExampleData } from "../utils/lib";

/**
 * Queue Status V1
 * Fetch the queue status for a region
 * @param region - The region to fetch the queue status for
 * @param apiKey - The API key
 * @returns {QueueStatusV1Response}
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
 * @throws {INVALID_REGION} - If the region is invalid
 * @deprecated No longer supported
 */
export async function getQueueStatus(region?: Region, apiKey?: string): Promise<QueueStatusV1Response> {
  return getExampleData<QueueStatusV1Response>('getQueueStatus');
}