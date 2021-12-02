import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./global.css";
import Badge from "./components/Badge";

const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(
  <Badge
    firstName="Marcio"
    lastName="Alico"
    jobTitle="IoS Engineer"
    twitter="marcioalico"
    avatarUrl="https://secure.gravatar.com/avatar/6f334768c1f0ad84f3a608bb79d32b9c"
  />,
  container
);
