import {
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  TOGGLE_COMPLETION,
  SET_VISIBILITY_FILTER
} from './types';

export const addTodo = taskName => {
  return {
    type: ADD_TODO,
    payload: taskName
  };
};

export const removeTodo = todoId => {
  return {
    type: REMOVE_TODO,
    payload: todoId
  };
};

export const editTodo = (todoId, updatedTodo, completedStatus) => {
  return {
    type: EDIT_TODO,
    payload: { task: updatedTodo, id: todoId, completed: completedStatus }
  };
};

export const toggleCompletion = (todoId, task, completedStatus) => {
  return {
    type: TOGGLE_COMPLETION,
    payload: { id: todoId, task: task, completed: completedStatus }
  };
};

// Custom action that returns a reducer that returns ACTION TYPES
export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
});
