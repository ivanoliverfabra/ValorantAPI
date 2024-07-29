import { APIResponse } from ".";

export type AccountDataV1OptionalProps = {
  force?: boolean;
}

export type AccountDataV1Response = APIResponse<AccountDataV1, 400 | 403 | 404 | 408 | 429 | 500 | 503>;

export type AccountDataV1 = {
  puuid: string;
  region: string;
  account_level: number;
  name: string;
  tag: string;
  card: {
    small: string;
    large: string;
    wide: string;
    id: string;
  },
  last_update: string;
  last_update_raw: number;
};

export type AccountDataV2OptionalProps = AccountDataV1OptionalProps;
export type AccountDataV2Platform = "PC" | "CONSOLE";
export type AccountDataV2Response = APIResponse<AccountDataV2, 400 | 403 | 404 | 408 | 429 | 500 | 503>;

export type AccountDataV2 = {
  puuid: string;
  region: string;
  account_level: number;
  name: string;
  tag: string;
  card: string;
  title: string;
  platforms: AccountDataV2Platform[];
  updated_at: string
};