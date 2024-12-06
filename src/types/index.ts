export interface Species {
  id: string;
  name: string;
  scientificName: string;
  conservationStatus: 'LC' | 'NT' | 'VU' | 'EN' | 'CR' | 'EW' | 'EX';
  population: number;
  habitat: string[];
  coordinates: [number, number];
  imageUrl: string;
  description: string;
  threats: string[];
  conservationEfforts: string[];
  range: {
    countries: string[];
    area: number; // in square kilometers
  };
}

export interface MapViewState {
  latitude: number;
  longitude: number;
  zoom: number;
  pitch: number;
  bearing: number;
  transitionDuration?: number;
  transitionEasing?: (t: number) => number;
}

export interface ConservationStatus {
  code: Species['conservationStatus'];
  label: string;
  color: string;
  description: string;
}