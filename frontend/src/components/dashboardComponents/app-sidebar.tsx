// import { NavLink } from "react-router-dom";
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarGroup,
//   SidebarHeader,
// } from "@/components/ui/sidebar";
// import { Home, Calendar, Wallet, Users, Briefcase } from "lucide-react";

// const links = [
//   { to: "/dashboard", label: "Dashboard", icon: <Home className="w-4 h-4" /> },
//   {
//     to: "/dashboard/leaves",
//     label: "Leaves",
//     icon: <Calendar className="w-4 h-4" />,
//   },
//   {
//     to: "/dashboard/timesheet",
//     label: "Time Sheet",
//     icon: <Calendar className="w-4 h-4" />,
//   },
//   {
//     to: "/dashboard/expenses",
//     label: "Expenses",
//     icon: <Wallet className="w-4 h-4" />,
//   },
//   {
//     to: "/dashboard/employee-directory",
//     label: "Employees",
//     icon: <Users className="w-4 h-4" />,
//   },
//   {
//     to: "/dashboard/company-policies",
//     label: "Policies",
//     icon: <Briefcase className="w-4 h-4" />,
//   },
// ];

// export default function AppSidebar() {
//   return (
//     <Sidebar className="w-64">
//       <SidebarHeader>Inspire ERP</SidebarHeader>
//       <SidebarContent>
//         <SidebarGroup>
//           {links.map((link) => (
//             <NavLink
//               key={link.to}
//               to={link.to}
//               className={({ isActive }) =>
//                 isActive ? "active-link" : "inactive-link"
//               }
//             >
//               {link.icon}
//               {link.label}
//             </NavLink>
//           ))}
//         </SidebarGroup>
//       </SidebarContent>
//       <SidebarFooter>
//         <p className="text-sm text-gray-500">© 2023 Inspire ERP</p>
//       </SidebarFooter>
//     </Sidebar>
//   );
// }

import { NavLink } from "react-router-dom";

import Inspire_logo from "@/assets/Inspire_logo.png";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  Home,
  Calendar,
  Wallet,
  Users,
  Heart,
  Banknote,
  CheckSquare,
  Plane,
  Clock,
  FileLock,
  Settings, // ✅
  LogOut,
} from "lucide-react";

const items = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "Leaves", url: "/dashboard/leaves", icon: Calendar },
  { title: "Time Sheet", url: "/dashboard/timesheet", icon: Clock },
  { title: "Expenses", url: "/dashboard/expenses", icon: Banknote },
  {
    title: "Health Insurance",
    url: "/dashboard/health-insurance",
    icon: Heart,
  },
  { title: "Travel Requests", url: "/dashboard/travel", icon: Plane },

  { title: "Tasks", url: "/dashboard/tasks", icon: CheckSquare },
  { title: "Finance", url: "/dashboard/finance", icon: Wallet },

  {
    title: "Employees Directory",
    url: "/dashboard/employee-directory",
    icon: Users,
  },
  {
    title: "Company Policies",
    url: "/dashboard/company-policies",
    icon: FileLock,
  },
];

export default function AppSidebar() {
  return (
    <Sidebar className="p-4 w-64 text-white">
      <SidebarContent className="flex flex-col h-full ">
        <SidebarGroup className="rounded-lg mb-4  ">
          <SidebarHeader className="flex items-center justify-center p-4 rounded-t-lg">
            <img src={Inspire_logo} alt="Inspire ERP Logo" className="" />
          </SidebarHeader>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <NavLink
                    to={item.url}
                    end
                    className={({ isActive }) =>
                      `flex items-center gap-2 w-full p-3 rounded-md transition-colors ${
                        isActive
                          ? "bg-white/5 text-white" // خلفية بيضاء شفافة، ونص أبيض
                          : "text-white hover:bg-white/5" // بدون خلفية، لكن فيها هوفر خفيف
                      }`
                    }
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </NavLink>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="mt-auto border-t border-white/10 pt-4">
        <SidebarMenu className="space-y-1">
          <SidebarMenuItem>
            <NavLink
              to="/dashboard/settings"
              className="flex items-center gap-2 w-full p-2 text-sm hover:bg-white/5 rounded"
            >
              <Settings className="w-4 h-4" />
              Settings
            </NavLink>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <button
              className="flex items-center gap-2 w-full p-2 text-sm text-red-300 hover:bg-red-500/10 rounded"
              onClick={() => {
                // هنا تقدر تحط منطق تسجيل الخروج
                console.log("Logout clicked");
              }}
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
