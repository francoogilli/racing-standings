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

interface EventCategory {
  category_id: string;
  category_timing_id: number;
  timing_id: number;
  extra_timing_id: string | null;
  sequence: number;
  num_laps: number;
  sprint_num_laps: number | null;
  red_flag: number;
  sprint_red_flag: number | null;
  distance: {
    meters: number;
    kiloMeters: number;
    miles: number;
    feet: number;
  };
}

interface Circuit {
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
  designer: string;
  modified: string | null;
  capacity: number | null;
  active: boolean;
  timing_ids: Array<{ business_unit: string; id: number }>;
  track: {
    id: string;
    business_unit: string | null;
    first_grid: string;
    box_entry: boolean;
    box_exit: boolean;
    lenght: string;
    lenght_units: {
      meters: number;
      kiloMeters: number;
      miles: number;
      feet: number;
    };
    width: string;
    width_units: {
      meters: number;
      kiloMeters: number;
      miles: number;
      feet: number;
    };
    longest_straight: string;
    longest_straight_units: {
      meters: number;
      kiloMeters: number;
      miles: number;
      feet: number;
    };
    left_corners: string;
    right_corners: string;
    is_active: boolean;
    timing_ids: Array<{ business_unit: string; id: string }>;
    modification_date: string;
  };
  circuit_descriptions: Array<{
    id: string;
    business_unit_id: {
      id: string;
    };
    business_unit_name: {
      value: string;
    };
    language: string;
    description: string;
  }>;
  user_location: {
    lat: string;
    lng: string;
    radius: number;
  };
}

interface TicketUrl {
  id: string;
  language: string;
  url: string;
  type: string;
}

export interface EventInfoData {
  event_categories: EventCategory[];
  country: string;
  circuit: Circuit;
  type: string;
  urls: TicketUrl[];
  hashtag: string;
  date_end: string;
  date_start: string;
  timing_id: number;
  assets: [
    {
      id: string;
      name: string;
      type: string;
      path: string;
      mimetype: string;
    },
    {
      id: string;
      name: string;
      type: string;
      path: string;
      mimetype: string;
    }
  ];
}
