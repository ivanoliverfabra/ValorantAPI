import { INTERNAL_ERROR, INVALID_API_KEY, INVALID_COUNTRY_CODE } from "../constants";
import { get, validateAPIKey, validateCountryCode } from "./lib";

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
  if (!validateAPIKey(apiKey)) return { errors: [INVALID_API_KEY] };
  if (!validateCountryCode(countryCode)) return { errors: [INVALID_COUNTRY_CODE] };

  try {
    return get(apiKey, `/v1/website/${countryCode}`);
  } catch (error) {
    return { errors: [INTERNAL_ERROR] };
  }
}