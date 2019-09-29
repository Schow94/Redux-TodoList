import uuid from 'uuid/v4';
import {
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  TOGGLE_COMPLETION
} from '../actions/types';

const initialState = [
  { task: 'Eat', id: uuid(), completed: false },
  { task: 'Sleep', id: uuid(), completed: false },
  { task: 'Repeat', id: uuid(), completed: false },
  { task: 'Code', id: uuid(), completed: true },
  { task: 'Gym', id: uuid(), completed: false },
  { task: 'Coffee', id: uuid(), completed: false }
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTask = { task: action.payload, id: uuid(), completed: false };
      // console.log('newTask', newTask);
      return [newTask, ...state];

    case REMOVE_TODO:
      return [...state.filter(item => item.id !== action.payload)];

    case EDIT_TODO:
      // console.log(action.payload);
      // const updatedTodo = action.payload;
      return [
        ...state.map(item =>
          item.id === action.payload.id ? action.payload : item
        )
      ];

    case TOGGLE_COMPLETION:
      console.log('action.payload', action.payload);
      const completedTodo = {
        ...action.payload,
        completed: !action.payload.completed
      };
      return [
        ...state.map(item =>
          item.id === action.payload.id ? completedTodo : item
        )
      ];

    default:
      return state;
  }
};

export default listReducer;
