import { SHOW_ALL, SET_VISIBILITY_FILTER } from '../actions/types';

// Custom Reducer to fire a particular reducer depending on what action type
// is passed to it
// Default view is SHOW_ALL
const visFilterReducer = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      // visReducer returns SHOW_ALL, SHOW_COMPLETED, SHOW_NOT_COMPLETED
      console.log(action);
      return action.filter;

    default:
      return state;
  }
};

export default visFilterReducer;
