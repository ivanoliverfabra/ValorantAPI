import { expect } from 'bun:test';
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
} from "../src";

const name = 'fabra';
const tag = 'olivr';
const puuid = '79bed427-e691-573d-9bc1-046d8f817de8';
const matchId = '28e7e44a-767b-4012-b45e-80c3c1419fd6';
const premierTeamId = '0e0129a6-9b2f-41e4-8ba1-0915e27ebf7c';
const premierTeamName = 'MORBIDLY OBESE';
const premierTeamTag = 'OBESE';
const crosshair = '0;P;t;6;o;0;0l;4;0o;2;0a;1;0f;0;1b;0';

async function customTest<Q = unknown>(name: string, fn: () => Promise<Q | any>, expectError = false) {
  try {
    const data = await fn();
    expect(data).toBeDefined();
    console.log(`✅ ${name}`);

    if (typeof data === 'object') {
      Bun.write(`./data/${name}.json`, JSON.stringify(data, null, 2), {
        createPath: true
      });
    } else if (typeof data === 'string') {
      Bun.write(`./data/${name}.txt`, data, {
        createPath: true
      });
    } else {
      console.log(data);
    }

  } catch (error) {
    if (expectError) {
      console.log(`✅ ${name}: Expected error occurred.`);
    } else {
      console.error(`❌ ${name}:`, error);
    }
  }
}

const tests = [
  { name: 'getAccountDataV1 with NameTag', func: () => getAccountDataV1(name, tag) },
  { name: 'getAccountDataV1 with PUUID', func: () => getAccountDataV1(puuid) },
  { name: 'getAccountDataV2 with NameTag', func: () => getAccountDataV2(name, tag) },
  { name: 'getAccountDataV2 with PUUID', func: () => getAccountDataV2(puuid) },
  { name: 'getLeaderboardV1', func: () => getLeaderboardV1('na') },
  { name: 'getLeaderboardV3', func: () => getLeaderboardV3('na', 'pc') },
  { name: 'getMatchDetailsV2', func: () => getMatchDetailsV2(matchId) },
  { name: 'getMatchDetailsV4', func: () => getMatchDetailsV4('na', matchId) },
  { name: 'getMatchHistoryV3 with NameTag', func: () => getMatchHistoryV3('na', name, tag) },
  { name: 'getMatchHistoryV3 with PUUID', func: () => getMatchHistoryV3('na', puuid) },
  { name: 'getMatchHistoryV4 with NameTag', func: () => getMatchHistoryV4('na', 'pc', name, tag) },
  { name: 'getMatchHistoryV4 with PUUID', func: () => getMatchHistoryV4('na', 'pc', puuid) },
  { name: 'getMMRDataV2 with NameTag', func: () => getMMRDataV2('na', name, tag) },
  { name: 'getMMRDataV2 with PUUID', func: () => getMMRDataV2('na', puuid) },
  { name: 'getMMRDataV3 with NameTag', func: () => getMMRDataV3('na', 'pc', name, tag) },
  { name: 'getMMRDataV3 with PUUID', func: () => getMMRDataV3('na', 'pc', puuid) },
  { name: 'getMMRHistoryV1 with NameTag', func: () => getMMRHistoryV1('na', name, tag) },
  { name: 'getMMRHistoryV1 with PUUID', func: () => getMMRHistoryV1('na', puuid) },
  { name: 'getPremierConferences', func: () => getPremierConferences() },
  { name: 'getPremierLeaderboard', func: () => getPremierLeaderboard('na') },
  { name: 'getPremierSeasonsV1', func: () => getPremierSeasonsV1('na') },
  { name: 'getPremierTeamDetailsV1 with NameTag', func: () => getPremierTeamDetailsV1(premierTeamName, premierTeamTag) },
  { name: 'getPremierTeamDetailsV1 with ID', func: () => getPremierTeamDetailsV1(premierTeamId) },
  { name: 'getPremierTeamHistoryV1 with NameTag', func: () => getPremierTeamHistoryV1(premierTeamName, premierTeamTag) },
  { name: 'getPremierTeamHistoryV1 with ID', func: () => getPremierTeamHistoryV1(premierTeamId) },
  { name: 'getQueueStatus', func: () => getQueueStatus('na') },
  { name: 'getRegionStatusV1', func: () => getRegionStatusV1('na') },
  { name: 'getStoredMatchesV1 with NameTag', func: () => getStoredMatchesV1('na', name, tag) },
  { name: 'getStoredMatchesV1 with PUUID', func: () => getStoredMatchesV1('na', puuid) },
  { name: 'getStoreFeaturedV1', func: () => getStoreFeaturedV1() },
  { name: 'getStoreFeaturedV2', func: () => getStoreFeaturedV2() },
  { name: 'getStoreOffersV1', func: () => getStoreOffersV1() },
  { name: 'getStoreOffersV2', func: () => getStoreOffersV2() },
  { name: 'getUpcomingMatches', func: () => getUpcomingMatches() },
  { name: 'getValorantVersionV1', func: () => getValorantVersionV1('na') },
  { name: 'searchPremierTeamsV1', func: () => searchPremierTeamsV1({ name: premierTeamName, tag: premierTeamTag }) },
  { name: 'fetchGameData', func: () => fetchGameData() },
  { name: 'generateCrosshairImage', func: () => generateCrosshairImage(crosshair) },
];

for (const test of tests) {
  await customTest<ReturnType<typeof test.func>>(test.name, test.func);
}