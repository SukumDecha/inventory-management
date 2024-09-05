"use client";

import Navbar from "@/components/shared/layouts/Navbar";
import Sidebar from "@/components/shared/layouts/Sidebar";
import { IBaseComponentProps } from "@/types";
import { useAppSelector } from "@/components/shared/providers/StoreProvider";
import { useEffect } from "react";

const DashboardLayout = ({ children }: IBaseComponentProps) => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSideCollapsed
  );

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
  });
  return (
    <div
      className={`${
        isDarkMode ? "dark" : "light"
      } flex bg-gray-50 text-gray-900 w-full min-h-screen`}
    >
      <Sidebar />
      <main
        className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50 ${
          isSidebarCollapsed ? "md:pl-24" : "md:pl-72"
        }`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
