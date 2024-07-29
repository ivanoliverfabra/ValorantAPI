type GameType = {
  type: string;
  count: number;
};

type Record = {
  wins: number;
  losses: number;
};

type MatchDetailsV2Team = {
  name: string;
  code: string;
  icon: string;
  has_won: boolean;
  game_wins: number;
  record: Record;
};

type Match = {
  id: string;
  game_type: GameType;
  teams: MatchDetailsV2Team[];
};

type Tournament = {
  name: string;
  season: string;
};

type League = {
  name: string;
  identifier: string;
  icon: string;
  region: string;
};

type MatchData = {
  date: string;
  state: string;
  type: string;
  vod: string;
  league: League;
  tournament: Tournament;
  match: Match;
};

type MatchRegion = "emea" | "brazil" | "japan" | "korea" | "latin_america" | "latin_america_south" | "southeast_asia" | "vietnam" | "oceania";
type MatchLeague = "champions" | "vrl_spain" | "vrl_northern_europe" | "vrl_dach" | "vrl_france" | "vrl_east" | "vrl_turkey" | "vrl_cis" | "mena_resilence" | "challengers_italy" | "challengers_portugal";

type MatchResponse = {
  status: 200;
  data: MatchData[];
} | {
  errors: DataError<400 | 403 | 404 | 408 | 429 | 500 | 503>[];
};