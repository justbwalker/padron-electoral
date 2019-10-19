import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import NewPerson from "./pages/new-person/new-person.component";
import EditPerson from "./pages/edit-person/edit-person.component";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Padron electoral</h1>
        </header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/new" component={NewPerson} />
          <Route path="/:id" render={props => <EditPerson id={props.match.params.id} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
