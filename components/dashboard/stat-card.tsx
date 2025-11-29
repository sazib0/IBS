"use client";

import { Card } from "@/components/ui/card";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { LucideIcon } from "lucide-react";

const data = [
  { value: 400 },
  { value: 300 },
  { value: 500 },
  { value: 450 },
  { value: 600 },
  { value: 550 },
  { value: 700 },
];

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend: "up" | "down";
  trendValue: string;
  chartData?: typeof data;
}

export function StatCard({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  trendValue, 
  chartData = data 
}: StatCardProps) {
  const TrendIcon = trend === "up" ? 
    () => <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg> :
    () => <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>;

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Icon className="w-4 h-4 text-muted-foreground" />
          <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-2xl font-bold">{value}</div>
          <div className="flex items-center mt-1">
            <TrendIcon />
            <span className={trend === "up" ? "text-green-500 ml-1" : "text-red-500 ml-1"}>
              {trendValue}
            </span>
          </div>
        </div>
        <div className="h-16 w-24">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <Line
                type="monotone"
                dataKey="value"
                stroke={trend === "up" ? "#22c55e" : "#ef4444"}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
}