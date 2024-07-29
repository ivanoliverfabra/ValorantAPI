import { INTERNAL_ERROR, INVALID_API_KEY } from "../constants";
import { initiateAxios, validateAPIKey } from "./lib";

export async function getMMRHistoryV1(region: Region, name: string, tag: string, apiKey: string): Promise<MMRHistoryV1Response>;
export async function getMMRHistoryV1(region: Region, puuid: string, apiKey: string): Promise<MMRHistoryV1Response>;
export async function getMMRHistoryV1(region: Region, nameOrPuuid: string, tagOrAPIKey: string, apiKey?: string): Promise<MMRHistoryV1Response> {
  let url: string;

  if (apiKey) {
    const name = nameOrPuuid;
    const tag = tagOrAPIKey;
    url = `/v1/mmr-history/${region}/${name}/${tag}`;
  } else {
    const puuid = nameOrPuuid;
    apiKey = tagOrAPIKey;
    url = `/v1/by-puuid/mmr-history/${region}/${puuid}`;
  }

  if (!validateAPIKey(apiKey)) return { errors: [INVALID_API_KEY] };

  try {
    const axiosInstance = initiateAxios(apiKey);
    const response = await axiosInstance.get<MMRHistoryV1Response>(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching MMR history:", error);
    return { errors: [INTERNAL_ERROR] };
  }
}