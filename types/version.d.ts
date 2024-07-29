type ValorantVersionV1Response = {
  status: 200;
  data: ValorantVersionV1;
} | {
  errors: DataError<400 | 403 | 404 | 408 | 429 | 500 | 501 | 503>[];
};

type ValorantVersionV1 = {
  region: Region;
  branch: string;
  build_date: string;
  build_ver: string;
  last_checked: string;
  version: number;
  version_for_api: string;
};