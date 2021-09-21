import React, { useContext } from "react";
import authContext from "./../AuthContextProvider"
import { useHistory } from "react-router-dom";
import "./AuthButton.scss"

export default function AuthButton() {
  let history = useHistory();
  let auth = useContext(authContext);

  return auth.user ? (
    <p className="auth_button">
      {console.log("auth", auth)}
      Welcome {auth.user} !
      <button
        onClick={() => {
          auth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    // <p>You are not logged in.</p>
    <span> </span>
  );
}