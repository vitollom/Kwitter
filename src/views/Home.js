import React from "react";
import Login from "../components/Login";
import Menu from "../components/Menu";
import Profile from "./Profile.js"
import { useStore } from "../store/store";

function Home(props) {
  const user = useStore((state) => state.user);
  return (
    <>
      <Menu />
      <h2>Your favorite microblogging platform</h2>
      {!user.token && <Login />}
      {user.token && <Profile />}
    </>
  );
}

export default Home;
