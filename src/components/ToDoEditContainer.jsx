import React from "react";
import { useDispatch } from "react-redux";
import { TextField } from "@mui/material";
import { deleteToDo } from "../store/todo/todoActions";
import DeleteModal from "./DeleteModal";

function ToDoEditContainer({ todo, updateTodo }) {
  const dispatch = useDispatch();

  const onChangeHandler = (evt) => {
    let label = evt.target.value;

    updateTodo(todo.id, label);
  };

  const deleteItem = () => {
    dispatch(deleteToDo(todo.id));
  };

  return (
    <>
      <TextField
        size="small"
        variant="outlined"
        value={todo.label}
        onChange={(evt) => onChangeHandler(evt, todo.id)}
        error={Boolean(todo.error)}
        helperText={todo.error}
      />
      <DeleteModal deleteItem={deleteItem} />
    </>
  );
}

export default ToDoEditContainer;
