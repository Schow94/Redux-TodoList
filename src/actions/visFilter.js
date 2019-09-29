import { SHOW_ALL, SHOW_COMPLETED, SHOW_NOT_COMPLETED } from './types';

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})