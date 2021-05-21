import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import BaseRoutes from "src/routes/BaseRoutes/BaseRoutes";

import { Navbar } from "src/components";

export const history = createBrowserHistory({ basename: "/" });

const App = () => {
  return (
    <Router history={history}>
      <Navbar />
      <BaseRoutes />
    </Router>
  );
};

export default App;
