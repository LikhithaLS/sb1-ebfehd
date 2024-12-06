import { Species } from '../types';
import { speciesData } from '../data/species';
import { MAPBOX_CONFIG } from '../config/mapbox';

const BASE_URL = 'https://api.mapbox.com/geocoding/v5/mapbox.places';

export async function searchLocation(query: string) {
  const response = await fetch(
    `${BASE_URL}/${encodeURIComponent(query)}.json?access_token=${MAPBOX_CONFIG.accessToken}`
  );
  return response.json();
}

export async function getSpeciesInBounds(bounds: {
  north: number;
  south: number;
  east: number;
  west: number;
}): Promise<Species[]> {
  try {
    // Filter species data based on coordinates within bounds
    return speciesData.filter(species => {
      const [lng, lat] = species.coordinates;
      return (
        lat <= bounds.north &&
        lat >= bounds.south &&
        lng <= bounds.east &&
        lng >= bounds.west
      );
    });
  } catch (error) {
    console.error('Error filtering species data:', error);
    return [];
  }
}

export async function getReverseGeocode(coordinates: [number, number]) {
  const [lng, lat] = coordinates;
  const response = await fetch(
    `${BASE_URL}/${lng},${lat}.json?access_token=${MAPBOX_CONFIG.accessToken}`
  );
  return response.json();
}