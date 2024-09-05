"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StoreProvider from "./StoreProvider";
import { IBaseComponentProps } from "@/types";

const DashboardProvider = ({ children }: IBaseComponentProps) => {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};

export default DashboardProvider;
