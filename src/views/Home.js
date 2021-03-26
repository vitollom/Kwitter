import React from "react";
import Login from "../components/Login";
import Menu from "../components/Menu";
import { useStore } from "../store/store";


function Home(props) {
  const user = useStore((state) => state.user);
  return (
    <>
    
      <Menu />
      {!user.token && <Login />}
    </>
  );
}

export default Home;
