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
import DashBord from './components/DateDashBord/DashBord/DashBord';
import NoMatch from './components/NoMatch/NoMatch';
import AddDoctor from './components/DateDashBord/AddDoctor/AddDoctor';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser);
  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/appointment">
            <Appoinment></Appoinment>
          </Route>

          <Route path="/dashboard/appointment">
            <DashBord></DashBord>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/addDoctor">
            <AddDoctor></AddDoctor>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="*">
            <NoMatch></NoMatch>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
