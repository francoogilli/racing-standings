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

export interface EventData {
  event_categories: EventCategory[];
  country: string;
  circuit: Circuit;
  type: string;
  urls: Url[];
}

export interface EventCategory {
  category_id: string;
  category_timing_id: number;
  timing_id: number;
  extra_timing_id: string | null;
  sequence: number;
  num_laps: number;
  sprint_num_laps: number | null;
  red_flag: number;
  sprint_red_flag: number | null;
  distance: Distance;
}

export interface Distance {
  meters: number;
  kiloMeters: number;
  miles: number;
  feet: number;
}

export interface Circuit {
  id: string;
  name: string;
  iso_code: string;
  country: string;
  region: string;
  city: string;
  postal_code: string;
  address: string;
  lat: string;
  lng: string;
  place_id: string;
  constructed: number;
  designer: string | null;
  modified: number;
  capacity: number | null;
  active: boolean;
  timing_ids: TimingId[];
  track: Track;
  circuit_descriptions: CircuitDescription[];
  user_location: UserLocation;
}

export interface TimingId {
  business_unit: string;
  id: number | string;
}

export interface Track {
  id: string;
  business_unit: string | null;
  first_grid: string;
  box_entry: boolean;
  box_exit: boolean;
  lenght: string;
  lenght_units: Units;
  width: string;
  width_units: Units;
  longest_straight: string;
  longest_straight_units: Units;
  left_corners: string;
  right_corners: string;
  is_active: boolean;
  timing_ids: TimingId[];
  modification_date: string;
  assets: Assets;
}

export interface Units {
  meters: number;
  kiloMeters: number;
  miles: number;
  feet: number;
}

export interface Assets {
  info: AssetInfo;
  simple: AssetInfo;
}

export interface AssetInfo {
  id: string;
  name: string;
  type: string;
  path: string;
  mimetype: string;
}

export interface CircuitDescription {
  id: string;
  business_unit_id: BusinessUnitId;
  business_unit_name: BusinessUnitName;
  language: string;
  description: string;
}

export interface BusinessUnitId {
  id: string;
}

export interface BusinessUnitName {
  value: string;
}

export interface UserLocation {
  lat: string;
  lng: string;
  radius: number;
}

export interface Url {
  id: string;
  language: string;
  url: string;
  type: string;
}
