import React from "react";
import { Link } from "react-router-dom";

export default function navBar () {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Posts List</Link>
      {" | "}
      <Link className="navbar-brand" to="/new">New Post</Link>
    </nav>
  );
}