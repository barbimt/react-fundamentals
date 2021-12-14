import React from "react";
import ReactDOM from "react-dom";

import "sweetalert2/dist/sweetalert2.css";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";
import BadgeNew from "./pages/BadgeNew";
import Badges from "./pages/Badges";

const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<Badges />, container);
