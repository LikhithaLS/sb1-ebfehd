import React from 'react';
import { motion } from 'framer-motion';
import { Species } from '../../types';
import { conservationStatuses } from '../../data/conservation-status';
import { MapPin, AlertTriangle, Shield, TreePine } from 'lucide-react';

interface SpeciesDetailProps {
  species: Species;
  onClose: () => void;
}

export default function SpeciesDetail({ species, onClose }: SpeciesDetailProps) {
  const status = conservationStatuses.find(s => s.code === species.conservationStatus);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative h-48">
        <img
          src={species.imageUrl}
          alt={species.name}
          className="w-full h-full object-cover"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white"
        >
          ×
        </button>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{species.name}</h2>
            <p className="text-gray-600 italic">{species.scientificName}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-white text-sm ${status?.color}`}>
            {status?.label}
          </span>
        </div>

        <p className="text-gray-700 mb-6">{species.description}</p>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="flex items-center text-lg font-semibold mb-2">
              <AlertTriangle className="w-5 h-5 mr-2 text-red-500" />
              Threats
            </h3>
            <ul className="space-y-1">
              {species.threats.map(threat => (
                <li key={threat} className="text-gray-700">• {threat}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="flex items-center text-lg font-semibold mb-2">
              <Shield className="w-5 h-5 mr-2 text-green-500" />
              Conservation Efforts
            </h3>
            <ul className="space-y-1">
              {species.conservationEfforts.map(effort => (
                <li key={effort} className="text-gray-700">• {effort}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="flex items-center font-semibold mb-2">
                <MapPin className="w-4 h-4 mr-1 text-gray-600" />
                Range Countries
              </h4>
              <p className="text-gray-700">{species.range.countries.join(', ')}</p>
            </div>
            <div>
              <h4 className="flex items-center font-semibold mb-2">
                <TreePine className="w-4 h-4 mr-1 text-gray-600" />
                Habitat Types
              </h4>
              <p className="text-gray-700">{species.habitat.join(', ')}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}