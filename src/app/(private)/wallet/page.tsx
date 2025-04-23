'use client'

import { AddFundsDrawer } from '@/components/shared/AddFundsDrawer'
import { Button } from '@/components/shared/ui/Button'
import {
  RiArrowDownLine,
  RiArrowUpLine,
  RiDownloadLine,
  RiPixLine,
  RiUploadLine,
} from '@remixicon/react'
import { useState } from 'react'

const transactions = [
  { type: 'in', label: 'Créditos via PIX', amount: 1000, method: 'PIX', date: '20/04/2025' },
  { type: 'out', label: 'Envio de SMS', amount: 300, method: 'Créditos', date: '20/04/2025' },
  { type: 'out', label: 'Verificação KYC', amount: 150, method: 'Créditos', date: '19/04/2025' },
  { type: 'in', label: 'Créditos via Stripe', amount: 500, method: 'Stripe', date: '18/04/2025' },
  { type: 'out', label: 'Envio de Email', amount: 90, method: 'Créditos', date: '18/04/2025' },
  { type: 'out', label: 'Validação CPF', amount: 75, method: 'Créditos', date: '17/04/2025' },
  { type: 'in', label: 'Créditos via Cripto', amount: 800, method: 'Crypto', date: '17/04/2025' },
  { type: 'out', label: 'Envio de SMS', amount: 200, method: 'Créditos', date: '16/04/2025' },
  {
    type: 'out',
    label: 'Verificação Documento',
    amount: 300,
    method: 'Créditos',
    date: '15/04/2025',
  },
  { type: 'in', label: 'Créditos via PIX', amount: 1200, method: 'PIX', date: '14/04/2025' },
]
export default function WalletPage() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [drawerMethod, setDrawerMethod] = useState<'pix' | 'stripe' | 'crypto'>('pix')

  const handleOpenDrawer = (method: 'pix' | 'stripe' | 'crypto') => {
    setDrawerMethod(method)
    setDrawerOpen(true)
  }

  return (
    <div className="flex flex-col gap-8 w-full h-full px-4 py-6 text-box-light-text">
      <section className="bg-box-light rounded-2xl p-6 shadow-lg">
        <h1 className="text-2xl font-bold mb-4">My Wallet</h1>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-sm uppercase font-medium text-theme-gray-400 mb-1">Balance</p>
            <p className="text-4xl font-bold text-theme-brand-primary-normal">R$ 2.500,00</p>
          </div>

          <div className="flex gap-4 flex-wrap justify-center">
            <Button variant="primary" onClick={() => handleOpenDrawer('pix')}>
              <RiPixLine />
              PIX
            </Button>
            <Button variant="primary" onClick={() => handleOpenDrawer('stripe')}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#FFFF"
                viewBox="0 0 256 256"
              >
                <path d="M168,152c0,17.65-17.94,32-40,32s-40-14.35-40-32a8,8,0,0,1,16,0c0,8.67,11,16,24,16s24-7.33,24-16c0-9.48-8.61-13-26.88-18.26C109.37,129.2,89.78,123.55,89.78,104c0-18.24,16.43-32,38.22-32,15.72,0,29.18,7.3,35.12,19a8,8,0,1,1-14.27,7.22C145.64,91.94,137.65,88,128,88c-12.67,0-22.22,6.88-22.22,16,0,7,9,10.1,23.77,14.36C145.78,123,168,129.45,168,152ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM208,208V48H48V208H208Z"></path>
              </svg>
              Stripe
            </Button>
            <Button variant="primary" onClick={() => handleOpenDrawer('crypto')}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#ffff"
                viewBox="0 0 256 256"
              >
                <path d="M178.48,115.7A44,44,0,0,0,152,40.19V24a8,8,0,0,0-16,0V40H120V24a8,8,0,0,0-16,0V40H72a8,8,0,0,0,0,16h8V192H72a8,8,0,0,0,0,16h32v16a8,8,0,0,0,16,0V208h16v16a8,8,0,0,0,16,0V208h8a48,48,0,0,0,18.48-92.3ZM176,84a28,28,0,0,1-28,28H96V56h52A28,28,0,0,1,176,84ZM160,192H96V128h64a32,32,0,0,1,0,64Z"></path>
              </svg>
              Crypto
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-box-light rounded-2xl p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Last Transactions</h2>

        <ul className="flex flex-col gap-4">
          {transactions.map((tx, index) => (
            <li
              key={index}
              className="flex justify-between items-center px-4 py-3 rounded-lg bg-box-normal"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`${tx.type === 'in' ? 'bg-theme-success-normal' : 'bg-theme-error-dark'}
                     p-2 rounded-full text-white`}
                >
                  {tx.type === 'in' ? <RiArrowUpLine size={18} /> : <RiArrowDownLine size={18} />}
                </span>
                <div>
                  <p className="font-medium">{tx.label}</p>
                  <p className="text-sm text-theme-gray-400">
                    {tx.method} • {tx.date}
                  </p>
                </div>
              </div>
              <div
                className={`text-lg font-semibold ${
                  tx.type === 'in' ? 'text-theme-success-normal' : 'text-theme-error-normal'
                }`}
              >
                {tx.type === 'in' ? '+' : '-'} R$ {tx.amount},00
              </div>
            </li>
          ))}
        </ul>
      </section>
      <AddFundsDrawer
        open={drawerOpen}
        method={drawerMethod}
        onClose={() => setDrawerOpen(false)}
      />
    </div>
  )
}
