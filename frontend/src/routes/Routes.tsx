import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Onboarding from "@/pages/Onboarding";
import DashboardLayout from "@/pages/dashboard/DashboardLayout";
import Overview from "@/pages/dashboard/Overview";
import Leaves from "@/pages/dashboard/Leaves";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/onboarding" element={<Onboarding />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} /> {/* default */}
          <Route path="leaves" element={<Leaves />} />
          {/*<Route path="timesheet" element={<Timesheet />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="health-insurance" element={<HealthInsurance />} />
          <Route path="travel" element={<Travel />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="finance" element={<Finance />} />
          <Route path="employee-directory" element={<EmployeeDirectory />} />
          <Route path="company-policies" element={<CompanyPolicies />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
