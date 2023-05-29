import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";

function Navbar(props) {
  const [signedIn, setSignedIn] = useState(false);
  const navigate = useNavigate();
  const navigateToPage = (url) => {
    navigate(url);
  };

  auth.onAuthStateChanged((user) => {
    if (user) {
      setSignedIn(true);
    } else {
      setSignedIn(false);
    }
  });

  return (
    <div className="topnav">
      <a class="active">Warranties</a>
      <a onClick={() => navigateToPage("/tracking")}>Tracking</a>
      {signedIn ? (
        <div className="login-container">
          <form>
            <button type="submit" onClick={() => auth.signOut()}>
              Sign Out
            </button>
            <button type="submit">Profile</button>
          </form>
        </div>
      ) : (
        <div className="login-container">
          <form>
            <button type="submit" onClick={() => navigateToPage("/signup")}>
              Sign Up
            </button>
            <button type="submit" onClick={() => navigateToPage("/login")}>
              Log In
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Navbar;
