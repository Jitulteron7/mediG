import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const Navbar = React.lazy(() => import("./components/Navbar/Navbar"));

function App() {
  return (
    <div className="App">
      <Router>
      <switch>
      <Route exact path="/navbar" component={Navbar} />
      </switch>
      </Router>
    </div>
  );
}

export default App;
