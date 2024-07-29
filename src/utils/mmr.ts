import { INTERNAL_ERROR, INVALID_API_KEY } from "../constants";
import { addQueryParams, initiateAxios, validateAPIKey } from "./lib";

export async function getMMRDataV2(region: Region, name: string, tag: string, apiKey: string, props?: MMRDataV2OptionalProps): Promise<MMRDataV2Response>;
export async function getMMRDataV2(region: Region, puuid: string, apiKey: string, props?: MMRDataV2OptionalProps): Promise<MMRDataV2Response>;
export async function getMMRDataV2(region: Region, nameOrPuuid?: string, tagOrApiKey?: string, apiKeyOrProps?: string | MMRDataV2OptionalProps, optionalProps?: MMRDataV2OptionalProps): Promise<MMRDataV2Response> {
  let url: string;
  let apiKey: string;
  let props: MMRDataV2OptionalProps | undefined;

  if (typeof apiKeyOrProps === 'string') {
    const name = nameOrPuuid!;
    const tag = tagOrApiKey!;
    apiKey = apiKeyOrProps;
    props = optionalProps;

    url = addQueryParams(`/v2/mmr/${region}/${name}/${tag}`, props || {});
  } else {
    const puuid = nameOrPuuid!;
    apiKey = tagOrApiKey as string;
    props = apiKeyOrProps as MMRDataV2OptionalProps | undefined;

    url = addQueryParams(`/v2/by-puuid/mmr/${region}/${puuid}`, props || {});
  }

  if (!validateAPIKey(apiKey)) return { errors: [INVALID_API_KEY] };

  try {
    const axiosInstance = initiateAxios(apiKey);
    const response = await axiosInstance.get<MMRDataV2Response>(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching MMR data:", error);
    return { errors: [INTERNAL_ERROR] };
  }
}

export async function getMMRDataV3(region: Region, platform: Platform, name: string, tag: string, apiKey: string): Promise<MMRDataV3Response>;
export async function getMMRDataV3(region: Region, platform: Platform, puuid: string, apiKey: string): Promise<MMRDataV3Response>;
export async function getMMRDataV3(region: Region, platform: Platform, nameOrPuuid: string, tagOrApiKey: string, possiblyApiKey?: string): Promise<MMRDataV3Response> {
  let url: string;
  let apiKey: string;

  if (typeof possiblyApiKey === 'string') {
    const name = nameOrPuuid;
    const tag = tagOrApiKey;
    apiKey = possiblyApiKey;

    url = `/v3/mmr/${region}/${platform}/${name}/${tag}`;
  } else {
    const puuid = nameOrPuuid;
    apiKey = tagOrApiKey;

    url = `/v3/by-puuid/mmr/${region}/${platform}/${puuid}`;
  }

  if (!validateAPIKey(apiKey)) return { errors: [INVALID_API_KEY] };

  try {
    const axiosInstance = initiateAxios(apiKey);
    const response = await axiosInstance.get<MMRDataV3Response>(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching MMR data:", error);
    return { errors: [INTERNAL_ERROR] };
  }
}