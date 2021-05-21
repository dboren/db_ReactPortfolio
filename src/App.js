import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
      <Router>
          <div>
              <Switch>
                <Route exact path ="/" component={Home} />
                <Route exact path ="/home" component={Home} />
                <Route exact path ="/contact" component={Contact} />
              </Switch>
          </div>
      </Router>
  )
}

export default App;
