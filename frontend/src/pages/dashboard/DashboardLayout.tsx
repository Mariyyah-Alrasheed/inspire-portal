import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/dashboardComponents/app-sidebar";
import sqImage from "@/assets/sqImage.jpg"; // Adjust the path as necessary

export default function DashboardLayout() {
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
        <main className="flex-1 p-6 relative z-10">
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  );
}
