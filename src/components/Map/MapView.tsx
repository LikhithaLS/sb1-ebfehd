import React, { useEffect } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import { MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMapStore } from '../../store/mapStore';
import { useMapData } from '../../hooks/useMapData';
import MapControls from './MapControls';
import SpeciesDetail from '../Species/SpeciesDetail';
import { MAPBOX_CONFIG } from '../../config/mapbox';

export default function MapView() {
  const { 
    viewState, 
    setViewState, 
    selectedSpecies, 
    setSelectedSpecies,
    isGlobeView 
  } = useMapStore();

  const { speciesInView, loading, error } = useMapData();

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedSpecies(null);
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [setSelectedSpecies]);

  if (error) {
    console.error('Map data error:', error);
  }

  return (
    <>
      <Map
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        mapStyle={isGlobeView 
          ? MAPBOX_CONFIG.styles.satellite
          : MAPBOX_CONFIG.styles.outdoors
        }
        mapboxAccessToken={MAPBOX_CONFIG.accessToken}
        className="w-full h-full"
        projection={isGlobeView ? "globe" : "mercator"}
        fog={MAPBOX_CONFIG.fog}
        terrain={isGlobeView ? MAPBOX_CONFIG.terrain : undefined}
      >
        <AnimatePresence>
          {!loading && speciesInView.map((species) => (
            <Marker
              key={species.id}
              longitude={species.coordinates[0]}
              latitude={species.coordinates[1]}
              anchor="bottom"
              onClick={e => {
                e.originalEvent.stopPropagation();
                setSelectedSpecies(species);
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                whileHover={{ scale: 1.2 }}
              >
                <MapPin className="w-6 h-6 text-red-500 hover:text-red-700 cursor-pointer" />
              </motion.div>
            </Marker>
          ))}
        </AnimatePresence>

        <AnimatePresence>
          {selectedSpecies && (
            <Popup
              longitude={selectedSpecies.coordinates[0]}
              latitude={selectedSpecies.coordinates[1]}
              anchor="bottom"
              onClose={() => setSelectedSpecies(null)}
              className="max-w-lg"
            >
              <SpeciesDetail 
                species={selectedSpecies} 
                onClose={() => setSelectedSpecies(null)} 
              />
            </Popup>
          )}
        </AnimatePresence>
      </Map>
      <MapControls />
    </>
  );
}