import React from "react";
import Navbar from "../components/Navbar";

function Home(props) {
  return (
    <>
      <Navbar loggedIn={props.loggedInStatus} />
    </>
  );
}

export default Home;
