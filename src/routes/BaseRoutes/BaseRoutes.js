import React from "react";
import { Route, Switch } from "react-router-dom";

import { ExampleScssRoute, ExampleStyledRoute, NoMatch, Home } from "src/views";

const BaseRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/example-scss-view" exact>
        <ExampleScssRoute />
      </Route>
      <Route path="/example-styled-view" exact>
        <ExampleStyledRoute />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  );
};

export default BaseRoutes;
