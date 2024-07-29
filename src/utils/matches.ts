import { INTERNAL_ERROR, INVALID_API_KEY } from "../constants";
import { initiateAxios, validateAPIKey } from "./lib";

export async function getMatchDetailsV2(matchId: string, apiKey: string): Promise<MatchDetailsV2Response> {
  if (!validateAPIKey(apiKey)) return { errors: [INVALID_API_KEY] };
  
  try {
    const axiosInstance = initiateAxios(apiKey);
    const response = await axiosInstance.get<MatchDetailsV2Response>(`/v2/match/${matchId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching match details:', error);
    return { errors: [INTERNAL_ERROR] };
  }
};

export async function getMatchDetailsV4(platform: Platform, matchId: string, apiKey: string): Promise<MatchDetailsV4Response> {
  if (!validateAPIKey(apiKey)) return { errors: [INVALID_API_KEY] };
  
  try {
    const axiosInstance = initiateAxios(apiKey);
    const response = await axiosInstance.get<MatchDetailsV4Response>(`/v4/match/${platform}/${matchId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching match details:', error);
    return { errors: [INTERNAL_ERROR] };
  }
}