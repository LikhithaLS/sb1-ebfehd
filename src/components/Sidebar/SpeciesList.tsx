import React from 'react';
import { AlertTriangle, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useMapStore } from '../../store/mapStore';
import { speciesData } from '../../data/species';

export default function SpeciesList() {
  const { setSelectedSpecies, flyTo } = useMapStore();

  const handleSpeciesClick = (species: typeof speciesData[0]) => {
    setSelectedSpecies(species);
    flyTo(species.coordinates);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white/90 backdrop-blur-sm rounded-lg p-4 space-y-4"
    >
      <h2 className="text-xl font-bold text-gray-800">Endangered Species</h2>
      <div className="space-y-4">
        {speciesData.map((species) => (
          <motion.div
            key={species.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleSpeciesClick(species)}
            className="flex items-start space-x-4 p-3 bg-white rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow"
          >
            <img
              src={species.imageUrl}
              alt={species.name}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">{species.name}</h3>
              <p className="text-sm text-gray-600 italic">{species.scientificName}</p>
              <div className="flex items-center mt-2">
                <AlertTriangle className="w-4 h-4 text-red-500 mr-1" />
                <span className="text-sm text-red-600">
                  Population: {species.population.toLocaleString()}
                </span>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400 self-center" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}