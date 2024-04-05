import Link from "next/link";
import React from "react";

const NAV = [
  {
    name: "Home",
    href: "/",
    icon: "",
  },
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: "",
  },
  {
    name: "Workflow",
    href: "/workflow",
    icon: "",
  },
];

export const Sidebar = () => {
  return (
    <aside className="border-r border-border max-w-60 h-full flex flex-col w-full">
      {NAV.map((item) => (
        <Link
          href={{ pathname: item.href }}
          key={item.name}
          className="text-foreground font-semibold hover:bg-muted py-3 px-10"
        >
          {item.name}
        </Link>
      ))}
    </aside>
  );
};
