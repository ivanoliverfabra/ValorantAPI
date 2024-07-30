import { DataError } from "./types";

export const API_KEY_NAME = 'HDEV_API_KEY';
export const BASE_API_URL = 'https://api.henrikdev.xyz/valorant';
export const API_KEY_REGEX = /^HDEV-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
export const PUUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
export const REGIONS = ['na', 'eu', 'ap', 'kr', 'br', 'latam', 'pbe', 'sea', 'jp'] as const;
export const COUNTRYCODES = ["en-us", "en-gb", "de-de", "es-es", "es-mx", "fr-fr", "it-it", "ja-jp", "ko-kr", "pt-br", "ru-ru", "tr-tr", "vi-vn"] as const;

export const INTERNAL_ERROR: DataError<500> = {
  code: 0,
  message: "Interal Error",
  status: 500,
  details: "An internal error occurred while processing the request."
};

export const INVALID_API_KEY: DataError<400> = {
  code: 0,
  message: "Invalid API key",
  status: 400,
  details: "The API key provided is invalid."
};

export const INVALID_INPUT: DataError<400> = {
  code: 0,
  message: "Invalid input",
  status: 400,
  details: "The input provided is invalid."
};

export const INVALID_REGION: DataError<400> = {
  code: 0,
  message: "Invalid region",
  status: 400,
  details: "The region provided is invalid."
};

export const INVALID_COUNTRY_CODE: DataError<400> = {
  code: 0,
  message: "Invalid country code",
  status: 400,
  details: "The country code provided is invalid."
};