import { PremierConferenceV1Response, PremierLeaderboardConference, PremierLeaderboardResponse, PremierSeasonsV1Response, PremierTeamDetailsV1Response, PremierTeamHistoryV1Response, PremierTeamSearchV1Props, PremierTeamSearchV1Response, Region } from "../types";
import { getExampleData } from "../utils/lib";

/**
 * Premier Team Details V1
 * Fetch premier team details by name or id and tag or API key
 * @param nameOrId - The name or id of the team
 * @param tagOrAPIKey - The tag or API key of the team
 * @param apiKey - The API key
 * @returns {PremierTeamDetailsV1Response}
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
 */
export async function getPremierTeamDetailsV1(name: string, tag: string, apiKey?: string): Promise<PremierTeamDetailsV1Response>;
export async function getPremierTeamDetailsV1(id: string, apiKey?: string): Promise<PremierTeamDetailsV1Response>;
export async function getPremierTeamDetailsV1(team_id_or_name?: string, team_tag_or_apiKey?: string, possiblyApiKey?: string): Promise<PremierTeamDetailsV1Response> {
  return getExampleData<PremierTeamDetailsV1Response>('getPremierTeamDetailsV1');
}

/**
 * Premier Team History V1
 * Fetch premier team history by name or id and tag or API key
 * @param nameOrId - The name or id of the team
 * @param tagOrAPIKey - The tag or API key of the team
 * @param apiKey - The API key
 * @returns {PremierTeamHistoryV1Response}
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
 */
export async function getPremierTeamHistoryV1(name: string, tag: string, apiKey?: string): Promise<PremierTeamHistoryV1Response>;
export async function getPremierTeamHistoryV1(id: string, apiKey?: string): Promise<PremierTeamHistoryV1Response>;
export async function getPremierTeamHistoryV1(team_id_or_name?: string, team_tag_or_apiKey?: string, possiblyApiKey?: string): Promise<PremierTeamHistoryV1Response> {
  return getExampleData<PremierTeamHistoryV1Response>('getPremierTeamHistoryV1');
}

/**
 * Premier Team Matches V1
 * Fetch premier team matches by name or id and tag or API key
 * @param nameOrId - The name or id of the team
 * @param tagOrAPIKey - The tag or API key of the team
 * @param apiKey - The API key
 * @returns {PremierTeamMatchesV1Response}
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
 */
export async function searchPremierTeamsV1(props?: PremierTeamSearchV1Props, apiKey?: string): Promise<PremierTeamSearchV1Response> {
  return getExampleData<PremierTeamSearchV1Response>('searchPremierTeamsV1');
}

/**
 * Premier Team Conferences
 * Fetch premier team conferences by API key
 * @param apiKey - The API key
 * @returns {PremierConferenceV1Response}
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
 */
export async function getPremierConferences(apiKey?: string): Promise<PremierConferenceV1Response> {
  return getExampleData<PremierConferenceV1Response>('getPremierConferences');
}

/**
 * Premier Team Divisions
 * Fetch premier team divisions by API key
 * @param region - The region of the division
 * @param apiKey - The API key
 * @returns {PremierDivisionV1Response}
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
 * @throws {INVALID_REGION} - If the region is invalid
 */
export async function getPremierSeasonsV1(region?: Region, apiKey?: string): Promise<PremierSeasonsV1Response> {
  return getExampleData<PremierSeasonsV1Response>('getPremierSeasonsV1');
}

/**
 * Premier Team Divisions
 * Fetch premier team divisions by API key
 * @param region - The region of the division
 * @param param1 - The conference of the division or the API key
 * @param param2 - The division number or the API key
 * @param param3 - The API key
 * @returns {PremierDivisionV1Response}
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
 * @throws {INVALID_REGION} - If the region is invalid
 */
export async function getPremierLeaderboard(region: Region, conference: PremierLeaderboardConference, division: number, apiKey?: string): Promise<PremierLeaderboardResponse>;
export async function getPremierLeaderboard(region: Region, conference: PremierLeaderboardConference, apiKey?: string): Promise<PremierLeaderboardResponse>;
export async function getPremierLeaderboard(region: Region, apiKey?: string): Promise<PremierLeaderboardResponse>;
export async function getPremierLeaderboard(region?: Region, param1?: PremierLeaderboardConference | string, param2?: number | string, param3?: string): Promise<PremierLeaderboardResponse> {
  return getExampleData<PremierLeaderboardResponse>('getPremierLeaderboard');
}