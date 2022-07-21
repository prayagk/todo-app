import React from "react";
import { useDispatch } from "react-redux";
import { IconButton, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteToDo } from "../store/todo/todoActions";

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
      <IconButton aria-label="delete" onClick={deleteItem}>
        <DeleteIcon />
      </IconButton>
    </>
  );
}

export default ToDoEditContainer;
