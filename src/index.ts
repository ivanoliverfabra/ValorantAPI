import {
  fetchGameData,
  generateCrosshairImage,
  getAccountDataV1,
  getAccountDataV2,
  getLeaderboardV1,
  getLeaderboardV3,
  getMatchDetailsV2,
  getMatchDetailsV4,
  getMatchHistoryV3,
  getMatchHistoryV4,
  getMMRDataV2,
  getMMRDataV3,
  getMMRHistoryV1,
  getPremierConferences,
  getPremierLeaderboard,
  getPremierSeasonsV1,
  getPremierTeamDetailsV1,
  getPremierTeamHistoryV1,
  getQueueStatus,
  getRegionStatusV1,
  getStoredMatchesV1,
  getStoreFeaturedV1,
  getStoreFeaturedV2,
  getStoreOffersV1,
  getStoreOffersV2,
  getUpcomingMatches,
  getValorantVersionV1,
  searchPremierTeamsV1
} from "./utils";

import {
  ValorantAPIClass,
  ValorantAPIProps
} from "./types";

export * from "./utils";

export default class ValorantAPI implements ValorantAPIClass {
  apiKey?: string;

  constructor(props: ValorantAPIProps) {
    this.apiKey = props.apiKey;
  }

  public accounts: ValorantAPIClass["accounts"] = {
    v1: {
      byName: (name, tag, props) => getAccountDataV1(name, tag, this.apiKey, props),
      byPuuid: (puuid, props) => getAccountDataV1(puuid, this.apiKey, props),
    },
    v2: {
      byName: (name, tag, props) => getAccountDataV2(name, tag, this.apiKey, props),
      byPuuid: (puuid, props) => getAccountDataV2(puuid, this.apiKey, props),
    }
  };

  public content: ValorantAPIClass["content"] = {
    gameData: (props) => fetchGameData(this.apiKey, props),
    crosshair: (id) => generateCrosshairImage(id, this.apiKey),
    version: (region) => getValorantVersionV1(region, this.apiKey),
  };

  public matches: ValorantAPIClass["matches"] = {
    upcoming: (props) => getUpcomingMatches(this.apiKey, props),
    details: {
      v2: (matchId) => getMatchDetailsV2(matchId, this.apiKey),
      v4: (platform, matchId) => getMatchDetailsV4(platform, matchId, this.apiKey),
    },
    history: {
      v3: {
        byName: (region, name, tag) => getMatchHistoryV3(region, name, tag, this.apiKey),
        byPuuid: (region, puuid) => getMatchHistoryV3(region, puuid, this.apiKey),
      },
      v4: {
        byName: (region, platform, name, tag) => getMatchHistoryV4(region, platform, name, tag, this.apiKey),
        byPuuid: (region, platform, puuid) => getMatchHistoryV4(region, platform, puuid, this.apiKey),
      }
    },
    stored: {
      v1: {
        byName: (region, name, tag) => getStoredMatchesV1(region, name, tag, this.apiKey),
        byPuuid: (region, puuid) => getStoredMatchesV1(region, puuid, this.apiKey),
      }
    },
  };

  public leaderboard: ValorantAPIClass["leaderboard"] = {
    v1: (region, props) => getLeaderboardV1(region, this.apiKey, props),
    v3: (region, platform, props) => getLeaderboardV3(region, platform, this.apiKey, props),
  };

  public mmr: ValorantAPIClass["mmr"] = {
    history: {
      v1: {
        byName: (region, name, tag) => getMMRHistoryV1(region, name, tag, this.apiKey),
        byPuuid: (region, puuid) => getMMRHistoryV1(region, puuid, this.apiKey),
      },
    },
    v2: {
      byName: (region, name, tag, props) => getMMRDataV2(region, name, tag, this.apiKey, props),
      byPuuid: (region, puuid, props) => getMMRDataV2(region, puuid, this.apiKey, props),
    },
    v3: {
      byName: (region, platform, name, tag) => getMMRDataV3(region, platform, name, tag, this.apiKey),
      byPuuid: (region, platform, puuid) => getMMRDataV3(region, platform, puuid, this.apiKey),
    },
  };

  public premier: ValorantAPIClass["premier"] = {
    conferences: () => getPremierConferences(this.apiKey),
    leaderboard: (region, conference, division) => getPremierLeaderboard(region, conference, division, this.apiKey),
    seasons: {
      v1: (region) => getPremierSeasonsV1(region, this.apiKey),
    },
    teams: {
      details: {
        v1: {
          byName: (name, tag) => getPremierTeamDetailsV1(name, tag, this.apiKey),
          byPuuid: (puuid) => getPremierTeamDetailsV1(puuid, this.apiKey),
        }
      },
      history: {
        v1: {
          byName: (name, tag) => getPremierTeamHistoryV1(name, tag, this.apiKey),
          byPuuid: (puuid) => getPremierTeamHistoryV1(puuid, this.apiKey),
        }
      },
      search: {
        v1: (props) => searchPremierTeamsV1(props, this.apiKey),
      },
    },
  };

  public queue: ValorantAPIClass["queue"] = {
    status: (region) => getQueueStatus(region, this.apiKey),
  };

  public region: ValorantAPIClass["region"] = {
    status: (region) => getRegionStatusV1(region, this.apiKey),
  };

  public store: ValorantAPIClass["store"] = {
    featured: {
      v1: () => getStoreFeaturedV1(this.apiKey),
      v2: () => getStoreFeaturedV2(this.apiKey),
    },
    offers: {
      v1: () => getStoreOffersV1(this.apiKey),
      v2: () => getStoreOffersV2(this.apiKey),
    },
  };
}