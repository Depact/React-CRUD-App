import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import "./App.css";
import Home from "./home.component";
import PricingPlanPage from "./components/pricingPlanPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/pricingPlan/:pricingPlanId" element={<PricingPlanPage />} />
        <Route path="/pricingPlan" element={<PricingPlanPage />} />
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
