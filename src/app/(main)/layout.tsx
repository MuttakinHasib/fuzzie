import { Header, Sidebar } from "@/components";
import { WorkflowProvider } from "@/providers";
import React, { PropsWithChildren } from "react";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <WorkflowProvider>
      <main>
        <Header />
        <div className="flex h-[calc(100vh-65px)]">
          <Sidebar />
          {children}
        </div>
      </main>
    </WorkflowProvider>
  );
};

export default MainLayout;
