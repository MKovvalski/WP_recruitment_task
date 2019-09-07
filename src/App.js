import React                                      from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.sass'

import IndexPage from './pages/index'

import { ROUTING_MAP } from './utils/consts'

const App = () => (
  <Router>
    <Switch>
      <Route exact path={ROUTING_MAP.index} component={IndexPage} />
    </Switch>
  </Router>
)

export default App
