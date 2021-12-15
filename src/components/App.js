import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import BadgeNew from "../pages/BadgeNew";
import Badges from "../pages/Badges";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/badges" element={<Badges />} />
        <Route path="/badges/new" element={<BadgeNew />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
