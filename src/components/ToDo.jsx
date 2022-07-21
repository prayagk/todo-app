import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleToDo } from "../store/todo/todoActions";

function ToDo({ todo }) {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(toggleToDo(todo.id));
  };

  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            checked={todo.isDone}
            onClick={() => onClickHandler(todo.id)}
          />
        }
        className={todo.isDone ? "done" : ""}
        label={todo.label}
      />
    </>
  );
}

export default ToDo;
