import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import BadgeNew from "../pages/BadgeNew";
import Badges from "../pages/Badges";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/badges" element={<Badges />} />
          <Route path="/badges/new" element={<BadgeNew />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
