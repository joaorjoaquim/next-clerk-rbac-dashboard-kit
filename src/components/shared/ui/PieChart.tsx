"use client";

import { RootState } from "@/core/store";
import { useSelector } from "react-redux";
import {
  Cell,
  Legend,
  Pie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
} from "recharts";

interface PieChartProps {
  data: Array<{ name: string; value: number }>;
  title?: string;
  height?: number;
  colors?: string[];
  innerRadius?: number;
  outerRadius?: number;
}

export function PieChart({
  data,
  title,
  height = 280,
  colors = [
    "var(--color-theme-error-normal)",
    "var(--color-theme-success-normal)",
    "var(--color-theme-warning-normal)",
    "var(--color-theme-brand-primary-normal)",
  ],
  innerRadius = 50,
  outerRadius = 90,
}: PieChartProps) {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const textColor = theme === "dark" ? "#f5f5f5" : "#1f2937";

  return (
    <div className="bg-box-light p-6 rounded-xl shadow-md min-w-[280px]">
      {title && (
        <h2 className="text-lg font-medium text-box-light-text mb-4">
          {title}
        </h2>
      )}
      <ResponsiveContainer width="100%" height={height}>
        <RechartsPieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            paddingAngle={4}
            cornerRadius={8}
            label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Legend
            verticalAlign="bottom"
            height={36}
            iconType="circle"
            wrapperStyle={{ color: textColor, fontSize: "0.875rem" }}
          />
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );
}
