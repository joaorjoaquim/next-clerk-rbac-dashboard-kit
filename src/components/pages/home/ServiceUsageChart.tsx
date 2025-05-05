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
  const strokeColor = isDark ? '#fff' : '#333'

  return (
    <div className="bg-box-light rounded-2xl p-6 shadow-md">
      <h2 className="text-lg font-semibold text-box-light-text mb-4">Services weakly usage</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke={strokeColor} tickMargin={12} />{' '}
          <YAxis stroke={strokeColor} tickMargin={12} domain={['auto', 'auto']} />{' '}
          <Tooltip
            contentStyle={{
              backgroundColor: isDark ? '#1f2937' : '#f9fafb',
              borderRadius: 8,
              border: 'none',
              boxShadow: '0 0 8px rgba(0,0,0,0.15)',
              color: isDark ? '#f3f4f6' : '#1f2937',
            }}
            labelStyle={{
              color: isDark ? '#f3f4f6' : '#1f2937',
              fontWeight: 'bold',
            }}
            formatter={(value: number) =>
              new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(value)
            }
          />
          <Legend
            wrapperStyle={{
              color: '#fff',
              fontWeight: 600,
              fontSize: '14px',
            }}
          />
          <Line
            dataKey="SMS"
            stroke="#aa0a23"
            strokeWidth={2.5}
            dot={{ r: 5, stroke: strokeColor, strokeWidth: 1.5 }}
          />
          <Line
            dataKey="Email"
            stroke="#facc15"
            strokeWidth={2.5}
            dot={{ r: 5, stroke: strokeColor, strokeWidth: 1.5 }}
          />
          <Line
            dataKey="KYC"
            stroke="#f87171"
            strokeWidth={2.5}
            dot={{ r: 5, stroke: strokeColor, strokeWidth: 1.5 }}
          />
          <Line
            dataKey="CRM"
            stroke="#6b21a8"
            strokeWidth={2.5}
            dot={{ r: 5, stroke: strokeColor, strokeWidth: 1.5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
