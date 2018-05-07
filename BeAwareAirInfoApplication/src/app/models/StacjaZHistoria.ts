export interface StacjaZHistoria {
  currentMeasurements?: AllMeasurements;
  forecast?: MeasurementsTimeFramed[];
  history?: MeasurementsTimeFramed;
}

export interface AllMeasurements {
  airQualityIndex?: number;
  humidity?: number;
  measurementTime?: any;
  pm1?: number;
  pm10?: number;
  pm25?: number;
  pollutionLevel: number;
  pressure?: number;
  temperature?: number;
  windDirection?: number;
  windSpeed?: number;
}

export interface MeasurementsTimeFramed {
  fromDateTime?: string;
  measurements?: AllMeasurements;
  tillDateTime?: string;
}
