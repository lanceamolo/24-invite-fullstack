import React from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Invite from "./features/invite/Invite"
import IsGoing from "./features/isGoing/IsGoing"
import NotGoing from "./features/notGoing/NotGoing"
import "./App.css"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Invite />
        </Route>

        <Route path="/IsGoing">
          <IsGoing />
        </Route>

        <Route path="/NotGoing">
          <NotGoing />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
