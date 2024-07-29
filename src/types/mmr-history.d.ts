export type MMRHistoryV1Response = {
  status: 200;
  name: string;
  tag: string;
  data: MMRHistoryV1Data[];
} | {
  errors: DataError<400 | 403 | 404 | 408 | 429 | 500 | 501 | 503>[];
};

export type MMRHistoryV1Data = {
  currenttier: number;
  currenttier_patched: string;
  images: MMRHistoryV1Images;
  match_id: string;
  map: MMRHistoryV1Map;
  season_id: string;
  ranking_in_tier: number;
  mmr_change_to_last_game: number;
  elo: number;
  date: string;
  date_raw: number;
};

export type MMRHistoryV1Images = {
  small: string;
  large: string;
  triangle_down: string;
  triangle_up: string;
};

export type MMRHistoryV1Map = {
  name: string;
  id: string;
};

export type StoredMMRV1Response = {
  status: 200;
  results: StoredMMRV1Results;
  data: StoredMMRV1Item[];
} | {
  errors: DataError<400 | 403 | 404 | 408 | 429 | 500 | 501 | 503>[];
};

export type StoredMMRV1Results = {
  total: number;
  returned: number;
  before: number;
  after: number;
}

export type StoredMMRV1Item = {
  match_id: string;
  tier: StoredMMRV1Tier;
  map: StoredMMRV1Map;
  season: StoredMMRV1Season;
  ranking_in_tier: number;
  last_mmr_change: number;
  elo: number;
  date: string;
};

export type StoredMMRV1Tier = {
  id: number;
  name: string;
};

export type StoredMMRV1Map = {
  id: string;
  name: string;
};

export type StoredMMRV1Season = {
  id: string;
  short: string;
};

export type StoredMMRV1OptionalProps = {
  page?: number;
  size?: number;
}