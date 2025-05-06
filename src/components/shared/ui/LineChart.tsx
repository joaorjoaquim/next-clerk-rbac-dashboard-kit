"use client";

import { RootState } from "@/core/store";
import { useSelector } from "react-redux";
import {
  Legend,
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartData } from "./types";

interface LineChartProps {
  data: ChartData;
  dataKeys: Array<{ key: string; color: string }>;
  title?: string;
  height?: number;
  formatter?: (value: number) => string;
}

export function LineChart({
  data,
  dataKeys,
  title,
  height = 300,
  formatter = (value: number) => value.toString(),
}: LineChartProps) {
  const isDark = useSelector(
    (state: RootState) => state.theme.theme === "dark"
  );
  const strokeColor = isDark ? "#fff" : "#333";
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
        <RechartsLineChart data={data}>
          <XAxis dataKey="name" stroke={strokeColor} tickMargin={12} />
          <YAxis
            stroke={strokeColor}
            tickMargin={12}
            domain={["auto", "auto"]}
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
          <Legend
            wrapperStyle={{
              color: strokeColor,
              fontWeight: 600,
              fontSize: "14px",
            }}
          />
          {dataKeys.map(({ key, color }) => (
            <Line
              key={key}
              dataKey={key}
              stroke={color}
              strokeWidth={2.5}
              dot={{ r: 5, stroke: strokeColor, strokeWidth: 1.5 }}
            />
          ))}
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
}
