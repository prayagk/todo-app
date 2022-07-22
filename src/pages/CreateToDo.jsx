import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createToDo } from "../store/todo/todoActions";
import Button from "@mui/material/Button";
import { Box, Container, Grid, TextField } from "@mui/material";
import useValidate from "../hooks/useValidate";
import CustomAlert from "../components/CustomAlert";

function CreateToDo() {
  const [label, setLabel] = useState("");
  const [error, setError] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);
  const dispatch = useDispatch();
  const validate = useValidate();

  const onLabelChangeHandler = (evt) => {
    const label = evt.target.value;
    setLabel(label);
  };

  const onClickHandler = () => {
    const trimmedLabel = label.trim();
    const error = validate(trimmedLabel);
    setError(error);
    setLabel("");
    if (error) {
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }

    setShowSnackbar(true);
    dispatch(createToDo(trimmedLabel));
  };

  const handleClose = () => {
    setShowSnackbar(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Box p={1}>Create To-Do here.</Box>
        </Grid>
        <Grid item xs={9}>
          <Box px={1}>
            <TextField
              style={{ backgroundColor: "#ffffff" }}
              fullWidth
              required
              label="Label"
              variant="outlined"
              size="small"
              error={Boolean(error)}
              helperText={error}
              value={label}
              onChange={onLabelChangeHandler}
            />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={onClickHandler}>
            Add
          </Button>
        </Grid>
      </Grid>
      {showSnackbar && (
        <CustomAlert
          message={"Saved"}
          open={showSnackbar}
          handleClose={handleClose}
        />
      )}
    </Container>
  );
}

export default CreateToDo;
