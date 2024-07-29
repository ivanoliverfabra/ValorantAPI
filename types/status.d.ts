type StatusV1Response = {
  status: 200;
  data: StatusV1;
} | {
  errors: DataError[];
}

type StatusV1 = {
  maintenances: StatusV1Maintenance[];
  incidents: StatusV1Incident[];
};

type StatusV1Maintenance = {
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

type StatusV1Incident = {
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

type StatusV1Update = {
  created_at: string;
  updated_at: string;
  publish: boolean;
  id: number;
  translations: StatusV1Translation[];
  publish_locations: string[];
  author: string;
};

type StatusV1Translation = {
  content: string;
  locale: string;
};

type StatusV1Title = {
  content: string;
  locale: string;
};
