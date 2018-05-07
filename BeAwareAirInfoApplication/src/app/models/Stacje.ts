
export interface Stacje {
  address?: Address;
  id?: number;
  location?: Coordinates;
  name?: string;
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
