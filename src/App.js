import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appoinment from './components/Appoinment/Appoinment/Appoinment';
import Login from './components/Login/Login';
import PirvateRoute from './components/Login/PirvateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser);
  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <PirvateRoute path="/appointment">
            <Appoinment></Appoinment>
          </PirvateRoute>

          <Route path="/login">
            <Login></Login>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
