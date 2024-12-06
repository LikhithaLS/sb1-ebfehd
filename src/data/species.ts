import { Species } from '../types';

export const speciesData: Species[] = [
  {
    id: '1',
    name: 'Sumatran Rhinoceros',
    scientificName: 'Dicerorhinus sumatrensis',
    conservationStatus: 'CR',
    population: 80,
    habitat: ['Tropical Rainforest', 'Mountain Forest'],
    coordinates: [98.9001, 3.5952],
    imageUrl: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&q=80',
    description: 'The smallest of living rhinoceroses, the Sumatran rhinoceros is now critically endangered.',
    threats: [
      'Habitat Loss',
      'Poaching',
      'Small Population',
      'Human Encroachment'
    ],
    conservationEfforts: [
      'Protected Areas',
      'Anti-poaching Patrols',
      'Captive Breeding Programs',
      'Habitat Restoration'
    ],
    range: {
      countries: ['Indonesia', 'Malaysia'],
      area: 47500
    }
  },
  {
    id: '2',
    name: 'Mountain Gorilla',
    scientificName: 'Gorilla beringei beringei',
    conservationStatus: 'EN',
    population: 1063,
    habitat: ['Mountain Forest', 'Bamboo Forest'],
    coordinates: [29.6587, -1.4707],
    imageUrl: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&q=80',
    description: 'One of the most endangered great apes, found in the mountain forests of East Africa.',
    threats: [
      'Habitat Loss',
      'Disease',
      'Political Instability',
      'Climate Change'
    ],
    conservationEfforts: [
      'Ecotourism',
      'Community Conservation',
      'Veterinary Care',
      'Research Programs'
    ],
    range: {
      countries: ['Rwanda', 'Uganda', 'DR Congo'],
      area: 785
    }
  },
  {
    id: '3',
    name: 'Amur Leopard',
    scientificName: 'Panthera pardus orientalis',
    conservationStatus: 'CR',
    population: 100,
    habitat: ['Temperate Forest', 'Mixed Forest'],
    coordinates: [131.9887, 43.3332],
    imageUrl: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&q=80',
    description: 'The rarest big cat on Earth, surviving in the Russian Far East and northeast China.',
    threats: [
      'Habitat Fragmentation',
      'Prey Depletion',
      'Poaching',
      'Inbreeding'
    ],
    conservationEfforts: [
      'Protected Areas',
      'Anti-poaching Measures',
      'Population Monitoring',
      'International Cooperation'
    ],
    range: {
      countries: ['Russia', 'China'],
      area: 7000
    }
  }
];