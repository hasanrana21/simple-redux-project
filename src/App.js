import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './Components/Shared/Navbar/Navbar';
import Home from './Components/HomePage/Home/Home';
import Service from './Components/HomePage/Service/Service';

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar/>
          <Switch>
            <Route path="/about">
            </Route>

            <Route path="/users">
              <Service></Service>
            </Route>

            <Route path="/">
              <Home/>
            </Route>

          </Switch>
      </Router>
    </div>
  );
}

export default App;
