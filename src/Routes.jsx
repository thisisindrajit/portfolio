import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import AllProjects from './AllProjects/AllProjects';

const Routes = () => {
    return (
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/portfolio"
              render={Home}
            />
            <Route
              path="/portfolio/projects"
              render={AllProjects}
            />
        </Switch>
    </BrowserRouter>
    )
}

export default Routes;