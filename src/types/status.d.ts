import { APIResponse } from ".";

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
