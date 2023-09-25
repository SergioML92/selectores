export enum Region {
  Africa = 'Africa',
  Americas = 'Americas',
  Asia = 'Asia',
  Europe = 'Europe',
  Oceania = 'Oceania'
}

export interface SmallCountry {
  name: string;
  cca3: string;
  borders: string[];
}

export interface Country {
  name:         Name;
  cca3:         string;
  status:       Status;
  unMember:     boolean;
  idd:          Idd;
  capital:      string[];
  altSpellings: string[];
  region:       string;
  subregion:    Subregion;
  languages:    Languages;
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  borders?:     string[];
  area:         number;
  demonyms:     Demonyms;
  flag:         string;
  maps:         Maps;
  population:   number;
  gini?:        { [key: string]: number };
  fifa?:        string;
  car:          Car;
  timezones:    string[];
  continents:   string[];
  flags:        Flags;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  postalCode?:  PostalCode;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Car {
  signs: string[];
  side:  Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export interface Currencies {
  EUR?: All;
  MKD?: All;
  BGN?: All;
  CHF?: All;
  NOK?: All;
  BAM?: BAM;
  SEK?: All;
  MDL?: All;
  RUB?: All;
  DKK?: All;
  FOK?: All;
  HUF?: All;
  UAH?: All;
  GBP?: All;
  GGP?: All;
  RSD?: All;
  BYN?: All;
  GIP?: All;
  CZK?: All;
  RON?: All;
  ISK?: All;
  JEP?: All;
  IMP?: All;
  PLN?: All;
  ALL?: All;
}

export interface All {
  name:   string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng:  Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png:  string;
  svg:  string;
  alt?: string;
}

export interface Idd {
  root:     string;
  suffixes: string[];
}

export interface Languages {
  slv?: string;
  ita?: string;
  eng?: string;
  gle?: string;
  mkd?: string;
  de?:  string;
  bul?: string;
  fra?: string;
  gsw?: string;
  roh?: string;
  nno?: string;
  nob?: string;
  smi?: string;
  bos?: string;
  hrv?: string;
  srp?: string;
  swe?: string;
  deu?: string;
  nld?: string;
  ron?: string;
  ell?: string;
  rus?: string;
  dan?: string;
  fao?: string;
  hun?: string;
  ukr?: string;
  cnr?: string;
  cat?: string;
  mlt?: string;
  nfr?: string;
  bel?: string;
  sqi?: string;
  tur?: string;
  nor?: string;
  ces?: string;
  slk?: string;
  lit?: string;
  isl?: string;
  nrf?: string;
  est?: string;
  por?: string;
  glv?: string;
  fin?: string;
  spa?: string;
  ltz?: string;
  lav?: string;
  pol?: string;
  lat?: string;
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: string;
  regex:  string;
}

export enum StartOfWeek {
  Monday = "monday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
  UserAssigned = "user-assigned",
}

export enum Subregion {
  CentralEurope = "Central Europe",
  EasternEurope = "Eastern Europe",
  NorthernEurope = "Northern Europe",
  SoutheastEurope = "Southeast Europe",
  SouthernEurope = "Southern Europe",
  WesternEurope = "Western Europe",
}
