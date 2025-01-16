export interface Season {
  id: string;
  name: string | null;
  year: number;
  current: boolean;
}

export interface Rider {
  id: string;
  full_name: string;
  country: {
    iso: string;
    name: string;
    region_iso: string;
  };
  legacy_id: number;
  number: number;
  riders_api_uuid: string;
}

export interface Team {
  id: string;
  name: string;
  legacy_id: number;
  season: {
    id: string;
    year: number;
    current: boolean;
  };
}

export interface Constructor {
  id: string;
  name: string;
  legacy_id: number;
}

export interface WorldStanding {
  file: string;
  classification: Array<{
    id: string;
    position: number;
    rider: Rider;
    team: Team;
    constructor: Constructor;
    session: string;
    points: number;
  }>;
  xmlFile: string;
}



export interface ResponseItem {
  country: {
    iso: string;
    name: string;
    region_iso: string;
  };
  event_files: {
    circuit_information: FileDetail;
    podiums: FileDetail;
    pole_positions: FileDetail;
    nations_statistics: FileDetail;
    riders_all_time: FileDetail;
  };
  circuit: {
    id: string;
    name: string;
    legacy_id: number;
    place: string;
    nation: string;
  };
  test: boolean;
  sponsored_name: string;
  date_end: string;
  toad_api_uuid: string;
  date_start: string;
  additional_name: string;
  name: string;
  legacy_id: {
    categoryId: number;
    eventId: number;
  }[];
  season: {
    id: string;
    year: number;
    current: boolean;
  };
  short_name: string;
  id: string;
  status: "FINISHED" | "ONGOING" | "UPCOMING";
}

interface FileDetail {
  url: string;
  menu_position: number;
}
