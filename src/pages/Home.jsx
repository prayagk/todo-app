import { FormGroup, ListItem } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ToDo from "../components/ToDo";
import "./../App.css";

function Home() {
  const todoList = useSelector((state) => state);

  return (
    <div className="App">
      {todoList.length ? (
        <FormGroup>
          {todoList.map((item) => (
            <ListItem key={item.id}>
              <ToDo todo={item} />
            </ListItem>
          ))}
        </FormGroup>
      ) : (
        <div>
          Nothing to display. Add one <Link to={"/create"}>here.</Link>
        </div>
      )}
    </div>
  );
}

export default Home;
