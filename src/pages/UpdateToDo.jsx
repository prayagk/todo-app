import React, { useEffect, useState } from "react";
import { Button, List, ListItem } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import ToDoEditContainer from "../components/ToDoEditContainer";
import { updateToDo } from "../store/todo/todoActions";
import EmptyDiv from "../components/EmptyDiv";

function UpdateToDo() {
  const data = useSelector((state) => state);
  const [todoList, setTodoList] = useState([]);
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
      dispatch(updateToDo(todoList));
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
    <List>
      {todoList.length ? (
        <>
          {todoList.map((item) => (
            <ListItem key={item.id}>
              <ToDoEditContainer todo={item} updateTodo={updateTodo} />
            </ListItem>
          ))}
          <Button onClick={saveChanges}>Save</Button>
        </>
      ) : (
        <EmptyDiv />
      )}
    </List>
  );
}

export default UpdateToDo;
