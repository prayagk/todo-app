import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to={"/todo-app"}>Home</Link>
      <Link to={"/todo-app/create"}>Create</Link>
      <Link to={"/todo-app/update"}>Update</Link>
    </nav>
  );
}

export default Navbar;
