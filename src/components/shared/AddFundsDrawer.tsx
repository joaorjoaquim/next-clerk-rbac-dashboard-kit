'use client'

import * as Drawer from '@radix-ui/react-dialog'
import { RiCloseLine } from '@remixicon/react'
import { useState } from 'react'
import { Button } from '@/components/shared/ui/Button'
import { Input } from './ui/Input'

interface FundDrawerProps {
  method: 'pix' | 'stripe' | 'crypto'
  open: boolean
  onClose: () => void
}

const methodLabels = {
  pix: 'PIX',
  stripe: 'Stripe',
  crypto: 'Criptomoeda',
}

export function AddFundsDrawer({ method, open, onClose }: FundDrawerProps) {
  const [amount, setAmount] = useState<string>('')

  const predefinedValues = [50, 500, 1000, 5000, 10000, 50000]

  const handleAddAmount = (val: number) => {
    const cleanAmount = parseFloat(amount) || 0
    console.log(amount, cleanAmount, val)
    const total = cleanAmount + val
    setAmount(total.toString())
  }

  const handleSubmit = () => {
    const clean = parseFloat(amount.replace(/[^\d]/g, ''))
    if (!clean || clean < 1) return
    if (method === 'pix') {
      console.log('Gerar cobrança PIX de:', clean)
    } else if (method === 'stripe') {
      console.log('Redirecionar ao Stripe com valor:', clean)
    } else {
      console.log('Gerar cobrança Crypto de:', clean)
    }
    onClose()
  }

  return (
    <Drawer.Root open={open} onOpenChange={onClose}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-40" />
        <Drawer.Content className="fixed bottom-0 md:right-0 md:top-0 md:w-[450px] w-full max-h-[90%] md:max-h-full md:h-[100dvh] bg-box-light border-t-4 md:border-l-2 md:border-t-0 border-theme-brand-primary-normal z-50 rounded-t-2xl md:rounded-l-lg md:rounded-t-none shadow-xl shadow-theme-brand-primary-normal p-4 md:p-6 flex flex-col gap-4 overflow-y-auto">
          <div className="flex items-center justify-between mb-2">
            <Drawer.Title className="text-xl font-semibold text-box-light-text">
              Add Funds via {methodLabels[method]}
            </Drawer.Title>
            <Drawer.Close asChild>
              <button className="text-box-light-text hover:opacity-80">
                <RiCloseLine size={24} />
              </button>
            </Drawer.Close>
          </div>

          <div className="space-y-3">
            <label className="text-sm text-box-light-text">Choose the amount:</label>
            <div className="mt-1 grid grid-cols-3 gap-2">
              {predefinedValues.map((val) => (
                <button
                  key={val}
                  onClick={() => handleAddAmount(val)}
                  className="rounded-lg bg-box-normal text-[12px] md:text-[12px] hover:bg-theme-brand-primary-normal px-2 md:px-4 py-2 font-medium transition-all duration-300"
                >
                  +{' '}
                  {new Intl.NumberFormat('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(val)}
                </button>
              ))}
            </div>

            <label className="text-sm text-box-light-text mt-4 block">Or input any amount:</label>
            <Input
              type="text"
              mask="currency"
              label=""
              placeholder="Digite o valor"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              iconLeft="RiMoneyDollarCircleLine"
              wrapperClass="w-full"
            />
          </div>

          <Button
            variant="primary"
            className="mt-auto w-full"
            onClick={handleSubmit}
            disabled={!amount || Number(amount) < 1}
          >
            {method === 'pix'
              ? 'Pay via PIX'
              : method === 'stripe'
                ? 'Finish with Stripe'
                : 'Finish with Crypto'}
          </Button>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
