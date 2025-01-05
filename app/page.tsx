import { DashboardContent } from "@/components/dashboard/dashboard-content";

export default function Dashboard() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>
      <DashboardContent />
    </div>
  );
}