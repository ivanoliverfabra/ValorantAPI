type PremierTeamDetailsV1 = {
  id: string;
  name: string;
  tag: string;
  enrolled: boolean;
  stats: PremierTeamDetailsV1Stats;
  placement: PremierTeamDetailsV1Placement;
  customization: PremierTeamDetailsV1Customization;
  member: PremierTeamDetailsV1Member[];
};

type PremierTeamDetailsV1Stats = {
  wins: number;
  matches: number;
  losses: number;
};

type PremierTeamDetailsV1Placement = {
  points: number;
  conference: string;
  division: number;
  place: number;
};

type PremierTeamDetailsV1Customization = {
  icon: string;
  image: string;
  primary: string;
  secondary: string;
  tertiary: string;
};

type PremierTeamDetailsV1Member = {
  puuid: string;
  name: string;
  tag: string;
};

type PremierTeamDetailsV1Response = {
  status: 200;
  data: PremierTeamDetailsV1;
} | {
  errors: DataError[];
};

type PremierTeamHistoryV1Response = {
  status: 200;
  data: PremierTeamHistoryV1Data;
} | {
  errors: DataError[];
};

type PremierTeamHistoryV1Data = {
  league_matches: PremierTeamHistoryV1LeagueMatch[];
};

type PremierTeamHistoryV1LeagueMatch = {
  id: string;
  points_before: number;
  points_after: number;
  started_at: string;
};

type PremierTeamSearchV1Props = {
  name?: string;
  tag?: string;
  divison?: number;
  conference?: PremierTeamSearchV1;
};

type PremierTeamSearchV1 = "EU_CENTRAL_EAST" | "EU_WEST" | "EU_MIDDLE_EAST" | "EU_TURKEY" | "NA_US_EAST" | "NA_US_WEST" | "LATAM_NORTH" | "LATAM_SOUTH" | "BR_BRAZIL" | "KR_KOREA" | "AP_ASIA" | "AP_JAPAN" | "AP_OCEANIA" | "AP_SOUTH_ASIA"

type PremierTeamSearchV1Response = {
  status: 200;
  data: PremierTeamSearchV1Item[];
} | {
  errors: DataError[];
};

type PremierTeamSearchV1Item = {
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

type PremierTeamSearchV1Customization = {
  icon: string;
  image: string;
  primary: string;
  secondary: string;
  tertiary: string;
};

type PremierConferenceV1Response = {
  status: 200;
  data: PremierConferenceV1Item[];
} | {
  errors: DataError[];
};

type PremierConferenceV1Item = {
  id: string;
  affinity: string;
  pods: PremierConferenceV1Pod[];
  region: string;
  timezone: string;
  name: string;
  icon: string;
};

type PremierConferenceV1Pod = {
  pod: string;
  name: string;
};

type PremierSeasonsV1Response = {
  status: 200;
  data: PremierSeasonsV1Item[];
} | {
  errors: DataError[];
};

type PremierSeasonsV1Item = {
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

type PremierSeasonsV1Event = {
  id: string;
  type: string;
  starts_at: string;
  ends_at: string;
  conference_schedules: PremierSeasonsV1ConferenceSchedule[];
  map_selection: PremierSeasonsV1MapSelection;
  points_required_to_participate: number;
};

type PremierSeasonsV1ConferenceSchedule = {
  conference: string;
  starts_at: string;
  ends_at: string;
};

type PremierSeasonsV1MapSelection = {
  type: string;
  maps: PremierSeasonsV1Map[];
};

type PremierSeasonsV1Map = {
  name: string;
  id: string;
};

type PremierSeasonsV1ScheduledEvent = {
  event_id: string;
  conference: string;
  starts_at: string;
  ends_at: string;
};

type PremierLeaderboardV1Response = {
  status: 200;
  data: PremierLeaderboardV1Item[];
} | {
  errors: DataError[];
};

type PremierLeaderboardV1Item = {
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

type PremierLeaderboardV1Customization = {
  icon: string;
  image: string;
  primary: string;
  secondary: string;
  tertiary: string;
};

type PremierLeaderboardConference = PremierTeamSearchV1;

type PremierLeaderboardResponse = {
  status: 200;
  data: PremierLeaderboardItem[];
} | {
  errors: DataError[];
};

type PremierLeaderboardItem = {
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

type PremierLeaderboardCustomization = {
  icon: string;
  image: string;
  primary: string;
  secondary: string;
  tertiary: string;
};
