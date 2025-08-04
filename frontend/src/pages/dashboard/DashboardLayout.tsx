import { Outlet, useLocation } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/dashboardComponents/app-sidebar";
import sqImage from "@/assets/sqImage.jpg"; // Adjust the path as necessary
import Header from "@/components/dashboardComponents/Header";

export default function DashboardLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(24, 85, 52, 0.92), rgba(19, 67, 43, 0.92)), url(${sqImage})`,
          zIndex: -1,
        }}
      >
        {" "}
      </div>

      <SidebarProvider>
        <AppSidebar />
        {/* Main content area */}
        <main className="flex-1  relative z-10 bg-[#EFF1F5] m-3 rounded-lg shadow-lg">
          <Header pathname={location.pathname} />
          <div className="p-4">
            <Outlet />
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
}
