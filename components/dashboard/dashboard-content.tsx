"use client";

import { DollarSign, Users, Package } from "lucide-react";
import { StatCard } from "./stat-card";

export function DashboardContent() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Revenue"
        value="$45,231"
        icon={DollarSign}
        trend="up"
        trendValue="12.5%"
      />
      <StatCard
        title="Active Customers"
        value="2,345"
        icon={Users}
        trend="up"
        trendValue="8.2%"
      />
      <StatCard
        title="Pending Orders"
        value="124"
        icon={Package}
        trend="down"
        trendValue="4.1%"
      />
      <StatCard
        title="Total Sales"
        value="845"
        icon={DollarSign}
        trend="up"
        trendValue="15.3%"
      />
    </div>
  );
}