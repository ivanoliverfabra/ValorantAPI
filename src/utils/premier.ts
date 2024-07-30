import { INTERNAL_ERROR, INVALID_API_KEY, INVALID_REGION } from "../constants";
import { PremierConferenceV1Response, PremierLeaderboardConference, PremierLeaderboardResponse, PremierSeasonsV1Response, PremierTeamDetailsV1Response, PremierTeamHistoryV1Response, PremierTeamSearchV1Props, PremierTeamSearchV1Response, Region } from "../types";
import { get, parseAPIKey, parseError, validateAPIKey, validatePUUID, validateRegion } from "./lib";

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
export async function getPremierTeamDetailsV1(team_id_or_name: string, team_tag_or_apiKey?: string, possiblyApiKey?: string): Promise<PremierTeamDetailsV1Response> {
  let url: string;
  let apiKey: string;

  if (typeof possiblyApiKey === 'string' || !validatePUUID(team_id_or_name || "")) {
    apiKey = parseAPIKey(possiblyApiKey);
    url = `/v1/premier/${team_id_or_name}/${team_tag_or_apiKey}`;
  } else {
    apiKey = parseAPIKey(team_tag_or_apiKey);
    url = `/v1/premier/${team_id_or_name}`;
  }

  if (!validateAPIKey(apiKey)) return parseError(INVALID_API_KEY);

  try {
    return get<PremierTeamDetailsV1Response>(apiKey, url);
  } catch (error) {
    console.error("Error fetching premier team details:", error);
    return parseError(INTERNAL_ERROR);
  }
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
export async function getPremierTeamHistoryV1(team_id_or_name: string, team_tag_or_apiKey?: string, possiblyApiKey?: string): Promise<PremierTeamHistoryV1Response> {
  let url: string;
  let apiKey: string;

  if (typeof possiblyApiKey === 'string' || !validatePUUID(team_id_or_name || "")) {
    apiKey = parseAPIKey(possiblyApiKey);
    url = `/v1/premier/${team_id_or_name}/${team_tag_or_apiKey}/history`;
  } else {
    apiKey = parseAPIKey(team_tag_or_apiKey);
    url = `/v1/premier/${team_id_or_name}/history`;
  }

  if (!validateAPIKey(apiKey)) return parseError(INVALID_API_KEY);

  try {
    return get<PremierTeamHistoryV1Response>(apiKey, url);
  } catch (error) {
    console.error("Error fetching premier team history:", error);
    return parseError(INTERNAL_ERROR);
  }
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
export async function searchPremierTeamsV1(props: PremierTeamSearchV1Props, apiKey?: string): Promise<PremierTeamSearchV1Response> {
  const url = `/v1/premier/search`;
  apiKey = parseAPIKey(apiKey);
  if (!validateAPIKey(apiKey)) return parseError(INVALID_API_KEY);

  try {
    return get<PremierTeamSearchV1Response>(apiKey, url, props);
  } catch (error) {
    console.error("Error searching premier teams:", error);
    return parseError(INTERNAL_ERROR);
  }
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
  const url = `/v1/premier/conferences`;
  apiKey = parseAPIKey(apiKey);
  if (!validateAPIKey(apiKey)) return parseError(INVALID_API_KEY);

  try {
    return get<PremierConferenceV1Response>(apiKey, url);
  } catch (error) {
    console.error("Error fetching premier conferences:", error);
    return parseError(INTERNAL_ERROR);
  }
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
export async function getPremierSeasonsV1(region: Region, apiKey?: string): Promise<PremierSeasonsV1Response> {
  const url = `/v1/premier/seasons/${region}`;
  apiKey = parseAPIKey(apiKey);
  if (!validateAPIKey(apiKey)) return parseError(INVALID_API_KEY);
  if (!validateRegion(region)) return parseError(INVALID_REGION);

  try {
    return get<PremierSeasonsV1Response>(apiKey, url);
  } catch (error) {
    console.error("Error fetching premier seasons:", error);
    return parseError(INTERNAL_ERROR);
  }
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
export async function getPremierLeaderboard(region: Region, param1?: PremierLeaderboardConference | string, param2?: number | string, param3?: string): Promise<PremierLeaderboardResponse> {
  let url: string;
  let apiKey: string;

  if (!param2 && !param3) {
    apiKey = parseAPIKey(param1);
    url = `/v1/premier/leaderboard/${region}`;
  } else if (typeof param1 === 'string' && typeof param2 === 'string' && !param3) {
    apiKey = parseAPIKey(param2);
    url = `/v1/premier/leaderboard/${region}/${param1}`;
  } else if (typeof param1 === 'string' && typeof param2 === 'number' && typeof param3 === 'string') {
    apiKey = parseAPIKey(param3);
    url = `/v1/premier/leaderboard/${region}/${param1}/${param2}`;
  } else {
    throw new Error("Invalid arguments");
  }

  if (!validateAPIKey(apiKey)) return parseError(INVALID_API_KEY);
  if (!validateRegion(region)) return parseError(INVALID_REGION);

  try {
    return get<PremierLeaderboardResponse>(apiKey, url);
  } catch (error) {
    console.error("Error fetching premier leaderboard:", error);
    return parseError(INTERNAL_ERROR);
  }
}