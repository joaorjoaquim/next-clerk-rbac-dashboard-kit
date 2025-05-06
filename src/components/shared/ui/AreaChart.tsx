"use client";

import { RootState } from "@/core/store";
import { useSelector } from "react-redux";
import {
  Area,
  AreaChart as RechartsAreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartData } from "./types";

interface AreaChartProps {
  data: ChartData;
  dataKey: string;
  title?: string;
  height?: number;
  primaryColor?: string;
  textColor?: string;
  formatter?: (value: number) => string;
}

export function AreaChart({
  data,
  dataKey,
  title,
  height = 300,
  primaryColor = "#e1e4e8",
  textColor = "#1d1f23",
  formatter = (value: number) => value.toString(),
}: AreaChartProps) {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const isDark = theme === "dark";
  const strokeColor = isDark ? "#fff" : textColor;

  return (
    <div className="bg-theme-brand-primary-normal p-6 rounded-xl shadow-md">
      {title && (
        <h2 className="text-lg font-medium text-white mb-4">{title}</h2>
      )}
      <ResponsiveContainer width="100%" height={height}>
        <RechartsAreaChart data={data}>
          {/* Gradient */}
          <defs>
            <linearGradient
              id={`${dataKey}Gradient`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="5%" stopColor={primaryColor} stopOpacity={0.8} />
              <stop offset="95%" stopColor={primaryColor} stopOpacity={0.09} />
            </linearGradient>
          </defs>

          <XAxis dataKey="name" stroke={strokeColor} tickMargin={12} />
          <YAxis stroke={strokeColor} tickMargin={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: primaryColor,
              borderRadius: 8,
              border: "none",
              boxShadow: "0 0 8px rgba(0,0,0,0.15)",
            }}
            labelStyle={{ color: textColor, fontWeight: "bold" }}
            itemStyle={{ color: textColor }}
            formatter={formatter}
          />
          <Area
            type="monotone"
            dataKey={dataKey}
            stroke={primaryColor}
            fill={`url(#${dataKey}Gradient)`}
            strokeWidth={3}
          />
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  );
}
