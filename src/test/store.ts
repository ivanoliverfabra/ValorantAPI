import { FeaturedStoreV1Response, FeaturedStoreV2Response, StoreOffersV1Response, StoreOffersV2Response } from "../types";
import { getExampleData } from "../utils/lib";

/**
 * Store Featured V1
 * Fetch the featured store items
 * @param apiKey - The API key
 * @returns {FeaturedStoreV1Response}
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
 */
export async function getStoreFeaturedV1(apiKey?: string): Promise<FeaturedStoreV1Response> {
  return getExampleData<FeaturedStoreV1Response>('getStoreFeaturedV1');
}

/**
 * Store Featured V2
 * @param apiKey - The API key
 * @returns {FeaturedStoreV2Response}
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
 */
export async function getStoreFeaturedV2(apiKey?: string): Promise<FeaturedStoreV2Response> {
  return getExampleData<FeaturedStoreV2Response>('getStoreFeaturedV2');
}

/**
 * Store Offers V1
 * Fetch the store offers
 * @param apiKey - The API key
 * @returns {StoreOffersV1Response}
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
 */
export async function getStoreOffersV1(apiKey?: string): Promise<StoreOffersV1Response> {
  return getExampleData<StoreOffersV1Response>('getStoreOffersV1');
}

/**
 * Store Offers V2
 * Fetch the store offers
 * @param apiKey - The API key
 * @returns {StoreOffersV2Response}
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
 */
export async function getStoreOffersV2(apiKey?: string): Promise<StoreOffersV2Response> {
  return getExampleData<StoreOffersV2Response>('getStoreOffersV2');
}