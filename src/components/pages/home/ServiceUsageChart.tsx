'use client'

import { RootState } from '@/core/store'
import { useSelector } from 'react-redux'
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
  { name: 'Seg', SMS: 240, Email: 400, KYC: 150, CRM: 200 },
  { name: 'Ter', SMS: 300, Email: 420, KYC: 180, CRM: 210 },
  { name: 'Qua', SMS: 200, Email: 360, KYC: 140, CRM: 190 },
  { name: 'Qui', SMS: 278, Email: 390, KYC: 200, CRM: 250 },
  { name: 'Sex', SMS: 189, Email: 480, KYC: 170, CRM: 220 },
  { name: 'Sáb', SMS: 239, Email: 380, KYC: 160, CRM: 210 },
  { name: 'Dom', SMS: 349, Email: 430, KYC: 190, CRM: 230 },
]

export function ServiceUsageChart() {
  const isDark = useSelector((state: RootState) => state.theme.theme === 'dark')
  const strokeColor = isDark ? '#aaa' : '#333'
  const gridStroke = isDark ? '#3f3f3f' : '#e0e0e0'

  return (
    <div className="bg-box-light rounded-2xl p-6 shadow-md">
      <h2 className="text-lg font-semibold text-box-light-text mb-4">Services weakly usage</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke={strokeColor} /> <YAxis stroke={strokeColor} /> <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="SMS" stroke="var(--color-theme-brand-primary-normal)" />
          <Line type="monotone" dataKey="Email" stroke="var(--color-theme-success-normal)" />
          <Line type="monotone" dataKey="KYC" stroke="var(--color-theme-error-normal)" />
          <Line type="monotone" dataKey="CRM" stroke="var(--color-theme-warning-normal)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
