import { Box, Container, FormGroup, Paper } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import EmptyDiv from "../components/EmptyDiv";
import ToDo from "../components/ToDo";
import "./../App.css";

function Home() {
  const todoList = useSelector((state) => state);

  return (
    <Box pt={1}>
      <Container component="main" maxWidth="xs">
        <Paper elevation={2}>
          <div className="todoContainer">
            {todoList.length ? (
              <>
                <Box px={2} sx={{ display: "flex", justifyContent: "center" }}>
                  <h2 style={{ textDecoration: "underline" }}>To-Do List</h2>
                </Box>
                <Box px={3}>
                  <FormGroup>
                    {todoList.map((item) => (
                      <ToDo key={item.id} todo={item} />
                    ))}
                  </FormGroup>
                </Box>
              </>
            ) : (
              <EmptyDiv />
            )}
          </div>
        </Paper>
      </Container>
    </Box>
  );
}

export default Home;
