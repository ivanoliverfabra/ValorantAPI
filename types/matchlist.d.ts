type MatchHistoryV3OptionalProps = {
  mode?: Gamemode;
  map?: GameMap;
  size?: number; // min: 1
}

type PremierInfo = {
  tournament_id: string;
  matchup_id: string;
};

type MatchHistoryV3Metadata = {
  map: string;
  game_version: string;
  game_length: number;
  game_start: number;
  game_start_patched: string;
  rounds_played: number;
  mode: string;
  mode_id: string;
  queue: string;
  season_id: string;
  platform: string;
  matchid: string;
  premier_info: PremierInfo;
  region: string;
  cluster: string;
};

type Asset = {
  small: string;
  large: string;
  wide: string;
};

type AgentAsset = {
  small: string;
  full: string;
  bust: string;
  killfeed: string;
};

type SessionPlaytime = {
  minutes: number;
  seconds: number;
  milliseconds: number;
};

type Behaviour = {
  afk_rounds: number;
  friendly_fire: {
    incoming: number;
    outgoing: number;
  };
  rounds_in_spawn: number;
};

type OS = {
  name: string;
  version: string;
};

type Platform = {
  type: string;
  os: OS;
};

type AbilityCasts = {
  c_cast: number;
  q_cast: number;
  e_cast: number;
  x_cast: number;
};

type Stats = {
  score: number;
  kills: number;
  deaths: number;
  assists: number;
  bodyshots: number;
  headshots: number;
  legshots: number;
};

type Economy = {
  spent: {
    overall: number;
    average: number;
  };
  loadout_value: {
    overall: number;
    average: number;
  };
};

type MatchDetailsV2Player = {
  puuid: string;
  name: string;
  tag: string;
  team: string;
  level: number;
  character: string;
  currenttier: number;
  currenttier_patched: string;
  player_card: string;
  player_title: string;
  party_id: string;
  session_playtime: SessionPlaytime;
  assets: {
    card: Asset;
    agent: AgentAsset;
  };
  behaviour: Behaviour;
  platform: Platform;
  ability_casts: AbilityCasts;
  stats: Stats;
  economy: Economy;
  damage_made: number;
  damage_received: number;
};

type MatchHistoryV3Players = {
  all_players: MatchDetailsV2Player[];
  red: MatchDetailsV2Player[];
  blue: MatchDetailsV2Player[];
};

type MatchHistoryV3Observers = {
  puuid: string;
  name: string;
  tag: string;
  platform: Platform;
  session_playtime: SessionPlaytime;
  team: string;
  level: number;
  player_card: string;
  player_title: string;
  party_id: string;
};

type MatchHistoryV3Coaches = {
  puuid: string;
  team: string;
};

type Customization = {
  icon: string;
  image: string;
  primary: string;
  secondary: string;
  tertiary: string;
};

type Roaster = {
  members: string[];
  name: string;
  tag: string;
  customization: Customization;
};

type Team = {
  has_won: boolean;
  rounds_won: number;
  rounds_lost: number;
  roaster: Roaster;
};

type MatchHistoryV3Teams = {
  red: MatchDetailsV2Team;
  blue: MatchDetailsV2Team;
};

type Location = {
  x: number;
  y: number;
};

type PlantEvent = {
  plant_location: Location;
  planted_by: {
    puuid: string;
    display_name: string;
    team: string;
  };
  plant_site: string;
  plant_time_in_round: number;
  player_locations_on_plant: {
    player_puuid: string;
    player_display_name: string;
    player_team: string;
    location: Location;
    view_radians: number;
  }[];
};

type DefuseEvent = {
  defuse_location: Location;
  defused_by: {
    puuid: string;
    display_name: string;
    team: string;
  };
  defuse_time_in_round: number;
  player_locations_on_defuse: {
    player_puuid: string;
    player_display_name: string;
    player_team: string;
    location: Location;
    view_radians: number;
  }[];
};

type MatchDetailsV2DamageEvent = {
  receiver_puuid: string;
  receiver_display_name: string;
  receiver_team: string;
  bodyshots: number;
  damage: number;
  headshots: number;
  legshots: number;
};

type MatchDetailsV2KillEvent = {
  kill_time_in_round: number;
  kill_time_in_match: number;
  killer_puuid: string;
  killer_display_name: string;
  killer_team: string;
  victim_puuid: string;
  victim_display_name: string;
  victim_team: string;
  victim_death_location: Location;
  damage_weapon_id: string;
  damage_weapon_name: string;
  damage_weapon_assets: {
    display_icon: string;
    killfeed_icon: string;
  };
  secondary_fire_mode: boolean;
  player_locations_on_kill: {
    player_puuid: string;
    player_display_name: string;
    player_team: string;
    location: Location;
    view_radians: number;
  }[];
  assistants: {
    assistant_puuid: string;
    assistant_display_name: string;
    assistant_team: string;
  }[];
};

type MatchDetailsV2PlayerStats = {
  ability_casts: {
    c_casts: number;
    q_casts: number;
    e_casts: number;
    x_casts: number;
  };
  player_puuid: string;
  player_display_name: string;
  player_team: string;
  damage_events: MatchDetailsV2DamageEvent[];
  damage: number;
  bodyshots: number;
  headshots: number;
  legshots: number;
  kill_events: MatchDetailsV2KillEvent[];
  kills: number;
  score: number;
  economy: {
    loadout_value: number;
    weapon: {
      id: string;
      name: string;
      assets: {
        display_icon: string;
        killfeed_icon: string;
      };
    };
    armor: {
      id: string;
      name: string;
      assets: {
        display_icon: string;
      };
    };
    remaining: number;
    spent: number;
  };
  was_afk: boolean;
  was_penalized: boolean;
  stayed_in_spawn: boolean;
};

type MatchHistoryV3Round = {
  winning_team: string;
  end_type: string;
  bomb_planted: boolean;
  bomb_defused: boolean;
  plant_events: PlantEvent;
  defuse_events: DefuseEvent;
  player_stats: MatchDetailsV2PlayerStats[];
};

type MatchHistoryV3Kill = {
  kill_time_in_round: number;
  kill_time_in_match: number;
  killer_puuid: string;
  killer_display_name: string;
  killer_team: string;
  victim_puuid: string;
  victim_display_name: string;
  victim_team: string;
  victim_death_location: Location;
  damage_weapon_id: string;
  damage_weapon_name: string;
  damage_weapon_assets: {
    display_icon: string;
    killfeed_icon: string;
  };
  secondary_fire_mode: boolean;
  player_locations_on_kill: {
    player_puuid: string;
    player_display_name: string;
    player_team: string;
    location: Location;
    view_radians: number;
  }[];
  assistants: {
    assistant_puuid: string;
    assistant_display_name: string;
    assistant_team: string;
  }[];
};

type MatchHistoryV3MatchData = {
  metadata: MatchHistoryV3Metadata;
  players: MatchHistoryV3Players;
  observers: MatchHistoryV3Observers[];
  coaches: MatchHistoryV3Coaches[];
  teams: MatchHistoryV3Teams;
  rounds: MatchHistoryV3Round[];
  kills: MatchHistoryV3Kill[];
};

type MatchHistoryV3Response = {
  status: 200;
  data: MatchHistoryV3MatchData[];
} | {
  errors: DataError<400 | 403 | 404 | 408 | 429 | 500 | 501 | 503>[];
}

type MatchHistoryV4Map = {
  id: string;
  name: string;
};

type MatchHistoryV4Queue = {
  id: string;
  name: string;
  mode_type: string;
};

type MatchHistoryV4Season = {
  id: string;
  short: string;
};

type MatchHistoryV4PartyRrPenalty = {
  party_id: string;
  penalty: number;
};

type MatchHistoryV4Metadata = {
  match_id: string;
  map: MatchHistoryV4Map;
  game_version: string;
  game_length_in_ms: number;
  started_at: string;
  is_completed: number;
  queue: MatchHistoryV4Queue;
  season: MatchHistoryV4Season;
  platform: string;
  premier: unknown;
  party_rr_penaltys: MatchHistoryV4PartyRrPenalty[];
  region: string;
  cluster: string;
};

type MatchHistoryV4Damage = {
  dealt: number;
  received: number;
};

type MatchHistoryV4Stats = {
  score: number;
  kills: number;
  deaths: number;
  assists: number;
  headshots: number;
  bodyshots: number;
  legshots: number;
  damage: MatchHistoryV4Damage;
};

type MatchHistoryV4AbilityCasts = {
  grenade: number;
  ability1: number;
  ability2: number;
  ultimate: number;
};

type MatchHistoryV4Tier = {
  id: number;
  name: string;
};

type MatchHistoryV4Customization = {
  card: string;
  title: string;
  preferred_level_border: string;
};

type MatchHistoryV4FriendlyFire = {
  incoming: number;
  outgoing: number;
};

type MatchHistoryV4Behavior = {
  afk_rounds: number;
  friendly_fire: MatchHistoryV4FriendlyFire;
  rounds_in_spawn: number;
};

type MatchHistoryV4Spent = {
  overall: number;
  average: number;
};

type MatchHistoryV4LoadoutValue = {
  overall: number;
  average: number;
};

type MatchHistoryV4Economy = {
  spent: MatchHistoryV4Spent;
  loadout_value: MatchHistoryV4LoadoutValue;
};

type MatchHistoryV4Agent = {
  id: string;
  name: string;
};

type MatchHistoryV4Player = {
  puuid: string;
  name: string;
  tag: string;
  team_id: string;
  platform: string;
  party_id: string;
  agent: MatchHistoryV4Agent;
  stats: MatchHistoryV4Stats;
  ability_casts: MatchHistoryV4AbilityCasts;
  tier: MatchHistoryV4Tier;
  customization: MatchHistoryV4Customization;
  account_level: number;
  session_playtime_in_ms: number;
  behavior: MatchHistoryV4Behavior;
  economy: MatchHistoryV4Economy;
};

type MatchHistoryV4Observer = {
  puuid: string;
  name: string;
  tag: string;
  account_level: number;
  session_playtime_in_ms: number;
  card_id: string;
  title_id: string;
  party_id: string;
};

type MatchHistoryV4Coach = {
  puuid: string;
  team_id: string;
};

type MatchHistoryV4Rounds = {
  won: number;
  lost: number;
};

type MatchHistoryV4PremierRoster = {
  id: string;
  name: string;
  tag: string;
  members: string[];
  customization: MatchHistoryV4Customization;
};

type MatchHistoryV4Team = {
  team_id: string;
  rounds: MatchHistoryV4Rounds;
  won: number;
  premier_roster: MatchHistoryV4PremierRoster;
};

type MatchHistoryV4Location = {
  x: number;
  y: number;
};

type MatchHistoryV4PlantEvent = {
  round_time_in_ms: number;
  site: string;
  location: MatchHistoryV4Location;
  player: MatchHistoryV4Player;
  player_locations: MatchHistoryV4PlayerLocation[];
};

type MatchHistoryV4DefuseEvent = {
  round_time_in_ms: number;
  location: MatchHistoryV4Location;
  player: MatchHistoryV4Player;
  player_locations: MatchHistoryV4PlayerLocation[];
};

type MatchHistoryV4PlayerLocation = {
  player: MatchHistoryV4Player;
  view_radians: number;
  location: MatchHistoryV4Location;
};

type MatchHistoryV4DamageEvent = {
  player: MatchHistoryV4Player;
  bodyshots: number;
  headshots: number;
  legshots: number;
  damage: number;
};

type MatchHistoryV4RoundStats = {
  player: MatchHistoryV4Player;
  ability_casts: MatchHistoryV4AbilityCasts;
  damage_events: MatchHistoryV4DamageEvent[];
  stats: MatchHistoryV4Stats;
  economy: {
    loadout_value: number;
    remaining: number;
    weapon: {
      id: string;
      name: string;
      type: string;
    };
    armor: {
      id: string;
      name: string;
    };
  };
  was_afk: number;
  received_penalty: number;
  stayed_in_spawn: number;
};

type MatchHistoryV4Round = {
  id: number;
  result: string;
  ceremony: string;
  winning_team: string;
  plant: MatchHistoryV4PlantEvent;
  defuse: MatchHistoryV4DefuseEvent;
  stats: MatchHistoryV4RoundStats[];
};

type MatchHistoryV4Killer = {
  puuid: string;
  name: string;
  tag: string;
  team: string;
};

type MatchHistoryV4Victim = {
  puuid: string;
  name: string;
  tag: string;
  team: string;
};

type MatchHistoryV4Kill = {
  time_in_round_in_ms: number;
  time_in_match_in_ms: number;
  round: number;
  killer: MatchHistoryV4Killer;
  victim: MatchHistoryV4Victim;
  assistants: MatchHistoryV4Killer[];
  location: MatchHistoryV4Location;
  weapon: {
    id: string;
    name: string;
    type: string;
  };
  secondary_fire_mode: number;
  player_locations: MatchHistoryV4PlayerLocation[];
};

type MatchHistoryV4Data = {
  metadata: MatchHistoryV4Metadata;
  players: MatchHistoryV4Player[];
  observers: MatchHistoryV4Observer[];
  coaches: MatchHistoryV4Coach[];
  teams: MatchHistoryV4Team[];
  rounds: MatchHistoryV4Round[];
  kills: MatchHistoryV4Kill[];
};

type MatchHistoryV4Response = {
  status: 200;
  data: MatchHistoryV4Data[];
} | {
  errors: DataError<400 | 403 | 404 | 408 | 429 | 500 | 501 | 503>[];
}

type MatchHistoryV4OptionalProps = {
  mode?: Gamemode;
  map?: GameMap;
  size?: number; // min: 1
};