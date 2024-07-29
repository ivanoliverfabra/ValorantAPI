import { APIResponse } from ".";

export type MMRDataV2OptionalProps = {
  season?: Season;
}

export type MMRDataV2Response = APIResponse<MMRDataV2Data>;

export type MMRDataV2Data = {
  name: string;
  tag: string;
  current_data: MMRDataV2CurrentData;
  highest_rank: MMRDataV2HighestRank;
  by_season: Record<Season, MMRDataV2SeasonData>;
};

export type MMRDataV2CurrentData = {
  currenttier: number;
  currenttier_patched: string;
  images: MMRDataV2Images;
  ranking_in_tier: number;
  mmr_change_to_last_game: number;
  elo: number;
  old: boolean;
};

export type MMRDataV2Images = {
  small: string;
  large: string;
  triangle_down: string;
  triangle_up: string;
};

export type MMRDataV2HighestRank = {
  old: boolean;
  tier: number;
  patched_tier: string;
  season: string;
};

export type MMRDataV2SeasonData = {
  error: boolean;
  wins: number;
  number_of_games: number;
  final_rank: number;
  final_rank_patched: string;
  act_rank_wins: MMRDataV2ActRankWin[];
  old: boolean;
};

export type MMRDataV2ActRankWin = {
  patched_tier: string;
  tier: number;
};

export type MMRDataV3Response = APIResponse<MMRDataV3Data>;

export type MMRDataV3Data = {
  account: MMRDataV3Account;
  peak: MMRDataV3Peak;
  current: MMRDataV3Current;
  seasonal: MMRDataV3Seasonal[];
};

export type MMRDataV3Account = {
  puuid: string;
  name: string;
  tag: string;
};

export type MMRDataV3Peak = {
  season: MMRDataV3Season;
  ranking_schema: string;
  tier: MMRDataV3Tier;
};

export type MMRDataV3Current = {
  tier: MMRDataV3Tier;
  leaderboard_placement: MMRDataV3LeaderboardPlacement;
};

export type MMRDataV3Seasonal = {
  season: MMRDataV3Season;
  end_tier: MMRDataV3Tier;
  ranking_schema: string;
  leaderboard_placement: MMRDataV3LeaderboardPlacement;
  act_wins: MMRDataV3ActWin[];
};

export type MMRDataV3Season = {
  id: string;
  short: string;
};

export type MMRDataV3Tier = {
  name: string;
};

export type MMRDataV3LeaderboardPlacement = {
  updated_at: string;
};

export type MMRDataV3ActWin = {
  name: string;
};
