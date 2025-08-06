import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Onboarding from "@/pages/Onboarding";
import DashboardLayout from "@/pages/dashboard/DashboardLayout";
import Overview from "@/pages/dashboard/overview/Overview";
import Leaves from "@/pages/dashboard/Leaves";
import CompanyPolicies from "@/pages/dashboard/CompanyPolicies";
import EmployeeDirectory from "@/pages/dashboard/EmployeeDirectory";
import Expenses from "@/pages/dashboard/Expenses";
import Finance from "@/pages/dashboard/Finance";
import HealthInsurance from "@/pages/dashboard/HealthInsurance";
import Tasks from "@/pages/dashboard/Tasks";
import Timesheet from "@/pages/dashboard/Timesheet";
import Travel from "@/pages/dashboard/Travel";
import AttendanceDetails from "@/pages/dashboard/overview/details/AttendanceDetails";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/onboarding" element={<Onboarding />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} /> {/* default */}
          <Route
            path="overview/details/attendance"
            element={<AttendanceDetails />}
          />
          <Route path="leaves" element={<Leaves />} />
          <Route path="timesheet" element={<Timesheet />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="health-insurance" element={<HealthInsurance />} />
          <Route path="travel" element={<Travel />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="finance" element={<Finance />} />
          <Route path="employee-directory" element={<EmployeeDirectory />} />
          <Route path="company-policies" element={<CompanyPolicies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
