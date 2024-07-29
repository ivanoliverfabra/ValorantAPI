import { INTERNAL_ERROR, INVALID_API_KEY } from "../constants";
import { get, validateAPIKey } from "./lib";

/**
 * Account Data V1
 * Get account data by name and tag or puuid
 * @param param1 - The name or puuid of the account
 * @param param2 - The tag of the account or the API key
 * @param param3 - The API key or optional parameters
 * @param param4 - Optional parameters
 * @returns {AccountDataV1Response}
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
*/
export async function getAccountDataV1(name: string, tag: string, apiKey: string, props?: AccountDataV1OptionalProps): Promise<AccountDataV1Response>;
export async function getAccountDataV1(puuid: string, apiKey: string, props?: AccountDataV1OptionalProps): Promise<AccountDataV1Response>;
export async function getAccountDataV1(param1: string, param2: string, param3?: string | AccountDataV1OptionalProps, param4?: AccountDataV1OptionalProps): Promise<AccountDataV1Response> {
  const isPuuid = typeof param3 !== 'string';
  const apiKey = isPuuid ? param2 : param3 as string;
  const props = isPuuid ? param3 as AccountDataV1OptionalProps : param4;

  if (!validateAPIKey(apiKey)) return { errors: [INVALID_API_KEY] };

  try {
    const url = isPuuid ? `/v1/by-puuid/account/${param1}` : `/v1/account/${param1}/${param2}`;
    return get<AccountDataV1Response>(apiKey, url, props || {});
  } catch (error) {
    console.error('Error fetching account data:', error);
    return { errors: [INTERNAL_ERROR] };
  }
}

/**
 * Account Data V2
 * Get account data by name and tag or puuid
 * @param param1 - The name or puuid of the account
 * @param param2 - The tag of the account or the API key
 * @param param3 - The API key or optional parameters
 * @param param4 - Optional parameters
 * @returns {AccountDataV2Response}
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
*/
export async function getAccountDataV2(name: string, tag: string, apiKey: string, props?: AccountDataV2OptionalProps): Promise<AccountDataV2Response>;
export async function getAccountDataV2(puuid: string, apiKey: string, props?: AccountDataV2OptionalProps): Promise<AccountDataV2Response>;
export async function getAccountDataV2(param1: string, param2: string, param3?: string | AccountDataV2OptionalProps, param4?: AccountDataV2OptionalProps): Promise<AccountDataV2Response> {
  const isPuuid = typeof param3 !== 'string';
  const apiKey = isPuuid ? param2 : param3 as string;
  const props = isPuuid ? param3 as AccountDataV2OptionalProps : param4;

  if (!validateAPIKey(apiKey)) return { errors: [INVALID_API_KEY] };

  try {
    const url = isPuuid ? `/v2/by-puuid/account/${param1}` : `/v2/account/${param1}/${param2}`;
    return get<AccountDataV2Response>(apiKey, url, props || {});
  } catch (error) {
    console.error('Error fetching account data:', error);
    return { errors: [INTERNAL_ERROR] };
  }
}