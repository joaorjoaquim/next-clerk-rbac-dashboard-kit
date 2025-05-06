# Chart Components

This directory contains reusable chart components built with Recharts. All components are theme-aware and follow the design system's styling patterns.

## Components

### AreaChart

A component for displaying area charts with gradient fill.

```tsx
import { AreaChart } from "@/components/shared/ui/AreaChart";

// Example usage
<AreaChart
  data={[
    { name: "Jan", revenue: 4000 },
    { name: "Feb", revenue: 3000 },
  ]}
  dataKey="revenue"
  title="Revenue Overview"
  primaryColor="var(--color-theme-brand-primary-normal)"
  formatter={(value) => `$${value.toLocaleString()}`}
/>;
```

Props:

- `data`: Array of data points with a `name` property and numeric values
- `dataKey`: The key in the data object to use for the area chart
- `title`: Optional chart title
- `height`: Optional chart height (default: 300)
- `primaryColor`: Optional color for the area (default: theme color)
- `textColor`: Optional text color (default: theme color)
- `formatter`: Optional function to format values in tooltips

### BarChart

A component for displaying bar charts with customizable colors and rounded corners.

```tsx
import { BarChart } from "@/components/shared/ui/BarChart";

// Example usage
<BarChart
  data={[
    { name: "Mon", sales: 4000, profit: 2400 },
    { name: "Tue", sales: 3000, profit: 1398 },
  ]}
  dataKeys={[
    { key: "sales", color: "var(--color-theme-brand-primary-normal)" },
    { key: "profit", color: "var(--color-theme-success-normal)" },
  ]}
  title="Sales Overview"
  formatter={(value) => `$${value.toLocaleString()}`}
/>;
```

Props:

- `data`: Array of data points with a `name` property and numeric values
- `dataKeys`: Array of objects specifying the data keys and their colors
- `title`: Optional chart title
- `height`: Optional chart height (default: 300)
- `formatter`: Optional function to format values in tooltips

### LineChart

A component for displaying line charts with multiple data series.

```tsx
import { LineChart } from "@/components/shared/ui/LineChart";

// Example usage
<LineChart
  data={[
    { name: "Jan", users: 2400, newUsers: 400 },
    { name: "Feb", users: 1398, newUsers: 300 },
  ]}
  dataKeys={[
    { key: "users", color: "var(--color-theme-success-normal)" },
    { key: "newUsers", color: "var(--color-theme-warning-normal)" },
  ]}
  title="User Growth"
  formatter={(value) => value.toLocaleString()}
/>;
```

Props:

- `data`: Array of data points with a `name` property and numeric values
- `dataKeys`: Array of objects specifying the data keys and their colors
- `title`: Optional chart title
- `height`: Optional chart height (default: 300)
- `formatter`: Optional function to format values in tooltips

### PieChart

A component for displaying pie charts with customizable colors and percentage labels.

```tsx
import { PieChart } from "@/components/shared/ui/PieChart";

// Example usage
<PieChart
  data={[
    { name: "Direct", value: 400 },
    { name: "Social", value: 300 },
  ]}
  title="Traffic Sources"
  colors={[
    "var(--color-theme-brand-primary-normal)",
    "var(--color-theme-success-normal)",
  ]}
/>;
```

Props:

- `data`: Array of objects with `name` and `value` properties
- `title`: Optional chart title
- `height`: Optional chart height (default: 280)
- `colors`: Optional array of colors for pie segments
- `innerRadius`: Optional inner radius for donut chart (default: 50)
- `outerRadius`: Optional outer radius (default: 90)

## Common Features

All chart components:

- Are theme-aware (dark/light mode)
- Use consistent styling with the design system
- Support responsive containers
- Include tooltips with customizable formatting
- Use the same shadow and border radius styles
- Support custom heights and titles
- Include TypeScript types

## Usage Tips

1. Use theme variables for colors to maintain consistency:

   ```tsx
   colors={[
     'var(--color-theme-brand-primary-normal)',
     'var(--color-theme-success-normal)',
     'var(--color-theme-warning-normal)',
     'var(--color-theme-error-normal)',
   ]}
   ```

2. Format values appropriately:

   ```tsx
   formatter={(value) => `$${value.toLocaleString()}`}
   ```

3. Use consistent heights across related charts:

   ```tsx
   height={300}
   ```

4. Group related charts in a grid:
   ```tsx
   <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
     <AreaChart ... />
     <LineChart ... />
   </div>
   ```
