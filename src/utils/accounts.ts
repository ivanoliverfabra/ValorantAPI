import { INTERNAL_ERROR, INVALID_API_KEY } from "../constants";
import { initiateAxios, validateAPIKey } from "./lib";

export async function getAccountDataV1(name: string, tag: string, apiKey: string): Promise<AccountDataV1Response>;
export async function getAccountDataV1(puuid: string, apiKey: string): Promise<AccountDataV1Response>;
export async function getAccountDataV1(param1: string, param2: string, param3?: string): Promise<AccountDataV1Response> {
  const apiKey = param3 ? param3 : param2;
  const isPuuid = !param3;

  if (!validateAPIKey(apiKey)) return { errors: [INVALID_API_KEY] };

  try {
    const axiosInstance = initiateAxios(apiKey);

    let response;
    if (isPuuid) {
      const puuid = param1;
      response = await axiosInstance.get<AccountDataV1Response>(`/v1/by-puuid/account/${puuid}`);
    } else {
      const name = param1;
      const tag = param2;
      response = await axiosInstance.get<AccountDataV1Response>(`/v1/account/${name}/${tag}`);
    }
    
    return response.data;
  } catch (error) {
    console.error('Error fetching account data:', error);
    return { errors: [INTERNAL_ERROR] };
  }
}

export async function getAccountDataV2(name: string, tag: string, apiKey: string): Promise<AccountDataV2Response>;
export async function getAccountDataV2(puuid: string, apiKey: string): Promise<AccountDataV2Response>;
export async function getAccountDataV2(param1: string, param2: string, param3?: string): Promise<AccountDataV2Response> {
  const apiKey = param3 ? param3 : param2;
  const isPuuid = !param3;

  if (!validateAPIKey(apiKey)) return { errors: [INVALID_API_KEY] };

  try {
    const axiosInstance = initiateAxios(apiKey);

    let response;
    if (isPuuid) {
      const puuid = param1;
      response = await axiosInstance.get<AccountDataV2Response>(`/v2/by-puuid/account/${puuid}`);
    } else {
      const name = param1;
      const tag = param2;
      response = await axiosInstance.get<AccountDataV2Response>(`/v2/account/${name}/${tag}`);
    }
    
    return response.data;
  } catch (error) {
    console.error('Error fetching account data:', error);
    return { errors: [INTERNAL_ERROR] };
  }
}