import { INTERNAL_ERROR, INVALID_API_KEY, INVALID_REGION } from "../constants";
import { get, validateAPIKey, validateRegion, warnDeprecated } from "./lib";

/**
 * Match History V3
 * Fetch match history by name and tag or puuid
 * @param region - The region to fetch the match history for
 * @param nameOrPuuid - The name or puuid of the player
 * @param tagOrApiKey - The tag or API key of the player
 * @param apiKeyOrProps - The API key or optional parameters
 * @param optionalProps - Optional parameters
 * @returns {MatchHistoryV3Response}
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
 * @throws {INVALID_REGION} - If the region is invalid
 */
export async function getMatchHistoryV3(region: Region, name: string, tag: string, apiKey: string): Promise<MatchHistoryV3Response>;
export async function getMatchHistoryV3(region: Region, name: string, tag: string, apiKey: string, props?: MatchHistoryV3OptionalProps): Promise<MatchHistoryV3Response>;
export async function getMatchHistoryV3(region: Region, puuid: string, apiKey: string): Promise<MatchHistoryV3Response>;
export async function getMatchHistoryV3(region: Region, nameOrPuuid: string, tagOrApiKey: string, apiKeyOrProps?: string | MatchHistoryV3OptionalProps, optionalProps?: MatchHistoryV3OptionalProps): Promise<MatchHistoryV3Response> {
  warnDeprecated("getUserMatchHistoryV3", "getUserMatchHistoryV4");

  let url: string;
  let apiKey: string;
  let props: MatchHistoryV3OptionalProps | undefined;

  if (typeof apiKeyOrProps === 'string') {
    const name = nameOrPuuid;
    const tag = tagOrApiKey;
    apiKey = apiKeyOrProps;
    props = optionalProps;
    url = `/v3/matches/${region}/${name}/${tag}`;
  } else {
    const puuid = nameOrPuuid;
    apiKey = tagOrApiKey as string;
    props = apiKeyOrProps as MatchHistoryV3OptionalProps | undefined;
    url = `/v3/by-puuid/matches/${region}/${puuid}`;
  }

  if (!validateAPIKey(apiKey)) return { errors: [INVALID_API_KEY] };
  if (!validateRegion(region)) return { errors: [INVALID_REGION] };

  try {
    return get<MatchHistoryV3Response>(apiKey, url, props || {});
  } catch (error) {
    console.error("Error fetching match history:", error);
    return { errors: [INTERNAL_ERROR] };
  }
}

/**
 * Match History V4
 * Fetch match history by name and tag or puuid
 * @param region - The region to fetch the match history for
 * @param platform - The platform to fetch the match history for
 * @param nameOrPuuid - The name or puuid of the player
 * @param tagOrApiKey - The tag or API key of the player
 * @param apiKeyOrProps - The API key or optional parameters
 * @param optionalProps - Optional parameters
 * @returns {MatchHistoryV4Response}
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
 * @throws {INVALID_REGION} - If the region is invalid
 */
export async function getMatchHistoryV4(region: Region, platform: Platform, name: string, tag: string, apiKey: string): Promise<MatchHistoryV4Response>;
export async function getMatchHistoryV4(region: Region, platform: Platform, name: string, tag: string, apiKey: string, props?: MatchHistoryV4OptionalProps): Promise<MatchHistoryV4Response>;
export async function getMatchHistoryV4(region: Region, platform: Platform, puuid: string, apiKey: string): Promise<MatchHistoryV4Response>;
export async function getMatchHistoryV4(region: Region, platform: Platform, nameOrPuuid: string, tagOrApiKey: string, apiKeyOrProps?: string | MatchHistoryV4OptionalProps, optionalProps?: MatchHistoryV4OptionalProps): Promise<MatchHistoryV4Response> {
  let url: string;
  let apiKey: string;
  let props: MatchHistoryV4OptionalProps | undefined;

  if (typeof apiKeyOrProps === 'string') {
    const name = nameOrPuuid;
    const tag = tagOrApiKey;
    apiKey = apiKeyOrProps;
    props = optionalProps;
    url = `/v4/matches/${region}/${platform}/${name}/${tag}`;
  } else {
    const puuid = nameOrPuuid;
    apiKey = tagOrApiKey as string;
    props = apiKeyOrProps as MatchHistoryV4OptionalProps | undefined;
    url = `/v4/by-puuid/matches/${region}/${platform}/${puuid}`;
  }

  if (!validateAPIKey(apiKey)) return { errors: [INVALID_API_KEY] };
  if (!validateRegion(region)) return { errors: [INVALID_REGION] };

  try {
    return get<MatchHistoryV4Response>(apiKey, url, props || {});
  } catch (error) {
    console.error("Error fetching match history:", error);
    return { errors: [INTERNAL_ERROR] };
  }
}

/**
 * Stored Matches V1
 * Fetch stored matches by name and tag or puuid
 * @param region - The region to fetch the stored matches for
 * @param nameOrPuuid - The name or puuid of the player
 * @param tagOrApiKey - The tag or API key of the player
 * @param apiKeyOrProps - The API key or optional parameters
 * @param optionalProps - Optional parameters
 * @returns {StoredMatchesV1Response}
 * @throws {INTERNAL_ERROR} - If an error occurs while fetching the data
 * @throws {INVALID_API_KEY} - If the API key is invalid
 * @throws {INVALID_REGION} - If the region is invalid
 */
export async function getStoredMatchesV1(region: Region, name: string, tag: string, apiKey: string): Promise<StoredMatchesV1Response>;
export async function getStoredMatchesV1(region: Region, name: string, tag: string, apiKey: string, props?: StoredMatchesV1OptionalProps): Promise<StoredMatchesV1Response>;
export async function getStoredMatchesV1(region: Region, puuid: string, apiKey: string): Promise<StoredMatchesV1Response>;
export async function getStoredMatchesV1(region: Region, nameOrPuuid: string, tagOrApiKey: string, apiKeyOrProps?: string | StoredMatchesV1OptionalProps, optionalProps?: StoredMatchesV1OptionalProps): Promise<StoredMatchesV1Response> {
  let url: string;
  let apiKey: string;
  let props: StoredMatchesV1OptionalProps | undefined;

  if (typeof apiKeyOrProps === 'string') {
    apiKey = apiKeyOrProps;
    props = optionalProps;
    url = `/v1/stored-matches/${region}/${nameOrPuuid}/${tagOrApiKey}`;
  } else {
    apiKey = tagOrApiKey as string;
    props = apiKeyOrProps as StoredMatchesV1OptionalProps | undefined;
    url = `/v1/by-puuid/stored-matches/${region}/${nameOrPuuid}`;
  }

  if (!validateAPIKey(apiKey)) return { errors: [INVALID_API_KEY] };
  if (!validateRegion(region)) return { errors: [INVALID_REGION] };

  try {
    return get<StoredMatchesV1Response>(apiKey, url, props || {});
  } catch (error) {
    console.error("Error fetching stored matches:", error);
    return { errors: [INTERNAL_ERROR] };
  }
}