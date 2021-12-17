import React from "react";
import "./styles/NotFound.css";
import astronauts from "../images/—Pngtree—white astronaut_4717881.png";

function NotFound() {
  return (
    <React.Fragment>
      <div className="background page-holder bg-cover d-flex align-items-cente">
        <div className="text-center">
          <h1 className="text-uppercase text animated bounce">404-Not Found</h1>

          <img className="w-25" src={astronauts} alt="Astronauts" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default NotFound;
