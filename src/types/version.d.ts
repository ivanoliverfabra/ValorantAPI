import { APIResponse } from ".";

export type ValorantVersionV1Response = APIResponse<ValorantVersionV1, 400 | 403 | 404 | 408 | 429 | 500 | 501 | 503>;

export type ValorantVersionV1 = {
  region: Region;
  branch: string;
  build_date: string;
  build_ver: string;
  last_checked: string;
  version: number;
  version_for_api: string;
};