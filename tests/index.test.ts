import { expect, test } from 'bun:test';
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

test('getAccountDataV1', async () => {
  const withNameTag = await getAccountDataV1(name, tag);
  expect(withNameTag).toBeDefined();

  const withPuuid = await getAccountDataV1(puuid);
  expect(withPuuid).toBeDefined();
});

test('getAccountDataV2', async () => {
  const withNameTag = await getAccountDataV2(name, tag);
  expect(withNameTag).toBeDefined();

  const withPuuid = await getAccountDataV2(puuid);
  expect(withPuuid).toBeDefined();
});

test('getLeaderboardV1', async () => {
  const leaderboard = await getLeaderboardV1('na');
  expect(leaderboard).toBeDefined();
});

test('getLeaderboardV3', async () => {
  const leaderboard = await getLeaderboardV3('na', 'pc');
  expect(leaderboard).toBeDefined();
});

test('getMatchDetailsV2', async () => {
  const matchDetails = await getMatchDetailsV2(matchId);
  expect(matchDetails).toBeDefined();
});

test('getMatchDetailsV4', async () => {
  const matchDetails = await getMatchDetailsV4('pc', matchId);
  expect(matchDetails).toBeDefined();
});

test('getMatchHistoryV3', async () => {
  const withNameTag = await getMatchHistoryV3('na', name, tag);
  expect(withNameTag).toBeDefined();

  const withPuuid = await getMatchHistoryV3('na', puuid);
  expect(withPuuid).toBeDefined();
});

test('getMatchHistoryV4', async () => {
  const withNameTag = await getMatchHistoryV4('na', 'pc', name, tag);
  expect(withNameTag).toBeDefined();

  const withPuuid = await getMatchHistoryV4('na', 'pc', puuid);
  expect(withPuuid).toBeDefined();
});

test('getMMRDataV2', async () => {
  const withNameTag = await getMMRDataV2('na', name, tag);
  expect(withNameTag).toBeDefined();

  const withPuuid = await getMMRDataV2('na', puuid);
  expect(withPuuid).toBeDefined();
});

test('getMMRDataV3', async () => {
  const withNameTag = await getMMRDataV3('na', 'pc', name, tag);
  expect(withNameTag).toBeDefined();

  const withPuuid = await getMMRDataV3('na', 'pc', puuid);
  expect(withPuuid).toBeDefined();
});

test('getMMRHistoryV1', async () => {
  const withNameTag = await getMMRHistoryV1('na', name, tag);
  expect(withNameTag).toBeDefined();

  const withPuuid = await getMMRHistoryV1('na', puuid);
  expect(withPuuid).toBeDefined();
});

test('getPremierConferences', async () => {
  const conferences = await getPremierConferences();
  expect(conferences).toBeDefined();
});

test('getPremierLeaderboard', async () => {
  const leaderboard = await getPremierLeaderboard('na');
  expect(leaderboard).toBeDefined();
});

test('getPremierSeasonsV1', async () => {
  const seasons = await getPremierSeasonsV1('na');
  expect(seasons).toBeDefined();
});

test('getPremierTeamDetailsV1', async () => {
  const withNameTag = await getPremierTeamDetailsV1(premierTeamName, premierTeamTag);
  expect(withNameTag).toBeDefined();

  const withId = await getPremierTeamDetailsV1(premierTeamId);
  expect(withId).toBeDefined();
});

test('getPremierTeamHistoryV1', async () => {
  const withNameTag = await getPremierTeamHistoryV1(premierTeamName, premierTeamTag);
  expect(withNameTag).toBeDefined();

  const withId = await getPremierTeamHistoryV1(premierTeamId);
  expect(withId).toBeDefined();
});

test('getQueueStatus', async () => {
  const queueStatus = await getQueueStatus('na');
  expect(queueStatus).toBeDefined();
});

test('getRegionStatusV1', async () => {
  const regionStatus = await getRegionStatusV1('na');
  expect(regionStatus).toBeDefined();
});

test('getStoredMatchesV1', async () => {
  const withNameTag = await getStoredMatchesV1('na', name, tag);
  expect(withNameTag).toBeDefined();

  const withPuuid = await getStoredMatchesV1('na', puuid);
  expect(withPuuid).toBeDefined();
});

test('getStoreFeaturedV1', async () => {
  const featured = await getStoreFeaturedV1();
  expect(featured).toBeDefined();
});

test('getStoreFeaturedV2', async () => {
  const featured = await getStoreFeaturedV2();
  expect(featured).toBeDefined();
});

test('getStoreOffersV1', async () => {
  const offers = await getStoreOffersV1();
  expect(offers).toBeDefined();
});

test('getStoreOffersV2', async () => {
  const offers = await getStoreOffersV2();
  expect(offers).toBeDefined();
});

test('getUpcomingMatches', async () => {
  const upcomingMatches = await getUpcomingMatches();
  expect(upcomingMatches).toBeDefined();
});

test('getValorantVersionV1', async () => {
  const version = await getValorantVersionV1('na');
  expect(version).toBeDefined();
});

test('searchPremierTeamsV1', async () => {
  const searchResults = await searchPremierTeamsV1({
    name: premierTeamName,
    tag: premierTeamTag
  });
  expect(searchResults).toBeDefined();
});

test('fetchGameData', async () => {
  const gameData = await fetchGameData();
  expect(gameData).toBeDefined();
});

test('generateCrosshairImage', async () => {
  const crosshairImage = await generateCrosshairImage(crosshair);
  expect(crosshairImage).toBeDefined();
});