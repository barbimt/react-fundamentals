import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import BadgeNew from "../pages/BadgeNew";
import BadgeEdit from "../pages/BadgeEdit";
import Badges from "../pages/Badges";
import BadgeHome from "../pages/BadgeHome";
import NotFound from "../pages/NotFound";
import BadgeDetails from "../pages/BadgeDetails";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<BadgeHome />} />
          <Route path="/badges" element={<Badges />} />
          <Route path="/badges/new" element={<BadgeNew />} />
          <Route path="/badges/:badgeId/edit" element={<BadgeEdit />} />
          <Route path="/badges/:badgeId" element={<BadgeDetails />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
