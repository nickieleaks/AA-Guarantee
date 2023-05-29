import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Tracking from "./pages/Tracking";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { auth } from "./firebase-config";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home loggedInStatus={loggedIn} />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Route>
    )
  );

  auth.onAuthStateChanged((user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
