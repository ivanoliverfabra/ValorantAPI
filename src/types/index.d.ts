export * from "./account";
export * from "./content";
export * from "./crosshair";
export * from "./esports";
export * from "./leaderboard";
export * from "./matches";
export * from "./matchlist";
export * from "./mmr";
export * from "./mmr-history";
export * from "./premier";
export * from "./queue";
export * from "./store";
export * from "./version";
export * from "./website";

export type ValorantAPIProps = {
  apiKey: string;
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
export type GetMatchDetailsV4 = (platform: Platform, matchId: string) => Promise<MatchDetailsV4Response>;
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

export type GetQueueStatus = (region: Region) => Promise<QueueStatusV1Response>;

export type GetRegionStatusV1 = (region: Region) => Promise<StatusV1Response>;

export type GetStoreFeaturedV1 = () => Promise<FeaturedStoreV1Response>;
export type GetStoreFeaturedV2 = () => Promise<FeaturedStoreV2Response>;
export type GetStoreOffersV1 = () => Promise<StoreOffersV1Response>;
export type GetStoreOffersV2 = () => Promise<StoreOffersV2Response>;

export interface ValorantAPIClass {
  apiKey: string;

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