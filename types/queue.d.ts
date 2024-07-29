type QueueStatusV1Response = {
  status: 200;
  data: QueueStatusV1Data[];
} | {
  errors: DataError[];
};

type QueueStatusV1Data = {
  mode: string;
  mode_id: string;
  enabled: boolean;
  team_size: number;
  number_of_teams: number;
  party_size: QueueStatusV1PartySize;
  high_skill: QueueStatusV1HighSkill;
  ranked: boolean;
  tournament: boolean;
  skill_disparity: QueueStatusV1SkillDisparity[];
  required_account_level: number;
  game_rules: QueueStatusV1GameRules;
  platforms: string[];
  maps: QueueStatusV1Map[];
};

type QueueStatusV1PartySize = {
  max: number;
  min: number;
  invalid: number[];
  full_party_bypass: boolean;
};

type QueueStatusV1HighSkill = {
  max_party_size: number;
  min_tier: number;
  max_tier: number;
};

type QueueStatusV1SkillDisparity = {
  tier: number;
  name: string;
  max_tier: QueueStatusV1MaxTier;
};

type QueueStatusV1MaxTier = {
  id: number;
  name: string;
};

type QueueStatusV1GameRules = {
  overtime_win_by_two: boolean;
  allow_lenient_surrender: boolean;
  allow_drop_out: boolean;
  assign_random_agents: boolean;
  skip_pregame: boolean;
  allow_overtime_draw_vote: boolean;
  overtime_win_by_two_capped: boolean;
  premier_mode: boolean;
};

type QueueStatusV1Map = {
  map: QueueStatusV1MapDetails;
  enabled: boolean;
};

type QueueStatusV1MapDetails = {
  id: string;
  name: string;
};
