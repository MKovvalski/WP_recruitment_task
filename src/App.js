import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.sass'

import IndexPage from './pages/index'
import ArticlePage from './pages/article/articleGql'
import Error from './pages/error'

import { ROUTING_MAP } from './utils/consts'

const App = () => (
    <Router>
        <Switch>
            <Route exact path={ROUTING_MAP.index} component={IndexPage} />
            <Route path={ROUTING_MAP.article} component={ArticlePage} />
            <Route component={Error} />
        </Switch>
    </Router>
);

export default App
