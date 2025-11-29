"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { navigationItems } from "./items";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard } from "lucide-react";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-background border-r">
      <div className="px-3 py-2 flex-1">
        <div className="flex items-center pl-3 mb-8">
          <LayoutDashboard className="h-6 w-6" />
          <h1 className="text-xl font-bold ml-2">IBS</h1>
        </div>
        <ScrollArea className="h-[calc(100vh-8rem)] px-1">
          <div className="space-y-1">
            {navigationItems.map((item) => (
              <div key={item.title}>
                {item.title && (
                  <h2 className="mb-2 px-4 text-sm font-semibold tracking-tight text-muted-foreground">
                    {item.title}
                  </h2>
                )}
                {item.items.map((item) => (
                  <Button
                    key={item.href}
                    asChild
                    variant={pathname === item.href ? "secondary" : "ghost"}
                    className={cn(
                      "w-full justify-start",
                      pathname === item.href && "bg-secondary"
                    )}
                  >
                    <Link href={item.href}>
                      {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                      {item.label}
                    </Link>
                  </Button>
                ))}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}