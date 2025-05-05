'use client'

import { RootState } from '@/core/store'
import { useSelector } from 'react-redux'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from 'recharts'

const COLORS = [
  'var(--color-theme-error-normal)',
  'var(--color-theme-success-normal)',
  'var(--color-theme-warning-normal)',
  'var(--color-theme-brand-primary-normal)',
]

const data = [
  { name: 'SMS', value: 300 },
  { name: 'Email', value: 500 },
  { name: 'KYC', value: 200 },
  { name: 'CRM', value: 400 },
]

export function ExpenseStatsChart() {
  const theme = useSelector((state: RootState) => state.theme.theme)
  const textColor = theme === 'dark' ? '#f5f5f5' : '#1f2937'

  return (
    <div className="bg-box-light p-6 rounded-xl shadow-md min-w-[280px]">
      <h2 className="text-lg font-medium text-box-light-text mb-4">Expenses per Service</h2>
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={90}
            paddingAngle={4}
            cornerRadius={8}
            label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend
            verticalAlign="bottom"
            height={36}
            iconType="circle"
            wrapperStyle={{ color: textColor, fontSize: '0.875rem' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
