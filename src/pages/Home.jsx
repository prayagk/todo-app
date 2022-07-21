import { Box, Container, FormGroup, ListItem, Paper } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import EmptyDiv from "../components/EmptyDiv";
import ToDo from "../components/ToDo";
import "./../App.css";

function Home() {
  const todoList = useSelector((state) => state);

  return (
    <Container component="main" maxWidth="xs">
      <Paper className="todoContainer" elevation={2}>
        {todoList.length ? (
          <>
            <Box px={2} sx={{ display: "flex", justifyContent: "center" }}>
              <h2>To-Do List</h2>
            </Box>
            <FormGroup>
              {todoList.map((item) => (
                <ListItem key={item.id}>
                  <ToDo todo={item} />
                </ListItem>
              ))}
            </FormGroup>
          </>
        ) : (
          <EmptyDiv />
        )}
      </Paper>
    </Container>
  );
}

export default Home;
