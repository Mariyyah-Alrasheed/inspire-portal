import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Onboarding from "@/pages/Onboarding";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/onboarding" element={<Onboarding />} />
      </Routes>
    </BrowserRouter>
  );
}
