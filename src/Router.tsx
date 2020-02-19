import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="*" render={() => <Redirect to="/" />} />
    </Switch>
  );
};
