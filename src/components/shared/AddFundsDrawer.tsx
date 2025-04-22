'use client'

import * as Drawer from '@radix-ui/react-dialog'
import { RiCloseLine } from '@remixicon/react'
import { useState } from 'react'
import { Button } from '@/components/shared/ui/Button'

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
  const [amount, setAmount] = useState<number | ''>('')

  const predefinedValues = [50, 500, 1000, 5000, 10000, 50000]

  const handleAddAmount = (value: number) => {
    setAmount((prev) => (typeof prev === 'number' ? prev + value : value))
  }

  const handleSubmit = () => {
    if (!amount || amount < 1) return
    if (method === 'pix') {
      console.log('Gerar cobrança PIX de:', amount)
    } else if (method === 'stripe') {
      console.log('Redirecionar ao Stripe com valor:', amount)
    } else {
      console.log('Gerar cobrança Crypto de:', amount)
    }
    onClose()
  }

  return (
    <Drawer.Root open={open} onOpenChange={onClose}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-40" />
        <Drawer.Content className="fixed bottom-0 md:right-0 md:top-0 md:w-[400px] w-full max-h-[90%] md:max-h-full md:h-[100dvh] bg-box-light dark:bg-box-dark border-t-2 md:border-l-2 md:border-t-0 border-theme-brand-primary-normal z-50 rounded-t-2xl md:rounded-l-2xl md:rounded-t-none shadow-xl shadow-theme-brand-primary-normal p-6 flex flex-col gap-4 overflow-y-auto">
          <div className="flex items-center justify-between mb-2">
            <Drawer.Title className="text-xl font-semibold text-box-light-text">
              Adicionar Créditos via {methodLabels[method]}
            </Drawer.Title>
            <Drawer.Close asChild>
              <button className="text-box-light-text hover:opacity-80">
                <RiCloseLine size={24} />
              </button>
            </Drawer.Close>
          </div>

          <div className="space-y-3">
            <label className="text-sm text-box-light-text">Selecione um valor:</label>
            <div className="grid grid-cols-3 gap-2">
              {predefinedValues.map((val) => (
                <button
                  key={val}
                  onClick={() => handleAddAmount(val)}
                  className="rounded-lg bg-theme-gray-100 dark:bg-theme-gray-700 hover:bg-theme-brand-primary-light dark:hover:bg-theme-brand-primary-dark transition-all duration-300 px-4 py-2 font-medium"
                >
                  +{val}
                </button>
              ))}
            </div>

            <label className="text-sm text-box-light-text mt-4 block">Ou insira outro valor:</label>
            <input
              type="number"
              min={1}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full px-4 py-2 rounded-lg border border-theme-gray-200 dark:border-theme-gray-600 bg-transparent text-box-light-text outline-none focus:ring-2 focus:ring-theme-brand-primary-normal transition-all"
              placeholder="Digite o valor"
            />
          </div>

          <Button
            variant="primary"
            className="mt-auto w-full"
            onClick={handleSubmit}
            disabled={!amount || amount < 1}
          >
            {method === 'pix'
              ? 'Pagar via PIX'
              : method === 'stripe'
                ? 'Finalizar com Stripe'
                : 'Gerar cobrança em Crypto'}
          </Button>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
