import { APIResponse } from ".";

export type PlayerInfoV1 = {
  PlayerCardID: string;
  TitleID: string;
  IsBanned: boolean;
  IsAnonymized: boolean;
  puuid: string;
  gameName: string;
  tagLine: string;
  leaderboardRank: number;
  rankedRating: number;
  numberOfWins: number;
  competitiveTier: number;
};

export type LeaderboardV1OptionalProps = {
  season?: Season;
} & ({
  puuid?: string;
} | {
  name?: string;
  tag?: string;
})

export type LeaderboardV1Response = APIResponse<PlayerInfoV1[], 400 | 408 | 429 | 500>

export type LeaderboardV3Tier = {
  id: number;
  name: string;
};

export type LeaderboardV3Threshold = {
  tier: LeaderboardV3Tier;
  start_index: number;
  threshold: number;
};

export type LeaderboardV3Player = {
  card: string;
  title: string;
  is_banned: boolean;
  is_anonymized: boolean;
  puuid: string;
  name: string;
  tag: string;
  leaderboard_rank: number;
  tier: number;
  rr: number;
  wins: number;
  updated_at: string;
};

export type LeaderboardV3Results = {
  total: number;
  returned: number;
  before: number;
  after: number;
};

export type LeaderboardV3Data = {
  updated_at: string;
  thresholds: LeaderboardV3Threshold[];
  players: LeaderboardV3Player[];
};

export type LeaderboardV3Response = APIResponse<LeaderboardV3Data, 400 | 408 | 429 | 500 | 404 | 403 | 503>

export type LeaderboardV3OptionalProps = ({
  season_short?: Season;
} | {
  season_id?: number;
}) & ({
  puuid?: string;
} | {
  name?: string;
  tag?: string;
})