# ValorantAPI

ValorantAPI is a wrapper library for the unofficial Valorant API. It provides easy-to-use methods to interact with various endpoints of the Valorant API.

## Installation

```bash
npm install @ivanoliverfabra/valorant-api
pnpm add @ivanoliverfabra/valorant-api
yarn add @ivanoliverfabra/valorant-api
bun add @ivanoliverfabra/valorant-api
```

## Usage

### Initialization

```ts
import ValorantAPI from "@ivanoliverfabra/valorant-api";

const api = new ValorantAPI({ apiKey: "HDEV-..." });
const api = new ValorantAPI(); // If you set the environment variable HDEV_API_KEY
```

### Available Methods

#### Game Data

- `fetchGameData`
- `generateCrosshairImage`

#### Account Data

- `getAccountDataV1`
- `getAccountDataV2`

#### Leaderboard

- `getLeaderboardV1`
- `getLeaderboardV3`

#### Match Details

- `getMatchDetailsV2`
- `getMatchDetailsV4`

#### Match History

- `getMatchHistoryV3`
- `getMatchHistoryV4`

#### MMR Data

- `getMMRDataV2`
- `getMMRDataV3`

#### MMR History

- `getMMRHistoryV1`

#### Premier

- `getPremierConferences`
- `getPremierLeaderboard`
- `getPremierSeasonsV1`
- `getPremierTeamDetailsV1`
- `getPremierTeamHistoryV1`
- `searchPremierTeamsV1`

#### Queue Status

- `getQueueStatus`

#### Region Status

- `getRegionStatusV1`

#### Stored Matches

- `getStoredMatchesV1`

#### Store

- `getStoreFeaturedV1`
- `getStoreFeaturedV2`
- `getStoreOffersV1`
- `getStoreOffersV2`

#### Upcoming Matches

- `getUpcomingMatches`

#### Valorant Version

- `getValorantVersionV1`

## Example

```ts
import ValorantAPI from "@ivanoliverfabra/valorant-api";

const apiKey = "HDEV-..."; // Optional if you set the environment variable HDEV_API_KEY

const api = new ValorantAPI({ apiKey });

const data = await api.accounts.v1.byName("fabra", "olivr"); // With Name and Tag
const data = await api.accounts.v1.byPuuid(
  "79bed427-e691-573d-9bc1-046d8f817de8"
); // With PUUID
```

```ts
import { getAccountDataV1 } from "@ivanoliverfabra/valorant-api";
import { getAccountDataV1 } from "@ivanoliverfabra/valorant-api/test"; // Recieve mock data

const apiKey = "HDEV-..."; // Optional if you set the environment variable HDEV_API_KEY

const data = await getAccountDataV1("fabra", "olivr", apiKey); // With Name and Tag
const data = await getAccountDataV1(
  "79bed427-e691-573d-9bc1-046d8f817de8",
  apiKey
); // With PUUID
```

## Get API Key

<a href="https://discord.gg/X3GaVkX2YN" target="_blank"><img src="https://discordapp.com/api/guilds/704231681309278228/widget.png?style=banner2"/></a>

## Environment Variables

```bash
HDEV_API_KEY=YOUR_API_KEY
```

If you set the environment variable `HDEV_API_KEY` to your API key, you can use the library without passing the API key as a parameter to the functions.
