'use client'

import { RootState } from '@/core/store'
import { useSelector } from 'react-redux'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
  { name: 'Jul', balance: 150 },
  { name: 'Aug', balance: 320 },
  { name: 'Sep', balance: 480 },
  { name: 'Oct', balance: 790 },
  { name: 'Nov', balance: 220 },
  { name: 'Dec', balance: 570 },
  { name: 'Jan', balance: 660 },
]

export function BalanceHistoryChart() {
  const theme = useSelector((state: RootState) => state.theme.theme)
  const isDark = theme === 'dark'
  const textColor = '#1d1f23'
  const primaryColor = '#e1e4e8'

  return (
    <div className="bg-theme-brand-primary-normal p-6 rounded-xl shadow-md">
      <h2 className="text-lg font-medium text-white mb-4">Balance History</h2>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          {/* Gradient */}
          <defs>
            <linearGradient id="balanceGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={primaryColor} stopOpacity={0.8} />
              <stop offset="95%" stopColor={primaryColor} stopOpacity={0.09} />
            </linearGradient>
          </defs>

          <XAxis dataKey="name" stroke="#fff" tickMargin={12} />
          <YAxis stroke="#fff" tickMargin={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: primaryColor,
              borderRadius: 8,
              border: 'none',
              boxShadow: '0 0 8px rgba(0,0,0,0.15)',
            }}
            labelStyle={{ color: textColor, fontWeight: 'bold' }}
            itemStyle={{ color: textColor }}
            formatter={(value: number) =>
              new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(value)
            }
          />
          <Area
            type="monotone"
            dataKey="balance"
            stroke={primaryColor}
            fill={'url(#balanceGradient)'}
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
