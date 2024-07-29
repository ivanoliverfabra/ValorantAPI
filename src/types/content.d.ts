import { APIResponse } from ".";

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