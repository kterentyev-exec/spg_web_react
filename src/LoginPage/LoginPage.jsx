import React, { useState, useContext } from "react";
import authContext from "./../common/AuthComponents/AuthContextProvider"
import { useHistory, useLocation } from "react-router-dom";
import "./LoginPage.scss"


export default function LoginPage() {
  let history = useHistory();
  let location = useLocation();
  let auth = useContext(authContext);

  const [user, setUser] = useState(null);
  const [pass, setPass] = useState(null);
  const [error, setError] = useState(false);

  let { from } = location.state || { from: { pathname: "/dashboard" } };

  let handleChange = (e) => {
    console.log(`pass`, pass)
    return e.target.name === "user"
      ? setUser(e.target.value)
      : setPass(e.target.value);
  };

  let login = () => {
    if (user) {
      // if(user === 'Kirill' && pass === '111'){
      setError(false);
      auth.signin(() => {
        history.replace(from);
      });
    } else {
      setError(true);
    }
  };

  return (
    <div className="login_template">
      <p>You must log in to view the page at {from.pathname}</p>
      <input type="text" name="user" onChange={handleChange} />
      <input type="password" name="pass" onChange={handleChange} />
      <button onClick={login}>Submit</button>
      {error ? (
        <p style={{ color: "red", fontWeight: 700, fontSize: "18px" }}>
          Wrong name!
        </p>
      ) : null}
    </div>
  );
}
