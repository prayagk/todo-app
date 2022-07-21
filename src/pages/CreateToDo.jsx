import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createToDo } from "../store/todo/todoActions";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import useValidate from "../hooks/useValidate";

function CreateToDo() {
  const [label, setLabel] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const validate = useValidate();

  const onLabelChangeHandler = (evt) => {
    const label = evt.target.value;
    setLabel(label);
  };

  const onClickHandler = () => {
    const error = validate(label);
    setError(error);
    if (error) {
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }

    dispatch(createToDo(label));
    setLabel("");
  };

  return (
    <>
      <TextField
        required
        label="Label"
        variant="outlined"
        size="small"
        error={Boolean(error)}
        helperText={error}
        value={label}
        onChange={onLabelChangeHandler}
      />
      <Button variant="outlined" onClick={onClickHandler}>
        Add To-Do
      </Button>
    </>
  );
}

export default CreateToDo;
