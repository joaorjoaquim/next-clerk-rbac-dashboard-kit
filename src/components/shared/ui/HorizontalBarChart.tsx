"use client";

import { RootState } from "@/core/store";
import { useSelector } from "react-redux";
import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartData } from "./types";

interface HorizontalBarChartProps {
  data: ChartData;
  dataKey: string;
  title?: string;
  height?: number;
  color?: string;
  formatter?: (value: number) => string;
}

export function HorizontalBarChart({
  data,
  dataKey,
  title,
  height = 400,
  color = "var(--color-theme-warning-normal)",
  formatter = (value: number) => value.toString(),
}: HorizontalBarChartProps) {
  const isDark = useSelector(
    (state: RootState) => state.theme.theme === "dark"
  );
  const strokeColor = isDark ? "#fff" : "#333";
  const gridStroke = isDark ? "#3f3f3f" : "#e0e0e0";
  const tooltipBgColor = isDark ? "#1f2937" : "#f9fafb";
  const tooltipTextColor = isDark ? "#f3f4f6" : "#1f2937";

  return (
    <div className="bg-box-light rounded-2xl p-6 shadow-md">
      {title && (
        <h2 className="text-lg font-semibold text-box-light-text mb-4">
          {title}
        </h2>
      )}
      <ResponsiveContainer width="100%" height={height}>
        <RechartsBarChart
          data={data}
          layout="vertical"
          margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
        >
          <CartesianGrid stroke={gridStroke} strokeDasharray="3 3" />
          <XAxis type="number" stroke={strokeColor} />
          <YAxis
            dataKey="name"
            type="category"
            stroke={strokeColor}
            width={120}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: tooltipBgColor,
              borderRadius: 8,
              border: "none",
              boxShadow: "0 0 8px rgba(0,0,0,0.15)",
              color: tooltipTextColor,
            }}
            labelStyle={{
              color: tooltipTextColor,
              fontWeight: "bold",
            }}
            formatter={formatter}
          />
          <Bar
            dataKey={dataKey}
            fill={color}
            barSize={16}
            radius={[4, 4, 4, 4]}
            activeBar={{ fill: "var(--color-theme-brand-primary-normal)" }}
          />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
}
