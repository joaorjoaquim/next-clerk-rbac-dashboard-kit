'use client'

import { BalanceHistoryChart } from '@/components/pages/home/BalanceHistoryChart'
import { ExpenseStatsChart } from '@/components/pages/home/ExpenseStatsChart'
import { QuickAccess } from '@/components/pages/home/QuickAccess'
import { RecentTransactions } from '@/components/pages/home/RecentTransactions'
import { ServiceUsageChart } from '@/components/pages/home/ServiceUsageChart'
import { WalletCard } from '@/components/pages/home/WalletCard'

export default function Home() {
  return (
    <div className="flex flex-col gap-6 w-full h-full px-4 py-6 text-box-light-text">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-1 lg:col-span-2 space-y-6">
          <WalletCard />
          <ServiceUsageChart />
          <BalanceHistoryChart />
        </div>

        <div className="col-span-1 space-y-6">
          <QuickAccess />
          <RecentTransactions />
          <ExpenseStatsChart />
        </div>
      </div>
    </div>
  )
}
