"use client";

import { ThemeToggle } from "@/components/theme/theme-toggle";
import { UserNav } from "@/components/user/user-nav";

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
          <UserNav />
        </div>
      </div>
    </div>
  );
}