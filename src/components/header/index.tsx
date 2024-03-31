import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <div className="bg-background">
      <header className="container py-3">
        <Link href="/" className="text-foreground font-bold">
          Fuzzie.
        </Link>
      </header>
    </div>
  );
};
