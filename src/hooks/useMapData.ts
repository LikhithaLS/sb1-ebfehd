import { useState, useEffect } from 'react';
import { useMapStore } from '../store/mapStore';
import { getSpeciesInBounds } from '../services/api';
import type { Species } from '../types';

export function useMapData() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [speciesInView, setSpeciesInView] = useState<Species[]>([]);
  const { viewState } = useMapStore();

  useEffect(() => {
    let isMounted = true;

    async function fetchSpeciesInView() {
      if (!isMounted) return;
      
      try {
        setLoading(true);
        setError(null);
        
        const bounds = {
          north: viewState.latitude + 10,
          south: viewState.latitude - 10,
          east: viewState.longitude + 20,
          west: viewState.longitude - 20,
        };

        const species = await getSpeciesInBounds(bounds);
        
        if (isMounted) {
          setSpeciesInView(species);
        }
      } catch (err) {
        if (isMounted) {
          setError('Failed to fetch species data');
          console.error(err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchSpeciesInView();

    return () => {
      isMounted = false;
    };
  }, [viewState.latitude, viewState.longitude]);

  return {
    loading,
    error,
    speciesInView,
  };
}