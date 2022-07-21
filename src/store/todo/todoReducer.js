import {
  CREATE_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
} from "./todoTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return [
        ...state,
        {
          id: state.length,
          label: action.value,
          isDone: false,
        },
      ];

    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
      );

    case UPDATE_TODO:
      return action.value;

    case DELETE_TODO:
      return state.filter((item) => action.id !== item.id);

    default:
      return state;
  }
};

export default reducer;
