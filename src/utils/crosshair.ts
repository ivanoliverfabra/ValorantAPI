import { INTERNAL_ERROR, INVALID_API_KEY } from "../constants";
import { addQueryParams, initiateAxios, validateAPIKey } from "./lib";

export async function generateCrosshairImage(id: string, apiKey: string): Promise<CrosshairResponse> {
  if (!validateAPIKey(apiKey)) return { errors: [INVALID_API_KEY] };

  try {
    const axiosInstance = initiateAxios(apiKey);
    const url = addQueryParams('/v1/crosshair/generate', { id });
    const response = await axiosInstance.get<CrosshairResponse>(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching crosshair image:', error);
    return { errors: [INTERNAL_ERROR] };
  }
};