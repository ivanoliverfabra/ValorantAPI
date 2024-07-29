import { INTERNAL_ERROR, INVALID_API_KEY, INVALID_COUNTRY_CODE } from "../constants";
import { CountryCode, ValorantNewsArticleV1Response } from "../types";
import { get, parseError, validateAPIKey, validateCountryCode } from "./lib";

/**
 * Valorant News Article V1
 * Fetch Valorant news articles
 * @param countryCode - The country code to fetch the news articles for
 * @param apiKey - The API key
 * @returns {ValorantNewsArticleV1Response}
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
 */
export async function getValorantNewsArticles(countryCode: CountryCode, apiKey: string): Promise<ValorantNewsArticleV1Response> {
  if (!validateAPIKey(apiKey)) return parseError(INVALID_API_KEY);
  if (!validateCountryCode(countryCode)) return parseError(INVALID_COUNTRY_CODE);

  try {
    return get(apiKey, `/v1/website/${countryCode}`);
  } catch (error) {
    return parseError(INTERNAL_ERROR);
  }
}