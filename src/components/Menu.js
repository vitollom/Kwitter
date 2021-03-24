import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../store/store";
import { logoutRequest } from "../fetchRequests";
import { Nav } from "react-bootstrap"
import "../assets/Menu.css"

function Menu(props) {
  const user = useStore((state) => state.user);
  const dispatch = useStore((state) => state.dispatch);

  const logout = (e) => {
    logoutRequest(user.token).then(() => dispatch({ type: "LOGOUT" }));

  };

  return (
    <Nav className="justify-content-between" activeKey="/home">
      <div className="nav-left">
        &nbsp;
        Kwitter
      </div>
      <div className="nav-right">
        <Nav.Item>
          <Link to="/" >Home</Link> &nbsp;
      </Nav.Item>
        <Nav.Item>
          <Link to="/profile">Profile</Link> &nbsp;
      </Nav.Item>
        <Nav.Item>
          <Link to="/messages">Message Page</Link> &nbsp;
      </Nav.Item>
        <Nav.Item>
          <Link onClick={logout}>
            Logout
      </Link> &nbsp;
      </Nav.Item>
      </div>
    </Nav>
  );
};

export default Menu;
