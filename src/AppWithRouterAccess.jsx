import React from "react";
import DashboardPage from "./DashboardPage/DashboardPage";
import LoanComponent from "./LoanComponent/LoanComponent";
import AuthButton from "./common/AuthComponents/AuthButton/AuthButton.jsx";
import { ProvideAuth } from "./common/AuthComponents/AuthContextProvider";
import PrivateRoute from "./common/AuthComponents/PrivateRoute";
import LoginPage from "./LoginPage/LoginPage";
import TableData from "./TableComponent/tableData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./AppWithRouterAccess.scss";

export default function AuthExample() {
  return (
    <ProvideAuth>
      <Router>
        <div>
          <AuthButton />
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/">
              <LoginPage />
            </Route>
            <Route path="/table">
              <TableData />
            </Route>
            <Route path="/loan" component={LoanComponent} />

            <PrivateRoute path="/dashboard">
              <DashboardPage />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}

// const fakeAuth = {
//   isAuthenticated: false,
//   signin(cb) {
//     fakeAuth.isAuthenticated = true;
//     setTimeout(cb, 100); // fake async
//   },
//   signout(cb) {
//     fakeAuth.isAuthenticated = false;
//     setTimeout(cb, 100);
//   },
// };

/** For more details on
 * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
 * refer to: https://usehooks.com/useAuth/
 */
// const AuthContext = createContext();

// function ProvideAuth({ children }) {
//   const auth = useProvideAuth();
//   console.log(`authContext`, AuthContext)
//   return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
// }

// function useAuth() {
//   return useContext(authContext);
// }

// function useProvideAuth() {
//   const [user, setUser] = useState(null);

//   const signin = (cb) => {
//     return fakeAuth.signin(() => {
//       setUser("user");
//       cb();
//     });
//   };

//   const signout = (cb) => {
//     return fakeAuth.signout(() => {
//       setUser(null);
//       cb();
//     });
//   };

//   return {
//     user,
//     signin,
//     signout,
//   };
// }

// function AuthButton() {
//   let history = useHistory();
//   let auth = useAuth();

//   return auth.user ? (
//     <p className="auth_button">
//       {console.log("auth", auth)}
//       Welcome {auth.user} !
//       <button
//         onClick={() => {
//           auth.signout(() => history.push("/"));
//         }}
//       >
//         Sign out
//       </button>
//     </p>
//   ) : (
//     // <p>You are not logged in.</p>
//     <span> </span>
//   );
// }

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
// function PrivateRoute({ children, ...rest }) {
//   let auth = useAuth();
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         auth.user ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: location },
//             }}
//           />
//         )
//       }
//     />
//   );
// }

// function LoginPage() {
//   let history = useHistory();
//   let location = useLocation();
//   let auth = useAuth();

//   const [user, setUser] = useState(null);
//   const [pass, setPass] = useState(null);
//   const [error, setError] = useState(false);

//   let { from } = location.state || { from: { pathname: "/dashboard" } };

//   let handleChange = (e) => {
//     return e.target.name === "user"
//       ? setUser(e.target.value)
//       : setPass(e.target.value);
//   };

//   let login = () => {
//     if (user) {
//       // if(user === 'Kirill' && pass === '111'){
//       setError(false);
//       auth.signin(() => {
//         history.replace(from);
//       });
//     } else {
//       setError(true);
//     }
//   };

//   return (
//     <div className="login_template">
//       <p>You must log in to view the page at {from.pathname}</p>
//       <input type="text" name="user" onChange={handleChange} />
//       <input type="password" name="pass" onChange={handleChange} />
//       <button onClick={login}>Submit</button>
//       {error ? (
//         <p style={{ color: "red", fontWeight: 700, fontSize: "18px" }}>
//           Wrong name!
//         </p>
//       ) : null}
//     </div>
//   );
// }
