import { INTERNAL_ERROR, INVALID_API_KEY } from "../constants";
import { FeaturedStoreV1Response, FeaturedStoreV2Response, StoreOffersV1Response, StoreOffersV2Response } from "../types";
import { get, parseError, validateAPIKey } from "./lib";

/**
 * Store Featured V1
 * Fetch the featured store items
 * @param apiKey - The API key
 * @returns {FeaturedStoreV1Response}
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
 */
export async function getStoreFeaturedV1(apiKey: string): Promise<FeaturedStoreV1Response> {
  if (!validateAPIKey(apiKey)) return parseError(INVALID_API_KEY);

  try {
    return get<FeaturedStoreV1Response>(apiKey, "/v1/store-featured");
  } catch (error) {
    console.error("Error fetching featured store items:", error);
    return parseError(INTERNAL_ERROR);
  }
}

/**
 * Store Featured V2
 * @param apiKey - The API key
 * @returns {FeaturedStoreV2Response}
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
 */
export async function getStoreFeaturedV2(apiKey: string): Promise<FeaturedStoreV2Response> {
  if (!validateAPIKey(apiKey)) return parseError(INVALID_API_KEY);

  try {
    return get<FeaturedStoreV2Response>(apiKey, "/v2/store-featured");
  } catch (error) {
    console.error("Error fetching featured store items:", error);
    return parseError(INTERNAL_ERROR);
  }
}

/**
 * Store Offers V1
 * Fetch the store offers
 * @param apiKey - The API key
 * @returns {StoreOffersV1Response}
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
 */
export async function getStoreOffersV1(apiKey: string): Promise<StoreOffersV1Response> {
  if (!validateAPIKey(apiKey)) return parseError(INVALID_API_KEY);

  try {
    return get<StoreOffersV1Response>(apiKey, "/v1/store-offers");
  } catch (error) {
    console.error("Error fetching store offers:", error);
    return parseError(INTERNAL_ERROR);
  }
}

/**
 * Store Offers V2
 * Fetch the store offers
 * @param apiKey - The API key
 * @returns {StoreOffersV2Response}
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
 */
export async function getStoreOffersV2(apiKey: string): Promise<StoreOffersV2Response> {
  if (!validateAPIKey(apiKey)) return parseError(INVALID_API_KEY);

  try {
    return get<StoreOffersV2Response>(apiKey, "/v2/store-offers");
  } catch (error) {
    console.error("Error fetching store offers:", error);
    return parseError(INTERNAL_ERROR);
  }
}