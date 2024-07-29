type MMRDataV2OptionalProps = {
  season?: Season;
}

type MMRDataV2Response = {
  status: 200;
  data: MMRDataV2Data;
} | {
  errors: DataError[];
}

type MMRDataV2Data = {
  name: string;
  tag: string;
  current_data: MMRDataV2CurrentData;
  highest_rank: MMRDataV2HighestRank;
  by_season: Record<Season, MMRDataV2SeasonData>;
};

type MMRDataV2CurrentData = {
  currenttier: number;
  currenttier_patched: string;
  images: MMRDataV2Images;
  ranking_in_tier: number;
  mmr_change_to_last_game: number;
  elo: number;
  old: boolean;
};

type MMRDataV2Images = {
  small: string;
  large: string;
  triangle_down: string;
  triangle_up: string;
};

type MMRDataV2HighestRank = {
  old: boolean;
  tier: number;
  patched_tier: string;
  season: string;
};

type MMRDataV2SeasonData = {
  error: boolean;
  wins: number;
  number_of_games: number;
  final_rank: number;
  final_rank_patched: string;
  act_rank_wins: MMRDataV2ActRankWin[];
  old: boolean;
};

type MMRDataV2ActRankWin = {
  patched_tier: string;
  tier: number;
};

type MMRDataV3Response = {
  status: 200;
  data: MMRDataV3Data;
} | {
  errors: DataError[];
}

type MMRDataV3Data = {
  account: MMRDataV3Account;
  peak: MMRDataV3Peak;
  current: MMRDataV3Current;
  seasonal: MMRDataV3Seasonal[];
};

type MMRDataV3Account = {
  puuid: string;
  name: string;
  tag: string;
};

type MMRDataV3Peak = {
  season: MMRDataV3Season;
  ranking_schema: string;
  tier: MMRDataV3Tier;
};

type MMRDataV3Current = {
  tier: MMRDataV3Tier;
  leaderboard_placement: MMRDataV3LeaderboardPlacement;
};

type MMRDataV3Seasonal = {
  season: MMRDataV3Season;
  end_tier: MMRDataV3Tier;
  ranking_schema: string;
  leaderboard_placement: MMRDataV3LeaderboardPlacement;
  act_wins: MMRDataV3ActWin[];
};

type MMRDataV3Season = {
  id: string;
  short: string;
};

type MMRDataV3Tier = {
  name: string;
};

type MMRDataV3LeaderboardPlacement = {
  updated_at: string;
};

type MMRDataV3ActWin = {
  name: string;
};
