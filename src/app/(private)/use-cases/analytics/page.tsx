"use client";

import { AreaChart } from "@/components/shared/ui/AreaChart";
import { LineChart } from "@/components/shared/ui/LineChart";
import { PieChart } from "@/components/shared/ui/PieChart";
import { Card } from "@/components/shared/ui/Card";
import { Button } from "@/components/shared/ui/Button";
import { Input } from "@/components/shared/ui/Input";
import {
  RiLineChartLine,
  RiUserLine,
  RiMoneyDollarCircleLine,
  RiRidingLine,
} from "@remixicon/react";
import { ChartData } from "@/components/shared/ui/types";

const revenueData: ChartData = [
  { name: "Jan", revenue: 4000 },
  { name: "Feb", revenue: 3000 },
  { name: "Mar", revenue: 5000 },
  { name: "Apr", revenue: 4500 },
  { name: "May", revenue: 6000 },
  { name: "Jun", revenue: 5500 },
];

const userData: ChartData = [
  { name: "Jan", users: 2400, newUsers: 400 },
  { name: "Feb", users: 1398, newUsers: 300 },
  { name: "Mar", users: 9800, newUsers: 200 },
  { name: "Apr", users: 3908, newUsers: 278 },
  { name: "May", users: 4800, newUsers: 189 },
  { name: "Jun", users: 3800, newUsers: 239 },
];

const trafficData = [
  { name: "Direct", value: 400 },
  { name: "Social", value: 300 },
  { name: "Referral", value: 300 },
  { name: "Organic", value: 200 },
];

export default function AnalyticsDashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-box-light-text">
          Analytics Dashboard
        </h1>
        <div className="flex gap-4">
          <Input type="date" className="w-40" />
          <Button variant="primary">Apply Filter</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-theme-brand-primary-normal/10">
              <RiLineChartLine className="w-6 h-6 text-theme-brand-primary-normal" />
            </div>
            <div>
              <p className="text-sm text-box-light-text/60">Total Revenue</p>
              <p className="text-2xl font-semibold text-box-light-text">
                $24,500
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-theme-success-normal/10">
              <RiUserLine className="w-6 h-6 text-theme-success-normal" />
            </div>
            <div>
              <p className="text-sm text-box-light-text/60">Total Users</p>
              <p className="text-2xl font-semibold text-box-light-text">
                12,345
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-theme-warning-normal/10">
              <RiMoneyDollarCircleLine className="w-6 h-6 text-theme-warning-normal" />
            </div>
            <div>
              <p className="text-sm text-box-light-text/60">Average Order</p>
              <p className="text-2xl font-semibold text-box-light-text">$245</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-theme-error-normal/10">
              <RiRidingLine className="w-6 h-6 text-theme-error-normal" />
            </div>
            <div>
              <p className="text-sm text-box-light-text/60">Growth Rate</p>
              <p className="text-2xl font-semibold text-box-light-text">
                +12.5%
              </p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AreaChart
          data={revenueData}
          dataKey="revenue"
          title="Revenue Overview"
          primaryColor="var(--color-theme-brand-primary-normal)"
          formatter={(value) => `$${value.toLocaleString()}`}
        />

        <LineChart
          data={userData}
          dataKeys={[
            { key: "users", color: "var(--color-theme-success-normal)" },
            { key: "newUsers", color: "var(--color-theme-warning-normal)" },
          ]}
          title="User Growth"
          formatter={(value) => value.toLocaleString()}
        />

        <PieChart
          data={trafficData}
          title="Traffic Sources"
          colors={[
            "var(--color-theme-brand-primary-normal)",
            "var(--color-theme-success-normal)",
            "var(--color-theme-warning-normal)",
            "var(--color-theme-error-normal)",
          ]}
        />
      </div>
    </div>
  );
}
