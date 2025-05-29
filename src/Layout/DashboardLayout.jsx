import Sidebar from "../Pages/Dashboard/Sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Topbar from "../Pages/Dashboard/Topbar";


const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <>
      <div className="flex h-screen overflow-hidden bg-[#EAEBED]">
        <div className="hidden md:block">
          <Sidebar
            isOpen={isSidebarOpen}
            toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        </div>

        {/* Mobile Sidebar */}
        {isMobileOpen && (
          <div className="fixed inset-0 z-40 flex md:hidden">
            <Sidebar
              isOpen={true}
              toggleSidebar={() => setIsMobileOpen(false)}
            />
            <div
              className="flex-1 bg-black opacity-40"
              onClick={() => setIsMobileOpen(false)}
            />
          </div>
        )}

        <div className="flex flex-col flex-1">
          <Topbar
            onSidebarToggle={() => setIsSidebarOpen(!isSidebarOpen)}
            onMobileSidebarToggle={() => setIsMobileOpen(true)}
          />

          <main className="flex-1 p-4 overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};
export default DashboardLayout;
