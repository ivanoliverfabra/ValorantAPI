type PlayerInfoV1 = {
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

type LeaderboardV1OptionalProps = {
  season?: Season;
} & ({
  puuid?: string;
} | {
  name?: string;
  tag?: string;
})

type LeaderboardV1Response = {
  status: 200;
  data: PlayerInfoV1[];
} | {
  errors: DataError<400 | 408 | 429 | 500>[];
};

type LeaderboardV3Tier = {
  id: number;
  name: string;
};

type LeaderboardV3Threshold = {
  tier: LeaderboardV3Tier;
  start_index: number;
  threshold: number;
};

type LeaderboardV3Player = {
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

type LeaderboardV3Results = {
  total: number;
  returned: number;
  before: number;
  after: number;
};

type LeaderboardV3Data = {
  updated_at: string;
  thresholds: LeaderboardV3Threshold[];
  players: LeaderboardV3Player[];
};

type LeaderboardV3Response = {
  status: 200;
  data: LeaderboardV3Data;
} | {
  errors: DataError[];
};

type LeaderboardV3OptionalProps = ({
  season_short?: Season;
} | {
  season_id?: number;
}) & ({
  puuid?: string;
} | {
  name?: string;
  tag?: string;
})