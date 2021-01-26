import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory, useLocation } from "react-router-dom";
import { reactLocalStorage as Ls } from 'reactjs-localstorage';
import Navbar from "./components/Navbar";
import "./App.css";
// import Home from "./views/HomePage";
import LoginForm from "./views/Login";
import RegisterForm from "./views/Register";
import Profile from "./views/Profile";
import jwt_decode from "jwt-decode";

const App = () => {

  let location = useLocation();

  var history = useHistory();

  useEffect(() => {

    var session = Ls.getObject('session', { 'isLoggedIn': false });

    if (location.pathname.includes("/register")) {

      console.log("register");

    } else if (location.pathname.includes("/login")) {

      console.log("register")

    } else if (!session.isLoggedIn) {
      history.push("/login");
    } else {
      var isExpired = false;
      const token = session.token;
      console.log(token);
      var decodedToken = jwt_decode(token, { complete: true });
      // console.log(decodedToken);
      var dateNow = new Date();
      if (decodedToken.exp < dateNow.getTime() / 1000)
        isExpired = true;

      if (isExpired) {
        history.push("/login");
      }

    }

  }, []);

  const doLogout = async () => {

    Ls.remove('session');
    history.push("/login");

  }


  return (
    <>
      {!location.pathname.includes("/register") &&
        <Navbar style={{}} doLogout={doLogout} />
      }
      <Switch>
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/profile" component={Profile} />

      </Switch>
    </>
  );
};


export default App;