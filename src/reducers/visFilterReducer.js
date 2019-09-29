import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_NOT_COMPLETED,
  SET_VISIBILITY_FILTER
} from '../actions/types';

const visFilterReducer = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default visFilterReducer;

// have list reducer pull state from visFilterReducer. Compose state here.
