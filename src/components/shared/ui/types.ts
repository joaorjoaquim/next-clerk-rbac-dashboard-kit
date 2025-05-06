export type ChartDataPoint = {
  name: string;
  [key: string]: string | number;
};

export type ChartData = ChartDataPoint[];
