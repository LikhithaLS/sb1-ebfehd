import { ConservationStatus } from '../types';

export const conservationStatuses: ConservationStatus[] = [
  {
    code: 'LC',
    label: 'Least Concern',
    color: 'bg-green-500',
    description: 'Species evaluated as having a low risk of extinction'
  },
  {
    code: 'NT',
    label: 'Near Threatened',
    color: 'bg-yellow-400',
    description: 'Species close to qualifying for a threatened category'
  },
  {
    code: 'VU',
    label: 'Vulnerable',
    color: 'bg-orange-400',
    description: 'Species facing a high risk of extinction in the wild'
  },
  {
    code: 'EN',
    label: 'Endangered',
    color: 'bg-orange-600',
    description: 'Species facing a very high risk of extinction in the wild'
  },
  {
    code: 'CR',
    label: 'Critically Endangered',
    color: 'bg-red-600',
    description: 'Species facing an extremely high risk of extinction in the wild'
  },
  {
    code: 'EW',
    label: 'Extinct in the Wild',
    color: 'bg-purple-600',
    description: 'Species surviving only in captivity'
  },
  {
    code: 'EX',
    label: 'Extinct',
    color: 'bg-gray-800',
    description: 'Species with no known living individuals'
  }
];