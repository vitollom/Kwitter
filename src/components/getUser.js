import React, { useState, useEffect } from "react";
import "./App.css";

const baseURL = "https://kwitter-api-b.herokuapp.com/";

function GetUser() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getUserWithFetch();
  }, []);

  const getUserWithFetch = async () => {};

  return (
    <div className="App">
      <header className="App-header">
        <h2>Kwitter User Data</h2>
      </header>
      <div className="user-container">
        <h5 className="info-item">{userData.name}</h5>
        <h5 className="info-item">{userData.location}</h5>
        <h5 className="info-item">{userData.blog}</h5>
        <h5 className="info-item">{userData.company}</h5>
      </div>
    </div>
  );
}

export default GetUser;