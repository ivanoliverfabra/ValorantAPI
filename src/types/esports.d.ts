import { APIResponse } from ".";

export type UpcomingMatchV1GameType= {
  type: string;
  count: number;
};

export type UpcomingMatchV1Record = {
  wins: number;
  losses: number;
};

export type UpcomingMatchV1Team = {
  name: string;
  code: string;
  icon: string;
  has_won: boolean;
  game_wins: number;
  record: UpcomingMatchV1Record;
};

export type UpcomingMatchV1Match = {
  id: string;
  game_type: UpcomingMatchV1GameType;
  teams: UpcomingMatchV1Team[];
};

export type UpcomingMatchV1Tournament = {
  name: string;
  season: string;
};

export type UpcomingMatchV1League = {
  name: string;
  identifier: string;
  icon: string;
  region: string;
};

export type UpcomingMatchV1 = {
  date: string;
  state: string;
  type: string;
  vod: string;
  league: UpcomingMatchV1League;
  tournament: UpcomingMatchV1Tournament;
  match: UpcomingMatchV1Match;
};

export type UpcomingMatchV1Region = "emea" | "brazil" | "japan" | "korea" | "latin_america" | "latin_america_south" | "southeast_asia" | "vietnam" | "oceania";
export type UpcomingMatchV1LeagueT = "champions" | "vrl_spain" | "vrl_northern_europe" | "vrl_dach" | "vrl_france" | "vrl_east" | "vrl_turkey" | "vrl_cis" | "mena_resilence" | "challengers_italy" | "challengers_portugal";

export type UpcomingMatchV1Response = APIResponse<UpcomingMatchV1[], 400 | 403 | 404 | 408 | 429 | 500 | 503>;

export type UpcomingMatchV1OptionalProps = {
  region?: UpcomingMatchV1Region;
  league?: UpcomingMatchV1LeagueT;
};