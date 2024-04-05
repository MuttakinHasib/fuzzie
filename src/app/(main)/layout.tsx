import { Header, Sidebar } from "@/components";
import React, { PropsWithChildren } from "react";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <main>
      <Header />
      <div className="flex">
        <Sidebar />
        {children}
      </div>
    </main>
  );
};

export default MainLayout;
