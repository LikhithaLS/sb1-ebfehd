import React from 'react';
import { Globe2, Map as MapIcon } from 'lucide-react';
import { useMapStore } from '../../store/mapStore';
import { motion } from 'framer-motion';

export default function MapControls() {
  const { isGlobeView, setGlobeView, viewState, setViewState } = useMapStore();

  const toggleView = () => {
    setGlobeView(!isGlobeView);
    setViewState({
      ...viewState,
      pitch: isGlobeView ? 0 : 60,
      bearing: 0,
      zoom: isGlobeView ? 2 : 3
    });
  };

  return (
    <motion.div 
      className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={toggleView}
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        title={isGlobeView ? "Switch to Map View" : "Switch to Globe View"}
      >
        {isGlobeView ? (
          <MapIcon className="w-6 h-6 text-gray-700" />
        ) : (
          <Globe2 className="w-6 h-6 text-gray-700" />
        )}
      </button>
    </motion.div>
  );
}