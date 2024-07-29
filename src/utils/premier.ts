import { INTERNAL_ERROR, INVALID_API_KEY } from "../constants";
import { addQueryParams, initiateAxios, validateAPIKey } from "./lib";

export async function getPremierTeamDetailsV1(name: string, tag: string, apiKey: string): Promise<PremierTeamDetailsV1Response>;
export async function getPremierTeamDetailsV1(id: string, apiKey: string): Promise<PremierTeamDetailsV1Response>;
export async function getPremierTeamDetailsV1(team_id_or_name: string, team_tag_or_apiKey: string, possiblyApiKey?: string): Promise<PremierTeamDetailsV1Response> {
  let url: string;
  let apiKey: string;

  if (typeof possiblyApiKey === 'string') {
    const name = team_id_or_name;
    const tag = team_tag_or_apiKey;
    apiKey = possiblyApiKey;

    url = addQueryParams(`/v1/premier/${name}/${tag}`, {});
  } else {
    const id = team_id_or_name;
    apiKey = team_tag_or_apiKey;

    url = addQueryParams(`/v1/premier/${id}`, {});
  }

  if (!validateAPIKey(apiKey)) return { errors: [INVALID_API_KEY] };

  try {
    const axiosInstance = initiateAxios(apiKey);
    const response = await axiosInstance.get<PremierTeamDetailsV1Response>(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching premier team details:", error);
    return { errors: [INTERNAL_ERROR] };
  }
}

export async function getPremierTeamHistoryV1(name: string, tag: string, apiKey: string): Promise<PremierTeamHistoryV1Response>;
export async function getPremierTeamHistoryV1(id: string, apiKey: string): Promise<PremierTeamHistoryV1Response>;
export async function getPremierTeamHistoryV1(team_id_or_name: string, team_tag_or_apiKey: string, possiblyApiKey?: string): Promise<PremierTeamHistoryV1Response> {
  let url: string;
  let apiKey: string;

  if (typeof possiblyApiKey === 'string') {
    const name = team_id_or_name;
    const tag = team_tag_or_apiKey;
    apiKey = possiblyApiKey;

    url = addQueryParams(`/v1/premier/${name}/${tag}/history`, {});
  } else {
    const id = team_id_or_name;
    apiKey = team_tag_or_apiKey;

    url = addQueryParams(`/v1/premier/${id}/history`, {});
  }

  if (!validateAPIKey(apiKey)) return { errors: [INVALID_API_KEY] };

  try {
    const axiosInstance = initiateAxios(apiKey);
    const response = await axiosInstance.get<PremierTeamHistoryV1Response>(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching premier team history:", error);
    return { errors: [INTERNAL_ERROR] };
  }
}

export async function searchPremierTeamsV1(props: PremierTeamSearchV1Props, apiKey: string): Promise<PremierTeamSearchV1Response> {
  const url = addQueryParams(`/v1/premier/search`, props);

  if (!validateAPIKey(apiKey)) return { errors: [INVALID_API_KEY] };

  try {
    const axiosInstance = initiateAxios(apiKey);
    const response = await axiosInstance.get<PremierTeamSearchV1Response>(url);
    return response.data;
  } catch (error) {
    console.error("Error searching premier teams:", error);
    return { errors: [INTERNAL_ERROR] };
  }
}

export async function getPremierConferences(apiKey: string): Promise<PremierConferenceV1Response> {
  const url = `/v1/premier/conferences`;

  if (!validateAPIKey(apiKey)) return { errors: [INVALID_API_KEY] };

  try {
    const axiosInstance = initiateAxios(apiKey);
    const response = await axiosInstance.get<PremierConferenceV1Response>(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching premier conferences:", error);
    return { errors: [INTERNAL_ERROR] };
  }
}

export async function getPremierSeasonsV1(region: Region, apiKey: string): Promise<PremierSeasonsV1Response> {
  const url = `/v1/premier/seasons/${region}`;

  if (!validateAPIKey(apiKey)) return { errors: [INVALID_API_KEY] };

  try {
    const axiosInstance = initiateAxios(apiKey);
    const response = await axiosInstance.get<PremierSeasonsV1Response>(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching premier seasons:", error);
    return { errors: [INTERNAL_ERROR] };
  }
}

export async function getPremierLeaderboard(region: Region, conference: PremierLeaderboardConference, division: number, apiKey: string): Promise<PremierLeaderboardResponse>;
export async function getPremierLeaderboard(region: Region, conference: PremierLeaderboardConference, apiKey: string): Promise<PremierLeaderboardResponse>;
export async function getPremierLeaderboard(region: Region, apiKey: string): Promise<PremierLeaderboardResponse>;
export async function getPremierLeaderboard(region: Region, param1: PremierLeaderboardConference | string, param2?: number | string, param3?: string): Promise<PremierLeaderboardResponse> {
  let url: string;
  let apiKey: string;

  if (typeof param1 === 'string' && !param2 && !param3) {
    apiKey = param1;
    url = `/v1/premier/leaderboard/${region}`;
  } else if (typeof param1 === 'string' && typeof param2 === 'string' && !param3) {
    const conference = param1 as PremierLeaderboardConference;
    apiKey = param2 as string;
    url = `/v1/premier/leaderboard/${region}/${conference}`;
  } else if (typeof param1 === 'string' && typeof param2 === 'number' && typeof param3 === 'string') {
    const conference = param1 as PremierLeaderboardConference;
    const division = param2 as number;
    apiKey = param3 as string;
    url = `/v1/premier/leaderboard/${region}/${conference}/${division}`;
  } else {
    throw new Error("Invalid arguments");
  }

  if (!validateAPIKey(apiKey)) return { errors: [INVALID_API_KEY] };

  try {
    const axiosInstance = initiateAxios(apiKey);
    const response = await axiosInstance.get<PremierLeaderboardResponse>(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching premier leaderboard:", error);
    return { errors: [INTERNAL_ERROR] };
  }
}