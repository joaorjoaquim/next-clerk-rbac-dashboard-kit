'use client'

import { RiArrowDownLine, RiArrowUpLine } from '@remixicon/react'

const transactions = [
  { type: 'in', label: 'PIX', amount: 1000, method: 'PIX', date: '20/04' },
  { type: 'out', label: 'Envio de SMS', amount: 300, method: 'Créditos', date: '19/04' },
  { type: 'out', label: 'Verificação KYC', amount: 200, method: 'Créditos', date: '18/04' },
]

export function RecentTransactions() {
  return (
    <div className="bg-box-light rounded-2xl p-4 shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-box-light-text">Last Transactions</h2>

      <ul className="flex flex-col gap-2">
        {transactions.map((tx, i) => (
          <li key={i} className="flex justify-between items-center bg-box-medium p-3 rounded-lg">
            <div className="flex items-center gap-3">
              <span
                className={`p-2 rounded-full text-white ${
                  tx.type === 'in' ? 'bg-theme-success-normal' : 'bg-theme-error-normal'
                }`}
              >
                {tx.type === 'in' ? <RiArrowUpLine /> : <RiArrowDownLine />}
              </span>
              <div>
                <p className="font-medium">{tx.label}</p>
                <p className="text-sm text-theme-gray-400">
                  {tx.method} • {tx.date}
                </p>
              </div>
            </div>
            <p
              className={`font-semibold text-lg ${
                tx.type === 'in' ? 'text-theme-success-normal' : 'text-theme-error-normal'
              }`}
            >
              {tx.type === 'in' ? '+' : '-'} R$ {tx.amount},00
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
