import { create } from 'zustand';
import { MapViewState, Species } from '../types';
import { MAPBOX_CONFIG } from '../config/mapbox';

interface MapStore {
  viewState: MapViewState;
  selectedSpecies: Species | null;
  isGlobeView: boolean;
  setViewState: (state: MapViewState) => void;
  setSelectedSpecies: (species: Species | null) => void;
  setGlobeView: (isGlobe: boolean) => void;
  flyTo: (coordinates: [number, number]) => void;
}

export const useMapStore = create<MapStore>((set) => ({
  viewState: MAPBOX_CONFIG.defaultViewState,
  selectedSpecies: null,
  isGlobeView: true,
  setViewState: (state) => set({ viewState: state }),
  setSelectedSpecies: (species) => set({ selectedSpecies: species }),
  setGlobeView: (isGlobe) => set({ isGlobeView: isGlobe }),
  flyTo: (coordinates) => set((state) => ({
    viewState: {
      ...state.viewState,
      longitude: coordinates[0],
      latitude: coordinates[1],
      zoom: 8,
      pitch: 75,
      bearing: 0,
      transitionDuration: 2000,
      transitionEasing: (t: number) => t * (2 - t)
    }
  }))
}));