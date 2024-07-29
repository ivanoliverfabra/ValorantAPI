type AccountDataV1OptionalProps = {
  force?: boolean;
}

type AccountDataV1Response = {
  status: 200;
  data: AccountDataV1;
} | {
  errors: DataError<400 | 403 | 404 | 408 | 429 | 500 | 503>[];
};

type AccountDataV1 = {
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

type AccountDataV2OptionalProps = AccountDataV1OptionalProps;
type AccountDataV2Platform = "PC" | "CONSOLE";
type AccountDataV2Response = {
  status: number;
  data: AccountDataV2;
} | {
  errors: DataError<400 | 403 | 404 | 408 | 429 | 500 | 503>[]
};

type AccountDataV2 = {
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