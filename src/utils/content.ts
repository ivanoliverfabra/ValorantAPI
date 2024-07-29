import { INTERNAL_ERROR, INVALID_API_KEY } from "../constants";
import { initiateAxios, validateAPIKey } from "./lib";

export async function fetchGameData(apiKey: string): Promise<GameDataResponse> {
  if (!validateAPIKey(apiKey)) return { errors: [INVALID_API_KEY] };

  try {
    const axiosInstance = initiateAxios(apiKey);
    const response = await axiosInstance.get<GameData>('/v1/game-data');

    return response.data;
  } catch (error) {
    console.error('Error fetching game data:', error);
    return { errors: [INTERNAL_ERROR] };
  }
}