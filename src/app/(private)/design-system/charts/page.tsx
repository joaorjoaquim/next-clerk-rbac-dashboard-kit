'use client'

import { RootState } from '@/core/store'
import { useSelector } from 'react-redux'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const COLORS = {
  primary: 'var(--color-theme-brand-primary-normal)',
  secondary: 'var(--color-theme-brand-secondary-normal)',
  success: 'var(--color-theme-success-normal)',
  error: 'var(--color-theme-error-normal)',
  warning: 'var(--color-theme-warning-normal)',
}

const monthlyData = [
  { name: 'Jan', API: 2400, SMS: 1400, Emails: 3200 },
  { name: 'Feb', API: 2600, SMS: 1200, Emails: 3000 },
  { name: 'Mar', API: 3200, SMS: 1700, Emails: 2800 },
  { name: 'Apr', API: 4800, SMS: 2400, Emails: 3700 },
  { name: 'May', API: 4000, SMS: 2200, Emails: 3900 },
  { name: 'Jun', API: 3000, SMS: 1800, Emails: 3100 },
]

const pieData = [
  { name: 'API Developer', value: 500 },
  { name: 'API Enterprise', value: 1200 },
]

const barData = [
  { name: '/login', hits: 1050 },
  { name: '/profile', hits: 870 },
  { name: '/orders', hits: 540 },
  { name: '/checkout', hits: 420 },
  { name: '/api/notifications', hits: 410 },
  { name: '/register', hits: 390 },
  { name: '/dashboard', hits: 380 },
  { name: '/users/list', hits: 360 },
  { name: '/settings', hits: 340 },
  { name: '/recover', hits: 310 },
]

export default function ChartsPage() {
  const theme = useSelector((state: RootState) => state.theme.theme)
  const isDark = theme === 'dark'
  const gridStroke = isDark ? '#3f3f3f' : '#e0e0e0'
  const textColor = isDark ? '#e1e4e8' : '#1d1f23'

  return (
    <div className="flex flex-col gap-10 w-full">
      <h1 className="text-2xl font-semibold text-[var(--foreground)]">API Usage Analytics</h1>

      {/* Line Chart */}
      <div className="bg-box-light rounded-xl p-4 shadow-md w-full">
        <h2 className="text-lg font-medium text-box-light-text mb-4">Usage</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthlyData}>
            <CartesianGrid stroke={gridStroke} strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke={textColor} />
            <YAxis stroke={textColor} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="API" stroke={COLORS.primary} />
            <Line type="monotone" dataKey="SMS" stroke={COLORS.secondary} />
            <Line type="monotone" dataKey="Emails" stroke={COLORS.success} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Pie + Bar Chart Responsive Container */}
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        {/* Pie Chart */}
        <div className="bg-box-light flex-1 rounded-xl p-4 shadow-md min-w-[280px]">
          <h2 className="text-lg font-medium text-box-light-text mb-4">API Keys</h2>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={90} label>
                {pieData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={Object.values(COLORS)[index % 3]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Horizontal Bar Chart */}
        <div className="bg-box-light flex-[2] rounded-xl p-4 shadow-md">
          <h2 className="text-lg font-medium text-box-light-text mb-4">Top 10 Endpoints</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={barData}
              layout="vertical"
              margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
            >
              <CartesianGrid stroke={gridStroke} strokeDasharray="3 3" />
              <XAxis type="number" stroke={textColor} />
              <YAxis dataKey="name" type="category" stroke={textColor} width={120} />
              <Tooltip />
              <Bar dataKey="hits" fill={COLORS.warning} barSize={16} radius={[4, 4, 4, 4]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
