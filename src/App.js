import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import './App.css';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import NotMatch from "./components/NotMatch/NotMatch";
import Addproduct from './components/Addproduct/Addproduct'
import Admin from "./components/Admin/Admin"
import Order from "./components/Order/Order";
import OrderDetails from "./components/OrderDetails/OrderDetails";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loginUser, setloginUser] = useState(null);
  return (
    <UserContext.Provider value={[loginUser, setloginUser]} >
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/order">
            <Order></Order>
          </PrivateRoute>
          <PrivateRoute path="/checkout/:id">
            <OrderDetails></OrderDetails>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <Route path="/addproduct">
            <Addproduct></Addproduct>            
          </Route>
          <Route path="/register">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotMatch></NotMatch>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
