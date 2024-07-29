type AccountDataV1Response = {
  status: 200,
  data: {
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
  }
} | {
  errors: DataError[];
};

type AccountDataV2Platform = "PC" | "CONSOLE";
type AccountDataV2Response = {
  status: number;
  data: {
    puuid: string;
    region: string;
    account_level: number;
    name: string;
    tag: string;
    card: string;
    title: string;
    platforms: AccountDataV2Platform[];
    updated_at: string
  }
} | {
  errors: DataError[];
};
