export interface Coords {
  latitude: number;
  longitude: number;
}

export interface WeatherLocation {
  name: string;
  country: string;
  localtime: string;
}

export interface WeatherCondition {
  text: string;
  icon: string;
}

export interface WeatherCurrent {
  temp_c: number;
  condition: WeatherCondition;
  humidity: number;
  wind_kph: number;
}

export interface WeatherData {
  location: WeatherLocation;
  current: WeatherCurrent;
}
