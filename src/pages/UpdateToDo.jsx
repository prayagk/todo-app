import React, { useEffect, useState } from "react";
import { Button, List, ListItem } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ToDoEditContainer from "../components/ToDoEditContainer";
import { updateToDo } from "../store/todo/todoActions";

function UpdateToDo() {
  const data = useSelector((state) => state);
  const [todoList, setTodoList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setTodoList(data);
  }, [data]);

  const updateTodo = (id, label) => {
    setTodoList((prev) => {
      let prevToDoList = [...prev];
      for (var i in prevToDoList) {
        if (prevToDoList[i].id === id) {
          prevToDoList[i].label = label;
          break; //Stop this loop, we found it!
        }
      }
      return prevToDoList;
    });
  };

  const saveChanges = () => {
    dispatch(updateToDo(todoList));
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
        <div>
          Nothing to display. Add one <Link to={"/create"}>here.</Link>
        </div>
      )}
    </List>
  );
}

export default UpdateToDo;
