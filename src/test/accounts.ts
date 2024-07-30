import { AccountDataV1OptionalProps, AccountDataV1Response, AccountDataV2OptionalProps, AccountDataV2Response } from "../types";
import { getExampleData } from "../utils/lib";

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
export async function getAccountDataV1(name: string, tag: string, apiKey?: string, props?: AccountDataV1OptionalProps): Promise<AccountDataV1Response>;
export async function getAccountDataV1(puuid: string, apiKey?: string, props?: AccountDataV1OptionalProps): Promise<AccountDataV1Response>;
export async function getAccountDataV1(param1?: string, param2?: string, param3?: string | AccountDataV1OptionalProps, param4?: AccountDataV1OptionalProps): Promise<AccountDataV1Response> {
  return getExampleData<AccountDataV1Response>('getAccountDataV1');
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
export async function getAccountDataV2(name: string, tag: string, apiKey?: string, props?: AccountDataV2OptionalProps): Promise<AccountDataV2Response>;
export async function getAccountDataV2(puuid: string, apiKey?: string, props?: AccountDataV2OptionalProps): Promise<AccountDataV2Response>;
export async function getAccountDataV2(param1?: string, param2?: string, param3?: string | AccountDataV2OptionalProps, param4?: AccountDataV2OptionalProps): Promise<AccountDataV2Response> {
  return getExampleData<AccountDataV2Response>('getAccountDataV2');
}