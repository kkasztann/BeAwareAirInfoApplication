export interface StacjePobliskie {
  address?: Address;
  airQualityIndex?: number;
  distance?: number;
  id?: number;
  location?: Coordinates;
  measurementTime?: string;
  name?: string;
  pm10?: number;
  pm25?: number;
  pollutionLevel?: number;
  vendor?: string;
}
export interface Address {
  country?: string;
  locality?: string;
  route?: string;
  streetNumber?: string;
}
export interface Coordinates {
  latitude: number;
  longitude: number;
}
