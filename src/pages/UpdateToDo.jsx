import React, { useEffect, useState } from "react";
import { Box, Button, Container, Grid, List, ListItem } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import ToDoEditContainer from "../components/ToDoEditContainer";
import { updateToDo } from "../store/todo/todoActions";
import EmptyDiv from "../components/EmptyDiv";
import useAlert from "../hooks/useAlert";
import CustomAlert from "../components/CustomAlert";

function UpdateToDo() {
  const data = useSelector((state) => state);
  const [todoList, setTodoList] = useState([]);
  const { showSnackbar, handleShow, handleClose } = useAlert();
  const dispatch = useDispatch();

  useEffect(() => {
    setTodoList(data);
  }, [data]);

  const updateTodo = (id, label) => {
    setTodoList((prev) => {
      return prev.map((todo) => (todo.id === id ? { ...todo, label } : todo));
    });
  };

  const validateAll = (labelList) => {
    let id;
    let error = "";
    labelList.forEach((element, index) => {
      if (id) return;
      if (!element) {
        id = index;
        error = "Input Required";
        return;
      }

      if (labelList.filter((item) => item === element).length > 1) {
        id = index;
        error = "Duplicate";
      }
    });
    return { id, error };
  };

  const saveChanges = () => {
    const labelList = todoList.map((item) => item.label);
    const { id, error } = validateAll(labelList);

    setTodoList((prev) => {
      return prev.map((todo) => (todo.id === id ? { ...todo, error } : todo));
    });

    if (!error) {
      handleShow();
      const updatedToDoList = todoList.map((item) => ({
        ...item,
        label: item.label.trim(),
      }));
      dispatch(updateToDo(updatedToDoList));
    }

    setTimeout(() => {
      setTodoList((prev) => {
        return prev.map((todo) =>
          todo.id === id ? { ...todo, error: "" } : todo
        );
      });
    }, 3000);
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
          <Box px={2}>Update / Delete To-Do here.</Box>
        </Grid>
        <Grid item xs={12}>
          {todoList.length ? (
            <>
              <List>
                {todoList.map((item) => (
                  <ListItem key={item.id}>
                    <ToDoEditContainer todo={item} updateTodo={updateTodo} />
                  </ListItem>
                ))}
              </List>
              <Box px={2}>
                <Button variant="contained" onClick={saveChanges}>
                  Save
                </Button>
              </Box>
            </>
          ) : (
            <EmptyDiv />
          )}
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

export default UpdateToDo;
