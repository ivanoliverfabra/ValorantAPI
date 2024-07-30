import { CountryCode, ValorantNewsArticleV1Response } from "../types";
import { getExampleData } from "../utils/lib";

/**
 * Valorant News Article V1
 * Fetch Valorant news articles
 * @param countryCode - The country code to fetch the news articles for
 * @param apiKey - The API key
 * @returns {ValorantNewsArticleV1Response}
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
 */
export async function getValorantNewsArticles(countryCode?: CountryCode, apiKey?: string): Promise<ValorantNewsArticleV1Response> {
  return getExampleData<ValorantNewsArticleV1Response>('getValorantNewsArticles');
}