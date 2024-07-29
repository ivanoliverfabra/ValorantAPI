type ValorantAPIProps = {
  apiKey: string;
};

type DataError<S extends number = 400 | 403 | 404 | 408 | 429 | 500 | 503> = {
  code: number;
  message: string;
  status: S;
  details: string | null;
};

type Season = "e1a1" | "e1a2" | "e1a3" | "e2a1" | "e2a2" | "e2a3" | "e3a1" | "e3a2" | "e3a3" | "e4a1" | "e4a2" | "e4a3" | "e5a1" | "e5a2" | "e5a3" | "e6a1" | "e6a2" | "e6a3" | "e7a1" | "e7a2" | "e7a3" | "e8a1" | "e8a2" | "e8a3" | "e9a1" | "e9a2" | "e9a3"
type Platform = "pc" | "console";
type Region = "na" | "eu" | "latam" | "br" | "ap" | "kr";
type Gamemode = "competitive" | "custom" | "deathmatch" | "escalation" | "teamdeathmatch" | "newmap" | "replication" | "snowballfight" | "spikerush" | "swiftplay" | "unrated";
type GameMap = "Ascent" | "Split" | "Fracture" | "Bind" | "Breeze" | "District" | "Kasbah" | "Piazza" | "Lotus" | "Pearl" | "Icebox" | "Haven";