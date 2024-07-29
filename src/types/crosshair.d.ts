import { APIResponse } from ".";

export type Crosshair = string; // Responds in binary in form of a string

export type CrosshairResponse = APIResponse<Crosshair, 400 | 403 | 404 | 408 | 429 | 500 | 503>;