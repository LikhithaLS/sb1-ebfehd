export const MAPBOX_CONFIG = {
  accessToken: 'b85fkAYDbMBYH1Ka6ukO',
  styles: {
    satellite: 'mapbox://styles/mapbox/satellite-v9',
    outdoors: 'mapbox://styles/mapbox/outdoors-v12'
  },
  defaultViewState: {
    latitude: 20,
    longitude: 0,
    zoom: 2,
    pitch: 60,
    bearing: 0
  },
  terrain: {
    source: 'mapbox-dem',
    exaggeration: 1.5
  },
  fog: {
    range: [0.8, 8],
    color: '#242B4B',
    'horizon-blend': 0.5
  }
} as const;