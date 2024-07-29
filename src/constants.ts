export const BASE_API_URL = 'https://api.henrikdev.xyz/valorant';
export const API_KEY_REGEX = /^HDEV-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

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