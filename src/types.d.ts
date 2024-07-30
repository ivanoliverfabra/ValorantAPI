export type MatchDetailsV2Response = APIResponse<MatchDetailsV2, 400 | 408 | 429 | 500 | 404 | 403 | 503>

export type MatchDetailsV2 = {
  metadata: {
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
    premier_info: {
      tournament_id: string;
      matchup_id: string;
    };
    region: string;
    cluster: string;
  };
  players: {
    all_players: MatchDetailsV2Player[];
    red: MatchDetailsV2Player[];
    blue: MatchDetailsV2Player[];
  };
  observers: MatchDetailsV2Observer[];
  coaches: MatchDetailsV2Coach[];
  teams: {
    red: MatchDetailsV2Team;
    blue: MatchDetailsV2Team;
  };
  rounds: MatchDetailsV2Round[];
  kills: MatchDetailsV2Kill[];
};

export type MatchDetailsV2Player = {
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
  session_playtime: {
    minutes: number;
    seconds: number;
    milliseconds: number;
  };
  assets: {
    card: {
      small: string;
      large: string;
      wide: string;
    };
    agent: {
      small: string;
      full: string;
      bust: string;
      killfeed: string;
    };
  };
  behaviour: {
    afk_rounds: number;
    friendly_fire: {
      incoming: number;
      outgoing: number;
    };
    rounds_in_spawn: number;
  };
  platform: {
    type: string;
    os: {
      name: string;
      version: string;
    };
  };
  ability_casts: {
    c_cast: number;
    q_cast: number;
    e_cast: number;
    x_cast: number;
  };
  stats: {
    score: number;
    kills: number;
    deaths: number;
    assists: number;
    bodyshots: number;
    headshots: number;
    legshots: number;
  };
  economy: {
    spent: {
      overall: number;
      average: number;
    };
    loadout_value: {
      overall: number;
      average: number;
    };
  };
  damage_made: number;
  damage_received: number;
};

export type MatchDetailsV2Observer = {
  puuid: string;
  name: string;
  tag: string;
  platform: {
    type: string;
    os: {
      name: string;
      version: string;
    };
  };
  session_playtime: {
    minutes: number;
    seconds: number;
    milliseconds: number;
  };
  team: string;
  level: number;
  player_card: string;
  player_title: string;
  party_id: string;
};

export type MatchDetailsV2Coach = {
  puuid: string;
  team: string;
};

export type MatchDetailsV2Team = {
  has_won: boolean;
  rounds_won: number;
  rounds_lost: number;
  roaster: {
    members: string[];
    name: string;
    tag: string;
    customization: {
      icon: string;
      image: string;
      primary: string;
      secondary: string;
      tertiary: string;
    };
  };
};

export type MatchDetailsV2Round = {
  winning_team: string;
  end_type: string;
  bomb_planted: boolean;
  bomb_defused: boolean;
  plant_events: {
    plant_location: {
      x: number;
      y: number;
    };
    planted_by: {
      puuid: string;
      display_name: string;
      team: string;
    };
    plant_site: string;
    plant_time_in_round: number;
    player_locations_on_plant: MatchDetailsV2PlayerLocation[];
  };
  defuse_events: {
    defuse_location: {
      x: number;
      y: number;
    };
    defused_by: {
      puuid: string;
      display_name: string;
      team: string;
    };
    defuse_time_in_round: number;
    player_locations_on_defuse: MatchDetailsV2PlayerLocation[];
  };
  player_stats: MatchDetailsV2PlayerStats[];
};

export type MatchDetailsV2Kill = {
  kill_time_in_round: number;
  kill_time_in_match: number;
  killer_puuid: string;
  killer_display_name: string;
  killer_team: string;
  victim_puuid: string;
  victim_display_name: string;
  victim_team: string;
  victim_death_location: {
    x: number;
    y: number;
  };
  damage_weapon_id: string;
  damage_weapon_name: string;
  damage_weapon_assets: {
    display_icon: string;
    killfeed_icon: string;
  };
  secondary_fire_mode: boolean;
  player_locations_on_kill: MatchDetailsV2PlayerLocation[];
  assistants: MatchDetailsV2Assistant[];
};

export type MatchDetailsV2PlayerLocation = {
  player_puuid: string;
  player_display_name: string;
  player_team: string;
  location: {
    x: number;
    y: number;
  };
  view_radians: number;
};

export type MatchDetailsV2PlayerStats = {
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
    weapon: MatchDetailsV2Weapon;
    armor: MatchDetailsV2Armor;
    remaining: number;
    spent: number;
  };
  was_afk: boolean;
  was_penalized: boolean;
  stayed_in_spawn: boolean;
};

export type MatchDetailsV2DamageEvent = {
  receiver_puuid: string;
  receiver_display_name: string;
  receiver_team: string;
  bodyshots: number;
  damage: number;
  headshots: number;
  legshots: number;
};

export type MatchDetailsV2KillEvent = {
  kill_time_in_round: number;
  kill_time_in_match: number;
  killer_puuid: string;
  killer_display_name: string;
  killer_team: string;
  victim_puuid: string;
  victim_display_name: string;
  victim_team: string;
  victim_death_location: {
    x: number;
    y: number;
  };
  damage_weapon_id: string;
  damage_weapon_name: string;
  damage_weapon_assets: {
    display_icon: string;
    killfeed_icon: string;
  };
  secondary_fire_mode: boolean;
  player_locations_on_kill: MatchDetailsV2PlayerLocation[];
  assistants: MatchDetailsV2Assistant[];
};

export type MatchDetailsV2Weapon = {
  id: string;
  name: string;
  assets: {
    display_icon: string;
    killfeed_icon: string;
  };
};

export type MatchDetailsV2Armor = {
  id: string;
  name: string;
  assets: {
    display_icon: string;
  };
};

export type MatchDetailsV2Assistant = {
  assistant_puuid: string;
  assistant_display_name: string;
  assistant_team: string;
};

export type MatchDetailsV4Response = APIResponse<MatchDetailsV4, 400 | 408 | 429 | 500 | 404 | 403 | 503>;

export type MatchDetailsV4 = {
  metadata: MatchDetailsV4Metadata;
  players: MatchDetailsV4Player[];
  observers: MatchDetailsV4Observer[];
  coaches: MatchDetailsV4Coach[];
  teams: MatchDetailsV4Team[];
  rounds: MatchDetailsV4Round[];
  kills: MatchDetailsV4Kill[];
};

export type MatchDetailsV4Metadata = {
  match_id: string;
  map: MatchDetailsV4Map;
  game_version: string;
  started_at: string;
  is_completed: boolean;
  queue: MatchDetailsV4Queue;
  season: MatchDetailsV4Season;
  platform: string;
  party_rr_penaltys: MatchDetailsV4PartyRrPenalty[];
  region: string;
  cluster: string;
};

export type MatchDetailsV4Map = {
  id: string;
  name: string;
};

export type MatchDetailsV4Queue = {
  id: string;
  name: string;
  mode_type: string;
};

export type MatchDetailsV4Season = {
  id: string;
  short: string;
};

export type MatchDetailsV4PartyRrPenalty = {
  party_id: string;
};

export type MatchDetailsV4Player = {
  puuid: string;
  name: string;
  tag: string;
  team_id: string;
  platform: string;
  party_id: string;
  agent: MatchDetailsV4Agent;
  stats: MatchDetailsV4Stats;
  ability_casts: MatchDetailsV4AbilityCasts;
  tier: MatchDetailsV4Tier;
  card_id: string;
  title_id: string;
  prefered_level_border: string;
  behavior: MatchDetailsV4Behavior;
  economy: MatchDetailsV4Economy;
};

export type MatchDetailsV4Agent = {
  id: string;
  name: string;
};

export type MatchDetailsV4Stats = {
  damage?: object;
};

export type MatchDetailsV4AbilityCasts = {};

export type MatchDetailsV4Tier = {
  name: string;
};

export type MatchDetailsV4Behavior = {
  friendly_fire?: object;
};

export type MatchDetailsV4Economy = {
  spent?: object;
  loadout_value?: object;
};

export type MatchDetailsV4Observer = {
  puuid: string;
  name: string;
  tag: string;
  card_id: string;
  title_id: string;
  party_id: string;
};

export type MatchDetailsV4Coach = {
  puuid: string;
  team_id: string;
};

export type MatchDetailsV4Team = {
  team_id: string;
  rounds?: object;
  won: boolean;
  premier_roster: MatchDetailsV4PremierRoster;
};

export type MatchDetailsV4PremierRoster = {
  id: string;
  name: string;
  tag: string;
  members: string[];
  customization: MatchDetailsV4Customization;
};

export type MatchDetailsV4Customization = {
  icon: string;
  image: string;
  primary_color: string;
  secondary_color: string;
  tertiary_color: string;
};

export type MatchDetailsV4Round = {
  result: string;
  ceremony: string;
  winning_team: string;
  plant: MatchDetailsV4PlantEvent;
  defuse: MatchDetailsV4DefuseEvent;
  stats: MatchDetailsV4RoundStats[];
};

export type MatchDetailsV4PlantEvent = {
  site: string;
  location?: object;
  player: MatchDetailsV4RoundPlayer;
  player_locations: MatchDetailsV4PlayerLocation[];
};

export type MatchDetailsV4DefuseEvent = {
  location?: object;
  player: MatchDetailsV4RoundPlayer;
  player_locations: MatchDetailsV4PlayerLocation[];
};

export type MatchDetailsV4RoundPlayer = {
  puuid: string;
  name: string;
  tag: string;
  team: string;
};

export type MatchDetailsV4PlayerLocation = {
  puuid: string;
  name: string;
  tag: string;
  team: string;
  location?: object;
};

export type MatchDetailsV4RoundStats = {
  ability_casts: MatchDetailsV4AbilityCasts;
  player: MatchDetailsV4RoundPlayer;
  damage_events: MatchDetailsV4DamageEvent[];
  stats?: object;
  economy: MatchDetailsV4RoundEconomy;
  was_afk: boolean;
  received_penalty: boolean;
  stayed_in_spawn: boolean;
};

export type MatchDetailsV4DamageEvent = {
  puuid: string;
  name: string;
  tag: string;
  team: string;
};

export type MatchDetailsV4RoundEconomy = {
  weapon: MatchDetailsV4Weapon;
  armor: MatchDetailsV4Armor;
};

export type MatchDetailsV4Weapon = {
  id: string;
  name: string;
  type: string;
};

export type MatchDetailsV4Armor = {
  id: string;
  name: string;
};

export type MatchDetailsV4Kill = {
  killer: MatchDetailsV4RoundPlayer;
  victim: MatchDetailsV4RoundPlayer;
  assistants: MatchDetailsV4RoundPlayer[];
  location?: object;
  weapon: MatchDetailsV4Weapon;
  secondary_fire_mode: boolean;
  player_locations: MatchDetailsV4PlayerLocation[];
};

export type MatchHistoryV3OptionalProps = {
  mode?: Gamemode;
  map?: GameMap;
  size?: number; // min: 1
}

export type PremierInfo = {
  tournament_id: string;
  matchup_id: string;
};

export type MatchHistoryV3Metadata = {
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

export type Asset = {
  small: string;
  large: string;
  wide: string;
};

export type AgentAsset = {
  small: string;
  full: string;
  bust: string;
  killfeed: string;
};

export type SessionPlaytime = {
  minutes: number;
  seconds: number;
  milliseconds: number;
};

export type Behaviour = {
  afk_rounds: number;
  friendly_fire: {
    incoming: number;
    outgoing: number;
  };
  rounds_in_spawn: number;
};

export type OS = {
  name: string;
  version: string;
};

export type MatchlistPlatform = {
  type: string;
  os: OS;
};

export type AbilityCasts = {
  c_cast: number;
  q_cast: number;
  e_cast: number;
  x_cast: number;
};

export type Stats = {
  score: number;
  kills: number;
  deaths: number;
  assists: number;
  bodyshots: number;
  headshots: number;
  legshots: number;
};

export type Economy = {
  spent: {
    overall: number;
    average: number;
  };
  loadout_value: {
    overall: number;
    average: number;
  };
};

export type MatchLDetailsV2Player = {
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
  platform: MatchlistPlatform;
  ability_casts: AbilityCasts;
  stats: Stats;
  economy: Economy;
  damage_made: number;
  damage_received: number;
};

export type MatchHistoryV3Players = {
  all_players: MatchLDetailsV2Player[];
  red: MatchLDetailsV2Player[];
  blue: MatchLDetailsV2Player[];
};

export type MatchHistoryV3Observers = {
  puuid: string;
  name: string;
  tag: string;
  platform: MatchlistPlatform;
  session_playtime: SessionPlaytime;
  team: string;
  level: number;
  player_card: string;
  player_title: string;
  party_id: string;
};

export type MatchHistoryV3Coaches = {
  puuid: string;
  team: string;
};

export type Customization = {
  icon: string;
  image: string;
  primary: string;
  secondary: string;
  tertiary: string;
};

export type Roaster = {
  members: string[];
  name: string;
  tag: string;
  customization: Customization;
};

export type Team = {
  has_won: boolean;
  rounds_won: number;
  rounds_lost: number;
  roaster: Roaster;
};

export type MatchHistoryV3Teams = {
  red: MatchDetailsV2Team;
  blue: MatchDetailsV2Team;
};

export type Location = {
  x: number;
  y: number;
};

export type PlantEvent = {
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

export type DefuseEvent = {
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

export type MatchLDetailsV2DamageEvent = {
  receiver_puuid: string;
  receiver_display_name: string;
  receiver_team: string;
  bodyshots: number;
  damage: number;
  headshots: number;
  legshots: number;
};

export type MatchLDetailsV2KillEvent = {
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

export type MatchLDetailsV2PlayerStats = {
  ability_casts: {
    c_casts: number;
    q_casts: number;
    e_casts: number;
    x_casts: number;
  };
  player_puuid: string;
  player_display_name: string;
  player_team: string;
  damage_events: MatchLDetailsV2DamageEvent[];
  damage: number;
  bodyshots: number;
  headshots: number;
  legshots: number;
  kill_events: MatchLDetailsV2KillEvent[];
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

export type MatchHistoryV3Round = {
  winning_team: string;
  end_type: string;
  bomb_planted: boolean;
  bomb_defused: boolean;
  plant_events: PlantEvent;
  defuse_events: DefuseEvent;
  player_stats: MatchLDetailsV2PlayerStats[];
};

export type MatchHistoryV3Kill = {
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

export type MatchHistoryV3MatchData = {
  metadata: MatchHistoryV3Metadata;
  players: MatchHistoryV3Players;
  observers: MatchHistoryV3Observers[];
  coaches: MatchHistoryV3Coaches[];
  teams: MatchHistoryV3Teams;
  rounds: MatchHistoryV3Round[];
  kills: MatchHistoryV3Kill[];
};

export type MatchHistoryV3Response = APIResponse<MatchHistoryV3MatchData[], 400 | 403 | 404 | 408 | 429 | 500 | 501 | 503>;

export type MatchHistoryV4Map = {
  id: string;
  name: string;
};

export type MatchHistoryV4Queue = {
  id: string;
  name: string;
  mode_type: string;
};

export type MatchHistoryV4Season = {
  id: string;
  short: string;
};

export type MatchHistoryV4PartyRrPenalty = {
  party_id: string;
  penalty: number;
};

export type MatchHistoryV4Metadata = {
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

export type MatchHistoryV4Damage = {
  dealt: number;
  received: number;
};

export type MatchHistoryV4Stats = {
  score: number;
  kills: number;
  deaths: number;
  assists: number;
  headshots: number;
  bodyshots: number;
  legshots: number;
  damage: MatchHistoryV4Damage;
};

export type MatchHistoryV4AbilityCasts = {
  grenade: number;
  ability1: number;
  ability2: number;
  ultimate: number;
};

export type MatchHistoryV4Tier = {
  id: number;
  name: string;
};

export type MatchHistoryV4Customization = {
  card: string;
  title: string;
  preferred_level_border: string;
};

export type MatchHistoryV4FriendlyFire = {
  incoming: number;
  outgoing: number;
};

export type MatchHistoryV4Behavior = {
  afk_rounds: number;
  friendly_fire: MatchHistoryV4FriendlyFire;
  rounds_in_spawn: number;
};

export type MatchHistoryV4Spent = {
  overall: number;
  average: number;
};

export type MatchHistoryV4LoadoutValue = {
  overall: number;
  average: number;
};

export type MatchHistoryV4Economy = {
  spent: MatchHistoryV4Spent;
  loadout_value: MatchHistoryV4LoadoutValue;
};

export type MatchHistoryV4Agent = {
  id: string;
  name: string;
};

export type MatchHistoryV4Player = {
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

export type MatchHistoryV4Observer = {
  puuid: string;
  name: string;
  tag: string;
  account_level: number;
  session_playtime_in_ms: number;
  card_id: string;
  title_id: string;
  party_id: string;
};

export type MatchHistoryV4Coach = {
  puuid: string;
  team_id: string;
};

export type MatchHistoryV4Rounds = {
  won: number;
  lost: number;
};

export type MatchHistoryV4PremierRoster = {
  id: string;
  name: string;
  tag: string;
  members: string[];
  customization: MatchHistoryV4Customization;
};

export type MatchHistoryV4Team = {
  team_id: string;
  rounds: MatchHistoryV4Rounds;
  won: number;
  premier_roster: MatchHistoryV4PremierRoster;
};

export type MatchHistoryV4Location = {
  x: number;
  y: number;
};

export type MatchHistoryV4PlantEvent = {
  round_time_in_ms: number;
  site: string;
  location: MatchHistoryV4Location;
  player: MatchHistoryV4Player;
  player_locations: MatchHistoryV4PlayerLocation[];
};

export type MatchHistoryV4DefuseEvent = {
  round_time_in_ms: number;
  location: MatchHistoryV4Location;
  player: MatchHistoryV4Player;
  player_locations: MatchHistoryV4PlayerLocation[];
};

export type MatchHistoryV4PlayerLocation = {
  player: MatchHistoryV4Player;
  view_radians: number;
  location: MatchHistoryV4Location;
};

export type MatchHistoryV4DamageEvent = {
  player: MatchHistoryV4Player;
  bodyshots: number;
  headshots: number;
  legshots: number;
  damage: number;
};

export type MatchHistoryV4RoundStats = {
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

export type MatchHistoryV4Round = {
  id: number;
  result: string;
  ceremony: string;
  winning_team: string;
  plant: MatchHistoryV4PlantEvent;
  defuse: MatchHistoryV4DefuseEvent;
  stats: MatchHistoryV4RoundStats[];
};

export type MatchHistoryV4Killer = {
  puuid: string;
  name: string;
  tag: string;
  team: string;
};

export type MatchHistoryV4Victim = {
  puuid: string;
  name: string;
  tag: string;
  team: string;
};

export type MatchHistoryV4Kill = {
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

export type MatchHistoryV4Data = {
  metadata: MatchHistoryV4Metadata;
  players: MatchHistoryV4Player[];
  observers: MatchHistoryV4Observer[];
  coaches: MatchHistoryV4Coach[];
  teams: MatchHistoryV4Team[];
  rounds: MatchHistoryV4Round[];
  kills: MatchHistoryV4Kill[];
};

export type MatchHistoryV4Response = APIResponse<MatchHistoryV4Data[], 400 | 403 | 404 | 408 | 429 | 500 | 501 | 503>;

export type MatchHistoryV4OptionalProps = {
  mode?: Gamemode;
  map?: GameMap;
  size?: number; // min: 1
};

export type StoredMatchesV1Response = {
  success: true;
  results: StoredMatchesResults;
  data: StoredMatchesV1Item[];
} | {
  success: false;
  errors: DataError<400 | 403 | 404 | 408 | 429 | 500 | 501 | 503>[];
};

export type StoredMatchesResults = {
  total: number,
  returned: number,
  before: number,
  after: number
};

export type StoredMatchesV1Item = {
  meta: StoredMatchesV1Meta;
  stats: StoredMatchesV1Stats;
  teams: StoredMatchesV1Teams;
};

export type StoredMatchesV1Meta = {
  id: string;
  map: StoredMatchesV1Map;
  version: string;
  mode: string;
  started_at: string;
  season: StoredMatchesV1Season;
  region: string;
  cluster: string;
};

export type StoredMatchesV1Map = {
  id: string;
  name: string;
};

export type StoredMatchesV1Season = {
  id: string;
  short: string;
};

export type StoredMatchesV1Stats = {
  puuid: string;
  team: string;
  level: number;
  character: StoredMatchesV1Character;
  tier: number;
  score: number;
  kills: number;
  deaths: number;
  assists: number;
  shots: StoredMatchesV1Shots;
  damage: StoredMatchesV1Damage;
};

export type StoredMatchesV1Character = {
  id: string;
  name: string;
};

export type StoredMatchesV1Shots = {
  head: number;
  body: number;
  leg: number;
};

export type StoredMatchesV1Damage = {
  dealt: number;
  received: number;
};

export type StoredMatchesV1Teams = {
  red: number;
  blue: number;
};

export type StoredMatchesV1OptionalProps = {
  mode?: Gamemode;
  map?: GameMap;
  page?: number;
  size?: number;
};

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

export type MMRHistoryV1Response = {
  success: true;
  name: string;
  tag: string;
  data: MMRHistoryV1Data[];
} | {
  success: false;
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
  success: true;
  results: StoredMMRV1Results;
  data: StoredMMRV1Item[];
} | {
  success: false;
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

export type PremierTeamDetailsV1 = {
  id: string;
  name: string;
  tag: string;
  enrolled: boolean;
  stats: PremierTeamDetailsV1Stats;
  placement: PremierTeamDetailsV1Placement;
  customization: PremierTeamDetailsV1Customization;
  member: PremierTeamDetailsV1Member[];
};

export type PremierTeamDetailsV1Stats = {
  wins: number;
  matches: number;
  losses: number;
};

export type PremierTeamDetailsV1Placement = {
  points: number;
  conference: string;
  division: number;
  place: number;
};

export type PremierTeamDetailsV1Customization = {
  icon: string;
  image: string;
  primary: string;
  secondary: string;
  tertiary: string;
};

export type PremierTeamDetailsV1Member = {
  puuid: string;
  name: string;
  tag: string;
};

export type PremierTeamDetailsV1Response = APIResponse<PremierTeamDetailsV1>;

export type PremierTeamHistoryV1Response = APIResponse<PremierTeamHistoryV1Data>;

export type PremierTeamHistoryV1Data = {
  league_matches: PremierTeamHistoryV1LeagueMatch[];
};

export type PremierTeamHistoryV1LeagueMatch = {
  id: string;
  points_before: number;
  points_after: number;
  started_at: string;
};

export type PremierTeamSearchV1Props = {
  name?: string;
  tag?: string;
  divison?: number;
  conference?: PremierTeamSearchV1;
};

export type PremierTeamSearchV1 = "EU_CENTRAL_EAST" | "EU_WEST" | "EU_MIDDLE_EAST" | "EU_TURKEY" | "NA_US_EAST" | "NA_US_WEST" | "LATAM_NORTH" | "LATAM_SOUTH" | "BR_BRAZIL" | "KR_KOREA" | "AP_ASIA" | "AP_JAPAN" | "AP_OCEANIA" | "AP_SOUTH_ASIA"

export type PremierTeamSearchV1Response = APIResponse<PremierTeamSearchV1Item[]>;

export type PremierTeamSearchV1Item = {
  id: string;
  name: string;
  tag: string;
  conference: string;
  division: number;
  affinity: string;
  region: string;
  losses: number;
  wins: number;
  score: number;
  ranking: number;
  customization: PremierTeamSearchV1Customization;
};

export type PremierTeamSearchV1Customization = {
  icon: string;
  image: string;
  primary: string;
  secondary: string;
  tertiary: string;
};

export type PremierConferenceV1Response = APIResponse<PremierConferenceV1Item[]>;

export type PremierConferenceV1Item = {
  id: string;
  affinity: string;
  pods: PremierConferenceV1Pod[];
  region: string;
  timezone: string;
  name: string;
  icon: string;
};

export type PremierConferenceV1Pod = {
  pod: string;
  name: string;
};

export type PremierSeasonsV1Response = APIResponse<PremierSeasonsV1Item[]>;

export type PremierSeasonsV1Item = {
  id: string;
  championship_event_id: string;
  championship_points_required: number;
  starts_at: string;
  ends_at: string;
  enrollment_starts_at: string;
  enrollment_ends_at: string;
  events: PremierSeasonsV1Event[];
  scheduled_events: PremierSeasonsV1ScheduledEvent[];
};

export type PremierSeasonsV1Event = {
  id: string;
  type: string;
  starts_at: string;
  ends_at: string;
  conference_schedules: PremierSeasonsV1ConferenceSchedule[];
  map_selection: PremierSeasonsV1MapSelection;
  points_required_to_participate: number;
};

export type PremierSeasonsV1ConferenceSchedule = {
  conference: string;
  starts_at: string;
  ends_at: string;
};

export type PremierSeasonsV1MapSelection = {
  type: string;
  maps: PremierSeasonsV1Map[];
};

export type PremierSeasonsV1Map = {
  name: string;
  id: string;
};

export type PremierSeasonsV1ScheduledEvent = {
  event_id: string;
  conference: string;
  starts_at: string;
  ends_at: string;
};

export type PremierLeaderboardV1Response = APIResponse<PremierLeaderboardV1Item[]>;

export type PremierLeaderboardV1Item = {
  id: string;
  name: string;
  tag: string;
  conference: string;
  division: number;
  affinity: string;
  region: string;
  losses: number;
  wins: number;
  score: number;
  ranking: number;
  customization: PremierLeaderboardV1Customization;
};

export type PremierLeaderboardV1Customization = {
  icon: string;
  image: string;
  primary: string;
  secondary: string;
  tertiary: string;
};

export type PremierLeaderboardConference = PremierTeamSearchV1;

export type PremierLeaderboardResponse = APIResponse<PremierLeaderboardItem[]>;

export type PremierLeaderboardItem = {
  id: string;
  name: string;
  tag: string;
  conference: string;
  division: number;
  affinity: string;
  region: string;
  losses: number;
  wins: number;
  score: number;
  ranking: number;
  customization: PremierLeaderboardCustomization;
};

export type PremierLeaderboardCustomization = {
  icon: string;
  image: string;
  primary: string;
  secondary: string;
  tertiary: string;
};

export type LocalizedNames = {
  "ar-AE": string;
  "de-DE": string;
  "en-GB": string;
  "en-US": string;
  "es-ES": string;
  "es-MX": string;
  "fr-FR": string;
  "id-ID": string;
  "it-IT": string;
  "ja-JP": string;
  "ko-KR": string;
  "pl-PL": string;
  "pt-BR": string;
  "ru-RU": string;
  "th-TH": string;
  "tr-TR": string;
  "vi-VN": string;
  "zn-CN": string;
  "zn-TW": string;
};

export type Entity = {
  name: string;
  localizedNames: LocalizedNames[];
  id: string;
  assetName: string;
  assetPath: string;
};

export type Act = {
  name: string;
  localizedNames: LocalizedNames[];
  id: string;
  isActive: boolean;
};

export type GameData = {
  version: string;
  characters: Entity[];
  maps: Entity[];
  chromas: Entity[];
  skins: Entity[];
  skinLevels: Entity[];
  equips: Entity[];
  gameModes: Entity[];
  sprays: Entity[];
  sprayLevels: Entity[];
  charms: Entity[];
  charmLevels: Entity[];
  playerCards: Entity[];
  playerTitles: Entity[];
  acts: Act[];
};

export type GameDataResponse = APIResponse<GameData, 400 | 429 | 500>;

export type GameDataOptionalProps = {
  locale: Locale;
}

export type Crosshair = string; // Responds in binary in form of a string

export type CrosshairResponse = APIResponse<Crosshair, 400 | 403 | 404 | 408 | 429 | 500 | 503>;

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

export type StatusV1Response = APIResponse<StatusV1>;

export type StatusV1 = {
  maintenances: StatusV1Maintenance[];
  incidents: StatusV1Incident[];
};

export type StatusV1Maintenance = {
  created_at: string;
  archive_at: string;
  updates: StatusV1Update[];
  platforms: string[];
  updated_at: string;
  id: number;
  titles: StatusV1Title[];
  maintenance_status: string;
  incident_severity: string;
};

export type StatusV1Incident = {
  created_at: string;
  archive_at: string;
  updates: StatusV1Update[];
  platforms: string[];
  updated_at: string;
  id: number;
  titles: StatusV1Title[];
  maintenance_status: string;
  incident_severity: string;
};

export type StatusV1Update = {
  created_at: string;
  updated_at: string;
  publish: boolean;
  id: number;
  translations: StatusV1Translation[];
  publish_locations: string[];
  author: string;
};

export type StatusV1Translation = {
  content: string;
  locale: string;
};

export type StatusV1Title = {
  content: string;
  locale: string;
};

export type FeaturedStoreV1Response = APIResponse<FeaturedStoreV1, 400 | 403 | 404 | 408 | 429 | 500 | 501 | 503>;

export type FeaturedStoreV1 = {
  FeaturedBundle: FeaturedStoreV1BundleDetails;
};

export type FeaturedStoreV1BundleDetails = {
  Bundle: FeaturedStoreV1Bundle;
  Bundles: FeaturedStoreV1Bundle[];
};

export type FeaturedStoreV1Bundle = {
  ID: string;
  DataAssetID: string;
  CurrencyID: string;
  Items: FeaturedStoreV1Item[];
  Wholesaleonly: boolean;
};

export type FeaturedStoreV1Item = {
  Item: FeaturedStoreV1ItemDetails;
  CurrencyID: string;
  DiscountPercent: number;
  IsPromoItem: boolean;
};

export type FeaturedStoreV1ItemDetails = {
  ItemTypeID: string;
  ItemID: string;
  Amount: string;
};

export type FeaturedStoreV2Response = APIResponse<FeaturedStoreV2Bundle[], 400 | 403 | 404 | 408 | 429 | 500 | 501 | 503>;

export type FeaturedStoreV2Bundle = {
  bundle_uuid: string;
  bundle_price: number;
  whole_sale_only: boolean;
  expires_at: string;
  items: FeaturedStoreV2Item[];
};

export type FeaturedStoreV2Item = {
  uuid: string;
  name: string;
  image: string;
  type: string;
  discount_percent: number;
  promo_item: boolean;
};

export type StoreOffersV1Response = APIResponse<StoreOffersV1, 400 | 403 | 404 | 408 | 429 | 500 | 501 | 503>;

export type StoreOffersV1 = {
  Offers: StoreOffersV1Offer[];
  UpgradeCurrencyOffers: StoreOffersV1UpgradeCurrencyOffer[];
};

export type StoreOffersV1Offer = {
  OfferID: string;
  IsDirectPurchase: number;
  StartDate: string;
  Cost: {
    [key: string]: number;
  };
  Rewards: StoreOffersV1Reward[];
};

export type StoreOffersV1Reward = {
  ItemTypeID: string;
  ItemID: string;
  Quantity: number;
};

export type StoreOffersV1UpgradeCurrencyOffer = {
  OfferID: string;
  StorefrontItemID: string;
  Offer: StoreOffersV1OfferDetails;
  DiscountedPercent: number;
};

export type StoreOffersV1OfferDetails = {
  OfferID: string;
  IsDirectPurchase: number;
  StartDate: string;
  Cost: {
    [key: string]: number;
  };
  Rewards: StoreOffersV1Reward[];
};

export type StoreOffersV2Response = APIResponse<StoreOffersV2, 400 | 403 | 404 | 408 | 429 | 500 | 501 | 503>;

export type StoreOffersV2 = {
  offers: StoreOfferV2[];
};

export type StoreOfferV2 = {
  offer_id: string;
  cost: number;
  name: string;
  icon: string;
  type: string;
  skin_id: string;
  content_tier: StoreOfferV2ContentTier;
};

export type StoreOfferV2ContentTier = {
  name: string;
  dev_name: string;
  icon: string;
};

export type ValorantVersionV1Response = APIResponse<ValorantVersionV1, 400 | 403 | 404 | 408 | 429 | 500 | 501 | 503>;

export type ValorantVersionV1 = {
  region: Region;
  branch: string;
  build_date: string;
  build_ver: string;
  last_checked: string;
  version: number;
  version_for_api: string;
};

export type ValorantNewsArticleV1Response = APIResponse<ValorantNewsArticleV1Item[], 400 | 403 | 404 | 408 | 429 | 500 | 501 | 503>;

export type ValorantNewsArticleV1Item = {
  banner_url: string;
  category: string;
  date: string;
  external_link: string;
  title: string;
  url: string;
};

export type AccountDataV1OptionalProps = {
  force?: boolean;
}

export type AccountDataV1Response = APIResponse<AccountDataV1, 400 | 403 | 404 | 408 | 429 | 500 | 503>;

export type AccountDataV1 = {
  puuid: string;
  region: string;
  account_level: number;
  name: string;
  tag: string;
  card: {
    small: string;
    large: string;
    wide: string;
    id: string;
  },
  last_update: string;
  last_update_raw: number;
};

export type AccountDataV2OptionalProps = AccountDataV1OptionalProps;

export type AccountDataV2Platform = "PC" | "CONSOLE";

export type AccountDataV2Response = APIResponse<AccountDataV2, 400 | 403 | 404 | 408 | 429 | 500 | 503>;

export type AccountDataV2 = {
  puuid: string;
  region: string;
  account_level: number;
  name: string;
  tag: string;
  card: string;
  title: string;
  platforms: AccountDataV2Platform[];
  updated_at: string
};

export type ValorantAPIProps = {
  apiKey?: string;
};

export type APIResponse<T = unknown, R = {}, S extends number = 400 | 403 | 404 | 408 | 429 | 500 | 503> = {
  success: true;
  data: T;
} & R | {
  success: false;
  errors: DataError<S>[];
} 

export type DataError<S extends number = 400 | 403 | 404 | 408 | 429 | 500 | 503> = {
  code: number;
  message: string;
  status: S;
  details: string | null;
};

export type Season = "e1a1" | "e1a2" | "e1a3" | "e2a1" | "e2a2" | "e2a3" | "e3a1" | "e3a2" | "e3a3" | "e4a1" | "e4a2" | "e4a3" | "e5a1" | "e5a2" | "e5a3" | "e6a1" | "e6a2" | "e6a3" | "e7a1" | "e7a2" | "e7a3" | "e8a1" | "e8a2" | "e8a3" | "e9a1" | "e9a2" | "e9a3"

export type Platform = "pc" | "console";

export type Region = "na" | "eu" | "latam" | "br" | "ap" | "kr";

export type Gamemode = "competitive" | "custom" | "deathmatch" | "escalation" | "teamdeathmatch" | "newmap" | "replication" | "snowballfight" | "spikerush" | "swiftplay" | "unrated";

export type GameMap = "Ascent" | "Split" | "Fracture" | "Bind" | "Breeze" | "District" | "Kasbah" | "Piazza" | "Lotus" | "Pearl" | "Icebox" | "Haven";

export type CountryCode = "en-us" | "en-gb" | "de-de" | "es-es" | "es-mx" | "fr-fr" | "it-it" | "ja-jp" | "ko-kr" | "pt-br" | "ru-ru" | "tr-tr" | "vi-vn";

export type Locale = "ar-AE" | "de-DE" | "en-GB" | "en-US" | "es-ES" | "es-MX" | "fr-FR" | "id-ID" | "it-IT" | "ja-JP" | "ko-KR" | "pl-PL" | "pt-BR" | "ru-RU" | "th-TH" | "tr-TR" | "vi-VN" | "zn-CN" | "zn-TW"

export type FunctionParams = Record<string, string | number | boolean | undefined>;

export type StatusCodeTuple = [number, number | "-"];

export type GetAccountDataV1<P extends boolean = false> = P extends true
  ? (puuid: string, props?: AccountDataV1OptionalProps) => Promise<AccountDataV1Response>
  : (name: string, tag: string, props?: AccountDataV1OptionalProps) => Promise<AccountDataV1Response>;

export type GetAccountDataV2<P extends boolean = false> = P extends true
  ? (puuid: string, props?: AccountDataV2OptionalProps) => Promise<AccountDataV2Response>
  : (name: string, tag: string, props?: AccountDataV2OptionalProps) => Promise<AccountDataV2Response>;

export type FetchGameData = (props?: GameDataOptionalProps) => Promise<GameDataResponse>;

export type GenerateCrosshairImage = (id: string) => Promise<CrosshairResponse>;

export type GetValorantVersionV1 = (region: Region) => Promise<ValorantVersionV1Response>;

export type GetUpcomingMatches = (props?: UpcomingMatchV1OptionalProps) => Promise<UpcomingMatchV1Response>;

export type GetMatchDetailsV2 = (matchId: string) => Promise<MatchDetailsV2Response>;

export type GetMatchDetailsV4 = (region: Region, matchId: string) => Promise<MatchDetailsV4Response | void>;

export type GetMatchHistoryV3<P extends boolean = false> = P extends true 
  ? (region: Region, puuid: string) => Promise<MatchHistoryV3Response>
  : (region: Region, name: string, tag: string) => Promise<MatchHistoryV3Response>;

export type GetMatchHistoryV4<P extends boolean = false> = P extends true
  ? (region: Region, platform: Platform, puuid: string) => Promise<MatchHistoryV4Response>
  : (region: Region, platform: Platform, name: string, tag: string) => Promise<MatchHistoryV4Response>;

export type GetStoredMatchesV1<P extends boolean = false> = P extends true
  ? (region: Region, puuid: string) => Promise<StoredMatchesV1Response>
  : (region: Region, name: string, tag: string) => Promise<StoredMatchesV1Response>;

export type GetLeaderboardV1 = (region: Region, props?: LeaderboardV1OptionalProps) => Promise<LeaderboardV1Response>;

export type GetLeaderboardV3 = (region: Region, platform: Platform, props?: LeaderboardV3OptionalProps) => Promise<LeaderboardV3Response>;

export type GetMMRDataV2<P extends boolean = false> = P extends true
  ? (region: Region, puuid: string, props?: MMRDataV2OptionalProps) => Promise<MMRDataV2Response>
  : (region: Region, name: string, tag: string, props?: MMRDataV2OptionalProps) => Promise<MMRDataV2Response>;

export type GetMMRDataV3<P extends boolean = false> = P extends true
  ? (region: Region, platform: Platform, puuid: string) => Promise<MMRDataV3Response>
  : (region: Region, platform: Platform, name: string, tag: string) => Promise<MMRDataV3Response>;

export type GetMMRHistoryV1<P extends boolean = false> = P extends true
  ? (region: Region, puuid: string) => Promise<MMRHistoryV1Response>
  : (region: Region, name: string, tag: string) => Promise<MMRHistoryV1Response>;

export type GetPremierConferences = () => Promise<PremierConferenceV1Response>;

export type GetPremierLeaderboard = (region: Region, conference: PremierLeaderboardConference, division: number) => Promise<PremierLeaderboardResponse>;

export type GetPremierSeasonsV1 = (region: Region) => Promise<PremierSeasonsV1Response>;

export type GetPremierTeamDetailsV1<P extends boolean = false> = P extends true
  ? (teamId: string) => Promise<PremierTeamDetailsV1Response>
  : (name: string, tag: string) => Promise<PremierTeamDetailsV1Response>;

export type GetPremierTeamHistoryV1<P extends boolean = false> = P extends true
  ? (teamId: string) => Promise<PremierTeamHistoryV1Response>
  : (name: string, tag: string) => Promise<PremierTeamHistoryV1Response>;

export type SearchPremierTeamsV1 = (props: PremierTeamSearchV1Props) => Promise<PremierTeamSearchV1Response>;

export type GetQueueStatus = (region: Region) => Promise<QueueStatusV1Response | void>;

export type GetRegionStatusV1 = (region: Region) => Promise<StatusV1Response | void>;

export type GetStoreFeaturedV1 = () => Promise<FeaturedStoreV1Response>;

export type GetStoreFeaturedV2 = () => Promise<FeaturedStoreV2Response>;

export type GetStoreOffersV1 = () => Promise<StoreOffersV1Response>;

export type GetStoreOffersV2 = () => Promise<StoreOffersV2Response>;

export type QueueStatusV1Response = APIResponse<QueueStatusV1Data[]>;

export type QueueStatusV1Data = {
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

export type QueueStatusV1PartySize = {
  max: number;
  min: number;
  invalid: number[];
  full_party_bypass: boolean;
};

export type QueueStatusV1HighSkill = {
  max_party_size: number;
  min_tier: number;
  max_tier: number;
};

export type QueueStatusV1SkillDisparity = {
  tier: number;
  name: string;
  max_tier: QueueStatusV1MaxTier;
};

export type QueueStatusV1MaxTier = {
  id: number;
  name: string;
};

export type QueueStatusV1GameRules = {
  overtime_win_by_two: boolean;
  allow_lenient_surrender: boolean;
  allow_drop_out: boolean;
  assign_random_agents: boolean;
  skip_pregame: boolean;
  allow_overtime_draw_vote: boolean;
  overtime_win_by_two_capped: boolean;
  premier_mode: boolean;
};

export type QueueStatusV1Map = {
  map: QueueStatusV1MapDetails;
  enabled: boolean;
};

export type QueueStatusV1MapDetails = {
  id: string;
  name: string;
};

export interface ValorantAPIClass {
  apiKey?: string;

  accounts: {
    v1: {
      byName: GetAccountDataV1<false>;
      byPuuid: GetAccountDataV1<true>;
    };
    v2: {
      byName: GetAccountDataV2<false>;
      byPuuid: GetAccountDataV2<true>;
    };
  };

  content: {
    gameData: FetchGameData;
    crosshair: GenerateCrosshairImage;
    version: GetValorantVersionV1;
  };

  matches: {
    upcoming: GetUpcomingMatches;
    details: {
      v2: GetMatchDetailsV2;
      v4: GetMatchDetailsV4;
    };
    history: {
      v3: {
        byName: GetMatchHistoryV3<false>;
        byPuuid: GetMatchHistoryV3<true>;
      };
      v4: {
        byName: GetMatchHistoryV4<false>;
        byPuuid: GetMatchHistoryV4<true>;
      };
    };
    stored: {
      v1: {
        byName: GetStoredMatchesV1<false>;
        byPuuid: GetStoredMatchesV1<true>;
      }
    };
  };

  leaderboard: {
    v1: GetLeaderboardV1;
    v3: GetLeaderboardV3;
  };

  mmr: {
    v2: {
      byName: GetMMRDataV2<false>;
      byPuuid: GetMMRDataV2<true>;
    };
    v3: {
      byName: GetMMRDataV3<false>;
      byPuuid: GetMMRDataV3<true>;
    };
    history: {
      v1: {
        byName: GetMMRHistoryV1<false>;
        byPuuid: GetMMRHistoryV1<true>;
      };
    };
  };

  premier: {
    conferences: GetPremierConferences;
    leaderboard: GetPremierLeaderboard;
    seasons: {
      v1: GetPremierSeasonsV1;
    };
    teams: {
      details: {
        v1: {
          byName: GetPremierTeamDetailsV1<false>;
          byPuuid: GetPremierTeamDetailsV1<true>;
        }
      };
      history: {
        v1: {
          byName: GetPremierTeamHistoryV1<false>;
          byPuuid: GetPremierTeamHistoryV1<true>;
        };
      };
      search: {
        v1: SearchPremierTeamsV1;
      };
    };
  };

  queue: {
    status: GetQueueStatus;
  };

  region: {
    status: GetRegionStatusV1;
  };

  store: {
    featured: {
      v1: GetStoreFeaturedV1;
      v2: GetStoreFeaturedV2;
    };
    offers: {
      v1: GetStoreOffersV1;
      v2: GetStoreOffersV2;
    };
  };
}