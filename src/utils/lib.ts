import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { API_KEY_REGEX, BASE_API_URL, COUNTRYCODES, REGIONS } from "../constants";
import { APIResponse, CountryCode, DataError, FunctionParams, Region, StatusCodeTuple } from "../types";

export function validateAPIKey(apiKey: string): boolean {
  return API_KEY_REGEX.test(apiKey);
}

export function validateRegion(region: Region): boolean {
  return REGIONS.includes(region);
}

export function validateCountryCode(countryCode: CountryCode): boolean {
  return COUNTRYCODES.includes(countryCode);
}

export function initiateAxios(apiKey: string): AxiosInstance {
  return axios.create({
    baseURL: BASE_API_URL,
    headers: {
      "Authorization": apiKey
    }
  });
};

export function addQueryParams(url: string, params: { [key: string]: any }): string {
  const [baseUrl, queryString] = url.split('?');
  const urlParams = new URLSearchParams(queryString);

  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined) return;
    urlParams.set(key, value.toString());
  });

  const finalUrl = `${baseUrl}?${urlParams.toString()}`;
  return finalUrl;
}

export async function get<T = APIResponse>(apiKey: string, url: string, params?: FunctionParams, options?: AxiosRequestConfig): Promise<T> {
  try {
    const { data } = await initiateAxios(apiKey).get<T & { status: number }>(addQueryParams(url, params || {}), options);
    const { status, ...rest } = data;
    return {
      success: true,
      ...rest as T,
    };
  } catch (error: any) {
    throw new Error(`Error fetching data: ${error?.message || 'Unknown error'}`);
  }
}

export async function post<T = unknown>(apiKey: string, url: string, body?: FunctionParams, params?: FunctionParams, options?: AxiosRequestConfig): Promise<T> {
  try {
    const { data } = await initiateAxios(apiKey).post<T>(addQueryParams(url, params || {}), body, options);
    return {
      success: true,
      ...data
    };
  } catch (error: any) {
    throw new Error(`Error fetching data: ${error?.message || 'Unknown error'}`);
  }
}

export function warnDeprecated(deprecated: string, replacement: string): void {
  console.warn(`[DEPRECATED] ${deprecated} is deprecated. Use ${replacement} instead.`);
}

export const StatusCodeDescriptions: { [key in StatusCodeTuple as `${key[0]}_${key[1]}`]: string } = {
  "0_404": "Endpoint not found",
  "0_400": "General bad user input",
  "0_401": "Missing API Key [INFO]",
  "0_403": "Invalid API Key [INFO]",
  "0_429": "Rate Limit, check headers for more information",
  "1_500": "Internal Error",
  "2_501": "API Endpoint in this version does not exist",
  "3_404": "File not found",
  "4_400": "Invalid File",
  "5_500": "Error while parsing",
  "6_400": "Invalid region",
  "7_400": "Invalid Country Code",
  "8_400": "Invalid website category",
  "9_500": "Error while fetching needed resource",
  "10_400": "Unknown raw type",
  "11_400": "JSON parsing error. Check input JSON",
  "12_-": "- Internal -",
  "13_500": "Internal Redis connection error",
  "14_-": "- Internal -",
  "15_500": "Premier endpoint temporary issues (check discord)",
  "16_404": "Premier team not found",
  "17_400": "Query param division must be a number",
  "18_400": "Query param division must be a number between 1 & 21",
  "19_400": "Invalid premier conference",
  "20_400": "Premier mixed queries detected (name & tag and puuid)",
  "21_500": "Error while connecting to regular database",
  "22_404": "Account not found",
  "23_404": "Region for user not found. Please ask the user to play a deathmatch or another gamemode",
  "24_404": "Error while fetching needed match data to retrieve users level & more",
  "25_404": "No MMR data found for user",
  "26_404": "Match not found",
  "27_400": "Invalid mode/queue",
  "28_400": "Invalid map",
  "29_400": "Missing query param size",
  "30_400": "Query param size & page must be a number",
  "31_400": "Query param size must be greater than 0",
  "32_400": "Query param page must be greater than 0",
  "33_400": "Invalid season",
  "34_400": "Query name is required",
  "35_400": "Query tag is required",
  "36_404": "User not found in leaderboard",
};

export function getStatusCodeDescription(code: number, status: number | "-"): string {
  const key = `${code}_${status}` as keyof typeof StatusCodeDescriptions;
  return StatusCodeDescriptions[key];
}

export function parseError<T = any, R = {}, S extends number = 400>(data: DataError<S>): APIResponse<T, R, S> {
  return { success: false, errors: [data] };
}