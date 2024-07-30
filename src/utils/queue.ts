import { BROKEN_ROUTE, INTERNAL_ERROR, INVALID_API_KEY, INVALID_REGION } from "../constants";
import { QueueStatusV1Response, Region } from "../types";
import { get, parseAPIKey, parseError, validateAPIKey, validateRegion, warnBroken } from "./lib";

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
export async function getQueueStatus(region: Region, apiKey?: string): Promise<QueueStatusV1Response> {
  warnBroken("getQueueStatus");
  return parseError(BROKEN_ROUTE);

  apiKey = parseAPIKey(apiKey);
  if (!validateAPIKey(apiKey)) return parseError(INVALID_API_KEY);
  if (!validateRegion(region)) return parseError(INVALID_REGION);

  try {
    return get<QueueStatusV1Response>(apiKey!, `/v1/queue-status/${region}`);
  } catch (error) {
    return parseError(INTERNAL_ERROR);
  }
}