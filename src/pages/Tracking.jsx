import React from "react";
import "./Tracking.css";

function Tracking() {
  return (
    <>
      <button
        class="open-button"
        onclick={() =>
          (document.getElementById("myForm").style.display = "block")
        }
      >
        Open Form
      </button>

      <div class="form-popup" id="myForm">
        <form action="/action_page.php" class="form-container">
          <h1>Login</h1>

          <label for="email">
            <b>Email</b>
          </label>
          <input type="text" placeholder="Enter Email" name="email" required />

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />

          <button type="submit" class="btn">
            Login
          </button>
          <button type="button" class="btn cancel" onclick="closeForm()">
            Close
          </button>
        </form>
      </div>
    </>
  );
}

export default Tracking;
