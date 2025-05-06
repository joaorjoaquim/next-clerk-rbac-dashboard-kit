"use client";

import { LineChart } from "@/components/shared/ui/LineChart";
import { PieChart } from "@/components/shared/ui/PieChart";
import { HorizontalBarChart } from "@/components/shared/ui/HorizontalBarChart";
import { ChartData } from "@/components/shared/ui/types";

const COLORS = {
  primary: "var(--color-theme-brand-primary-normal)",
  secondary: "var(--color-theme-brand-secondary-normal)",
  success: "var(--color-theme-success-normal)",
  error: "var(--color-theme-error-normal)",
  warning: "var(--color-theme-warning-normal)",
};

const monthlyData: ChartData = [
  { name: "Jan", API: 2400, SMS: 1400, Emails: 3200 },
  { name: "Feb", API: 2600, SMS: 1200, Emails: 3000 },
  { name: "Mar", API: 3200, SMS: 1700, Emails: 2800 },
  { name: "Apr", API: 4800, SMS: 2400, Emails: 3700 },
  { name: "May", API: 4000, SMS: 2200, Emails: 3900 },
  { name: "Jun", API: 3000, SMS: 1800, Emails: 3100 },
];

const pieData = [
  { name: "API Developer", value: 500 },
  { name: "API Enterprise", value: 1200 },
];

const barData: ChartData = [
  { name: "/login", hits: 1050 },
  { name: "/profile", hits: 870 },
  { name: "/orders", hits: 540 },
  { name: "/checkout", hits: 420 },
  { name: "/api/notifications", hits: 410 },
  { name: "/register", hits: 390 },
  { name: "/dashboard", hits: 380 },
  { name: "/users/list", hits: 360 },
  { name: "/settings", hits: 340 },
  { name: "/recover", hits: 310 },
];

export default function ChartsPage() {
  return (
    <div className="flex flex-col gap-10 w-full">
      <h1 className="text-2xl font-semibold text-[var(--foreground)]">
        API Usage Analytics
      </h1>

      {/* Line Chart */}
      <LineChart
        data={monthlyData}
        dataKeys={[
          { key: "API", color: COLORS.primary },
          { key: "SMS", color: COLORS.secondary },
          { key: "Emails", color: COLORS.success },
        ]}
        title="Usage"
        height={300}
      />

      {/* Pie + Bar Chart Responsive Container */}
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        {/* Pie Chart */}
        <div className="flex-1 min-w-[280px]">
          <PieChart
            data={pieData}
            title="API Keys"
            colors={[COLORS.primary, COLORS.secondary, COLORS.success]}
            height={260}
          />
        </div>

        {/* Horizontal Bar Chart */}
        <div className="flex-[2]">
          <HorizontalBarChart
            data={barData}
            dataKey="hits"
            title="Top 10 Endpoints"
            color={COLORS.warning}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
