import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createToDo } from "../store/todo/todoActions";
import Button from "@mui/material/Button";
import { Container, Grid, TextField } from "@mui/material";
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
    <Container component="main" maxWidth="xs">
      <Grid container>
        <Grid item xl={9}>
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
        </Grid>
        <Grid item xl={3}>
          <Button variant="outlined" onClick={onClickHandler}>
            Add
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CreateToDo;
