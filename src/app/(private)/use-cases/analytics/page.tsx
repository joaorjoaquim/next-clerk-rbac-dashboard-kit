"use client";

import { StaticCard } from "@/components/shared/StaticCard";
import { Button } from "@/components/shared/ui/Button";
import { Input } from "@/components/shared/ui/Input";
import { LineChart, BarChart } from "@/components/charts";
import {
  RiUserLine,
  RiLineChartLine,
  RiMoneyDollarCircleLine,
  RiRidingLine,
} from "@remixicon/react";

export default function AnalyticsDashboard() {
  // Mock data for demonstration
  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue",
        data: [65, 59, 80, 81, 56, 55],
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const barChartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Users",
        data: [12, 19, 3, 5, 2, 3, 7],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
        <div className="flex gap-4">
          <Input type="date" className="w-48" placeholder="Select date range" />
          <Button>Filter</Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StaticCard className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <RiUserLine className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Users</p>
              <p className="text-2xl font-bold">1,234</p>
            </div>
          </div>
        </StaticCard>

        <StaticCard className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <RiLineChartLine className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Active Users</p>
              <p className="text-2xl font-bold">789</p>
            </div>
          </div>
        </StaticCard>

        <StaticCard className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <RiMoneyDollarCircleLine className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Revenue</p>
              <p className="text-2xl font-bold">$12,345</p>
            </div>
          </div>
        </StaticCard>

        <StaticCard className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-orange-100 rounded-lg">
              <RiRidingLine className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Growth</p>
              <p className="text-2xl font-bold">+12.5%</p>
            </div>
          </div>
        </StaticCard>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StaticCard className="p-6">
          <h2 className="text-lg font-semibold mb-4">Revenue Trend</h2>
          <div className="h-80">
            <LineChart data={lineChartData} />
          </div>
        </StaticCard>

        <StaticCard className="p-6">
          <h2 className="text-lg font-semibold mb-4">User Activity</h2>
          <div className="h-80">
            <BarChart data={barChartData} />
          </div>
        </StaticCard>
      </div>
    </div>
  );
}
