'use client'

import { Button } from '@/components/shared/ui/Button'
import { RootState } from '@/core/store'
import { useSelector } from 'react-redux'
import { RiSearchLine, RiFileList3Line } from '@remixicon/react'

const mockData = [
  {
    endpoint: '/api/users/profile',
    method: 'GET',
    status: 200,
    time: '42ms',
    hits: 3240,
    credits: 32,
  },
  {
    endpoint: '/api/orders/list',
    method: 'POST',
    status: 200,
    time: '120ms',
    hits: 2980,
    credits: 29,
  },
  {
    endpoint: '/api/products/details',
    method: 'GET',
    status: 200,
    time: '85ms',
    hits: 1735,
    credits: 17,
  },
  {
    endpoint: '/api/auth/login',
    method: 'POST',
    status: 429,
    time: '300ms',
    hits: 5041,
    credits: 50,
  },
  {
    endpoint: '/api/notifications',
    method: 'GET',
    status: 200,
    time: '60ms',
    hits: 1123,
    credits: 11,
  },
]

export default function ApiUsagePage() {
  const theme = useSelector((state: RootState) => state.theme.theme)

  return (
    <div className="w-full px-4 pt-6 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-[var(--foreground)]">API Usage</h1>
          <p className="text-sm text-theme-gray-400">
            Monitor usage, response times and credits consumed.
          </p>
        </div>
        <Button variant="primary" icon="RiFileList3Line">
          Export Report
        </Button>
      </div>

      <div className="bg-box-light dark:bg-box-light p-4 rounded-xl shadow-md border border-box-light w-full">
        <div className="flex items-center gap-3 mb-4">
          <RiSearchLine className="w-5 h-5 text-theme-gray-300" />
          <input
            placeholder="Search endpoints..."
            className="bg-transparent w-full text-sm focus:outline-none text-[var(--foreground)] placeholder:text-theme-gray-400"
          />
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full text-left text-sm text-[var(--foreground)]">
            <thead>
              <tr className="border-b border-box-normal dark:border-box-dark text-theme-gray-300">
                <th className="p-2 font-semibold">Endpoint</th>
                <th className="p-2 font-semibold">Method</th>
                <th className="p-2 font-semibold">Status</th>
                <th className="p-2 font-semibold">Avg Time</th>
                <th className="p-2 font-semibold">Hits</th>
                <th className="p-2 font-semibold">Cost (credits)</th>
              </tr>
            </thead>
            <tbody>
              {mockData.map((item, idx) => (
                <tr key={idx} className="hover:bg-box-normal transition">
                  <td className="p-2 text-theme-gray-400 font-mono">{item.endpoint}</td>
                  <td className="p-2">
                    <span
                      className={`text-xs font-bold px-2 py-1 rounded-full ${
                        item.method === 'GET'
                          ? 'bg-blue-500/10 text-blue-500'
                          : item.method === 'POST'
                            ? 'bg-green-500/10 text-green-500'
                            : 'bg-yellow-500/10 text-yellow-500'
                      }`}
                    >
                      {item.method}
                    </span>
                  </td>
                  <td className="p-2">
                    <span
                      className={`text-xs font-bold px-2 py-1 rounded-full ${
                        item.status === 200
                          ? 'bg-green-500/10 text-green-500'
                          : item.status >= 400
                            ? 'bg-red-500/10 text-red-500'
                            : 'bg-yellow-500/10 text-yellow-500'
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="p-2 text-theme-gray-400">{item.time}</td>
                  <td className="p-2">{item.hits}</td>
                  <td className="p-2">{item.credits}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
