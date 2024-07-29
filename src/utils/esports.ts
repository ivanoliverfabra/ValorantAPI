import { INTERNAL_ERROR, INVALID_API_KEY } from "../constants";
import { addQueryParams, initiateAxios, validateAPIKey } from "./lib";

export async function getUpcomingMatches(apiKey: string, region?: MatchRegion, league?: MatchLeague): Promise<MatchResponse> {
  if (!validateAPIKey(apiKey)) return { errors: [INVALID_API_KEY] };

  try {
    const axiosInstance = initiateAxios(apiKey);
    const url = addQueryParams('/v1/esports/schedule', { region, league });
    const response = await axiosInstance.get<MatchResponse>(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching upcoming matches:', error);
    return { errors: [INTERNAL_ERROR] };
  }
}