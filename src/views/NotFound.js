import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu.js"

import "../assets/NotFound.css"

function NotFound(props) {
  return (
    <>
      <Menu />
      <div className="not-found">
        <p>Page not found for {props.location.pathname}</p>
        <Link to="/">Go Home</Link>
      </div>
    </>
  );
}

export default NotFound;
