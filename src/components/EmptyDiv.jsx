import { Box, Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function EmptyDiv() {
  return (
    <Container>
      <Box>
        Nothing to display. Add one <Link to={"/todo-app/create"}>here.</Link>
      </Box>
    </Container>
  );
}

export default EmptyDiv;
