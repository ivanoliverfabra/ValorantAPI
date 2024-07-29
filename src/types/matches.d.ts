export type MatchDetailsV2Response = {
  status: 200;
  data: MatchDetailsV2;
} | {
  errors: DataError[];
};

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

export type MatchDetailsV4Response = {
  status: 200;
  data: MatchDetailsV4;
} | {
  errors: DataError[];
};

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
