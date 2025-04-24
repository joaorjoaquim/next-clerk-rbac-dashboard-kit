'use client'

import { Button } from '@/components/shared/ui/Button'
import { useRouter } from 'next/navigation'

export function WalletCard() {
  const router = useRouter()

  return (
    <div className="bg-box-light rounded-2xl p-6 shadow-lg flex flex-col md:flex-row items-center justify-between">
      <div>
        <p className="text-sm uppercase text-theme-gray-400 mb-1">Balance</p>
        <p className="text-4xl font-bold text-theme-brand-primary-normal">R$ 2.500,00</p>
      </div>

      <Button
        variant="primary"
        icon="RiArrowRightUpLine"
        iconPosition="end"
        className="mt-4 md:mt-0"
        onClick={() => router.push('/wallet')}
      >
        Go to Wallet
      </Button>
    </div>
  )
}
