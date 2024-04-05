import Link from "next/link";
import React from "react";

const NAV = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Workflow",
    href: "/workflow",
  },
];

export const Sidebar = () => {
  return (
    <div className="border-r border-border w-[10vw] h-[calc(100vh-65px)] flex flex-col">
      {NAV.map((item) => (
        <Link
          href={{ pathname: item.href }}
          key={item.name}
          className="text-foreground font-semibold hover:bg-muted py-2 px-5"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};
