import {
  CREATE_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
} from "./todoTypes";

const createToDo = (label) => {
  return { type: CREATE_TODO, value: label };
};

const toggleToDo = (id) => {
  return {
    type: TOGGLE_TODO,
    id,
  };
};

const updateToDo = (value) => {
  return {
    type: UPDATE_TODO,
    value,
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

export { createToDo, toggleToDo, updateToDo, deleteToDo };
