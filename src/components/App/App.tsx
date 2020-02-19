import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "../Header";
import { Router } from "../../Router";
import M from "materialize-css";

import "materialize-css/dist/css/materialize.min.css";
import "./app.scss";

export const App = () => {
  useEffect(() => M.AutoInit(), []);

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Router />
      </div>
    </BrowserRouter>
  );
};
