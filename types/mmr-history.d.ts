type MMRHistoryV1Response = {
  status: 200;
  name: string;
  tag: string;
  data: MMRHistoryV1Data[];
} | {
  errors: DataError<400 | 403 | 404 | 408 | 429 | 500 | 501 | 503>[];
};

type MMRHistoryV1Data = {
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

type MMRHistoryV1Images = {
  small: string;
  large: string;
  triangle_down: string;
  triangle_up: string;
};

type MMRHistoryV1Map = {
  name: string;
  id: string;
};
