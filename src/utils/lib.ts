import axios, { AxiosInstance } from "axios";
import { API_KEY_REGEX, BASE_API_URL } from "../constants";

export function validateAPIKey(apiKey: string): boolean {
  return API_KEY_REGEX.test(apiKey);
}

export function initiateAxios(apiKey: string): AxiosInstance {
  return axios.create({
    baseURL: BASE_API_URL,
    headers: {
      "Authorization": apiKey
    }
  });
};

export function addQueryParams(url: string, params: Record<string, string | number | boolean | undefined>): string {
  const urlObj = new URL(url);
  const urlParams = new URLSearchParams(urlObj.search);
  
  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined) return;
    urlParams.set(key, value.toString());
  });
  
  urlObj.search = urlParams.toString();
  return urlObj.toString();
}

export function warnDeprecated(deprecated: string, replacement: string): void {
  console.warn(`[DEPRECATED] ${deprecated} is deprecated. Use ${replacement} instead.`);
}